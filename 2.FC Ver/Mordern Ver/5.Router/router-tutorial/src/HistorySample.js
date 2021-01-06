import React, {useEffect} from 'react';

const HistorySample = ({history}) =>{
  const goBack = () =>{
    history.goBack();
  }
  const goHome = () =>{
    history.push('/');
  }

  const replaceToHome = () =>{
    history.replace('/');
  }

  useEffect(()=>{
    const unblock = history.block('Realy?')
    return () =>{
      //componentUnMount
      unblock();
    }
  }, [history]);

  return(
    <div>
      <button onClick={goBack}>Back</button>
      <button onClick={goHome}>Home</button>
      <button onClick={replaceToHome}>Home(Replact)</button>
    </div>
  )
}
export default HistorySample;