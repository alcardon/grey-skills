import {
  Box,
  Text,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Button,
} from "@chakra-ui/react";

import { useUserInfo } from "../../../context/user-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LearnValueIncreased({
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
        <ModalHeader fontWeight={"normal"}>
          Your Skills Asset has Increased in Value!
        </ModalHeader>

        <ModalBody>
          <Text>
            Each time you add an experience or apply your skill asset, your
            professional reputation increases.
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
