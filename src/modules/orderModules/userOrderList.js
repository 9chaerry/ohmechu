import * as Fetcher from '/src/modules/api_methodModules/Fetcher.js';
import { goodsListTemplate } from '/src/modules/orderModules/goodsListTemplate.js';

async function orderListTemplate(id) {
  let cartData = JSON.parse(window.localStorage.getItem('cart'));
  const orderList = document.getElementById('order-list');
  const orderAmount = document.getElementById('order-amount');
  orderAmount.innerText = `${cartData.length}`;
  if (cartData) {
    const list = [];
    for (const item of cartData.reverse()) {
      // item.id와 일치하는 수량
      const amountData = cartData.find((data) => data.id === item.id);
      try {
        // const params = { id: item.id };
        // 경로 수정 필수
        const data = await Fetcher.getIdProduct(item.id);
        let listItem = goodsListTemplate(data, amountData);
        list.push(listItem);
      } catch (error) {
        console.error(`상품을 받아오는데 실패하였습니다: ${error}`);
        throw error;
      }
    }
    orderList.innerHTML = ''; // 초기화!!!
    for (const orderItem of list) {
      orderList.appendChild(orderItem);
    }
  }
}

export { orderListTemplate };
