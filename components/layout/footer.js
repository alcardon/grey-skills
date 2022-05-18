import {
  ButtonGroup,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
/* import { Logo } from "./Logo"; */

export default function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "6", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Heading>Grey</Heading>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Grey Skills, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  );
}
