import React,{useState, useCallback} from 'react';
// import axios from 'axios';
import NewList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [data, setData]=useState(null);

  // const onClick=()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{
  //     setData(response.data);
  //   })};
  
  //d89987246fb6434980d73ea8e1d248a3
  // const onClick = async ()=>{
  //   try{
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&business&apiKey=668d503f4a91408f8150086e8c8e9eea');
  //   setData(response.data);
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category),[]);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewList category={category}/>
    </>
  );

}

export default App;
