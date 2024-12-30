import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import useStore from '../store/useStore';
import { Ionicons } from '@expo/vector-icons';  // To add an info icon

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
        <View style={styles.tagContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{exercise.targetMuscles[0]}</Text>
          </View>
          <Ionicons name="information-circle-outline" size={20} color="#FF6F61" style={styles.icon} />
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
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 10,
    overflow: 'hidden',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    backgroundColor: 'linear-gradient(45deg, #764ba2, #764ba2)', // Gradient background
  },
  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#764ba2', // Vibrant color for tags
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 'auto',
    color:'#764ba2' // Align to the right of the tag
  },
  description: {
    color: '#555',
    fontSize: 15,
    lineHeight: 22,
    fontStyle: 'italic',
  },
});

export default ExerciseCard;
