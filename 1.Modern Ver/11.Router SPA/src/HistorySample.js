import React,{Component} from 'react';

class HistorySample extends Component{
  handleGoBack=()=>{
    this.props.history.goBack();
  }
  handleGoHome=()=>{
    this.props.history.push('/');
  }
  componentDidMount(){
    this.unblock=this.props.history.block('정말 떠나실 건가요?');
  }
  componentWillMount(){
    //언마운트시 질문 멈춤
    if(this.unblock){
      this.unblock();
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.handleGoBack}>Go Back</button>
        <button onClick={this.handleGoHome}>Go Home</button>
      </div>
    )
  }
}

export default HistorySample;