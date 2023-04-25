import { getDummyOrders } from '/src/modules/api_methodModules/Fetcher_dummy.js';

// async function getOrderId() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const orderId = urlParams.get('order');

//   document.getElementById('order-id').innerText = orderId;
//   if (orderId) {
//     try {
//       const response = await getDummyOrders(orderId); // 백엔드 API 엔드포인트에 맞게 수정
//       // const orderIdElement = document.getElementById('order-id');
//       // if (orderIdElement) {
//       //   orderIdElement.textContent = response.data._id;
//       // }
//     } catch (error) {
//       console.error('주문 정보를 가져올 수 없습니다.', error);
//     }
//   } else {
//     console.error('주문 ID를 가져올 수 없습니다.');
//   }
// }

function showOrderId() {
  try {
    const orderId = getOrderedId();
    const orderIdElement = document.getElementById('order-id');
    orderIdElement.innerText = orderId;
  } catch (error) {
    console.error('주문 ID를 찾을 수 없습니다.', error);
  }
}

function getOrderedId() {
  const searchParams = new URLSearchParams(window.location.search);
  const orderId = searchParams.get('order');
  if (!orderId) {
    throw new Error('주문 ID를 찾을 수 없습니다.');
  }
  return orderId;
}

export { showOrderId };
