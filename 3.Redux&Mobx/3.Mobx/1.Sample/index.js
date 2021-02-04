const { observable, autorun, runInAction, reaction, action } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

autorun(()=>{
  console.log('change', state.compA)
});

//state.compB 변경 경우에만 실행
reaction(()=>{
  return state.compB;
}, ()=>{
  console.log('reaction', state.compB);
})

//자체가 액션
//한번에 여러개의 실행은 한번의 실행으로 인식
  // state.compA = 'b';
  // state.compB = 121;
  // state.compC = 'cC';

//액션을 미리 만들고 실행하고 싶을 경우에 사용
const change = action(()=>{
  state.compA = 'b';
  state.compB = 121;
  state.compC = 'cC';
});

change();
change();

runInAction(()=>{  
  state.compA = 'b';
  state.compB = 121;
  state.compC = 'cC';
})

runInAction(()=>{  
  state.compA = 'b1';
})

runInAction(()=>{  
  state.compC = 'b1';
})

runInAction(()=>{  
  state.compB = 'b1';
})