import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import useStore from '../store/useStore';

const ExerciseCard = ({ exercise, onPress }) => {
  const incrementCount = useStore((state) => state.incrementCount);

  const handlePress = () => {
    incrementCount();
    onPress && onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image 
        source={{ uri: exercise.gifUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{exercise.name}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{exercise.targetMuscles[0]}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {exercise.instructions[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  tagText: {
    color: '#666',
    fontSize: 12,
  },
  description: {
    color: '#666',
    fontSize: 14,
  },
});

export default ExerciseCard;