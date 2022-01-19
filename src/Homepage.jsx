import { useEffect, useState } from "react";
import Articles from "./Articles";

import axios from "axios";
import Search from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Homepage = () => {
    
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const SEARCH_URL = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchArticlesHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios(BASE_URL);
        setArticles(response.data.articles);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchArticlesHandler();
  }, []);

  useEffect(() => {
    const fetchArticlesByQuery = async () => {
        if (!searchQuery) return;
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios(SEARCH_URL);
        setArticles(response.data.articles);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    const timer = setTimeout(() => {
      fetchArticlesByQuery();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const changeQueryHandler = ({target: {value}}) => {
      setSearchQuery(value)
      console.log(value);
  }

  return (
    <>
    <Search onChangeQuery={changeQueryHandler}/>
      <Articles articles={articles} />
    </>
  );
};
export default Homepage;
