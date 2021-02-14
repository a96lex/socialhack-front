import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import Header from "../components/Header";
import { Municipios } from "../constants";
import { useContentActions } from "../context/ContentContext";

export default function CreateRequest({ navigation }) {
  const { uploadAction } = useContentActions();
  const [isDonation, setIsDonation] = useState(false);
  const [title, setTitle] = useState(null);
  const [item, setItem] = useState(null);
  const [description, setDescription] = useState(null);
  const [locality, setLocality] = useState(null);
  const [periodicity, setPeriodicity] = useState(null);
  const [urgency, setUrgency] = useState(null);

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.isDonationContainer}>
          <Text
            style={[
              styles.isDonationButton,
              !isDonation ? styles.active : styles.inactive,
            ]}
            onPress={() => setIsDonation(false)}
          >
            voluntariado
          </Text>

          <Text
            style={[
              styles.isDonationButton,
              isDonation ? styles.active : styles.inactive,
            ]}
            onPress={() => setIsDonation(true)}
          >
            donación
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center" }}>
            <Text>Urxencia</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={urgency}
              onValueChange={(itemValue, itemIndex) => setUrgency(itemValue)}
            >
              <Picker.Item label="Baixa" />
              <Picker.Item label="Media" />
              <Picker.Item label="Alta" />
            </Picker>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Localización</Text>
            <Picker
              style={styles.pickerStyle}
              selectedValue={locality}
              onValueChange={(itemValue) => setLocality(itemValue)}
            >
              {Municipios.map((m) => (
                <Picker.Item label={m} value={undefined} />
              ))}
            </Picker>
          </View>
        </View>
        {isDonation ? (
          <TextInput
            style={styles.signUpDiv}
            onChangeText={(text) => setItem(text)}
            value={item}
            placeholder="Ex: Dinamizador, de actividades, Meseiro..."
          />
        ) : (
          <TextInput
            style={styles.signUpDiv}
            onChangeText={(text) => setTitle(text)}
            value={title}
            placeholder="Ex: Dinamizador, de actividades, Meseiro..."
          />
        )}
        <TextInput
          style={[styles.signUpDiv, { height: 100 }]}
          multiline={true}
          numberOfLines={3}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Descripcion"
        />
        {!isDonation && (
          <TextInput
            style={styles.signUpDiv}
            onChangeText={(text) => setPeriodicity(text)}
            value={periodicity}
            placeholder="Ex: 2h/semana, 2h/sabado, 1 vez/ mes"
          />
        )}
        <Text
          style={styles.submit}
          onPress={() => {
            uploadAction({
              isDonation,
              title,
              item,
              description,
              periodicity,
              locality,
              urgency,
            });
          }}
        >
          Crear
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontWeight: "bold", fontSize: "110%" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingBottom: 45,
    paddingTop: 25,
  },
  isDonationContainer: { flexDirection: "row" },
  isDonationButton: { padding: 8, borderRadius: 20, margin: 5 },
  active: { backgroundColor: "#D19C1D", color: "#fff" },
  inactive: { color: "4f4f4f" },
  signUpDiv: {
    width: "90%",
    height: 40,
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#4f4f4f",
    borderWidth: 1,
    textAlign: "center",
  },
  pickerStyle: {
    textAlign: "center",
    backgroundColor: "#596683",
    color: "#fff",
    margin: 10,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 2,
  },
  submit: {
    width: "90%",
    height: 40,
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#d19c1d",
    color: "#fff",
  },
});
