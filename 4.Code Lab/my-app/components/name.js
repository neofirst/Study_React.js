const NameComp=(props)=>{
  return(
    <div>
      {
        props.name ? 
        <h2>{props.name}</h2> : 
        <h2>'empty'</h2>
      }
    </div>
  )
}

// const NameComp=(props)=>{
//   // const NameComp=({name,onClickCB})=>{

//   const handleClickBtn=(val)=>{
//     props.onclickCB(val);
//   }

//   return(
//     <div>
//     <h2>{props.name}</h2>
//       <h2>{props.name}</h2>
//       <button onClick={()=>handleClickBtn('Sub Component')}>변경</button>
//     </div>
//   )
// }

export default NameComp;