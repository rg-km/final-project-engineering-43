import axios from 'axios';

const getAllRoadmap = async () => {
  try {
    const response = await axios.get('http://localhost:3000/roadmap');
    return { error: null, response: response.data };
  } catch (error) {
    return { error, response: null };
  }
};

export { getAllRoadmap };
