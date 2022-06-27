import axios from 'axios';

const getAllRoadmap = async () => {
  try {
    const response = await axios.get('http://localhost:3000/roadmap');
    return { error: null, response: response.data };
  } catch (error) {
    return { error, response: null };
  }
};

const storeRoadmap = async ({ title, description, thumbnail }) => {
  try {
    const response = await axios.post('http://localhost:3000/roadmap', {
      title: title,
      thumbnail: thumbnail,
      description: description,
    });
    return { error: null, response: response.data };
  } catch (error) {
    return { error, response: null };
  }
};

export { getAllRoadmap, storeRoadmap };
