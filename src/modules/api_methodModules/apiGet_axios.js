const axios = require('axios');

const getAPI = async (url, params = {}, headers = {}) => {
  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error(`API GET 요청 실패: ${error}`);
    throw error;
  }
};

module.exports = getAPI;
