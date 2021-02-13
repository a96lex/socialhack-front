import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useUserActions } from "../context/UserContext";

export default function Auth({ navigation }) {
  const { signIn } = useUserActions();
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Auth screen</Text>
        <Button onPress={() => signIn()} title="login"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});
