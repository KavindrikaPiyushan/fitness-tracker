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
  }
});
