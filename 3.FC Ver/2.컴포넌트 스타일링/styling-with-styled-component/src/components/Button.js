import React from 'react';
import styled,{css} from 'styled-components';
import {darken, lighten} from 'polished';

const colorStyles = css`
  ${({theme,color}) =>{
      const selectedColor = theme.pallete[color];
      return css `
        background-color: ${selectedColor};
        &:hover{
        background-color: ${props =>lighten(0.1, selectedColor)};
        }
        &:active{
          background-color: ${props =>darken(0.1, selectedColor)};
        }
        ${props=>
          props.outline && 
          css `
            color: ${selectedColor};
            background: none;
            border: 1px solid ${selectedColor};
            &:hover{
              background-color: ${selectedColor};
              color:white;
            }
        `}
      `;
    }}
`;

// const sizeStyles = css`
//   ${props=>
//       props.size === 'small' && 
//       css`
//       height: 1.75rem;
//       font-size:0.875rem;
//       `}

//       ${props=>
//       props.size === 'medium' && 
//       css`
//       height: 2.25rem;
//       font-size:1rem;
//       `}
      
//     ${props=>
//       props.size === 'large' && 
//       css`
//       height: 3rem;
//       font-size:1.25rem;
//       `}
// `;

const sizes = {
  small:{
    height: '1.75rem',
    fontSize:'0.875rem'
  },
  medium:{
    height: '2.25rem',
    fontSize:'1rem'
  },
  large:{
    height: '3rem',
    fontSize:'1.25rem'
  }
};

const sizeStyles=css`
  ${({size})=>css`
    height: ${sizes[size].height};
    fontSize: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyles = css`
  ${props=>props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      align-items: center;
      & + &{
        margin-left: 0;
        /* margin-top: 1rem; */
      }
    `};
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border-radius : 4px;
  color: white;
  font-weight:bold;
  cursor: pointer;
  padding-left:1rem;
  padding-right:1rem;
  justify-content:center;
  align-items:center;
  
  & + &{
    margin-left:1rem;
  }

  /* 1,2 상황은 txt 참고 */
  /* 3. */
  ${colorStyles}
  
  ${sizeStyles}
  
  ${fullWidthStyles}
  
`;

const Button = ({children, color, size, outline, fullWidth, ...rest}) =>{
  return(
    <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>{children}</StyledButton>
  )
}

Button.defaultProps={
  color:'blue',
  size:'medium'
}

export default Button;