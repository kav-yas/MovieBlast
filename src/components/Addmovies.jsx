import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";

const backgroundImage = "https://i.pinimg.com/736x/bc/15/28/bc1528ba65c8cdc64a2707175363509f.jpg"

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    genre: "",
    rating: "",
    poster: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = () => {
    console.log("New Movie Added:", movie);
    alert("Movie added successfully!");
    setMovie({ title: "", year: "", genre: "", rating: "", poster: "" });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Add a New Movie
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Movie Title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Release Year"
            name="year"
            value={movie.year}
            onChange={handleChange}
            margin="normal"
            required
            type="number"
          />
          <TextField
            fullWidth
            label="Genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="IMDb Rating"
            name="rating"
            value={movie.rating}
            onChange={handleChange}
            margin="normal"
            required
            type="number"
            inputProps={{ step: "0.1", min: "0", max: "10" }}
          />
          <TextField
            fullWidth
            label="Poster Image URL"
            name="poster"
            value={movie.poster}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddMovie}
            style={{ marginTop: 20 }}
          >
            Add Movie
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddMovie;
