import React, {useState} from 'react';
import styled,{css, ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const Circle = styled.div`
  width:5rem;
  height:5rem;
  background-color:${props=>props.color};
  border-radius:50%;
  ${props=>props.huge && 
    css`
    width:10rem;
    height:10rem;    
  `}
`;

const AppBlock = styled.div`
    width:512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + &{
      margin-top: 1rem;
    }
`;

const pallete = {
  blue:'blue',
  gray:'gray',
  pink:'pink'
}

function App() {
  const [dialog, setDialog] = useState(false);
  
  const onClick = () =>{
    setDialog(true);
  }
  const onConfirm = () =>{
    setDialog(false);
  }

  const onCancel = () =>{
    setDialog(false);
  }

  return (
      <ThemeProvider theme={{pallete}}>
      <>
      <AppBlock>
        <Circle color="black"/>
        <Circle color="blue" huge/>
        <Button>Button</Button>
        <Button color="gray">Button</Button>
        <Button color="pink">Button</Button>
        <ButtonGroup>
          <Button color="gray" size="small">Button</Button>
          <Button color="gray" size="medium">Button</Button>
          <Button color="gray" size="large">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="blue" size="small" outline>Button</Button>
          <Button color="gray" size="medium" outline={true}>Button</Button>
          <Button color="pink" size="large"outline={false}>Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="blue" size="large" outline fullWidth>Button</Button>
          <Button color="gray" size="large" outline={true} fullWidth={true}>Button</Button>
          <Button color="pink" size="large"outline={false} fullWidth={false}>Button</Button>
        </ButtonGroup>     
      <Button color="pink" size="large"outline={false} onClick={onClick}>Dialog Button</Button>   
      </AppBlock>
       <Dialog title="정말로 삭제하시겠습니까" confirmText="삭제" cancelText="취소" onConfirm={onConfirm} onCancel={onCancel} visible={dialog}>
          삭제 확인.
        </Dialog>
      </>
      </ThemeProvider>
  );
}

export default App;
