import Illustration from "../../components/ilustrations/illustration";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
        >
          Create your{" "}
          <Text as="span" color="orange.400">
            Grey skill
          </Text>
          <Text as="span"> identity</Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          To begin your journey towards professional soverinegnty and
          empowerment
        </Text>
        <Stack spacing={6} direction="row">
          <Link href="minting-skills/personal-info">
            <Button
              rounded="full"
              px={6}
              colorScheme="orange"
              bg="orange.400"
              _hover={{ bg: "orange.500" }}
            >
              Get started
            </Button>
          </Link>
          <Link href="/onboarding/basic-info">
            <Button rounded="full" px={6}>
              Learn more
            </Button>
          </Link>
        </Stack>
        <Flex w="full">
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
