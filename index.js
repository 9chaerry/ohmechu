// import { slideSetting } from './List-Slider/listSlider.js';
// import가 안되서 우선 index.js에 작성

window.onload = () => {
  slideSetting();
};

const listLeftArrow = document.querySelector('#list-left-arrow');
const listRightArrow = document.querySelector('#list-left-arrow');
const listSlideWrap = document.querySelector('#list-slides');

listLeftArrow.addEventListener('click', listLeftSlide);
listRightArrow.addEventListener('click', listLeftSlide);

/**
 * 서버에서 상품 정보를 받아오고, 슬라이드를 초기화합니다.
 */
function slideSetting() {
  // !!! 더미 JSON 데이터가 들어가있음! 추후 변경 필요 !!!
  // 서버에서 JSON 형식의 데이터를 받아옵니다.
  fetch('../src/dummyProducts.json')
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      for (let data of datas) {
        // 슬라이드 내부 요소
        const li = document.createElement('li');
        const imgDiv = document.createElement('div');
        const textDiv = document.createElement('div');
        const img = document.createElement('img');
        const a = document.createElement('a');
        const p = document.createElement('p');

        // 요소 클래스 설정
        li.classList.add('list-slide');
        imgDiv.classList.add('list-slide-image-box');
        img.classList.add('list-slide-image');
        a.classList.add('list-slide-name');
        p.classList.add('list-slide-price');

        // !!! 더미 데이터 속성이 들어가있음. 추후 변경 필요 !!!
        // 슬라이드에 데이터 삽입
        img.src = data.image;
        a.innerText = data.name;
        p.innerText = data.price;

        // 각 요소 합치기
        textDiv.appendChild(a);
        textDiv.appendChild(p);
        imgDiv.appendChild(img);
        li.appendChild(imgDiv);
        li.appendChild(textDiv);

        // listSlideWrap에 위에서 만든 슬라이드 추가
        listSlideWrap.appendChild(li);
      }
    });
}

function listLeftSlide(e) {
  e.preventDefault();
  e.stopPropagation();
}

function listRightSlide(e) {
  e.preventDefault();
  e.stopPropagation();
}
