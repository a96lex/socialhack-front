import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Faq({ navigation }) {
  const [isEntity, setIsEntity] = useState(false);

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.isEntityContainer}>
          <Text
            style={[
              styles.isEntityButton,
              !isEntity ? styles.active : styles.inactive,
            ]}
            onPress={() => setIsEntity(false)}
          >
            usuario
          </Text>
          <Text
            style={[
              styles.isEntityButton,
              isEntity ? styles.active : styles.inactive,
            ]}
            onPress={() => setIsEntity(true)}
          >
            entidade
          </Text>
        </View>
        <Text style={styles.header}>
          {isEntity ? "Faq Entidades" : "Faq Voluntarios/as"}
        </Text>
        <Text style={styles.title}>
          {isEntity
            ? "Como debería escribir o meu anuncio?"
            : "Como podo contibuir?"}
        </Text>
        <Text style={{ textAlign: "center" }}>
          {isEntity
            ? "Os anuncios máis atractivos son os máis claros e breves. Intenta deixar clara cal será a función do voluntario ou que poductos precisas. O voluntario pode visitar o teu perfil ou preguntar se quere máis información!"
            : "Podes axudar mediante voluntariados ou mediante doazóns. Os voluntariados son compromisos estables coas asociacións, mentres as doazóns son colaboración puntuais."}
        </Text>
        <Text style={styles.title}>
          {isEntity
            ? "Que podo ofrecer como asociacion?"
            : "Que buscan as asociacións?"}
        </Text>
        <Text style={{ textAlign: "center" }}>
          {isEntity
            ? "Os voluntarios comenzar a traballar en proxectos sociais pola ilusión, pero quédan pola comunidade e a formación. Non esquezas facelos partícipes da entidade, de escoitalos e de formalos."
            : "As asociacións precisan voluntarios con un compromiso duradeiro, pero isto non significa que sexa preciso invertir moitas horas: é preferíbel un compromiso de unha hora á semana, ou cada dúas durante varios anos."}
        </Text>
        {!isEntity && (
          <>
            <Text style={styles.title}>Que podo esperar dun voluntariado?</Text>
            <Text style={{ textAlign: "center" }}>
              Ademais de crear lazos coa tua comunidade e da satisfacción
              persoal, moitas asociación poden ofercer outras vantaxes. Moitas
              proporcionan formación continuada, e a experiencia conta como
              expericia laboral para o teu CV! Alén disto, se es universitario
              poderás convalidar créditos ECTS!
            </Text>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: { fontWeight: "bold", fontSize: "130%" },
  title: { fontWeight: "bold" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingBottom: 45,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  isEntityContainer: { flexDirection: "row" },
  isEntityButton: { padding: 8, borderRadius: 20, margin: 5 },
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
});
