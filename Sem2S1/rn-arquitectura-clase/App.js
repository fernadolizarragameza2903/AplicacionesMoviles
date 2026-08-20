/*
Demo 1 – Hola RN (View + Text)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arquitectura de React Native</Text>
      <Text style={styles.subtitle}>Componente raíz: App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0EA5E9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 8,
  },
});
*/


/*
Demo 2 – Tarjeta de perfil”: Image (local y remota) + layout con Flexbox

import { SafeAreaView, StyleSheet, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ProfileCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F1F5F9' },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
*/

/*
Demo 3 – “Grid flexible” : Diferencias Claves con CSS

import GridDemo from './src/screens/GridDemo';
export default function App() { return <GridDemo />; }
*/

import StyleDemo from './src/screens/StyleDemo';
export default function App() { return <StyleDemo />; }