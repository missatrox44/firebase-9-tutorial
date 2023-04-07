import { createContext, useReducer, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

//initially create context
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

//custom auth context provider
// wrap context provider
export const AuthContextProvider = ({ children }) => {
  //create state w/ useReducer hook
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

//fires function to check if user is logged in or not when user lands on webpage
useEffect(() => {
  const unsub = onAuthStateChanged(auth, user => {
    dispatch({type: 'AUTH_IS_READY', payload: user})
    unsub()
  })
}, [])

console.log('AuthContext state:', state)


//return template, pass in value which is global state
//inside are children (root component of app)
//value is dispatch function and state
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
     {children}
    </AuthContext.Provider>
  )
};