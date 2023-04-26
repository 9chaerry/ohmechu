async function request({ endpoint, method, params = '', data = {} }) {
  const apiUrl = params ? `${endpoint}/${params}` : endpoint;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  };

  try {
    let response;
    if (method === 'GET') {
      response = await axios.get(apiUrl, { headers });
    } else if (method === 'POST') {
      response = await axios.post(apiUrl, data, { headers });
    } else if (method === 'PATCH') {
      response = await axios.patch(apiUrl, data, { headers });
    } else if (method === 'PUT') {
      response = await axios.put(apiUrl, data, { headers });
    } else if (method === 'DELETE') {
      response = await axios.delete(apiUrl, { headers, data });
    } else {
      throw new Error('잘못된 메소드 접근입니다.');
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      const { reason } = error.response.data;
      throw new Error(reason);
    } else {
      throw new Error('Failed to make request');
    }
  }
}

async function get(endpoint, params = '') {
  return await request({ endpoint, method: 'GET', params });
}

async function post(endpoint, params = '', data) {
  return await request({ endpoint, method: 'POST', params, data });
}

async function put(endpoint, params = '', data) {
  return await request({ endpoint, method: 'PUT', params, data });
}

async function patch(endpoint, params = '', data) {
  return await request({ endpoint, method: 'PATCH', params, data });
}

async function del(endpoint, params = '', data = {}) {
  return await request({ endpoint, method: 'DELETE', params, data });
}

export { get, post, put, patch, del as delete };

/*
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

export { getApi, postApi, putApi, deleteApi };
*/
