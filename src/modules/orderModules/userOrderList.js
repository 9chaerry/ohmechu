import { getApi } from '/src/modules/api_methodModules/Api.js';
import { goodsListTemplate } from '/src/modules/orderModules/goodsListTemplate.js';

async function orderListTemplate(id) {
  const apiUrl = '/src/dummyProducts.json';
  const params = { id };

  try {
    const data = await getApi(apiUrl, params);

    let cartData = JSON.parse(window.localStorage.getItem('cart'));
    const amountData = cartData.find((item) => item.id === id);

    return goodsListTemplate(data, amountData);
  } catch (error) {
    console.error(`상품을 받아오는데 실패하였습니다: ${error}`);
    throw error;
  }
}

export { orderListTemplate };
