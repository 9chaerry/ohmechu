const recListLeftArrow = document.querySelector('#rec-list-left-arrow');
const recListRightArrow = document.querySelector('#rec-list-right-arrow');
const recListSlides = document.querySelector('#rec-list-slides');
const newListLeftArrow = document.querySelector('#new-list-left-arrow');
const newListRightArrow = document.querySelector('#new-list-right-arrow');
const newListSlides = document.querySelector('#new-list-slides');

/**
 * 서버에서 상품 정보를 받아오고, 슬라이드를 초기화합니다.
 */
function slideSetting() {
  // !!! 더미 url이 들어가있음! 추후 변경 필요 !!!
  recListGenerator('../src/dummyProducts.json');
  newListGenerator('../src/dummyProducts.json');

  // 슬라이더를 움직일 좌우 버튼에 대한 리스너를 등록합니다.
  recListLeftArrow.addEventListener('click', recListLeftSlide);
  recListRightArrow.addEventListener('click', recListRightSlide);

  newListLeftArrow.addEventListener('click', newListLeftSlide);
  newListRightArrow.addEventListener('click', newListRightSlide);
}

/**
 * GET API를 통해 상품 리스트를 받아와서 슬라이드를 작성합니다.
 * @param {상품 리스트 GET} url
 */
function recListGenerator(url) {
  // 서버에서 JSON 형식의 데이터를 받아옵니다.
  fetch(url)
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
        a.href = '';
        p.innerText = data.price;

        // 각 요소 합치기
        textDiv.appendChild(a);
        textDiv.appendChild(p);
        imgDiv.appendChild(img);
        li.appendChild(imgDiv);
        li.appendChild(textDiv);

        // listSlideWrap에 위에서 만든 슬라이드 추가
        recListSlides.appendChild(li);
      }
    });
  // 슬라이더에 대한 기본 설정을 초기화합니다.
  recListSlides.style.marginLeft = 0 + 'px';
}

function recListLeftSlide(e) {
  e.preventDefault();
  e.stopPropagation();

  recListSlides.style.marginLeft =
    parseInt(recListSlides.style.marginLeft) + 1100 + 'px';
}

function recListRightSlide(e) {
  e.preventDefault();
  e.stopPropagation();

  recListSlides.style.marginLeft =
    parseInt(recListSlides.style.marginLeft) - 1100 + 'px';
}

/**
 * GET API를 통해 상품 리스트를 받아와서 슬라이드를 작성합니다.
 * @param {상품 리스트 GET} url
 */
function newListGenerator(url) {
  // 서버에서 JSON 형식의 데이터를 받아옵니다.
  fetch(url)
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
        a.href = '';
        p.innerText = data.price;

        // 각 요소 합치기
        textDiv.appendChild(a);
        textDiv.appendChild(p);
        imgDiv.appendChild(img);
        li.appendChild(imgDiv);
        li.appendChild(textDiv);

        // listSlideWrap에 위에서 만든 슬라이드 추가
        newListSlides.appendChild(li);
      }
    });
  // 슬라이더에 대한 기본 설정을 초기화합니다.
  newListSlides.style.marginLeft = 0 + 'px';
}

function newListLeftSlide(e) {
  e.preventDefault();
  e.stopPropagation();

  newListSlides.style.marginLeft =
    parseInt(newListSlides.style.marginLeft) + 1100 + 'px';
}

function newListRightSlide(e) {
  e.preventDefault();
  e.stopPropagation();

  newListSlides.style.marginLeft =
    parseInt(newListSlides.style.marginLeft) - 1100 + 'px';
}

export { slideSetting };
