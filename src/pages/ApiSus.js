import axios from 'axios';

const ApiSus = axios.create(
  {
    baseURL: 'https://covid-api.mmediagroup.fr/v1/cases'
  }
)
export default ApiSus;