import { useContext, useState, createContext, useEffect } from "react";

const GuiltyCharCoxtext = createContext();

export const GuiltyCharProvider = ({ children }) => {
  const [userName, setUserName] = useState("My friend");
  const [guiltyChar, setGuiltyChar] = useState();
  const [clues, setClues] = useState(["Clues will appear here"]);

  return (
    <GuiltyCharCoxtext.Provider
      value={{
        guiltyChar,
        setGuiltyChar,
        userName,
        setUserName,
        clues,
        setClues,
      }}
    >
      {children}
    </GuiltyCharCoxtext.Provider>
  );
};

export const useGuiltyChar = () => {
  const context = useContext(GuiltyCharCoxtext);

  if (context === undefined) {
    throw new Error("useGuiltyChar must be in provider");
  }
  return context;
};
