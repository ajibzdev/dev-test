import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import GlobalStyles from "./GlobalStyles";
import Fonts from "./constants/Fonts";
import AuthInput from "./components/AuthInput";
import Name from "./assets/icons/NameIcon.svg";
import Email from "./assets/icons/EmailIcon.svg";
import Contact from "./assets/icons/ContactIcon.svg";
import Password from "./assets/icons/PasswordIcon.svg";
import Proceed from "./assets/icons/ProceedIcon.svg";
import {
  handleConfirmPasswordError,
  handleEmailError,
  handleInputError,
  handlePasswordError,
} from "./utils/inputHandler";
// import loaded from "./hooks/useCachedResources";
import NavTitle from "./components/NavTitle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "./constants/Colors";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [alternatePhone, setAlternatePhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const phoneRef = React.useRef();
  const alternatePhoneRef = React.useRef();
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  const [errors, setErrors] = React.useState({
    name: false,
    gender: false,
    email: false,
    number: false,
    password: false,
    confirmPassword: false,
    altNumber: false,
  });

  const [errorMsgs, setErrorMsgs] = React.useState({
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Must confirm password",
    number: "Number is required",
    altNumber: "An alternative number is required",
  });

  const handleEmail = (e) => {
    setEmail(e);
    handleEmailError(e, errors, setErrors, setErrorMsgs);
  };

  // if (!loaded) {
  //   return null;
  // }

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <StatusBar style="auto" />
      <NavTitle label="" />
      <KeyboardAwareScrollView style={[GlobalStyles.flex1]}>
        <View
          style={[
            GlobalStyles.alignCenter,
            GlobalStyles.paddingHorizontalLarge,
            GlobalStyles.flex1,
          ]}
        >
          <Text style={[Fonts.sansH1]}>Create a rider account</Text>

          <Text style={[Fonts.sansH4]}>It'll only take a minute</Text>

          <View style={{ marginTop: 24 }} />

          <AuthInput
            label="What would you like us to call you?"
            onChangeText={(text) => {
              setName(text);
            }}
            ref={nameRef}
            value={name}
            Icon={<Name height={20} width={20} />}
            required={true}
          />

          <AuthInput
            label="Your best Email ?"
            onChangeText={(text) => {
              handleEmail(text);
              handleEmail(text);
            }}
            ref={emailRef}
            value={email}
            Icon={Email}
            error={errors.email}
            errorMsg={errorMsgs.email}
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
            Icon={Contact}
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
            error={errors.password}
            errorMsg={errorMsgs.password}
            onChangeText={(text) => {
              setPassword(text);
              handlePasswordError(text, errors, setErrors, setErrorMsgs);
            }}
            ref={passwordRef}
            onSubmitEditing={() => {}}
          />
          <AuthInput
            placeholder={"Confirm a password"}
            label=""
            value={confirmPassword}
            error={errors.confirmPassword}
            errorMsg={errorMsgs.confirmPassword}
            password={true}
            onChangeText={(text) => {
              handleConfirmPasswordError(
                text,
                errors,
                setErrors,
                setErrorMsgs,
                password
              );
            }}
            ref={setConfirmPassword}
            onSubmitEditing={() => {}}
          />

          <View style={[{ marginTop: 20, alignSelf: "flex-end" }]}>
            <TouchableOpacity>
              <View
                style={[
                  GlobalStyles.flexRow,

                  {
                    alignItems: "center",
                    backgroundColor: Colors.primary,
                    paddingHorizontal: 12,
                    height: 60,
                    borderRadius: 4,
                  },
                ]}
              >
                <Text
                  style={[Fonts.sansSemiBold, { fontSize: 14, marginRight: 8 }]}
                >
                  Proceed
                </Text>
                <Proceed />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
