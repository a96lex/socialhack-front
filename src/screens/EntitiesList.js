import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EntitiesList({ navigation }) {
  return (
    <View style={styles.header}>
      <Text
        onPress={() => navigation.toggleDrawer()}
        style={{ fontSize: 50, padding: 5 }}
      >
        =
      </Text>
      <Text style={{ padding: 5 }}>Pontech</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    color: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
