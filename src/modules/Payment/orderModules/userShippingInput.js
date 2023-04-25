import { postApi, postData } from '/src/modules/api_methodModules/Api.js';

async function sendReceiverProfile(e) {
  e.stopPropagation();
  const user_name = document.getElementById('userName').value;
  const phone_number = document.getElementById('userPhonenum').value;
  const postcode = document.getElementById('postcode').value;
  const roadAddress = document.getElementById('roadAddress').value;
  const detailAddress = document.getElementById('detailAddress').value;
  const extraAddress = document.getElementById('extraAddress').value;
  const user_requirement = document.getElementById('userRequest').value;

  const cart = JSON.parse(window.localStorage.getItem('cart'));

  const purchase_amount = document.getElementById('purchasePrice').innerText;
  const delivery_fee = document.getElementById('delivery-price').innerText;

  const order_detail = cart.map((item) => ({
    id: item.id,
    amount: item.amount,
  }));

  const user_address = {
    우편번호: postcode,
    도로명주소: roadAddress,
    상세주소: detailAddress,
    참고사항: extraAddress,
  };
  const data = {
    orderDetail: order_detail,
    userName: user_name,
    phoneNumber: phone_number,
    address: user_address,
    requirement: user_requirement,
    purchaseAmount: purchase_amount,
    deliveryFee: delivery_fee,
  };
  try {
    const response = await postData(data);
    console.log('백엔드로 전송 완료', response);

    const orderId = response._id;
    window.localStorage.setItem('order', orderId);
    window.localStorage.removeItem('cart');
    window.location.href = '/src/pages/order_complete/order_complete.html';
  } catch (error) {
    console.error('백엔드로 전송 실패', error);
    alert('주문이 취소되었습니다.');
  }
}
export { sendReceiverProfile };
