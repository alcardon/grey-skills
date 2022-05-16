import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Lottie from "react-lottie";
import { GridItem, Box, Text } from "@chakra-ui/react";
import futuristicLoader from "../../public/lottie/95947-loading-animation.json";
import succesfull from "../../public/lottie/933-success.json";
import ButtonGradient from "../../components/general/gradient-button";

export default function Connection() {
  const router = useRouter();
  const [state, setState] = useState("connected");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: futuristicLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: succesfull,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (state == "disconected") {
    return (
      <GridItem
        rowSpan={{ base: 3 }}
        colSpan={{ base: 20 }}
        rowEnd={{ base: 46 }}
        colStart={{ base: 3 }}
        zIndex={7}
      >
        <Box>
          <ButtonGradient
            label={"Connect your wallet"}
            size="md"
            onClick={() => {
              /* router.push("/minting-skills/personal-info"); */
            }}
          />
        </Box>
      </GridItem>
    );
  } else if (state == "connecting") {
    return (
      <GridItem
        rowSpan={{ base: 10 }}
        colSpan={{ base: 10 }}
        rowEnd={{ base: 46 }}
        colStart={{ base: 8 }}
        zIndex={7}
      >
        <Box>
          <Lottie options={defaultOptions} height={120} width={120} />
        </Box>
      </GridItem>
    );
    return null;
  } else if (state == "connected") {
    //TODO Change dummy address
    return (
      <>
        <GridItem
          rowSpan={{ base: 2 }}
          colSpan={{ base: 20 }}
          rowEnd={{ base: 38 }}
          colStart={{ base: 3 }}
          zIndex={9}
        >
          <Text textAlign={"left"} maxWidth={280}>
            <Text as={"span"} color={"blue.400"}>
              Account:
            </Text>{" "}
            5F3sa2TJAWMqDhXG6jhV4N8ko9SxwGy8TpaNS1repo5EYjQX
          </Text>
        </GridItem>
        <GridItem
          rowSpan={{ base: 3 }}
          colSpan={{ base: 20 }}
          rowEnd={{ base: 46 }}
          colStart={{ base: 3 }}
          zIndex={7}
        >
          <Box>
            <ButtonGradient
              label={"Continue"}
              size="md"
              onClick={() => {
                router.push("/minting-skills/personal-info");
              }}
            />
          </Box>
        </GridItem>
      </>
    );
  } else {
    return null;
  }
}
