import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
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
      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseCard exercise={item} />}
        keyExtractor={(item) => item.exerciseId}
      />
      <FloatingCounter count={clickCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});