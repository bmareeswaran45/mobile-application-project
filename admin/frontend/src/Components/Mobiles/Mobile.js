import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
    // <div className="card">
    //   <img src={image} alt={name} />
    //   <article>By {brand}</article>
    //   <h3>{name}</h3>
    //   <p>{model}</p>
    //   <h3>Rs {price}</h3>
    //   <div className="button">
    //   <Button LinkComponent={Link} to={`/mobiles/${_id}`} sx={{ mt: "auto" }}>
    //     Update
    //   </Button>
    //   </div>
    //   <div className="button1">
    //   <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
    //     Delete
    //   </Button>
    //   </div>
    // </div>
    <div className="row">
      <div className="card">
        <div className="card-header">
        <img src={image} alt={name}/>
        </div>
        <div className="card-body">
        <article>By {brand}</article>
         <h3>{name}</h3>
         <p>{model}</p>
         <h3>Rs {price}</h3>

         <Button LinkComponent={Link} to={`/mobiles/${_id}`} sx={{ mt: "auto" }}>
           Update
         </Button>

         <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
           Delete
         </Button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;