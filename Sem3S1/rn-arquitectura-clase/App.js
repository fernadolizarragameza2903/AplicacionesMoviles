import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PerfilUsuario from "./PerfilUsuario";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PerfilUsuario nombre="Juan Pérez" edad={28} />
      <PerfilUsuario nombre="Ana López" edad={34} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});