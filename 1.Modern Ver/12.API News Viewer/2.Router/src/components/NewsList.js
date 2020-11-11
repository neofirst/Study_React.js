import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewList = ({category})=>{
  const [articles, setArticle]=useState(null);
  const [loading, setLoading]=useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=668d503f4a91408f8150086e8c8e9eea`);
        setArticle(response.data.articles);
      }
      catch(e){
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  },[category]);

  if(loading){
    return <NewsListBlock>대기 중....</NewsListBlock>
  }
  if(!articles){
    return null;
  }

  return(
    <NewsListBlock>
      {articles.map(article=>(
        <NewsItem key={article.url} article={article}/>
      ))}
    </NewsListBlock>
  )
}

export default NewList;