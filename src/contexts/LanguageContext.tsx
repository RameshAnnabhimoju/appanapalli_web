import { createContext, useState, ReactNode } from "react";
type languageContextTypes = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};
export const LanguageContext = createContext({} as languageContextTypes);
const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
