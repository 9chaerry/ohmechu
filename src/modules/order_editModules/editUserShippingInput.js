import * as Fetcher from '/src/modules/api_methodModules/Fetcher.js';
import { getOrderedId } from '/src/modules/order_completeModules/getOrderId.js';

async function sendShippingData(e) {
  e.stopPropagation();
  const edit_receiver_name = document.getElementById('receiver-name').value;
  const edit_receiver_phone_number = document.getElementById(
    'receiver-phone-number'
  ).value;
  const edit_receiver_postcode =
    document.getElementById('receiver-postcode').value;
  const edit_receiver_roadAddress = document.getElementById(
    'receiver-roadAddress'
  ).value;
  const edit_receiver_detailAddress = document.getElementById(
    'receiver-detailAddress'
  ).value;
  const edit_receiver_extraAddress = document.getElementById(
    'receiver-extraAddress'
  ).value;
  const edit_receiver_requirement =
    document.getElementById('receiver-request').value;

  const orderedId = getOrderedId();
  //   const orderedData = await Fetcher.getIdOrder(orderedId);
  //   //response를 작성해야하나?
  //   const orderedGoodsData = orderedData.orderDetail;

  //   const order_detail = orderedGoodsData.map((item) => ({
  //     id: item.id,
  //     amount: item.amount,
  //   }));

  const edit_receiver_address = {
    우편번호: edit_receiver_postcode,
    도로명주소: edit_receiver_roadAddress,
    상세주소: edit_receiver_detailAddress,
    참고사항: edit_receiver_extraAddress,
  };
  const data = {
    // orderDetail: order_detail,
    userName: edit_receiver_name,
    phoneNumber: edit_receiver_phone_number,
    address: edit_receiver_address,
    requirement: edit_receiver_requirement,
  };
  try {
    const response = await Fetcher.putOrder(orderedId, data);
    if (response.modifiedCount) {
      alert('주문 수정이 완료되었습니다.');
      window.location.href = '/src/pages/order_list/order_list.html';
    } else {
      console.error('주문했던 ID를 가져올 수 없습니다.', response);
      alert('주문 수정이 취소되었습니다.');
    }
  } catch (error) {
    console.error('전송이 실패하였습니다.', error);
    alert('주문 수정이 취소되었습니다.');
  }
}

export { sendShippingData };
