import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import RegisterForm from '../../src/components/forms/RegisterForm';
import { useRouter } from 'expo-router';
import useStore from '../../src/store/useStore';

export default function Register() {
  const router = useRouter();
  const setUser = useStore((state) => state.setUser);

  const handleRegister = (userData) => {
    setUser(userData);
    router.replace('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.formWrapper}>
          <RegisterForm onSubmit={handleRegister} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff', // Soft background color
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Centering the content vertically
    paddingHorizontal: 24, // Adding horizontal padding for better spacing
  },
  formWrapper: {
    backgroundColor: '#FFFFFF', // Form background color
    borderRadius: 20, // Smoother rounded corners
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 }, // Increased shadow for depth
    shadowOpacity: 0.12, // Slightly reduced opacity for a subtle shadow
    shadowRadius: 12,
    elevation: 5, // For android shadow
    marginHorizontal: 16, // Margin to prevent touching screen edges
  },
});
