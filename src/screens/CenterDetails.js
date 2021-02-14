import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import { useContentState } from "../context/ContentContext";

export default function CenterDetails({ navigation }) {
  const [isDonation, setIsDonation] = useState(false);
  const { actionsListLoading, centerId } = useContentState();

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.toggleBar}>
          <Text onPress={() => navigation.navigate("Home")}>{"<-"}</Text>
        </View>
        <ScrollView>
          <View style={styles.cardContainer}>
            <Text>{centerId}</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-around" },
  toggleBar: {
    height: 30,
    minHeight: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  active: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#596683",
    color: "#596683",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  inactive: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#fff",
    color: "#4f4f4f",
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  taskCard: {
    height: 120,
    width: "100%",
    overflow: "hidden",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  cardContainer: {
    width: "100vw",
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { color: "#3D3B3B", fontWeight: "bold", fontSize: "100%" },
  cardBottomFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    alignItems: "flex-end",
  },
});
