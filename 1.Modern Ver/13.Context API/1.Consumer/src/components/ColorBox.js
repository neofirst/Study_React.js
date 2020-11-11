import React from 'react';
import ColorContext,{ColorConsumer} from '../contexts/color';

const ColorBox = () =>{
  return(
    // <ColorContext.Consumer>
    //   {value=>(
    //     <div 
    //       style={{
    //         width:'64px',
    //         height:'64px',
    //         background: value.color
    //       }}
    //      ></div>
    //   )}
    // </ColorContext.Consumer>
    <ColorConsumer>
      {({state})=>(
        <>
        <div 
          style={{
            width:'64px',
            height:'64px',
            background: state.color
          }}
         ></div>
         <div 
          style={{
            width:'32px',
            height:'32px',
            background: state.subcolor
          }}
         ></div>
         </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;