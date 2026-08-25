import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.seccionPrincipal}>
        <Text style={styles.titulo}>Bienvenido a mi App</Text>
        <Text style={styles.subtitulo}>Texto para subtitulos.... </Text>
        
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}}
          style={styles.imagen}  
        />
        
        <Text style={styles.descripcion}>
          Esta es una interfaz básica construida con View, Text e Image en React Native.
        </Text>
      </View>

      <View style={styles.seccionExtra}>
        <Text style={styles.textoExtra}>Parte extra de la sección</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoFooter}>Pie de pagina para texto</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderWidth: 4,
    borderColor: '#1f3c88',
    borderRadius: 16,
    margin: 10,
  },
  seccionPrincipal: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1f3c88",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#5c6bc0",
    marginBottom: 20,
    textAlign: "center",
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#1f3c88',
  },
  descripcion: {
    fontSize: 15,
    color: "#4a5568",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  seccionExtra: {
    backgroundColor: '#e2e8f0',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoExtra: {
    fontSize: 14,
    color: '#2d3748',
    fontStyle: 'italic',
  },
  footer: {
    marginBottom: 10,
  },
  textoFooter: {
    fontSize: 12,
    color: '#718096',
    textAlign: "center",
  },
});