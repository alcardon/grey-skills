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

export default function Completed({
  initialRef,
  onClose,
  type,
  title,
  content,
  link,
}) {
  const { itemSelected, setItemSelected, modalStep, setModalStep } =
    useUserInfo();

  return (
    <>
      <Box
        h={"100%"}
        position={"relative"}
        boxSizing="border-box"
        className="bigRelative"
      >
        <ModalHeader>Nice Work! You have completed the project.</ModalHeader>

        <ModalBody>
          <Text>
            Check your Skills Wallet to see how this impacted the value of your
            skills.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setModalStep("value-increased");
            }}
            fontWeight={"normal"}
            bgGradient="linear(to-r,#4b0da9, #fd9193)"
          >
            Skip
          </Button>
        </ModalFooter>
      </Box>
    </>
  );
}
