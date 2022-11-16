import { useState } from "react";

import { ACCESS_TYPE } from "../constants";

export const useAccessTypeState = () => {
  const [accessType, setAccessType] = useState(ACCESS_TYPE.LANDING);

  const handleAccessType = (accessType: string) => {
    return accessType === ACCESS_TYPE.LOGIN ? ACCESS_TYPE.REGISTER : ACCESS_TYPE.LOGIN;
  };

  const changeAccessType = (accessType: string) => {
    setAccessType(handleAccessType(accessType));
  };

  return { accessType, handleAccessType, changeAccessType };
};
