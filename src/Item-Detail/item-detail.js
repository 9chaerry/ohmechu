// 상세페이지 내 장바구니 담기 클릭 시 장바구니에 담기 & 원할 시 장바구니 페이지 이동

const itemName = document.querySelector('.name');
const subDescription = document.querySelector('.sub-description');
const serving = document.querySelector('.serving');
const cookingTime = document.querySelector('.cooking-time');
const tasty = document.querySelector('.tasty');
const addCartBtn = document.querySelector('.button');

// async function getItem(id) {
//   await fetch('./items.json')
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.id === id) {
//         console.log(data);
//       }
//     });
// }

async function addCart() {
  const data = item;

  await fetch('로컬스토리지', {
    method: 'POST',
    // mode: "cors",
    // cache: "no-cache",
    // credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
}

addCartBtn.addEventListener('click', () => {
  console.log('addCart');
});
