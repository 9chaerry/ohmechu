const cartInButtons = document.getElementsByClassName('cart-in-button');
const AMOUNT_INIT = 1;

/**
 * 장바구니 버튼에 대한 이벤트를 추가합니다.
 */
function cartSetting() {
  for (let cart of cartInButtons) {
    cart.addEventListener('click', cartIn);
  }
}

/**
 * 장바구니 버튼의 id값(data._id)과 수량을 localStorage에 저장합니다.
 * @param {이벤트 객체} e
 */
function cartIn(e) {
  // 기본 액션을 제거합니다.
  e.preventDefault();
  e.stopPropagation();

  // 장바구니 애니메이션을 작동시킵니다.
  cartInAnimation(this);

  // 버튼에서 id를 받아옵니다.
  const _id = this.id;
  const product = {
    _id: _id,
    amount: AMOUNT_INIT,
  };
  // 이미 존재하는 LocalStorage의 값을 받아와서 세팅합니다.
  const originCartArray = window.localStorage.getItem('cart');
  const originCart = originCartArray && JSON.parse(originCartArray);

  if (originCart !== null)
    for (let i = 0; i < originCart.length; i++) {
      const cartProductId = originCart[i]._id;
      if (cartProductId === product._id) {
        product.amount = originCart[i].amount + 1;
        originCart.splice(i, 1);
      }
    }

  // 원래 cart의 값이 없었을 때, 배열 []로 초기화합니다.
  const cart = originCart ?? [];
  cart.push(product);

  // JSON 형태로 localStorage에 넘겨줍니다.
  window.localStorage.setItem('cart', JSON.stringify(cart));
}

function cartInAnimation(svg) {
  svg.classList.add('animate-[cartIn_0.5s_ease-in-out_1]');
  setTimeout(
    () => svg.classList.remove('animate-[cartIn_0.5s_ease-in-out_1]'),
    500
  );
}

export { cartSetting };
