function goodsListTemplate(data, amountData) {
  const goodsList = document.createElement('li');
  goodsList.classList.add = `pb-6 mb-6 border-solid border-b border-gray flex items-center justify-between flex-no-wrap
    `;
  goodsList.innerHTML = `<div class="flex items-center">
    <img
      src="${data.img_url}"
      class="inline-block w-[150px] h-[150px]"
    />
    <div class="inline-block ml-6">
      <p class="flex-col">
        <span class="block text-left text-[17px] font-medium"
          >${data.name}</span
        ><span
          span
          class="block text-left text-[13px] text-neutral-500"
          >${data.sub_description.join(' / ')}</span
        >
      </p>
    </div>
  </div>

  <div class="flex justify-between items-center w-[360px]">

    <p>
      <span class="text-xl font-semibold">${amountData.amount}</span
      ><span class="text-xl font-semibold ml-1"> 개</span>
    </p>

    <p>
      <span class="text-xl font-semibold">${
        data.price * amountData.amount
      }</span
      ><span class="text-xl font-semibold mx-2"> 원</span>
    </p>
  </div>`;
  return goodsList;
}
