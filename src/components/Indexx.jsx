import React from 'react'

import { Container, Typography, Box } from "@mui/material";

const backgroundImage = "https://i.pinimg.com/736x/bc/15/28/bc1528ba65c8cdc64a2707175363509f.jpg"

const Indexx = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        color: "white",
        textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          WELCOME TO MOVIE-BLAST
        </Typography>
        <Typography variant="h5" gutterBottom>
          "Movies aren't just stories, they're a whole vibe. Grab your popcorn and let's roll! 🍿🎬🔥"
        </Typography>
      </Container>
    </Box>
  );
};



export default Indexx