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

export default function LearnCompleted({
  initialRef,
  onClose,
  type,
  title,
  content,
  link,
}) {
  const { setModalStep, GSLevel, setGSLevel } = useUserInfo();

  return (
    <>
      <Box
        h={"100%"}
        position={"relative"}
        boxSizing="border-box"
        className="bigRelative"
      >
        <ModalHeader fontWeight={"normal"}>
          Nice Work! You have completed the project.
        </ModalHeader>

        <ModalBody>
          <Text>
            Check your Skills Wallet to see how this impacted the value of your
            skills.{" "}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setGSLevel(GSLevel + 5);
              setModalStep("value-increased");
            }}
            fontWeight={"normal"}
          >
            level up
          </Button>
        </ModalFooter>
      </Box>
    </>
  );
}
