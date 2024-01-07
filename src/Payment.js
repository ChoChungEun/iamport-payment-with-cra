import React from "react";

const Payment = () => {
  // index.html 에 두개의 script를 넣어줘야 결제 기능 작동함

  // jQuery
  // <script
  //   type="text/javascript"
  //   src="https://code.jquery.com/jquery-1.12.4.min.js"
  // ></script>

  // iamport.payment.js
  // <script
  //   type="text/javascript"
  //   src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
  // ></script>

  function handleClickPayment() {
    // 가맹점 식별
    const { IMP } = window;
    // imp07484503: 내 가맹점 식별 코드 (https://admin.portone.io/integration)
    IMP.init("imp07484503");

    // 결제 데이터 정의
    // pg: pg 사 코드 입력 (https://developers.portone.io/docs/ko/tip/pg-2?v=v1)
    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    // 결제 창 호출
    IMP.request_pay(data, requestPayCallback);
  }

  // 콜백 함수 정의
  function requestPayCallback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return <button onClick={handleClickPayment}>결제하기</button>;
};

export default Payment;
