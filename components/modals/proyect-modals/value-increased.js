import {
  Box,
  Text,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function ValueIncreased({
  initialRef,
  onClose,
  type,
  title,
  content,
}) {
  const router = useRouter();
  return (
    <>
      <Box
        h={"100%"}
        position={"relative"}
        boxSizing="border-box"
        className="bigRelative"
      >
        <ModalHeader>Congrats! You’ve completed the course!</ModalHeader>

        <ModalBody>
          <Text>
            Check your Skills Wallet to see how this impacted the value of your
            skills.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              router.push("Identity");
            }}
            fontWeight={"normal"}
            bgGradient="linear(to-r,#4b0da9, #fd9193)"
          >
            Go to Identity
          </Button>
        </ModalFooter>
      </Box>
    </>
  );
}
