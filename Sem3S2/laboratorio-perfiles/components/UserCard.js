import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function UserCard({ name, age, photo, role, isOnline, cardWidth }) {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <View style={styles.imageContainer}>
        <Image 
          source={typeof photo === 'string' ? { uri: photo } : photo} 
          style={styles.image} 
          resizeMode="cover" 
        />
        {isOnline && <View style={styles.onlineBadge} />}
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {name} <Text style={styles.age}>({age} años)</Text>
        </Text>

        {role && <Text style={styles.role} numberOfLines={1} ellipsizeMode="tail">{role}</Text>}
      </View>
    </View>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  role: PropTypes.string,
  isOnline: PropTypes.bool,
  cardWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  onlineBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  content: {
    padding: 12,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
  },
  age: {
    fontSize: 14,
    color: '#16A34A',
    fontWeight: '600',
  },
  role: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
});