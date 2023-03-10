import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-context";
import GlobalStyles from "./GlobalStyles";
import NavTitle from "./components/shared/NavTitle";
import Fonts from "./constants/Fonts";
import AuthInput from "./components/AuthInput";

import Name from "./assets/icons/NameIcon.svg";

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

  return (
    <SafeAreaView style={[GlobalStyles.root]}>
      <StatusBar style="auto" />
      <NavTitle label="" />

      <View style={[GlobalStyles.alignItems]}>
        <Text style={[Fonts.sansH1]}>Createa reider account</Text>

        <Text style={[Fonts.sansH4]}>It'll only take a minute</Text>

        <View style={{ marginTop: 24 }} />

        <AuthInput
          label="What would you lik us to call you?"
          onChangeText={setName}
          ref={nameRef}
          value={name}
          Icon={Name}
          required={true}
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
