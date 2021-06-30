import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useGlobal } from "reactn";
import firebase from "firebase";
import MainStack from "./src/components/navigation/MainStack";
import AuthStack from "./src/components/navigation/AuthStack";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

const MyDefaultTheme = {
  dark: false,
  colors: {
    primary: "#FFD369",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "#FFD369",
  },
};
const MyDarkTheme = {
  dark: true,
  colors: {
    primary: "#FFD369",
    background: "#222831",
    card: "#393E46",
    text: "#EEEEEE",
    border: "rgb(199, 199, 204)",
    notification: "#FFD369",
  },
};
const MyPaperDarkTheme = {
  dark: true,
  roundness: 15,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#FFD369",
    accent: "#867AE9",
    background: "#222831",
    surface: "#393E46",
    text: "#EEEEEE",
    border: "rgb(199, 199, 204)",
    notification: "#FFD369",
  },
};
const MyOaoerDefaultTheme = {
  dark: false,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#FFD369",
    accent: "#867AE9",
    background: "rgb(242, 242, 242)",
    surface: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "#FFD369",
  },
};

export default function App() {
  const [user, setUser] = useGlobal("user");
  const scheme = useColorScheme();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((_user) => setUser(_user));
  }, []);

  return (
    <PaperProvider
      theme={scheme === "dark" ? MyPaperDarkTheme : MyOaoerDefaultTheme}
    >
      <NavigationContainer
        theme={scheme === "dark" ? MyDarkTheme : MyDefaultTheme}
      >
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
}
