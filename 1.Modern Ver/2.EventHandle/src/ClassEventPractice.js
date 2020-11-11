import React, {Component} from 'react';

class ClassEventPractice extends Component{
  state ={
    username:'',
    message:''    
  }

  // constructor(props){
  //   super(props);
  //   this.handleChange =this.handleChange.bind(this);
  //   this.handleclick =this.handleclick.bind(this);
  // }

  // handleChange(e){
  //   this.setState({
  //     message:e.target.value
  //   });
  // }

  // handleclick(){
  //   alert(this.state.message);
  //   this.setState({
  //     message:''
  //   })
  // }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleclick = () =>{
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username : '',
      message:''
    })
  }
  
  handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      this.handleclick();
    }
  }

  render(){
    return(
      <div>
        <h1>Event Practice</h1>
        <input type="text" name="username" placeholder="사용자명" value={this.state.username}
        onChange={this.handleChange}/>
        <input type="text" name="message" placeholder="입력" value={this.state.message}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}/>
        <button onClick={this.handleclick} >확인</button>
      </div>
    )
  }
}

export default ClassEventPractice;