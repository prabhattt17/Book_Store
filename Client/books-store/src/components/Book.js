import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/book.css";

const Book = (props) => {
  const navigate = useNavigate();

  const id = props.book._id;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8000/books/${id}`)
      .then((res) => res.data);

    props.deleted();
  };



  return (
    <div className="card">
      <img src={props.book.image} alt="props.name"></img>
      <div className="contant">
        <h3>{props.book.name}</h3>
        <p>By {props.book.author}</p>
        <p>Rs {props.book.price}</p>
      </div>
      {/* <p>{props.description}</p> */}
      <div className="buttonn">
        <Button
          className="btt"
          size="small"
          sx={{ margin: "5px" }}
          variant="contained"
          LinkComponent={Link}
          to={`/books/${id}`}
        >
          Update
        </Button>
        <Button
          className="btt"
          size="small"
          sx={{ margin: "5px" }}
          variant="contained"
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Book;
