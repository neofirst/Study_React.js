import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

//Ref 이용 시에는 Class형으로
class App extends Component {
  render(){
    return (    
      <div>
      <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
      <button onClick={()=>this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
