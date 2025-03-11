import React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, TextField, Paper } from "@mui/material";


const Loginn = () => {

  return (
    <div
      style={{
        backgroundImage: "url('https://th.bing.com/th/id/R.8571aa7277c351398b7e976f177bf70e?rik=crhRVQ7YL6vUOQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fBest-Images-Night-Sky.jpg&ehk=rIUDgGVYYPWQA5NmpVyiuS3D1Q5v8%2bEFWpl9qp7Mmsg%3d&risl=1&pid=ImgRaw&r=0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>

      {/* Login Form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }} >
        <Paper
          elevation={6}
          sx={{
            padding: "30px",
            width: "350px",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "20px" }}>
            LOGIN
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px", input: { color: "white" }, label: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: "15px", input: { color: "white" }, label: { color: "white" } }}
            InputLabelProps={{ style: { color: "white" } }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Paper>
      </Box>
    </div>
  );
};


export default Loginn