import * as Token from '/src/modules/api_methodModules/Token.js';

function createHeader() {
  const header = document.createElement('header');
  header.className = `w-full`;
  header.innerHTML = `<div class="mx-auto px-4 w-5/6" id="closed">
  <div class="w-full h-9 flex items-center hidden sm:flex justify-end">
    <ul id="page-button-list" class="text-center text-color-sec">
      <li
        id="login-page-button"
        class="inline-block font-normal text-xs pr-3 border-r border-color-sec align-middle"
      >
      <a href="/src/pages/login/login.html">안녕하세요, 관리자님!</a>
      </li>
      <li
        id="sign-up-page-button"
        class="inline-block font-normal text-xs px-3 border-r border-color-sec align-middle"
      ><a href="/src/pages/sign_up/sign_up.html">
        회원관리</a>
      </li>
      <li
        class="inline-block font-normal text-xs px-3 align-middle"
      >
      <a href="/src/pages/order_list/order_list.html">상품관리</a>
      </li>
    </ul>
  </div>
</div>
<nav
  class="h-[90px] color-sec flex justify-between items-center flex-no-wrap text-lg text-color-ter bg-transparent "
  id="header"
>
  <h1 class="inline-block bg-transparent pl-[6%] flex-shrink-0">
    <a href="/src/pages/main/index.html"
      ><img
        src="/src/img/omc_logo.png"
        class="max-h-[37.5px] bg-transparent"
        alt="오늘의메뉴추천"
    /></a>
  </h1>

  <ul
    class="bg-transparent flex items-center flex-no-wrap px-[5%] w-[75%]"
  >
    <li class="inline-block mr-[4%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.3"
        stroke="currentColor"
        class="h-6 inline-block"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <a href="/src/pages/category/category.html" class="inline-block align-bottom">전체상품</a>
    </li>
    <li class="inline-block mr-[4%]">
      <span><a href="" class="">신상품</a></span>
    </li>
    <li class="inline-block mr-[4%]">
      <span><a href="">인기상품</a></span>
    </li>
    <li class="inline-block">
      <span><a href="">이벤트</a></span>
    </li>
  </ul>
  <div class="w-[13%] flex justify-between pr-[6%]">
    <a href="/src/pages/mypage/mypage.html" class="mr-[3%]">
    <svg
        xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-tool w-8 h-8 inline-block" width="100" height="100" viewBox="0 0 24 24" 
        stroke-width="1.3" stroke="currentColor" 
        fill="none" stroke-linecap="round" 
        stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
    </svg>
    </a>
    <a href="/src/pages/cart/cart.html"
      ><svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-package w-8 h-8 inline-block" 
        width="100" height="100" viewBox="0 0 24 24" 
        stroke-width="1.3" 
        stroke="currentColor" 
        fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
        <line x1="12" y1="12" x2="20" y2="7.5" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <line x1="12" y1="12" x2="4" y2="7.5" />
         <line x1="16" y1="5.25" x2="8" y2="9.75" />
    </svg>
    </a>
  </div>
</nav>
   `;
  document.body.prepend(header);

  // 로그인 상태일시 로그인, 회원가입 버튼을 숨기고, 로그아웃, 마이페이지, 주문조회 버튼을 만듭니다.
  const loginPageButton = document.getElementById('login-page-button');
  const signUpPageButton = document.getElementById('sign-up-page-button');
  const pageButtonList = document.getElementById('page-button-list');

  if (isLogin()) {
    loginPageButton.classList.add('hidden');
    signUpPageButton.classList.add('hidden');
    pageButtonList.innerHTML =
      `
    <li
    class="inline-block font-normal text-xs pr-3 border-r border-color-sec align-middle"
    >
    <span class="cursor-pointer" id="logout-button" href="">로그아웃</a>
    </li>
    <li
      class="inline-block font-normal text-xs px-3 border-r border-color-sec align-middle"
    ><a href="/src/pages/mypage/mypage.html">
      마이페이지</a>
    </li>
    <li
      class="inline-block font-normal text-xs px-3 border-r border-color-sec align-middle"
    >
    <a href="/src/pages/order_list/order_list.html">주문조회</a>
    </li>` + pageButtonList.innerHTML;

    // 로그아웃 버튼에 이벤트를 할당합니다.
    document.getElementById('logout-button').addEventListener('click', logout);
  }
}

function isLogin() {
  const token = Token.getToken();

  return token !== undefined;
}

function logout() {
  // token 쿠키를 삭제합니다.
  Token.removeToken();
  window.location.reload();

  // !!! --- 로그아웃 API를 호출합니다. --- !!!
}

export { createHeader };
