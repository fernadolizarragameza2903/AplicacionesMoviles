import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarRegistro = () => {
    if (nombre.trim() === '') {
      setMensaje('Por favor, ingrese su nombre.');
      return;
    }
    setMensaje(`Hola, ${nombre}! Registro exitoso.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro básico</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Button title="Enviar" onPress={manejarRegistro} />

      {mensaje !== '' && <Text style={styles.resultado}>{mensaje}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#2e7d32',
  },
});