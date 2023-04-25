import { getApi, getData } from '/src/modules/api_methodModules/Api.js';

async function getOrderPrice() {
  const orderPrice = {
    purchaseAmount: document.getElementById('purchase-amount'),
    deliveryFee: document.getElementById('delivery-fee'),
    totalAmount: document.getElementById('total-amount'),
  };
  try {
    const order = JSON.parse(window.localStorage.getItem('order'));
    const params = { _id: order.id };

    const response = await getData(order.id);
    const data = response.data;

    orderPrice.purchaseAmount.innerText = `${data.purchaseAmount.toLocaleString(
      'ko-KR'
    )} 원`;
    orderPrice.deliveryFee.innerText = `${data.deliveryFee.toLocaleString(
      'ko-KR'
    )} 원`;
    orderPrice.totalAmount.innerText = `${data.totalAmount.toLocaleString(
      'ko-KR'
    )} 원`;
    window.localStorage.removeItem('order');
  } catch (error) {
    console.error(`데이터를 가져오는데 실패했습니다.: ${error}`);
  }
  const order = JSON.parse(window.localStorage.getItem('order'));
}
export { getOrderPrice };
