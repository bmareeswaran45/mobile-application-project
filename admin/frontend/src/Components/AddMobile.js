import {
  Button,FormLabel,TextField,  } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMobile = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    brand: "",
    model: "",
    price: "",

    image: "",
  });
 
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:2000/mobiles", {
        name: String(inputs.name),
        brand: String(inputs.brand),
        model: String(inputs.model),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendRequest().then(() => history("/mobiles"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Brand</FormLabel>
        <TextField
          value={inputs.brand}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="brand"
        />
        <FormLabel>Model</FormLabel>
        <TextField
          value={inputs.model}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="model"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <Button variant="contained" type="submit">
          Add Mobile
        </Button>
      </Box>
    </form>
  );
};

export default AddMobile;
