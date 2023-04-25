import { postApi } from '/src/modules/api_methodModules/Api.js';

async function sendReceiverProfile() {
  e.stopPropagation();
  const userName = document.getElementById('userName').value;
  const phoneNumber = document.getElementById('userPhonenum').value;
  const postcode = document.getElementById('postcode').value;
  const roadAddress = document.getElementById('roadAddress').value;
  const detailAddress = document.getElementById('detailAddress').value;
  const extraAddress = document.getElementById('extraAddress').value;
  const requirement = document.getElementById('userRequest').value;

  const cart = JSON.parse(window.localStorage.getItem('cart'));

  const purchaseAmount = document.getElementById('purchasePrice').innerText;
  const deliveryFee = document.getElementById('deliveryPrice').innerText;
  const totalAmount = Number(purchaseAmount) + Number(deliveryFee);

  const orderDetail = cart.map((item) => ({
    id: item.id,
    amount: item.amount,
  }));
  const address = {
    우편번호: postcode,
    도로명주소: roadAddress,
    상세주소: detailAddress,
    참고사항: extraAddress,
  };
  const data = {
    orderDetail,
    userName,
    phoneNumber,
    address,
    requirement,
    purchaseAmount,
    deliveryFee,
    totalAmount,
  };
  try {
    const response = await postApi('백엔드 주문자 정보 경로', data);
    console.log('백엔드로 전송 완료', response);
    const orderId = { _id: response._id };
    window.localStorage.setItem('order', JSON.stringify(orderId));
    window.localStorage.removeItem('cart');
    window.location.href = '/src/pages/order_complete/order_complete.html';
  } catch (error) {
    console.error('백엔드로 전송 실패', error);
    alert('주문이 취소되었습니다.');
  }
}
export { sendReceiverProfile };
