import "react-native-gesture-handler";
import "./src/utils/firebase";
import App from "./App";
import { registerRootComponent } from "expo";
import { enableScreens } from "react-native-screens";
import setGlobalData from "./src/utils/reactn";

setGlobalData();
enableScreens();
registerRootComponent(App);
