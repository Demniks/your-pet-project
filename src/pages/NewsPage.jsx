import NewsList from 'components/newsList/newsList';
import Container from 'components/mainContainer/MainContainer.styled';
import NewsPaginator from 'components/newsPaginator/newsPaginator';
import allArticle from '../components/newsPaginator/allArticle';
import { useEffect, useState } from 'react';
import TitlePage from 'components/title/TitlePage';
import NoticesSearch from 'components/notice/noticesSearch/NoticesSearch';

const NewsPage = () => {
  const [displayed, setDisplayed] = useState(allArticle.slice(0, 6));
  const [query, setQuery] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [results, setResults] = useState([]);

  const findNews = query => {
    const searchResults = allArticle.filter(article => {
      const titleLower = article.title.toLowerCase();
      const textLower = article.text.toLowerCase();
      return titleLower.includes(query) || textLower.includes(query);
    });
    //setIsSearch(false);
    setResults(searchResults);
    setDisplayed(searchResults.slice(0, 6));
  };

  const cleanQuery = () =>{
    setQuery('');
  }

  useEffect(() => {
    if (query) {
      setResults([]);
      setDisplayed([]);
      findNews(query);
      //setIsSearch(false);
    }
    // eslint-disable-next-line 
  }, [isSearch]);

  console.log(results);
  console.log(displayed);
  return (
    <Container.MainContainer>
      <TitlePage children={"News"}/>
      <NoticesSearch
        clean={cleanQuery}
        setQvery={setQuery}
        setIsSearch={setIsSearch}
      />
      <NewsList items={displayed} />
      <NewsPaginator
        limit={6}
        setItems={setDisplayed}
        news={allArticle}
        current={results}
        find={isSearch}
      />
    </Container.MainContainer>
  );
};

export default NewsPage;
