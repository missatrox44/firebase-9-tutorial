import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

//firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    //reset error every time new user signs up
    setError(null);
    //needs auth object as first arg
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log("user signed up:", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //return error if there is one and signup function
  return { error, signup };
};
