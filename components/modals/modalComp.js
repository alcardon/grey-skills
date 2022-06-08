import { Box } from "@chakra-ui/react";
import { useUserInfo } from "../../context/user-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import YourSkills from "./proyect-modals/your-skills";
import ValueIncreased from "./proyect-modals/value-increased";
import Completed from "./proyect-modals/completed";
import LearnCompleted from "./learn-modals/learn-completed";
import LearnValueIncreased from "./learn-modals/learn-value-increased";
export default function ModalComp({
  initialRef,
  onClose,
  title,
  content,
  link,
}) {
  const { itemSelected, modalStep, setModalStep } = useUserInfo();
  const { router } = useRouter();
  const [render, setRender] = useState(null);

  useEffect(() => {
    if (itemSelected.type == "Projects") {
      switch (modalStep) {
        case "your-skills":
         
          setRender(<YourSkills></YourSkills>);
          break;
        case "completed":
          setRender(<Completed></Completed>);
          break;
        case "value-increased":
          setRender(<ValueIncreased></ValueIncreased>);
          break;
      }
    } else if (itemSelected.type == "Learn") {
      switch (modalStep) {
        case "completed":
         
          setRender(<LearnCompleted></LearnCompleted>);
          break;
        case "value-increased":
          setRender(<LearnValueIncreased></LearnValueIncreased>);
          break;
      }
    }
  }, [modalStep]);

  const renderContent = () => {
    return <div>{render}</div>;
  };

  return <>{renderContent()}</>;
}
