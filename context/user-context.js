import { Children, createContext, useContext, useState } from "react";

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
  });

  const createIndustryUser = (industry, industryRole) => {
    setIndustryInfo({
      industry: industry,
      industryRole: industryRole,
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

  const [learnInfo, setLearnInfo] = useState({
    type: "LEARNING",
    skillId: skillId,
    name: "",
    metadata: {
      provider: "",
      startDate: "",
      endDate: "",
      active: false,
      certificateDate: "",
    },
  });

  const createLearnInfo = (nameLearn, metadata) => {
    let newLearningInfo = {
      type: "LEARNING",
      skillId: skillId,
      name: nameLearn,
      metadata: metadata,
      /*  {
        provider: "",
        startDate: "",
        endDate: "",
        active: false,
        certificateDate: "",
      }, */
    };

    setLearnInfo({
      ...learnInfo,
      ...newLearningInfo,
    });
  };

  const addLearnExp = () => {};

  /*----------------------*/

  /**Working experience */

  const [workInfo, setWorkInfo] = useState({
    type: "WORKING",
    skillId: skillId,
    nameLearn: "",
    metadata: {
      provider: "",
      startDate: "",
      endDate: "",
      active: false,
      certificateDate: "",
    },
  });

  /*----------------------*/

  return (
    <UserContext.Provider
      value={{
        userInfo,
        createUser,
        industryInfo,
        setIndustryInfo,
        skillInfo,
        setSkillInfo,
        createSkillInfo,
        progress,
        setProgress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
