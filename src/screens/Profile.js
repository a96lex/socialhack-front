import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useUserActions, useUserState } from "../context/UserContext";

export default function Profile({ navigation }) {
  const { loggedIn } = useUserState();
  const { logOff } = useUserActions();
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Aqui está el perfil</Text>
        <Button onPress={() => logOff()} title="Cerrar sesión" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});
