import { useUserInfo } from "../../context/user-context";

export default function Integration() {
  const { skillInfo, createSkillInfo, setProgress } = useUserInfo();
}
