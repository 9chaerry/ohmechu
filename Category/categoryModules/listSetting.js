const productBox = document.getElementById('productBox');

/**
 * list의 아이템들의 전반적인 세팅을 담당합니다.
 */
function listSetting() {
  // !!! 더미 url이 들어가있음! 추후 변경 필요 !!!
  listGeneration('../src/dummyProducts.json');
}

/**
 * 상품 리스트 Url
 * @param {상품 리스트 Url을 받아와 fetch후 list를 작성합니다.} url
 */
function listGeneration(url) {
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      for (let data of datas) {
        productBox.innerHTML += listTemplate(
          data.img_url,
          data.name,
          data.price,
          data?.sub_description
        );
      }
    });
}

/**
 * li를 인자에 맞게 반환합니다.
 * @param {Url} imgUrl
 * @param {String} name
 * @param {String} price
 * @param {String[]} subDescription
 * @returns
 */
function listTemplate(imgUrl, name, price, subDescription = '　') {
  return `<li class="w-1/4 h-1/4 p-3 my-3">
            <img
              class="w-full object-cover object-center cursor-pointer"
              src="${imgUrl}"
            />
            <div class="relative p-1">
              <div
                class="absolute left-[98%] top-2/4 -translate-x-full -translate-y-2/4 z-10 cursor-pointer"
              >
                <svg
                  class="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="7 10 12 4 17 10" />
                  <path
                    d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"
                  />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <a href="" class="block mt-2 text-left text-xl font-bold"
                >${name}</a
              >
              <div class="text-left text-sm font-light">${subDescription}</div>
              <div class="mt-3 text-left text-lg">${price}</div>
            </div>
          </li>`;
}

export { listSetting };
