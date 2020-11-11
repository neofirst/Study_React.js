import React, {Component} from 'react';
import propTypes from 'prop-types';

//함수형 컴포넌트
// const MyComponent=({name, favoriteNumber, children})=>{
//   // const {name, children} = props;
//   return (
//     <div>
//       Class Component
//       <br/>
//       Properties : {name}
//       <br/>
//       Properties children value : {children}      
//       <br/>
//       Number : {favoriteNumber}
//       </div>
//   )
// }

// MyComponent.defaultProps = {
//   name : '기본 이름'
// };

// MyComponent.propTypes = {
//   name : propTypes.string,
//   //필수값 처리
//   favoriteNumber : propTypes.number.isRequired
// }

//클래스형 컴포넌트
class MyComponent extends Component{  
    
  //class 내부 프로퍼티타입
  // static defaultProps = {
  //   name : '기본 이름'
  // };

  // static propTypes = {
  //   name : propTypes.string,
  //   //필수값 처리
  //   favoriteNumber : propTypes.number.isRequired
  // }
  render(){
    const {name, favoriteNumber, children} = this.props;
    return (
      <div>
        Class Component
        <br/>
        Properties : {name}
        <br/>
        Properties children value : {children}      
        <br/>
        Number : {favoriteNumber}
        </div>
    )
  }
}

//프로퍼티타입
MyComponent.defaultProps = {
  name : '기본 이름'
};

MyComponent.propTypes = {
  name : propTypes.string,
  //필수값 처리
  favoriteNumber : propTypes.number.isRequired
}

export default MyComponent;