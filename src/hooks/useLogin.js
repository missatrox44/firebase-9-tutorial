import { useState } from "react";

//firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged in:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //return error if there is one and login function
  return { error, login };
};
