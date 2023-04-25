async function blockAccess(e) {
  const cartData = JSON.parse(window.localStorage.getItem('cart'));
  if (!cartData || cartData.length === 0) {
    alert('결제하려는 상품이 없습니다.');
    e.preventDefault();
  } else {
    const orderAmount = document.getElementById('order-amount');
    orderAmount.innerText = cartData.length;
  }
}

export { blockAccess };
