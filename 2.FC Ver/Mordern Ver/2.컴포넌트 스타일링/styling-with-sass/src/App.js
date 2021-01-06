import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
    <div className="buttons">
      <Button size="small">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
    </div>
      <div className="buttons">
        <Button size="small" color="gray">Button</Button>
        <Button size="medium" color="gray">Button</Button>
        <Button size="large" color="gray">Button</Button>
      </div>
      <div className="buttons">
        <Button size="small" color="pink">Button</Button>
        <Button size="medium" color="pink">Button</Button>
        <Button size="large" color="pink">Button</Button>
      </div>
      
      <div className="buttons">
        <Button size="small" outline={true}>
          Button
          </Button>
        <Button size="medium" color="gray">
          Button
          </Button>
        <Button size="large" color="pink">
          Button
          </Button>
      </div>
      
      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">
          Button
          </Button>
        <Button size="large" color="gray" fullWidth>
          Button
          </Button>
        <Button size="large" color="pink" fullWidth 
                onClick={()=>{
                  console.log('click');
                }}
                onMouseMove={()=>{
                  console.log('move');
                }}>
          Button
       </Button>
      </div>
    </div>
  );
}

export default App;
