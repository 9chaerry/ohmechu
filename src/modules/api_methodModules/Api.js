export const DUMMY_URL = '/src/dummyProducts.json';
export const ALL_PRODUCT_URL = 'http://34.64.112.254:5000/api/products';

async function getApi(url, params = {}, headers = {}) {
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
}

async function postApi(url, data) {
  try {
    const response = await axios.post(url, data);
    return JSON.parse(response.data);
  } catch (error) {
    console.error(`API POST 요청 실패: ${error}`);
    throw error;
  }
}

async function putApi(url, data) {
  try {
    const response = await axios.put(url, data);
    return JSON.parse(response.data);
  } catch (error) {
    console.error(`API PUT 요청 실패: ${error}`);
    throw error;
  }
}

async function deleteApi(url, params) {
  try {
    const response = await axios.delete(url, { params });
    return JSON.parse(response.data);
  } catch (error) {
    console.error(`API DELETE 요청 실패: ${error}`);
    throw error;
  }
}

export { getApi, postApi, putApi, deleteApi };
