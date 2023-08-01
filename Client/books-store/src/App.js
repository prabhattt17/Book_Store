import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import BookDetail from "./components/BookDetail";

const App = () => {
  const [querry, setQuerry] = useState('');

  return (
    <div>
      <Header setQuerry={setQuerry} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Add" element={<AddBook />} exact />
        <Route path="/books" element={<Books querry={querry} />} exact />
        <Route path="/aboutUs" element={<AboutUs />} exact />
        <Route path="/books/:id" element={<BookDetail />} exact />
      </Routes>
    </div>
  );
};

export default App;
