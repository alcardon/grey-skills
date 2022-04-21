import {
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function WorkModal() {
  return (
    <>
      <ModalHeader>Work experience</ModalHeader>
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel></FormLabel>
          <Input placeholder="" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel></FormLabel>
          <Input placeholder="" />
        </FormControl>
      </ModalBody>
    </>
  );
}
