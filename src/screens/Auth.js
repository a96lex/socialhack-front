import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import { useUserActions } from "../context/UserContext";

export default function Auth({ navigation }) {
  const { signIn } = useUserActions();
  const [isLogin, setIsLogin] = useState(false);
  const [isEntity, setIsEntity] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Header navigation={navigation} />

      <View style={styles.container}>
        <Text style={styles.title}>{isLogin ? "Acceso" : "Rexístrate"}</Text>
        {isLogin ? (
          <>
            <TextInput
              style={styles.signUpDiv}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email"
            />
            <TextInput
              style={styles.signUpDiv}
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeholder="contrasinal"
            />
            <Text
              style={[
                styles.signUpDiv,
                { backgroundColor: "#d19c1d", color: "#fff", borderWidth: 0 },
              ]}
              onPress={() => signIn()}
            >
              Entra
            </Text>
          </>
        ) : (
          <>
            <View style={styles.isEntityContainer}>
              <Text
                style={[
                  styles.isEntityButton,
                  !isEntity ? styles.active : styles.inactive,
                ]}
                onPress={() => setIsEntity(false)}
              >
                Son usuario
              </Text>

              <Text
                style={[
                  styles.isEntityButton,
                  isEntity ? styles.active : styles.inactive,
                ]}
                onPress={() => setIsEntity(true)}
              >
                Son entidade
              </Text>
            </View>
            <TextInput
              style={styles.signUpDiv}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder={isEntity ? "nomee entidade" : "nomee usuario"}
            />
            <TextInput
              style={styles.signUpDiv}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email"
            />
            <TextInput
              style={styles.signUpDiv}
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeholder="contrasinal"
            />
            <Text
              style={[
                styles.signUpDiv,
                { backgroundColor: "#d19c1d", color: "#fff", borderWidth: 0 },
              ]}
              onPress={() => signIn()}
            >
              Empezar
            </Text>
          </>
        )}
        <Text onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "No tienes cuenta? Crea una"
            : "Ya tienes cuenta? Inicia sesión"}
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
