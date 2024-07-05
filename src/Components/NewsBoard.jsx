import React, { useState, useEffect } from "react";
import axios from "axios";
import Newsitem from "./Newsitem";

const NewsBoard = (props) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8); 
  const { category } = props;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=2ff76b0cb1b4420c9af182d4265be2d4`
      )
      .then((res) => {
        console.log("successfully fetched from api");
        setArticles(res.data.articles);
      })
      .catch(() => {
        console.log("error fetching");
      });
  }, [category]);

  // Logic for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  return (
    <div className="text-center" id="home">
      <h2>
        Latest <span className="bg-dark text-light">News</span>
      </h2>
      <div style={containerStyle}>
        {currentArticles.map((news) => (
          <Newsitem
            title={news.title}
            content={news.content}
            author={news.author}
            image_source={news.urlToImage}
            news_link={news.url}            
          />
        ))}
      </div>
      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, i) => (
          <li key={i} className="page-item">
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsBoard;
