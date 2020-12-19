import React, {useState} from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) =>{
    setCheck(e.target.checked);
  }
  return (
    <div className="App">
      <CheckBox onChange={onChange} checked={check}>모두 체크</CheckBox>
    </div>
  );
}

export default App;
