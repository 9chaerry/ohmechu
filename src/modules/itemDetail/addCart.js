const addCartBtn = document.getElementById('order-product');

/**
 * DB 형식에 맞게 바꾸기
 * Fetcher 사용
 */

export async function addCart() {
  const itemPath = window.location.pathname;
  const itemId = itemPath.split('/').pop();

  if (!window.localStorage.getItem('cart')) {
    window.localStorage.setItem(
      'cart',
      JSON.stringify([{ _id: itemId, amount: 1 }])
    );
  } else {
    let cartData = JSON.parse(window.localStorage.getItem('cart'));
    cartData.push({ _id: itemId, amount: 1 });
    window.localStorage.setItem('cart', JSON.stringify(cartData));
  }
}

addCartBtn.addEventListener('click', addCart);
