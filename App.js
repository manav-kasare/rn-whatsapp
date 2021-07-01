import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { useGlobal } from "reactn";
import AuthStack from "./src/components/navigation/AuthStack";
import MainStack from "./src/components/navigation/MainStack";
import Toast from "react-native-toast-message";

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
  ...PaperDarkTheme,
  dark: true,
  roundness: 25,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#FFD369",
    accent: "#867AE9",
    background: "#222831",
    surface: "#393E46",
    text: "#EEEEEE",
    border: "transparent",
    notification: "#FFD369",
  },
};
const MyOaoerDefaultTheme = {
  ...PaperDefaultTheme,
  dark: false,
  roundness: 25,
  colors: {
    ...PaperDefaultTheme.colors,
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
      theme={MyPaperDarkTheme}
      // theme={scheme === "dark" ? MyPaperDarkTheme : MyOaoerDefaultTheme}
    >
      <NavigationContainer
        theme={MyDarkTheme}
        // theme={scheme === "dark" ? MyDarkTheme : MyDefaultTheme}
      >
        {user ? <MainStack /> : <AuthStack />}
        <Toast ref={(ref) => Toast.setRef(ref)} position="bottom" />
      </NavigationContainer>
    </PaperProvider>
  );
}
