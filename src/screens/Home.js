import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import { useContentActions, useContentState } from "../context/ContentContext";
import { Municipios, DefaultShadow, actionTest } from "../constants";

export default function Home({ navigation }) {
  const [isDonation, setIsDonation] = useState(false);
  const [urgency, setUrgency] = useState(null);
  const [locality, setLocality] = useState(null);
  // const { actionsListLoading, actionsList } = useContentState();
  const { setCenterId, getList, getCenter } = useContentActions();
  const actionsList = actionTest;

  const goToDetails = (centerId) => {
    setCenterId(centerId);
    getCenter(centerId);
    navigation.navigate("Details");
  };

  useEffect(() => {
    getList({ isDonation, urgency, locality });
  }, [locality, urgency, isDonation]);

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
            <View style={{ flexDirection: "row" }}>
              <Picker
                selectedValue={urgency}
                onValueChange={(itemValue, itemIndex) => setUrgency(itemValue)}
              >
                <Picker.Item label="Baixa" value={0} />
                <Picker.Item label="Media" value={1} />
                <Picker.Item label="Alta" value={2} />
              </Picker>
              <Picker
                selectedValue={locality}
                onValueChange={(itemValue) => setUrgency(itemValue)}
              >
                {Municipios.map((m) => (
                  <Picker.Item label={m} value={undefined} />
                ))}
              </Picker>
              <View
                onPress={() => {
                  setUrgency(null), setLocality(null);
                }}
              >
                <Text>Borra filtros</Text>
              </View>
            </View>
            {!actionsList ? (
              <Text>Cargando...</Text>
            ) : (
              <>
                {actionsList.map((t) => (
                  <View style={styles.taskCard} key={t?.id}>
                    <Text style={styles.title}>{t?.Title}</Text>
                    <Text numberOfLines={3}>
                      {t?.description}
                      {"\n\n\n"}
                    </Text>
                    <View style={styles.cardBottomFlex}>
                      <Text
                        style={styles.title}
                        onPress={() => goToDetails(t?.id)}
                      >
                        ver más
                      </Text>
                      <Text style={[styles.title, { color: "#D19C1D" }]}>
                        {t?.nome}
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            )}
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
    ...DefaultShadow,
  },
  cardContainer: {
    width: "100vw",
    backgroundColor: "#F0F1F5",
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
