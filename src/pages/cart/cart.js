import { createHeader } from '/src/default_layout/header.js';
import { createFooter } from '/src/default_layout/footer.js';
import { cartLoad } from '/src/modules/cartModules/cartLoad.js';

document.addEventListener('DOMContentLoaded', () => {
  // 기본 헤더 푸터를 작성합니다.
  createHeader();
  createFooter();
  // 장바구니 리스트를 로딩합니다.
  // 리스트를 작성 후, 체크 박스나 수량 조절 버튼, 삭제 버튼에 대한 이벤트를 할당합니다.
  cartLoad();
});
