immer 내장하고 있으며 reducer, dispatch 미포함.

observable이 state를 감싸고 변동 사항을 observer 측에 전달하고
observer는 store.subscribe 역할을 한다.

@observable 경우 공식 문법은 아니다. 이는 데코레이터라고 한다.
ex) 
@observable name = 'test;
@action
changeName(value){  
}

redux는 데이터를 묶어줘야하는 개념이나 Mobx는 분리해서 처리 가능.
이는 불변성과 관련.
initialState 처리 할 필요가 없고
직접 수정 처리 가능.

동시 처리 시 runInAction 사용하여
하나로 묶어서 처리.
redux 경우 reducer가 분리되어 있어서 한번에 처리가 안된다.
