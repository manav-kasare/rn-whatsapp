import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Onboard from "../screens/auth/Onboard";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
