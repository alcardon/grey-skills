import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ButtonGradient({ label, ...props }) {
  const router = useRouter();

  return (
    <Button
      bgGradient="linear(to-r,#4b0da9, #fd9193)"
      color={"white"}
      width={"100%"}
      fontWeight={"500"}
      {...props}
    >
      {label}
    </Button>
  );
}
