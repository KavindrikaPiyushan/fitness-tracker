import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';


import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary';

export default function App() {
 
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const colorScheme = useColorScheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
            },
            headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
            headerTitleStyle: {
              fontFamily: 'Inter_600SemiBold',
            },
            contentStyle: {
              backgroundColor: colorScheme === 'dark' ? '#000000' : '#f5f5f5',
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/login"
            options={{
              headerTitle: 'Login',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/register"
            options={{
              headerTitle: 'Register',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(app)/home"
            options={{
              headerTitle: 'Fitness Exercises',
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="(app)/exercise-details"
            options={{
              headerTitle: 'Exercise Details',
              presentation: 'modal',
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}