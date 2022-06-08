import React from "react";

import {
  HStack,
  Box,
  Image,
  Text,
  Icon,
  createIcon,
  VStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

export const NavIcon = ({ pathCode, ...props }) => {
  return (
    <Icon width="8" height="8" viewBox="0 0 36 36" {...props}>
      <path fill="currentColor" d={pathCode} />
    </Icon>
  );
};

const IconsData = [
  {
    name: "Identity",
    pathCode:
      "M28.5 4.5H22.23C21.6 2.76 19.95 1.5 18 1.5C16.05 1.5 14.4 2.76 13.77 4.5H7.5C5.85 4.5 4.5 5.85 4.5 7.5V28.5C4.5 30.15 5.85 31.5 7.5 31.5H28.5C30.15 31.5 31.5 30.15 31.5 28.5V7.5C31.5 5.85 30.15 4.5 28.5 4.5ZM18 4.5C18.825 4.5 19.5 5.175 19.5 6C19.5 6.825 18.825 7.5 18 7.5C17.175 7.5 16.5 6.825 16.5 6C16.5 5.175 17.175 4.5 18 4.5ZM18 10.5C20.49 10.5 22.5 12.51 22.5 15C22.5 17.49 20.49 19.5 18 19.5C15.51 19.5 13.5 17.49 13.5 15C13.5 12.51 15.51 10.5 18 10.5ZM27 28.5H9V26.4C9 23.4 15 21.75 18 21.75C21 21.75 27 23.4 27 26.4V28.5Z",
  },
  {
    name: "Skills",
    pathCode:
      "M17.985 3.125C9.705 3.125 3 9.845 3 18.125C3 26.405 9.705 33.125 17.985 33.125C26.28 33.125 33 26.405 33 18.125C33 9.845 26.28 3.125 17.985 3.125ZM22.83 26.21L18 23.3L13.17 26.21C12.6 26.555 11.895 26.045 12.045 25.4L13.32 19.91L9.075 16.235C8.58 15.8 8.85 14.975 9.51 14.915L15.12 14.435L17.31 9.26C17.565 8.645 18.435 8.645 18.69 9.26L20.88 14.42L26.49 14.9C27.15 14.96 27.42 15.785 26.91 16.22L22.665 19.895L23.94 25.4C24.09 26.045 23.4 26.555 22.83 26.21Z",
  },
  {
    name: "Projects",
    pathCode:
      "M30 9.93456H24V6.85742C24 5.1496 22.665 3.78027 21 3.78027H15C13.335 3.78027 12 5.1496 12 6.85742V9.93456H6C4.335 9.93456 3.015 11.3039 3.015 13.0117L3 29.936C3 31.6438 4.335 33.0131 6 33.0131H30C31.665 33.0131 33 31.6438 33 29.936V13.0117C33 11.3039 31.665 9.93456 30 9.93456ZM21 9.93456H15V6.85742H21V9.93456Z",
  },
  {
    name: "Learn",
    pathCode:
      "M18 3.125C9.72 3.125 3 9.845 3 18.125C3 26.405 9.72 33.125 18 33.125C26.28 33.125 33 26.405 33 18.125C33 9.845 26.28 3.125 18 3.125ZM24.81 23.9L23.775 24.935C23.19 25.52 22.245 25.52 21.66 24.935L17.085 20.36C15.255 21.005 13.125 20.615 11.655 19.145C9.99 17.48 9.705 14.96 10.77 12.995L14.295 16.52L16.41 14.405L12.87 10.88C14.85 9.815 17.355 10.1 19.02 11.765C20.49 13.235 20.88 15.365 20.235 17.195L24.81 21.77C25.395 22.355 25.395 23.315 24.81 23.9Z",
  },
];

export default function NavOptions({ menuOption, setMenuOption }) {
  const router = useRouter();
  return (
    <HStack
      w={"100%"}
      justifyContent={"center"}
      spacing={8}
      align={"center"}
      h={"100%"}
    >
      {IconsData.map((item) => {
        return (
          <VStack
            key={item}
            as={"button"}
            disabled={item.name == "Skills"}
            onClick={() => {
              router.push(`/profile/${item.name}`);
            }}
            w={"14%"}
          >
            <NavIcon
              pathCode={item.pathCode}
              color={
                router.pathname.startsWith(`/profile/${item.name}`)
                  ? "white"
                  : "gray"
              }
            />
            <Text
              fontSize={"xs"}
              color={
                router.pathname.startsWith(`/profile/${item.name}`)
                  ? "white"
                  : "gray"
              }
            >
              {item.name}
            </Text>
          </VStack>
        );
      })}
    </HStack>
  );
}
