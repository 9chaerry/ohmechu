import { getApi } from '/src/modules/api_methodModules/Api.js';
async function priceSetting() {
  // !!! 임시 API 주소임 !!!
  const purchasePrice = document.getElementById('purchasePrice');
  const deliveryPrice = document.getElementById('deliveryPrice');
  const totalPrice = document.getElementById('totalPrice');

  const datas = await getApi('/src/dummyProducts.json');

  let cart = window.localStorage.getItem('cart');
  cart = cart ? JSON.parse(cart) : [];

  let purchasePriceCount = 0;

  for (let item of cart) {
    const product = datas.find((data) => data._id === item.id);
    purchasePriceCount += Number(product.price) * item.amount;
  }

  purchasePrice.innerText = purchasePriceCount;
  deliveryPrice.innerText = DELIVERY_PRICE;
  totalPrice.innerText =
    Number(purchasePrice.innerText) + Number(deliveryPrice.innerText);
}
export { priceSetting };
