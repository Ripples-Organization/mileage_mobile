import React, { useState, createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

// Create Context Object
const initialState = {
  count: 0,
  selectedItems: [],
  datasheetArray: [],
  total: 0,
  isLoggedIn: false,
  userDetails: null,
  deviseToken: null,
  user: null,
};

const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("@SessionObj");
    return user ? JSON.parse(user) : {};
  } catch (e) {
    console.log("Failed to fetch the data from storage");
  }
};

export const CounterContext = createContext(initialState);
// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "logOut":
        return {
          ...state,
          userDetails: null,
          isSuper: false,
          isLoggedIn: false,
        };
      case "updateUser":
        return { ...state, userDetails: action.payload };
      case "newUser":
        return { ...state, user: action.payload };
      case "loginUser":
        return {
          ...state,
          userDetails: action.payload.userDetails,
          isLoggedIn: true,
        };
      case "SaveDeviseToken":
        return {
          ...state,
          deviseToken: action.payload.deviseToken,
        };

      default:
        throw new Error();
    }
  }, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
