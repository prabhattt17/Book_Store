import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import '../style/book.css';

const url = "http://localhost:8000/books";

const ftechData = async () => {
  return await axios.get(url).then((res) => res.data);
};

const Books = (props) => {
  const [books, setBooks] = useState();

  useEffect(() => {
    ftechData().then((data) => setBooks(data.books));
  }, []);
  
  const deleted = () => {
    ftechData().then((data) => setBooks(data.books));
  }

  // props.books.filter((book)=> book.name.toLowerCase().includes(props.querry.toLowerCase())).

  return (
    <div>
      <ul className="container">
        {books &&
          books.filter((book)=>book.name.toLowerCase().includes(props.querry.toLowerCase())).map((book, i) => {
            return (
              <li key={i}>
                <Book book={book}  deleted={deleted} querry={props.querry}/>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Books;
