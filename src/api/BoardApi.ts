import axios, { AxiosError } from "axios";

const PREFIX = "http://localhost:3001";

class BoardApi {
  static fetch = async () => {
    try {
      const response = await axios.get(`${PREFIX}/board`);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        window.alert("잠시 후 다시 시도해주세요");
      }
    }
  };
  static delete = async (id: number) => {
    try {
      await axios.delete(`${PREFIX}/board/${id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        window.alert("잠시 후 다시 시도해주세요");
      }
    }
  };
}

// BoardApi.delete(1);

export default BoardApi;

/**
 * 
 
SSR CSR 

1. 사용자가 브라우저 검색창에 주소를 입력 www.naver.com
2. DNS => ip 주소로 바꿔준다.
3. ip 주소를 갖고있는 서버가 사용자가 요청한 데이터를 찾아서 다시 되돌려준다.
4. 서버가 되돌려준 데이터를 화면에 그린다.


서버가 데이터들을 취합해서 응답하면 서버사이드렌더링
=> 초기 로딩속도가 빠른대신 페이지 전환속도가 느림
=> 모든 데이터들을 다 그린 상태로 응답해서 검색엔진에 잘잡힘

서버는 JS, index.html 만 응답해주고
브라우저가 자바스크립트 파일을 읽어서 화면을 그리면 클라이언트사이드렌더링
=> 초기 로딩속도가 느린대신 페이지 전환속도가 빠름
=> 검색엔진에 안좋음


Next.js
SSR => CSR

SSG
 * 
 */
