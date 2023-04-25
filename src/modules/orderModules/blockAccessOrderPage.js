// async function blockAccess(e) {
//   const cartData = JSON.parse(window.localStorage.getItem('cart'));
//   if (!cartData || cartData.length === 0) {
//     alert('결제하려는 상품이 없습니다.');
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//   } else {
//     const orderAmount = document.getElementById('order-amount');
//     orderAmount.innerText = `${cartData.length}`;
//   }
// }

function blockAccess(e) {
  const cart = localStorage.getItem('cart'); // 로컬스토리지에서 cart 항목 가져오기
  if (!cartData || cartData.length === 0) {
    // cart 항목이 존재할 경우, 경고창 띄우고 페이지 이동 막기
    e.preventDefault();
    e.returnValue = ''; // Chrome 브라우저에서는 returnValue를 설정해주어야 경고창이 뜸
  }
}

export { blockAccess };
