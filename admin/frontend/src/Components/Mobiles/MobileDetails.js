import {
  Box,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MobileDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:2000/mobiles/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.mobile));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:2000/mobiles/${id}`, {
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
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  
    return (
      <div className="card">
        {inputs && (
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
                value={inputs.author}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="brand"
              />
              <FormLabel>Model</FormLabel>
              <TextField
                value={inputs.description}
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
                Update Mobile
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default MobileDetail;
  