import { Box } from "@chakra-ui/react";

export default function ModalLayout({ children }) {
  return (
    <>
      <Box
        height={{ base: "100%", md: "100%" }}
        borderRadius={{ base: "none", sm: "md" }}
        backgroundPosition="center"
        backgroundRepeat="repeat"
        bgSize={"cover"}
        bgImage={"url('/images/general/background.png')"}
        className={"main-Lay-progress"}
        fontFamily={"Kanit, sans-serif"}
        overflow={"auto"}
      >
        {children}
      </Box>
    </>
  );
}
