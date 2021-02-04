Chrom Web Store
- MobX Developer Tools

Mobx-State-Tree 경우 Mobx의 자유로움을
Redux 처럼 규약에 의해 쓰고 싶을 경우 사용.
- 틀이 있고 없고의 차이. 
- 정해진 룰을 정하고 프로젝트를 진행.

Class 경우 Context API 사용 경우 inject, Provider, Consumer 이용.
- 개발 방법에 따라 사용 선택.

- Decorator(@)는 Class에서만 사용

useLocalStore
- 하나의 컴포넌트 내부에서만 동작. 다른 곳에서도 사용은 가능하다.

Redux에서는 하나의 Store만 수정이 되지만 Mobx는 다른 Store의 상태를 변경 할 수 있다.

useAsObservableSource
- obserable 아닌 props 같은 내용들을 obserable 처리함.
- obserable은 구조화 시키면 그 상태를 해제 처리함.