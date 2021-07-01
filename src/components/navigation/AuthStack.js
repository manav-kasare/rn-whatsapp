import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Onboard from "../screens/auth/Onboard";
import VerifyOtp from "../screens/auth/VerifyOtp";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ stackAnimation: "slide_from_right" }}>
      <Stack.Screen
        name="Onboard"
        component={Onboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    </Stack.Navigator>
  );
}
