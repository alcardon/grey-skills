import { Box, useColorModeValue } from "@chakra-ui/react";
export default function MainBox({ children }) {
  return (
    <Box
      borderRadius="lg"
      m={{ base: 3, md: 16, lg: 10 }}
      p={{ base: 5, lg: 16 }}
      bg={useColorModeValue("BlackAlpha.50", "gray.700")}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
      shadow="base"
    >
      {children}
    </Box>
  );
}
