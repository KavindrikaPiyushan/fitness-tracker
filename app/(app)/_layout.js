
import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="home" 
        options={{ 
          title: 'Fitness Exercises',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="exercise-details" 
        options={{ 
          title: 'Exercise Details',
          headerShown: true,
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}