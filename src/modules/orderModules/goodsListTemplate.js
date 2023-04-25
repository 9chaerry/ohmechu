function goodsListTemplate(data, amountData) {
  const goodsList = document.createElement('tr');
  goodsList.classList.add = 'flex justify-between';
  goodsList.innerHTML = `
  <td class="flex-shrink-0 w-[25%]">
        <img src="${data.img_url}" class="w-[150px] h-[150px]" />
      </td>
      <td class="flex-col flex-grow">
        <span class="block text-left text-[17px] font-medium">${
          data.name
        }</span>
        <span class="block text-left text-[13px] text-neutral-500">${data.sub_description.join(
          ' / '
        )}</span>
      </td>
      <td class="flex-shrink-0 w-[50%]">
        <span class="text-xl font-semibold">${amountData.amount}</span>
        <span class="text-xl font-semibold ml-1"> 개</span>
      </td>
      <td class="flex-shrink-0 w-[50%]">
        <span class="text-xl font-semibold w-[50%]">${
          data.price * amountData.amount
        }</span>
        <span class="text-xl font-semibold mx-2"> 원</span>
      </td>`;
  return goodsList;
}
export { goodsListTemplate };
