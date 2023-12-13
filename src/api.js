import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID zg9QlY0_1vJEFXhGEMzbKCqqnfb0qdztYaClZ5FzKc8'
    },
    params: {
      query: term,
    }
  })

  return response.data.results;
};

export default searchImages;