import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="home" 
        options={{ 
          title: 'Fitness Exercises', // Title for the home screen
          headerStyle: {
            backgroundColor: '#764ba2', // Modern background color for the header
            elevation: 4, // Shadow effect for header (Android)
          },
          headerTintColor: '#fff', // White text color for the header title
          headerTitleStyle: {
            fontSize: 20, // Set the title font size
            fontWeight: '600', // Slightly less bold for a more modern look
          },
          headerShown: true,
        }} 
      />
      <Stack.Screen 
        name="exercise-details" 
        options={{ 
          title: 'Exercise Details', // Title for the exercise details screen
          headerStyle: {
            backgroundColor: '#764ba2', // Same header color for consistency
            elevation: 4, // Shadow effect for header (Android)
          },
          headerTintColor: '#fff', // White text color for the title
          headerTitleStyle: {
            fontSize: 20, // Consistent font size for title
            fontWeight: '600', // Slightly less bold
          },
          headerShown: true,
          presentation: 'modal', // Modal presentation style for the detail screen
        }} 
      />
    </Stack>
  );
}
