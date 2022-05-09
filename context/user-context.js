import { Children, createContext, useContext, useState } from "react";
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

  const [skillInfo, setSkillInfo] = useState({
    skillName: "",
    skillLevel: 70,
  });

  const createSkillInfo = (skillName, skillLevel) => {
    setSkillInfo({
      skillName: skillName,
      skillLevel: skillLevel,
    });
  };

  /*----------------------*/

  const [skillId, setSkillId] = useState(0);

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
      skillId: skillId,
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
    console.log(result);
  };

  const addLearnExp = () => {};

  /*----------------------*/

  /**Working experience */

  const [workInfo, setWorkInfo] = useState([]);

  const createWorkInfo = (nameWork, role, summary) => {
    let newWork = {
      id: uuidv4(),
      type: "WORK",
      skillId: skillId,
      nameWork: nameWork,
      role: role,
      summary: summary,
    };

    setWorkInfo((prev) => [...prev, newWork]);
  };

  const deleteWorkInfo = (id) => {
    let result = workInfo.filter((data) => data.id != id);
    setWorkInfo(result);
    console.log(result);
  };

  /*----------------------*/

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
        learnInfo,
        createLearnInfo,
        deleteLearnInfo,
        workInfo,
        createWorkInfo,
        deleteWorkInfo,
        progress,
        setProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
