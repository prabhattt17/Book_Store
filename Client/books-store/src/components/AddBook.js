import React, { useState } from "react";
import "../style/addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

const AddBook = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    description: "",
    author: "",
    available: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:8000/books", {
        name: String(inputs.name),
        price: Number(inputs.price),
        description: Number(inputs.description),
        author: String(inputs.author),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/books"));
  };

  return (
    <div className="f-c">
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <br></br>
        <input type="text" name="name" onChange={handleChange}></input>
        <br></br>
        <label>Author</label>
        <br></br>
        <input type="text" name="author" onChange={handleChange}></input>
        <br></br>
        <label>Price</label>
        <br></br>
        <input type="text" name="price" onChange={handleChange}></input>
        <br></br>
        <label>Description</label>
        <br></br>
        <input type="text" name="description" onChange={handleChange}></input>
        <br></br>
        <label>Image</label>
        <br></br>
        <input type="text" name="image" onChange={handleChange}></input>
        <br></br>
        <label>Available</label>
        <Checkbox onChange={() => setChecked(!checked)}></Checkbox>
        <br></br>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
