import React, { useReducer, useContext, useEffect } from 'react'

import { ApiPromise, WsProvider } from '@polkadot/api'
import { keyring as Keyring } from '@polkadot/ui-keyring'
import jsonrpc from '@polkadot/types/interfaces/jsonrpc'

const RPC_SOCKET = 'ws://127.0.0.1:9944';
const APP_NAME = 'Grey';

const initialState = {
  api: null,
  apiError: null,
  apiState: null,
  jsonrpc: { ...jsonrpc },
  keyring: null,
  keyringState: null,
  socket: RPC_SOCKET,
  accounts: null,
  currentAccount: null,
  mintingStatus: null,
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
    case 'LOAD_KEYRING':
      return { ...state, keyringState: 'LOADING' }
    case 'SET_KEYRING':
      return { ...state, keyring: action.payload, keyringState: 'READY' }
    case 'KEYRING_ERROR':
      return { ...state, keyring: null, keyringState: 'ERROR' }
    case 'SET_ACCOUNTS':
      return { ...state, accounts: action.payload }
    case 'SET_CURRENT_ACCOUNT':
      return { ...state, currentAccount: action.payload }
    case 'SET_MINTING_STATUS':
      return { ...state, mintingStatus: action.payload }
    default:
      throw new Error(`Unknown type: ${action.type}`)
  }
}

// Connect to substrate node
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

    // `ready` event is not emitted upon reconnection. Checked explicitly here.
    _api.isReady.then(_api => dispatch({ type: 'CONNECT_SUCCESS' }));
  });
  _api.on('ready', () => dispatch({ type: 'CONNECT_SUCCESS' }));
  _api.on('error', err => dispatch({ type: 'CONNECT_ERROR', payload: err }));
}

// Loading accounts from polkadot-js extension
const loadAccounts = (state, dispatch) => {
  const { api } = state
  dispatch({ type: 'LOAD_KEYRING' })

  const asyncLoadAccounts = async () => {
    // module works only in browser, so import dynamically
    const { web3Enable, web3Accounts } =
      (await import('@polkadot/extension-dapp'))

    try {
      // If extension is installed, waits for authorization
      // if not installed/rejected, returns an empty array
      const enabledExtensions = await web3Enable(APP_NAME)

      if(!enabledExtensions.length) return

      let allAccounts = await web3Accounts()

      allAccounts = allAccounts.map(({ address, meta }) => ({
        address,
        meta: { ...meta, name: `${meta.name} (${meta.source})` },
      }))

      // If not false, it will load the accounts from the node
      Keyring.loadAll({ isDevelopment: false }, allAccounts)

      dispatch({ type: 'SET_KEYRING', payload: Keyring })
    } catch (e) {
      console.error(e)
      dispatch({ type: 'KEYRING_ERROR' })
    }
  }

  asyncLoadAccounts()
}

const SubstrateContext = React.createContext()

let keyringLoadAll = false

const SubstrateContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  connect(state, dispatch)

  useEffect(() => {
    const { apiState, keyringState } = state
    if (apiState === 'READY' && !keyringState && !keyringLoadAll) {
      keyringLoadAll = true
      loadAccounts(state, dispatch)
    }
  }, [state, dispatch])

  function setAccounts(accounts) {
    dispatch({ type: 'SET_ACCOUNTS', payload: accounts })
  }

  function setCurrentAccount(acct) {
    dispatch({ type: 'SET_CURRENT_ACCOUNT', payload: acct })
  }

  function setMintingStatus(newStatus) {
    dispatch({ type: 'SET_MINTING_STATUS', payload: newStatus })
  }

  return (
    <SubstrateContext.Provider
      value={{ state, setAccounts, setCurrentAccount, setMintingStatus }}
    >
      {children}
    </SubstrateContext.Provider>
  )
}

const useSubstrate = () => useContext(SubstrateContext)
const useSubstrateState = () => useContext(SubstrateContext).state

export { SubstrateContextProvider, useSubstrate, useSubstrateState }
