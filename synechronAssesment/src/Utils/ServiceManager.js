import axios from 'axios';

const API_KEY = '682fb3f4eb5a8d352223da071bd57f9d';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODJmYjNmNGViNWE4ZDM1MjIyM2RhMDcxYmQ1N2Y5ZCIsInN1YiI6IjYzZDBjNjQxOWU0NTg2MDA4NWNkNDZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UT-YO3dEKKAqQDGIxZX8UGYR4kwDEOo2Hbd9E-jxVCc',
  },
});

export const getAPI = (onSuccess, onfailure) => {
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.headers.common.Authorization =
    'Bearer ' +
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODJmYjNmNGViNWE4ZDM1MjIyM2RhMDcxYmQ1N2Y5ZCIsInN1YiI6IjYzZDBjNjQxOWU0NTg2MDA4NWNkNDZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UT-YO3dEKKAqQDGIxZX8UGYR4kwDEOo2Hbd9E-jxVCc';
  instance
    .get('movie/popular?api_key=' + API_KEY + '&language=en-US&page=1')
    .then(response => {
      console.log('RESPONSE :::::: ', response);
      onSuccess(response);
    })
    .catch(error => {
      onfailure(error);
    });
};
