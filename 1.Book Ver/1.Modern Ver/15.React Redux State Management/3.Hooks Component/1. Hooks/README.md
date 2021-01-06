.prettierrc 추가
{
"SingleQuote": true,
"semi": true,
"useTabs": false,
"tabWidth": 2,
"trailingComma": "all",
"printWidth": 80
}

yarn add redux react-redux

components - UI 관련
containers - Redux 관련

Ducks pattern
action type, action function, reducer 기능 파일 하나에 통합

https:/chrome.google.com/webstore Redux DevTools를 검색

yarn add redux-devtools-extension

yarn add redux-actions

//리듀서 상태 업데이트 시 불변성 유지 처리
yarn add immer

//Hooks
useSelector
- 부모 컴포넌트 App 컴포넌트가 리렌더링 되는 경우 React.memo(컨테이너) 처리를 해야한다
useCallBack
useStore

useActions경우 redux 팀에서 꼭 필요없다고 하여 제외된 라이브러리
https://react-redux.js.org/next/api/hooks
사이트 참고하여 직접 생성 처리