import React from 'react';
import styled,{css} from 'styled-components';
import {NavLink} from 'react-router-dom';

const categories = [
  {
    name:'all',
    text:'All'
  },
  {
    name:'business',
    text:'Business'
  },
  {
    name:'entertainment',
    text:'Entertainment'
  },
  {
    name:'health',
    text:'Health'
  },
  {
    name:'science',
    text:'Science'
  },
  {
    name:'sports',
    text:'Sports'
  },
  {
    name:'technology',
    text:'Technology'
  }
];


const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

/* const Category = styled(NavLink)` */
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  } 

  /* 선택 카테로기 색상 변경 */
  ${props=>
    props.active && css `
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories=({category, onSelect})=>{
  return(
    <CategoriesBlock>
      {categories.map(c=>(
        //  <Category key={c.name}>{c.text}</Category>
        <Category key={c.name} active={category===c.name} onClick={()=>onSelect(c.name)}>{c.text}</Category>
        // <Category key={c.name} active={category===c.name} exact={c.name==='all'} to={c.name==='all'?'/':`/${c.name}`}>
        //   {c.text}
        // </Category>
      ))}
    </CategoriesBlock>
  )
}

export default React.memo(Categories);