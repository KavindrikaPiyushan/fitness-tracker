import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers for a clean look
          animation: 'slide_from_right', // Smooth navigation transition
          contentStyle: styles.screenContent, // Consistent screen padding
        }}
      >
        <Stack.Screen
          name="login"
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            title: 'Register',
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff', // Light background color
  },
  screenContent: {
    flex: 1,
    padding: 20, // Add padding for a modern layout
    backgroundColor: '#f0f4ff', // White screen content area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Subtle shadow for a floating effect
  },
});
