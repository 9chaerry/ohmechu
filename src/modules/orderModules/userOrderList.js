import { getApi } from '/src/modules/api_methodModules/Api.js';
import { goodsListTemplate } from '/src/modules/orderModules/goodsListTemplate.js';

async function orderListTemplate(id) {
  const apiUrl = '/src/dummyProducts.json';

  let cartData = JSON.parse(window.localStorage.getItem('cart'));
  const orderList = document.getElementById('order-list');

  if (cartData) {
    const list = [];
    for (const item of cartData) {
      // item.id와 일치하는 수량
      const amountData = cartData.find((data) => data.id === item.id);
      try {
        const params = { id: item.id };
        const data = await getApi(apiUrl, params);
        list.push(goodsListTemplate(data, amountData));
      } catch (error) {
        console.error(`상품을 받아오는데 실패하였습니다: ${error}`);
        throw error;
      }
    }
    orderList.innerHTML = list.join('');
  }
}

export { orderListTemplate };
