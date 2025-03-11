import React from 'react'
import { Card, CardContent, CardMedia, Typography, Container, Button, Grid, Grid2 } from "@mui/material";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://images2.alphacoders.com/851/85182.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://wallpapercave.com/wp/wp2695400.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Adventure",
    rating: 8.6,
    poster: "https://wallpapers.com/images/hd/interstellar-earth-top-dual-screen-fr626zcg47tpbuae.jpg",
  },
  {
    id: 4,
    title: "Marvel",
    year: 2000,
    genre: "Thriller",
    rating: 8.5,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMM_MA2O3VBQzGOiQzcBJJOmCYu9DoILPKw&s",
  },
]

const Listmvie = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Movie List
      </Typography>
      <Grid2 container spacing={3}>
        {movies.map((movie) => (
          <Grid2 item xs={12} sm={6} md={4} key={movie.id}>
            <Card sx={{ maxWidth: 345, m: "auto", boxShadow: 3 }}>
              <CardMedia component="img" height="300" image={movie.poster} alt={movie.title} />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Genre: {movie.genre}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Release Year: {movie.year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  IMDb Rating: {movie.rating}
                </Typography>
              </CardContent>
              <Button size="small" sx={{ m: 1 }} variant="contained" color="primary">
                Learn More
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};



export default Listmvie