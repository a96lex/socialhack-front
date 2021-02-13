import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EntityScreen() {
  return (
    <View style={styles.container}>
      <Text>Aquí se ve una entidad</Text>
    </View>
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
