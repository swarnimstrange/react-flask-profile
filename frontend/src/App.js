import "./App.css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ModalList from "./components/Modal";
import Navbar from "./components/Navbar";
import NewData from "./components/NewData";
import Delete from "./components/Delete";

function App() {
  const [articles, setarticles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setarticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const updatedData = (resp) => {
    const newArticles = articles.map((up_article) => {
      if (up_article.id === resp.id) {
        return resp;
      }
      return up_article;
    });
    setarticles(newArticles);
  };

  const insertedData = (article) => {
    const newArticles = [...articles, article];
    setarticles(newArticles);
  };

  const deletedData = (article) => {
    const newArticles = articles.filter(my_article => {
      if (my_article.id === article.id)
      {
        return false;
      }
        return true;
      })
      setarticles(newArticles);
  };

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticleList articles={articles} />} />
          <Route path="/update" element={<ModalList updatedData={updatedData} />} />
          <Route path="/create" element={<NewData insertedData={insertedData} />} />
          <Route path="/delete" element={<Delete deletedData={deletedData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
