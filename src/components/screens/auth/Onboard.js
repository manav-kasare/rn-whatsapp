import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { AsYouType, parsePhoneNumber } from "libphonenumber-js";
import firebase from "firebase";
import styles from "./styles";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { config } from "../../../utils/firebase";
import Toast from "react-native-toast-message";

export default function Onboard({ navigation }) {
  const [phone, setPhone] = useState("+1");
  const [loading, setLoading] = useState(false);
  const recaptchaVerifier = React.useRef(null);
  const attemptInvisibleVerification = true;

  const handleSubmit = async () => {
    setLoading(true);
    const parsed = parsePhoneNumber(phone);
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phone,
        recaptchaVerifier.current
      );
      setLoading(false);
      navigation.push("VerifyOtp", { phone, verificationId });
    } catch (err) {
      setLoading(false);
      console.log("Error", err);
      Toast.show({ type: "error", text1: "Error", text2: err.message });
    }
  };

  const handleOnChange = (value) => {
    let newValue = value;
    newValue = !/^\+/.test(value) ? "+" + value : value;
    newValue = new AsYouType().input(newValue);
    setPhone(newValue);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={config}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />
      <Text style={styles.heading}>Whatsapp clone</Text>
      <View style={styles.form}>
        <TextInput
          mode="outlined"
          value={phone}
          onChangeText={handleOnChange}
          style={styles.input}
          keyboardType="number-pad"
        />
        <Button
          loading={loading}
          onPress={handleSubmit}
          mode="contained"
          contentStyle={styles.buttonContent}
        >
          Get Otp
        </Button>
      </View>
      {/* {attemptInvisibleVerification && <FirebaseRecaptchaBanner />} */}
    </SafeAreaView>
  );
}
