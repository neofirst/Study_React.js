import React from 'react';

type GreeingsProps = {
  name: string;
  mark?: string;
  array?: string[];
  option? : string;
  onClick :(name:string)=>void;
};

// const Greetings: React.FC<GreeingsProps> = ({name, mark = '1'}) => {
  const Greetings = ({name, mark, option, onClick} : GreeingsProps) => {
    const handleClick = () => onClick(name);
  return (
     <div>
       TypeScript : {name}, {mark}
       {option && <p>Option</p>}
       <div>
          <button onClick={handleClick}>Click</button>
       </div>
     </div>
  )
}

//FC가 아닌 fuction type일 경우
Greetings.defaultProps = {
  mark:'default'
}

export default Greetings;