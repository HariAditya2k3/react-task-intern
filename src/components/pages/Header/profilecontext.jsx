// profilecontext.jsx

import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const updateProfileData = (data) => {
    setProfileData(data);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};
