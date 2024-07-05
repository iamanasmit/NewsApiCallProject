import React, { useState, useEffect } from "react";
import { FormControl, Button, InputGroup } from "react-bootstrap";
import Newsitem from "./Newsitem";
import axios from "axios";

const Keyword = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [newarticles, setNewArticles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [newcurrentPage, setnewCurrentPage] = useState(1);
  const [newarticlesPerPage] = useState(8);
  const change = (e) => {
    setSearchKeyword(e.target.value);
  };

  const submit = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && searchKeyword) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${searchKeyword}&apiKey=5e105ec15b194b14aef395ee491455d7`
        )
        .then((res) => {
          setNewArticles(res.data.articles);
          setSubmitted(false);
        })
        .catch((err) => {
          console.log("error fetching", err);
          setSubmitted(false);
        });
    }
  }, [submitted, searchKeyword]);
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
    gap: '20px',
    padding: '20px',
  };
  const newindexOfLastArticle = newcurrentPage * newarticlesPerPage;
  const newindexOfFirstArticle = newindexOfLastArticle - newarticlesPerPage;
  const newcurrentArticles = newarticles.slice(newindexOfFirstArticle, newindexOfLastArticle);
  const newpaginate = (pageNumber) => setnewCurrentPage(pageNumber);
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-white border-end-0">
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Search keywords
          </div>
        </InputGroup.Text>
        <FormControl
          type="text"
          placeholder="latest apple product"
          aria-label="Search"
          onChange={change}
          value={searchKeyword}
        />
        <Button variant="outline-success" onClick={submit}>
          Search
        </Button>
      </InputGroup>
      <div>
        {searchKeyword === "" ? (
          <div></div>
        ) : (
          <div style={containerStyle}>
            {newcurrentArticles.map((news) => (
              <Newsitem
                title={news.title}
                content={news.content}
                author={news.author}
                image_source={news.urlToImage}
                news_link={news.url}
              />
            ))}
          </div>
        )}
        <ul className="pagination">
        {Array.from({ length: Math.ceil(newarticles.length / newarticlesPerPage) }, (_, i) => (
          <li key={i} className="page-item">
            <button onClick={() => newpaginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Keyword;
