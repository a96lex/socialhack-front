import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import { useContentState } from "../context/ContentContext";
import { actionTest, vacas, DefaultShadow } from "../constants";

function DetailItem({ label, text }) {
  return (
    <>
      <Text
        style={{
          alignSelf: "flex-start",
          marginTop: 8,
          marginLeft: 8,
          marginRight: 8,
          marginBottom: 1,
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: "110%",
          alignSelf: "flex-start",
          marginTop: 1,
          marginLeft: 8,
          marginRight: 8,
          marginBottom: 8,
        }}
      >
        {text}
      </Text>
    </>
  );
}

function DetailDisplay({ data }) {
  return (
    <>
      <DetailItem label="Páxina web" text={data?.WEB} />
      <DetailItem label="descripción" text={data?.Descripcion} />
      <DetailItem label="Área" text={data?.CEN_AREA} />
      <DetailItem
        label="Sin ánimo de lucro"
        text={data?.ENT_ANIMO_LUCRO ? "No" : "Si"}
      />
      <DetailItem
        label="Contacto"
        text={data?.CEN_TELEFONO + "\n" + data?.CEN_EMAIL}
      />
      <DetailItem label="Dirección" text={data?.CEN_DIRECCION} />
    </>
  );
}

export default function CenterDetails({ navigation }) {
  const { centerId, actionsListLoading } = useContentState();
  const [isDetails, setIsDetails] = useState(true);
  const [isDonation, setIsDonation] = useState(true);

  return (
    <>
      <Header navigation={navigation} />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{vacas?.CEN_NOME}</Text>
        <View style={styles.toggleBar}>
          <Text
            style={isDetails ? styles.active : styles.inactive}
            onPress={() => setIsDetails(true)}
          >
            info
          </Text>
          <Text
            style={!isDetails && !isDonation ? styles.active : styles.inactive}
            onPress={() => {
              setIsDonation(false);
              setIsDetails(false);
            }}
          >
            voluntariado
          </Text>
          <Text
            style={!isDetails && isDonation ? styles.active : styles.inactive}
            onPress={() => {
              setIsDonation(true);
              setIsDetails(false);
            }}
          >
            doazóns
          </Text>
        </View>
        <ScrollView>
          <View style={styles.cardContainer}>
            {isDetails ? (
              <DetailDisplay data={vacas} />
            ) : (
              <>
                {actionsListLoading ? (
                  <Text>Cargando...</Text>
                ) : (
                  <>
                    {actionTest.map((t) => (
                      <View style={styles.taskCard} key={t?.id}>
                        <Text style={styles.title}>{t?.Title}</Text>
                        <Text numberOfLines={5}>
                          {t?.description}
                          {"\n\n\n"}
                        </Text>
                        <View style={styles.cardBottomFlex}></View>
                      </View>
                    ))}
                  </>
                )}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F0F1F5",
  },
  toggleBar: {
    height: 50,
    minHeight: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    ...DefaultShadow,
  },
  headerTitle: {
    fontSize: "110%",
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  inactive: {
    padding: 8,
    borderRadius: 20,
    margin: 15,
    flex: 1,
    textAlign: "center",
    backgroundColor: "none",
  },
  active: {
    padding: 8,
    borderRadius: 20,
    margin: 15,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#D19C1D",
    color: "#fff",
  },
  taskCard: {
    height: 100,
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
  returnButton: {
    position: "fixed",
    bottom: 25,
    right: 25,
    height: 40,
    width: 60,
    borderRadius: 50,
    backgroundColor: "white",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...DefaultShadow,
  },
});
