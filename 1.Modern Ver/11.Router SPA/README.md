yarn add react-router-dom

URL 쿼리 이용
Ex)
{
"pathname":"/about",
"search":"?detail=true",
"hash":""
}
쿼리 문자열 객체 변환
yarn add qs

Route -> match, location, hostory props포함
match - Profile.js 참고
location - About.js 참고
history - HistorySample.js 참고
뒤로가기, 로그인 후 화면 전환, 다른 페이지로 이탈 방지 시 사용
Class Component에서 처리->WithRouter와 비교해서 볼 것

WithRouter
라우트로 사용된 컴포넌트가 아닐 경우에도 match, location, history 사용 가능
