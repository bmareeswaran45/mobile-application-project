import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/Mobiles"
          sx={{ marginTop: 15, background: "greenyellow" }}
          variant="contained"
        >
          <Typography variant="h3">VIEW MY MOBILES</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
