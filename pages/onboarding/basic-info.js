import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Mint, add and own your skills as dynamic NFTs",
    text: " that grow with reputational value stored on the blockchain. ",
  },
  {
    id: 2,
    title: "Apply your skills through new rojects",
    text: " or make your own to attract verified talent. ",
  },
  {
    id: 3,
    title: "Access and create professional learning experiences",
    text: " to enhance and grow current and new skills. ",
  },
  {
    id: 4,
    title: "Manage your skills growth, reputation",
    text: "and oppertunities through your Grey Skill Wallet. ",
  },
  {
    id: 5,
    title: "Document verifiable skills",
    text: "and related experiences on a Digital Resume.",
  },
];

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Powered by Blockchain</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Your Grey Skills identity allow you to:
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
