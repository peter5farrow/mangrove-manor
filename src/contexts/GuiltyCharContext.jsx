import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

//for passing guilty character (and player's name) to necessary components

const GuiltyCharCoxtext = createContext();

export const GuiltyCharProvider = ({ children }) => {
  const [userName, setUserName] = useState("My friend");
  const [guiltyChar, setGuiltyChar] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/guiltychar");
      setGuiltyChar(res.data);
    }
    fetchData();
  }, []);

  return (
    <GuiltyCharCoxtext.Provider
      value={{
        guiltyChar,
        setGuiltyChar,
        userName,
        setUserName,
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
