import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const ProviderContext = ({ children }) => {
  const [lang, setLang] = useState("uz");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
