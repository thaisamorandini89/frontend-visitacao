import axios from "axios";

const BASE_URL = 'http://172.21.200.90:3000';

export const makeRequest = ({method = 'GET', url, data, params}) => {
  return axios ({
      method,
      url: `${BASE_URL}${url}` ,
      data,
      params
  })
}

export default makeRequest
