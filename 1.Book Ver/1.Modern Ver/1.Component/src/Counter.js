import React, {Component} from 'react';

//클래스형 컴포넌트 state
class Counter extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     number:0,
  //     fixedNumber:0
  //   };
  // }
  
  state = {
    number:0,
    fixedNumber:0
  };

  render(){
    const {number, fixedNumber} = this.state;
    return(
      <div>
      <h1>변경 값 : {number}</h1>
      <h2>고정 값 : {fixedNumber}</h2>
      {/* <button onClick={()=>{
          // 동일
          // this.setState({number: number+1});          
          this.setState({number: this.state.number+1});
        }}
      >
          +1</button> */}
          {/* 2씩 증가 */}
          {/* <button onClick={()=>{
          this.setState(prevState=>{
            return{
              number: prevState.number + 1
            };
          });
          this.setState(prevState=>({
            number:prevState.number+1
          }));
        }} */}
        <button onClick={()=>{
          // setStaet종료 후 다른 내용 실행
          this.setState({number: this.state.number+1},()=>{console.log('setState 종료')});
        }}
      >
          +1</button>
      </div>
    )
  }
}

export default Counter;