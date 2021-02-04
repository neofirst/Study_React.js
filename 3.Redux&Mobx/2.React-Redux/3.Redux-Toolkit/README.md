Redux-Toolkit
- action + reducer 개념.
- immer 내장.
- devTools 내장.

- reducers : 동기적인 액션, 내부적인 액션
- extraReducers : 비동기 액션. 외부적인 액션

Redux 사용하지 않아야하는 경우.
- 계속 변화하는 값.
- 하나의 컴포넌트에 이용 할 시 hooks 사용.
- onBlure 또는 submit 시 처리.

리렌더링 useSelector 방지
- 객체별로 선언.

createSlector
- 컴포넌트보다 윗단에서 최적화 처리
- 함수는 외부로도 뽑아 낼 수 있지만 내외 관계없는 즉, 의존성이 없는 순수 함수의 경우만 가능.