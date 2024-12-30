import axios from 'axios';

const BASE_URL = 'https://exercisedb-api.vercel.app/api/v1';

export const fetchExercises = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/exercises`);
    return response.data.data.exercises;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error;
  }
};