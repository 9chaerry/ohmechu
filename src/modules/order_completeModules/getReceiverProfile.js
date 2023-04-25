import { getApi } from '/src/modules/api_methodModules/Api.js';

async function getReceiverProfile() {
  //   const receiverName = document.getElementById('receiver-name');
  //   const receiverPhoneNumber = document.getElementById('receiver-phone-number');
  //   const receiverPostcode = document.getElementById('receiver-postcode');
  //   const receiverRoadAddress = document.getElementById('receiver-roadAddress');
  //   const receiverDetailAddress = document.getElementById('receiver-detailAddress');
  //   const receiverExtraAddress = document.getElementById('receiver-extraAddress');
  //   const receiverRequest = document.getElementById('receiver-request');

  const receiver = {
    name: document.getElementById('receiver-name'),
    phoneNumber: document.getElementById('receiver-phone-number'),
    postcode: document.getElementById('receiver-postcode'),
    roadAddress: document.getElementById('receiver-roadAddress'),
    detailAddress: document.getElementById('receiver-detailAddress'),
    extraAddress: document.getElementById('receiver-extraAddress'),
    request: document.getElementById('receiver-request'),
  };

  try {
    const order = JSON.parse(window.localStorage.getItem('order'));
    const params = { _id: order.id };

    const response = await getApi('백엔드 get할 경로', params);
    const data = response.data;

    receiver.name.innerText = `${data.userName}`;
    receiver.phoneNumber.innerText = `${data.phoneNumber}`;
    receiver.postcode.innerText = `${data.address.우편번호}`;
    receiver.roadAddress.innerText = `${data.address.도로명주소}`;
    receiver.detailAddress.innerText = `${data.address.상세주소}`;
    receiver.extraAddress.innerText = `${data.address.참고사항}`;
    receiver.request.innerText = `${data.requirement}`;
  } catch (error) {
    console.error(`데이터를 가져오는데 실패했습니다: ${error}`);
  }
}

export { getReceiverProfile };