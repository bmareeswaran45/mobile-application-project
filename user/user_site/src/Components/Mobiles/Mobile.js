import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Mobile.css";
const Mobile = (props) => {
  const history = useNavigate();
  const { _id, name, brand, model, price, image } = props.mobile;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:2000/mobiles/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/mobiles"));                         
  };

  return (
    
    <div className="row">
      <div className="card">
        <div className="card-header">
        <img src={image} alt={name}/>
        </div>
        <div className="card-body">
        <article>By {brand}</article>
         <p>{model}</p>
         <h3>Rs {price}</h3>

         <Button  sx={{ mt: "auto" }}>
           pay
         </Button>

         
        </div>
      </div>
    </div>
  );
};

export default Mobile;