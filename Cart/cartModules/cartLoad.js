import { btnsSetting } from './btnsSetting.js';

// 장바구니 없을때 조정
const emptyCartNotice = document.getElementById('empty-cart-notice');
const deleteAndBill = document.getElementById('delete-and-bill');
const orderButtons = document.getElementById('order-buttons');

// 장바구니 있을때 조정
const cartList = document.getElementById('cart-list');
const cartAmount = document.getElementById('cart-amount');

/**
 * _id로 상품의 데이터를 받아오는 API를 통해 리스트와 버튼을 초기화합니다.
 */
function cartLoad() {
  // --- !!! 백엔드 API 연결 필요 !!! ---
  fetch('/src/dummyProducts.json')
    .then((res) => res.json())
    .then((fetchDatas) => {
      let cart = window.localStorage.getItem('cart');
      cart = cart && JSON.parse(cart);

      // 장바구니가 비어있을 경우 알림 표시 후 함수 끝냄
      if (cart === null) {
        emptyCartNotice.classList.remove('hidden');
        deleteAndBill.classList.add('hidden');
        orderButtons.classList.add('hidden');
        return;
      }

      // 장바구니 수량 입력
      cartAmount.innerText = cart ? cart.length : 0;

      // 장바구니의 상품들을 리스트로 출력합니다.
      // reverse()를 주어서 최근 등록 제품부터 뜨도록 합니다.
      for (const product of cart.reverse()) {
        const _id = product._id;
        const amount = product.amount;
        let productData = null;

        // --- !!! productData는 백엔드 API로 간단하게 받아올 것. 수정필요 !!! ---
        for (let data of fetchDatas) if (data._id === _id) productData = data;

        cartList.innerHTML += listTemplate(
          product._id,
          productData.img_url,
          productData.name,
          amount,
          productData.price
        );
      }
      return;
    })
    .then(() => btnsSetting());
}

function listTemplate(_id, img_url, name, amount, price) {
  return `<li
  data-list-product-id="${_id}"
  class="pb-6 mb-6 border-solid border-b border-gray flex items-center justify-between flex-no-wrap"
>
  <!-- 상품 좌측 선택 버튼, 이미지, 제품명 -->
  <div class="flex items-center">
    <input
      type="checkbox"
      name="cartProduct-1"
      id="product-1"
      value="product-1"
      class="appearance-none w-6 h-6 cursor-pointer rounded-full bg-gray-200 focus:outline-none checked:bg-green-600 inline-block mr-7"
      checked
    />
    <img
      src="${img_url}"
      class="inline-block w-[150px] h-[150px]"
    />
    <div class="inline-block ml-6">
      <p class="flex-col">
        <span class="block text-left text-[17px] font-medium"
          >${name}</span
        ><span
          span
          class="block text-left text-[13px] text-neutral-500"
          >임시설명입니다.</span
        >
      </p>
    </div>
  </div>
  <!-- 상품 우측 수량, 금액, 취소버튼 -->
  <div class="flex items-center">
    <!-- 상품 수량 -->
    <div class="custom-number-input w-[110px] mr-28">
      <div
        class="flex flex-row h-10 rounded-lg relative bg-transparent border border-gray"
      >
        <button
          data-action="decrement"
          data-product-id="${_id}"
          class="text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span class="text-2xl">&#45;</span>
        </button>
        <input
          type="number"
          class="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value="${amount}"
        />
        <button
          data-action="increment"
          data-product-id="${_id}"
          class="text-gray-600 hover:text-gray-700 hover:bg-gray-200 h-full w-20 rounded-r cursor-pointer outline-none"
        >
          <span class="text-xl">&#43;</span>
        </button>
      </div>
    </div>
    <!-- 상품 금액 -->
    <span class="text-xl font-semibold">${price}</span
    ><span class="text-xl font-semibold ml-1 mr-12"> 원</span>
    <!-- 상품 취소 -->
    <button
      data-action="cancel"
      data-product-id="${_id}"
      type="button"
      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24 "
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</li>`;
}

export { cartLoad };
