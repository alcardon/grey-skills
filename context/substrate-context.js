import React, { useReducer, useContext } from 'react'

import { ApiPromise, WsProvider } from '@polkadot/api'
import jsonrpc from '@polkadot/types/interfaces/jsonrpc'

const RPC_SOCKET = 'ws://127.0.0.1:9944';

const initialState = {
  api: null,
  apiError: null,
  apiState: null,
  socket: RPC_SOCKET,
  jsonrpc: { ...jsonrpc },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECT_INIT':
      return { ...state, apiState: 'CONNECT_INIT' }
    case 'CONNECT':
      return { ...state, api: action.payload, apiState: 'CONNECTING' }
    case 'CONNECT_SUCCESS':
      return { ...state, apiState: 'READY' }
    case 'CONNECT_ERROR':
      return { ...state, apiState: 'ERROR', apiError: action.payload }
    default:
      throw new Error(`Unknown type: ${action.type}`)
  }
}

const connect = (state, dispatch) => {
  const { apiState, socket, jsonrpc } = state
  // We only want this function to be performed once
  if (apiState) return

  dispatch({ type: 'CONNECT_INIT' })

  console.log(`Connected socket: ${socket}`)
  const provider = new WsProvider(socket)
  const _api = new ApiPromise({ provider, rpc: jsonrpc })

  // Set listeners for disconnection and reconnection event.
  _api.on('connected', () => {
    dispatch({ type: 'CONNECT', payload: _api });

    // `ready` event is not emitted upon reconnection and is checked explicitly here.
    _api.isReady.then(_api => dispatch({ type: 'CONNECT_SUCCESS' }));
  });
  _api.on('ready', () => dispatch({ type: 'CONNECT_SUCCESS' }));
  _api.on('error', err => dispatch({ type: 'CONNECT_ERROR', payload: err }));
}

const SubstrateContext = React.createContext()

const SubstrateContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  connect(state, dispatch)

  return (
    <SubstrateContext.Provider value={{ state }}>
      {children}
    </SubstrateContext.Provider>
  )
}

const useSubstrate = () => useContext(SubstrateContext)
const useSubstrateState = () => useContext(SubstrateContext).state

export { SubstrateContextProvider, useSubstrate, useSubstrateState }
