import React, { useEffect, useState } from "react";
import "./Mobile.css";
import axios from "axios";
import Mobile from "./Mobile";
const URL = "http://localhost:2000/mobiles";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Mobiles = () => {
  const [mobiles, setMobiles] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setMobiles(data.mobiles));
  }, []);
  console.log(mobiles);
  return (
    <div>
      <ul>
        {mobiles &&
          mobiles.map((mobile, i) => (
            <li key={i}>
              <Mobile mobile={mobile} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Mobiles;
