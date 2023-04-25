async function getData() {
  try {
    const response = await axios.get(`http://34.64.112.254:5000/api/products`);
    return response.data;
  } catch (error) {
    console.error(`API GET 요청 실패: ${error}`);
    throw error;
  }
}
async function getDirectoryData(params) {
  try {
    const response = await axios.get(
      `http://34.64.112.254:5000/api/products/${params}`
    );
    return response.data;
  } catch (error) {
    console.error(`API GET 요청 실패: ${error}`);
    throw error;
  }
}

async function postData(data) {
  try {
    const response = await axios.post(
      `http://34.64.112.254:5000/api/orders
    `,
      data
    );
    return response.data;
  } catch (error) {
    console.error(`API POST 요청 실패: ${error}`);
    throw error;
  }
}

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
    return response.data;
  } catch (error) {
    console.error(`API POST 요청 실패: ${error}`);
    throw error;
  }
}

async function putApi(url, data) {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    console.error(`API PUT 요청 실패: ${error}`);
    throw error;
  }
}

async function deleteApi(url, params) {
  try {
    const response = await axios.delete(url, { params });
    return response.data;
  } catch (error) {
    console.error(`API DELETE 요청 실패: ${error}`);
    throw error;
  }
}

export {
  getApi,
  postApi,
  putApi,
  deleteApi,
  getData,
  postData,
  getDirectoryData,
};
