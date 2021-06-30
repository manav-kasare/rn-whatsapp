import "react-native-gesture-handler";
import "./src/urils/firebase";
import App from "./App";
import { registerRootComponent } from "expo";
import { enableScreens } from "react-native-screens";

enableScreens();
registerRootComponent(App);
