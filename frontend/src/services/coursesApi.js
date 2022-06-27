import axios from 'axios';

const getAllCourses = async () => {
  try {
    const response = await axios.get('http://localhost:3000/courses');
    return { error: null, response: response.data };
  } catch (error) {
    return { error, response: null };
  }
};

const storeCourses = async ({ title, content, thumbnail, roadmapId }) => {
  try {
    const response = await axios.post('http://localhost:3000/courses', {
      title: title,
      thumbnail: thumbnail,
      content: content,
      roadmapId: roadmapId,
    });
    return { error: null, response: response.data };
  } catch (error) {
    return { error, response: null };
  }
};

export { getAllCourses, storeCourses };
