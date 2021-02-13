import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <Text onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu-outline" size={29} />
        </Text>
        <Image
          style={{ width: 40, height: 20 }}
          source={require("../assets/logoazul.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    color: "#000",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
