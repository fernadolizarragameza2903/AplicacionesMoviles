import React from 'react';
import { StyleSheet, View, ScrollView, useWindowDimensions, Text } from 'react-native';
import UserCard from './components/UserCard';

const USERS = [
  {
    id: '1',
    name: 'Carlos Francisco Silva Fernández',
    age: 25,
    photo: 'https://picsum.photos/300',
    role: 'Desarrollador Mobile Senior',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Ana Gómez',
    age: 22,
    photo: 'https://picsum.photos/301',
    role: 'Diseñadora UX/UI',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Luis Alberto Morales de la Cruz',
    age: 28,
    photo: 'https://picsum.photos/301',
    isOnline: true,
  },
  {
    id: '4',
    name: 'Sofía Lopez',
    age: 24,
    photo: 'https://picsum.photos/300',
    role: 'Backend Developer Lead',
    isOnline: true,
  },
];

export default function App() {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 500;
  const cardWidth = isLargeScreen ? (width - 48) / 2 : width - 32;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Directorio de Usuarios</Text>
      <View style={styles.grid}>
        {USERS.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            photo={user.photo}
            role={user.role}
            isOnline={user.isOnline}
            cardWidth={cardWidth}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 8,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
});