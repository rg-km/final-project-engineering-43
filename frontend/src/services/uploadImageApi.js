const uploadImage = async (imageFile) => {
  const data = new FormData();
  data.append('file', imageFile);
  data.append('upload_preset', 't3vh2ed7');
  data.append('cloud_name', 'dmovayme8');
  try {
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dmovayme8/image/upload',
      { body: data, method: 'post' }
    );
    const result = await response.json();
    return { error: null, url: result.url };
  } catch (e) {
    return { error: e, url: null };
  }
};

export default uploadImage;
