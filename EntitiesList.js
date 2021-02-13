import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function EntitiesList({ navigation }) {
  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text>Lista de entidades</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
});
