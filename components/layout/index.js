import { Box } from "@chakra-ui/react";

import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" p={0}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
