import * as Api from './Api.js';

const port = '5000';
const domain = `http://34.64.112.254:${port}/api`;

/**
 * 상품 관련 Fetcher
 */

// 모든 상품 가져오기
export async function getAllProducts() {
  return await Api.get(domain, 'products');
}

// id를 통한 하나의 상품 조회
export async function getIdProduct(productId) {
  return await Api.get(domain, `products/${productId}`);
}

// 카테고리별 상품 조회
export async function getCategoryProducts(category) {
  return await Api.get(domain, `products?sort=${category}`);
}

// 상품 추가
export async function postProduct(data) {
  return await Api.post(domain, `products/admin`, data);
}

// 상품 삭제
export async function deleteProduct(productId) {
  // 제거된 상품을 response함
  return await Api.delete(domain, `products/${productId}/admin`);
}

// 상품 수정
export async function putProduct(productId, updateField, contents) {
  // 수정 데이터
  const data = {};
  data[updateField] = contents;

  // 수정 내용을 response함
  return await Api.put(
    domain,
    `products/${productId}/admin`,
    JSON.stringify(data)
  );
}

/**
 * 주문 관련 Fetcher
 */

// 모든 주문 가져오기
export async function getAllOrders() {
  return await Api.get(domain, 'orders');
}

// id를 통한 하나의 주문 조회
export async function getIdOrder(id) {
  return await Api.get(domain, `orders/${id}`);
}

// 주문 정보 저장
export async function postOrder(data) {
  return await Api.post(domain, `orders`, data);
}

// 배송지 수정
export async function putOrder(id, data) {
  return await Api.delete(domain, `orders/${id}`, data);
}

// 주문 취소
export async function deleteOrder(id) {
  // 제거된 상품을 response함
  return await Api.delete(domain, `orders/${id}`);
}

// 배송 상태 수정
export async function patchOrder(id, state) {
  // 수정 데이터
  const data = {
    orderState: state,
  };

  // 수정 내용을 response함
  return await Api.put(domain, `orders/${id}`, JSON.stringify(data));
}
