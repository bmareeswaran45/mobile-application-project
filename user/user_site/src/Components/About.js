import { Box,  Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div className="la">
      <Box display="flex" flexDirection="column" alignItems="center">

      <Typography sx={{ fontFamily: "Raleway" }} variant="h2" >
          WELCOME 
        </Typography>

        <Typography sx={{ fontFamily: "Arial" }} variant="h2" >
          CJ MOBILES & ACCESSORIES
        </Typography>

        <Typography sx={{ fontFamily: "Arial" }} variant="h3">
          All Mobiles Are Available 
        </Typography>
      </Box>
    </div>
  );
};

export default About;
