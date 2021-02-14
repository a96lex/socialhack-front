import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useUserActions, useUserState } from "../context/UserContext";

export default function Profile({ navigation }) {
  const { name } = useUserState();
  const { logOff } = useUserActions();
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Hola {name}, esta es la vista de tu perfil</Text>
        <Text onPress={() => logOff()} style={styles.logOff}>
          Cerrar sesión
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
  logOff: {
    width: "90%",
    height: 40,
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#d19c1d",
    color: "#fff",
  },
});
