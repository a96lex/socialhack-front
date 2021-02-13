import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function CreateRequest({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Aquí se crea una petición</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});
