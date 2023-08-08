import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_vWzEWlXkdK2qDIRBaiDP7PO8HxrqAx4F6rIQpu8vluwe2KFY2CSXTXtOUjFRX6v8';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}
