import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../style/addbook.css";

const BookDetail = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [checked, setChecked] = useState();
  const [inputs, setInputs] = useState({});

  const sendRequest = async () => {
    await axios.put(`http://localhost:8000/books/${id}`, {
      name: String(inputs.name),
      price: Number(inputs.price),
      description: Number(inputs.description),
      author: String(inputs.author),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then((res)=>res.data);
  };

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:8000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.books));
    };
    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    sendRequest().then(() => navigate('/books'));
  };
  return (
    <div className="f-c">
      {inputs && (
        <form onSubmit={submitHandler}>
          <label>Title</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Author</label>
          <br></br>
          <input
            type="text"
            name="author"
            value={inputs.author}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Price</label>
          <br></br>
          <input
            type="text"
            name="price"
            value={inputs.price}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Description</label>
          <br></br>
          <input
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Image</label>
          <br></br>
          <input
            type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
          ></input>
          <br></br>
          <label>Available</label>
          <Checkbox onChange={() => setChecked(!checked)}></Checkbox>
          <br></br>
          <button type="submit">Update Book</button>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
