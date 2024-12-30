import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ExerciseCard from '../../src/components/ExerciseCard';
import { fetchExercises } from '../../src/services/api';
import useStore from '../../src/store/useStore';
import FloatingCounter from '../../src/components/FloatingCounter';

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const clickCount = useStore((state) => state.clickCount);

  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (error) {
        console.error('Error loading exercises:', error);
      }
    };
    loadExercises();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Fitness Exercises</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
        keyExtractor={(item) => item.exerciseId}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
      <FloatingCounter count={clickCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f0fa', // Subtle pastel background for a clean look
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: '800', // Extra bold for a strong visual hierarchy
    color: '#764ba2', // Signature purple accent
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5, // Slightly spaced out for elegance
    textShadowColor: '#D1C4E9', // Light shadow effect for a polished look
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  flatListContainer: {
    paddingBottom: 140, // Extra space to comfortably fit the FloatingCounter
    paddingTop: 10,
  },
});
