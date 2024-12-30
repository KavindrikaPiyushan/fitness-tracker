import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExerciseDetails() {
  const params = useLocalSearchParams();
  const exercise = JSON.parse(params.exercise);

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: exercise.gifUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{exercise.name}</Text>
        <View style={styles.tagContainer}>
          {exercise.targetMuscles.map((muscle, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{muscle}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Instructions:</Text>
        {exercise.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {instruction}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Equipment:</Text>
        {exercise.equipments.map((equipment, index) => (
          <Text key={index} style={styles.equipment}>• {equipment}</Text>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 300,
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    tagContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 16,
    },
    tag: {
      backgroundColor: '#e0e0e0',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginRight: 8,
      marginBottom: 8,
    },
    tagText: {
      color: '#666',
      fontSize: 12,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
    },
    instruction: {
      fontSize: 16,
      marginBottom: 8,
      lineHeight: 24,
    },
    equipment: {
      fontSize: 16,
      marginBottom: 4,
    },
  });