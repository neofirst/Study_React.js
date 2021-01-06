1. 설정 파일
   1.1. .prettierrc 추가
   1.2. jsconfig.json 추가
2. 스타일 적용
   yarn add styled-components
3. 라우터 적용
   yarn add react-router-dom
4. 리덕스 적용
   yarn add redux react-redux redux-actions immer redux-devtools-extension
   적용 - auth.js
5. API, 리덕스 사가 적용
   yarn add axios redux-saga
6. 글 작성
   yarn add quill
7. 포스트 목록 조회 query string
   yarn add qs
8. html 필터링(BackEnd)
   yarn add sanitize-html
9. meta tag
   yarn add react-helmet-async
10. koa-static
    build 폴더 안의 파일 사용 가능하도록 처리
    yarn koa-static

Expected an assignment or function call and instead saw an expression no-unused-expressions
=>https://velog.io/@bigbrothershin/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9-%EC%8B%9C-%EC%99%80-%EC%82%AC%EC%9A%A9%EC%83%81-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90

페이지 네이션
src/modules/posts.js
createRequestSaga 부분의 meta:response 추가
handleActions 확인
