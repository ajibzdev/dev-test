import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-context";
import GlobalStyles from "./GlobalStyles";
import NavTitle from "./components/shared/NavTitle";
import Fonts from "./constants/Fonts";
import AuthInput from "./components/AuthInput";
import Name from "./assets/icons/NameIcon.svg";
import Email from "./assets/icons/EmailIcon.svg";
import { handleEmailError, handleInputError } from "./utils/inputHandler";
import loaded from "./hooks/useCachedResources";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [alternatePhone, setAlternatePhone] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const nameRef = React.useRef<any>();
  const emailRef = React.useRef<any>();
  const phoneRef = React.useRef<any>();
  const alternatePhoneRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();
  const confirmPasswordRef = React.useRef<any>();

  const [errors, setErrors] = React.useState({
    name: false,
    gender: false,
    email: false,
    number: false,
  });

  const [errorMsgs, setErrorMsgs] = React.useState({
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Must confirm password",
    number: "Number is required",
  });

  const handleEmail = (e: string) => {
    setEmail(e);
    handleEmailError(e, errors, setErrors, setErrorMsgs);
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <StatusBar style="auto" />
      <NavTitle label="" />

      <View style={[GlobalStyles.alignCenter, GlobalStyles.flex1]}>
        <Text style={[Fonts.sansH1]}>Createa reider account</Text>

        <Text style={[Fonts.sansH4]}>It'll only take a minute</Text>

        <View style={{ marginTop: 24 }} />

        <AuthInput
          label="What would you like us to call you?"
          onChangeText={(text) => {
            handleEmail(text);
          }}
          ref={nameRef}
          value={name}
          Icon={Name}
          required={true}
        />

        <AuthInput
          label="Your best Email ?"
          onChangeText={(text) => {
            handleEmail(text);
          }}
          ref={emailRef}
          value={email}
          Icon={Email}
          required={true}
        />

        <AuthInput
          placeholder={"+234 8012345678"}
          label="Your Phone Number (We'll send a verification code)*"
          value={phone}
          required
          keyboardType={"phone-pad"}
          error={errors.number}
          errorMsg={errorMsgs.number}
          onChangeText={(text) => {
            setPhone(() => text);
            handleInputError(text, "number", errors, setErrors, setErrorMsgs);
          }}
          ref={phoneRef}
          onSubmitEditing={() => {}}
        />

        <AuthInput
          placeholder={"+234 8012345678"}
          label="An alternamte phone number"
          value={alternatePhone}
          keyboardType={"phone-pad"}
          onChangeText={(text) => {
            setAlternatePhone(() => text);
          }}
          ref={alternatePhoneRef}
          onSubmitEditing={() => {}}
        />

        <AuthInput
          placeholder={"Create a password"}
          label="Secure your password"
          value={password}
          password={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          ref={passwordRef}
          onSubmitEditing={() => {}}
        />
        <AuthInput
          placeholder={"Confirm a password"}
          label=""
          value={confirmPassword}
          password={true}
          onChangeText={setConfirmPassword}
          ref={setConfirmPassword}
          onSubmitEditing={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
