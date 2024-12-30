import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <RegisterForm onSubmit={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
