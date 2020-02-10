import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-stream-server.herokuapp.com'
});
