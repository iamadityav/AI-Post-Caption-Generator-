import axios from 'axios';

const BASE_URL = 'https://your-ai-api-endpoint.com'; // replace this with your actual endpoint

// Upload image and get AI-generated captions + hashtags
export const generateCaptionAndHashtags = async (imageBase64) => {
  try {
    const response = await axios.post(`${BASE_URL}/generate`, {
      image: imageBase64,
    });

    return response.data; // expecting { captions: [...], hashtags: [...] }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
