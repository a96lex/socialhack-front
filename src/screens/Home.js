import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";

export default function Home({ navigation }) {
  const [isDonation, setIsDonation] = useState(false);
  const test = [
    {
      id: 28,
      Title: "Sweden",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      nome: "centro1",
    },
    {
      id: 28,
      Title: "Sweden",
      description:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      nome: "centro2",
    },
    {
      id: 28,
      Title: "Sweden",
      description:
        "but also the leap into electronic typesetting, remaining essentially unchanged",
      nome: "centro3",
    },
    {
      id: 28,
      Title: "Sweden",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      nome: "centro4",
    },
    {
      id: 28,
      Title: "Sweden",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      nome: "centro5",
    },
    {
      id: 56,
      Title: "USA",
      description:
        "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      nome: "centro6",
    },
    {
      id: 89,
      Title: "England",
      description:
        "but also the leap into electronic typesetting, remaining essentially unchanged",
      nome: "centro7",
    },
  ];

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.toggleBar}>
          <Text
            style={!isDonation ? styles.active : styles.inactive}
            onPress={() => isDonation && setIsDonation(!isDonation)}
          >
            voluntariado
          </Text>
          <Text
            style={isDonation ? styles.active : styles.inactive}
            onPress={() => !isDonation && setIsDonation(!isDonation)}
          >
            doazóns
          </Text>
        </View>
        <ScrollView>
          <View style={styles.cardContainer}>
            {test.map((t) => (
              <View style={styles.taskCard}>
                <Text style={styles.title}>{t?.Title}</Text>
                <Text numberOfLines={3}>
                  {t?.description}
                  {"\n\n\n"}
                </Text>
                <View style={styles.cardBottomFlex}>
                  <Text style={styles.title}>ver más</Text>
                  <Text style={[styles.title, { color: "#D19C1D" }]}>
                    {t?.nome}
                  </Text>
                </View>
              </View>
            ))}
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
