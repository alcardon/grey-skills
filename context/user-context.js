import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

export const useUserInfo = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const [userInfo, setUserInfo] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const createUser = (name, userName, email) => {
    setUserInfo({
      name: name,
      userName: userName,
      email: email,
    });
  };

  /*----------------------*/

  /**Industry */

  const [industryInfo, setIndustryInfo] = useState({
    industry: "",
    industryRole: "",
    profesionalBg: "",
  });

  const createIndustryUser = (industry, industryRole, profesionalBg) => {
    setIndustryInfo({
      industry: industry,
      industryRole: industryRole,
      profesionalBg: profesionalBg,
    });
  };

  /*----------------------*/

  /**Skill */

  const [skillInfo, setSkillInfo] = useState([]);

  const createSkillInfo = (skillName, skillLevel) => {
    let newSkill = {
      id: uuidv4(),
      skillName: skillName,
      skillLevel: skillLevel,
    };
    setSkillInfo((prev) => [...prev, newSkill]);
  };

  const levelUpSkill = (id, addLevel) => {
    let skillIndex = skillInfo.findIndex((data) => data.id == id);
    skillInfo[skillIndex].level += addLevel;
  };

  /**GREY Skills Level */

  const [GSLevel, setGSLevel] = useState(70);
  console.log(GSLevel);
  /**Learning experience */

  const [learnInfo, setLearnInfo] = useState([]);

  const createLearnInfo = (
    nameLearn,
    provider,
    startDate,
    endDate,
    active,
    credentials
  ) => {
    let newLearn = {
      id: uuidv4(),
      type: "LEARNING",
      nameLearn: nameLearn,
      provider: provider,
      startDate: startDate,
      endDate: endDate,
      active: active,
      credentials: credentials,
    };

    setLearnInfo((prev) => [...prev, newLearn]);
  };

  const deleteLearnInfo = (id) => {
    let result = learnInfo.filter((data) => data.id != id);
    setLearnInfo(result);
  };

  const addLearnExp = () => {};

  /*----------------------*/

  /**Working experience */

  const [workInfo, setWorkInfo] = useState([]);

  const createWorkInfo = (nameWork, role, summary) => {
    let newWork = {
      id: uuidv4(),
      type: "WORK",
      nameWork: nameWork,
      role: role,
      summary: summary,
    };

    setWorkInfo((prev) => [...prev, newWork]);
  };

  const deleteWorkInfo = (id) => {
    let result = workInfo.filter((data) => data.id != id);
    setWorkInfo(result);
  };

  /*----------------------*/

  /** Browser Context */
  const [itemSelected, setItemSelected] = useState(null);
  const [modalStep, setModalStep] = useState(null);

  /*------------------------ */

  return (
    <UserContext.Provider
      value={{
        userInfo,
        createUser,
        industryInfo,
        createIndustryUser,
        skillInfo,
        setSkillInfo,
        createSkillInfo,
        levelUpSkill,
        GSLevel,
        setGSLevel,
        learnInfo,
        createLearnInfo,
        deleteLearnInfo,
        workInfo,
        createWorkInfo,
        deleteWorkInfo,
        progress,
        setProgress,
        itemSelected,
        setItemSelected,
        modalStep,
        setModalStep,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
