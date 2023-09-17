import { useState, createContext } from "react";

export const CVContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [details, setDetails] = useState({
    track: "Mobile Track",
    name: "Olutunde Sokunbi",
    username: "Samiel",
    email: "olutundesokunbi@gmail.com",
    bio: "A backend developer",
    githubUrl: "https://github.com/Holutunde",
    track: "Mobile Track",
  });

  return (
    <CVContext.Provider value={{ details, setDetails }}>
      {children}
    </CVContext.Provider>
  );
};

export default ContextProvider;
