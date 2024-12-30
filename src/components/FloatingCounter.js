import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FloatingCounter = ({ count }) => (
  <LinearGradient
    colors={['#764ba2', '#764ba8']}
    style={styles.container}
    start={[0, 0]}
    end={[1, 1]}
  >
    <Text style={styles.text}>Clicks: {count}</Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
  },
});

export default FloatingCounter;