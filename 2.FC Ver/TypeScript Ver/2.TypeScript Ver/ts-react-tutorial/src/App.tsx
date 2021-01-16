import React from 'react';
import Greetings from './Greeting';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSmaple';
import ContextSample from './ContextSample';
import { SampleProvider } from './SampleContext';

function App() {
  const onClick = (name:string)=>{
    alert(name);
  }
  const onSubmit = (form:{name:string, description:string}):void =>{    
    alert(form.name + ',' + form.description);
  }

  return (
    <div className="App">
      <Greetings name="props test" onClick={onClick}/>
      <Greetings name="props test" option="option" onClick={onClick}/>
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
      <ReducerSample/>
      <SampleProvider>
        <ContextSample/>
      </SampleProvider>
    </div>
  );
}

export default App;
