import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FloatingCounter = ({ count }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Clicks: {count}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FloatingCounter;