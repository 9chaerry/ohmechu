const dummyProducts = '/src/dummyProducts.json';
const dummyOrders = '/src/dummyOrders.json';

// GET 메소드 예시
export async function getDummyProducts(productId) {
  try {
    const response = await axios.get(dummyProducts);
    const products = response.data;
    const filteredProduct = products.find(
      (product) => product._id === productId
    );
    return filteredProduct || null;
  } catch (error) {
    console.error(`API GET 요청 실패: ${error}`);
    throw error;
  }
}

export async function getDummyOrders(productId) {
  try {
    const response = await axios.get(dummyOrders);
    const products = response.data;
    const filteredOrder = products.find((product) => product._id === productId);
    return filteredOrder || null;
  } catch (error) {
    console.error(`API GET 요청 실패: ${error}`);
    throw error;
  }
}

// POST 메소드 예시
export async function postDummyProduct(data) {
  try {
    const response = await axios.post(dummyProducts, data);
    // response.data에 생성된 데이터의 응답이 담겨있습니다.
    return (response.data = {
      orderDetail: [
        {
          id: '상품1 id',
          amount: 1,
        },
        {
          id: '상품2 id',
          amount: 61,
        },
      ],
      userName: '제임스',
      phoneNumber: '01012342222',
      address: {
        우편번호: '우편번호',
        도로명주소: '도로명주소',
        상세주소: '상세주소',
        참고사항: '참고사항',
      },
      requirement: '집 앞에 놓아주세요',
      purchaseAmount: 10000,
      deliveryFee: 3000,
      totalAmount: 13000,
      orderState: '상품 준비 중',
      _id: '644731f2c6006a23cea41393',
      createdAt: '2023-04-25T01:50:42.008Z',
      updatedAt: '2023-04-25T01:50:42.008Z',
      __v: 0,
    });
  } catch (error) {
    throw error;
  }
}

// PATCH 메소드를 통해 상품 정보 업데이트하기
export async function patchDummyProduct(productId, updatedProduct) {
  try {
    const response = await axios.patch(
      `${dummyProducts}/${productId}`,
      updatedProduct
    );
    // response.data에 업데이트된 데이터의 응답이 담겨있습니다.
    console.log(response.data);
    // 필요한 작업 수행
  } catch (error) {
    console.error('PATCH 요청에 실패하였습니다.', error);
  }
}

// DELETE 메소드를 통해 상품 삭제하기
export async function deleteDummyProduct(productId) {
  try {
    const response = await axios.delete(`${dummyProducts}/${productId}`);
    // response.data에 삭제된 데이터의 응답이 담겨있습니다.
    console.log(response.data);
    // 필요한 작업 수행
  } catch (error) {
    console.error('DELETE 요청에 실패하였습니다.', error);
  }
}

// POST 메소드 예시
export async function postDummyOrders(product) {
  try {
    const response = await axios.post(dummyOrders, product);
    // response.data에 생성된 데이터의 응답이 담겨있습니다.
    console.log(response.data);
    // 필요한 작업 수행
  } catch (error) {
    console.error('POST 요청에 실패하였습니다.', error);
  }
}

// PATCH 메소드를 통해 상품 정보 업데이트하기
export async function patchDummyOrders(productId, updatedProduct) {
  try {
    const response = await axios.patch(
      `${dummyOrders}/${productId}`,
      updatedProduct
    );
    // response.data에 업데이트된 데이터의 응답이 담겨있습니다.
    console.log(response.data);
    // 필요한 작업 수행
  } catch (error) {
    console.error('PATCH 요청에 실패하였습니다.', error);
  }
}

// DELETE 메소드를 통해 상품 삭제하기
export async function deleteDummyOrders(productId) {
  try {
    const response = await axios.delete(`${dummyOrders}/${productId}`);
    // response.data에 삭제된 데이터의 응답이 담겨있습니다.
    console.log(response.data);
    // 필요한 작업 수행
  } catch (error) {
    console.error('DELETE 요청에 실패하였습니다.', error);
  }
}
