import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

//custom hook to grab context object that contains user
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
};
