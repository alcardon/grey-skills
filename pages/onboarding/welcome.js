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

import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();
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
          <Text as="span" color="blue.400">
            Grey skill
          </Text>
          <Text as="span"> identity</Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          To begin your journey towards professional soverinegnty and
          empowerment
        </Text>
        <Stack spacing={6} direction="row">
          <Button
            rounded="full"
            px={6}
            colorScheme="blue"
            bg="blue.400"
            _hover={{ bg: "blue.500" }}
            onClick={() => router.push("minting-skills/personal-info")}
          >
            Get started
          </Button>

          <Button
            rounded="full"
            px={6}
            onClick={() => router.push("/onboarding/basic-info")}
          >
            Learn more
          </Button>
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
