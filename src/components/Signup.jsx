import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, TextField, Container, Grid2 } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Signup = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1317857006/photo/beautiful-sunset-at-the-sea.jpg?s=612x612&w=0&k=20&c=FP-6VYNWNrM6i4w5QlegCT2otN_z966rJFKqgVdF4Pg=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}>
      
      {/* Signup Form */}
      <Container>
        <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: "80vh" }}>
          <Grid2 item xs={12} sm={8} md={6} style={{ textAlign: "center", background: "rgba(0, 0, 0, 0.6)", padding: "20px", borderRadius: "10px",width: "50%" }}>
            {/* <Typography variant="h4">FLAT SIGN UP FORM</Typography> */}
            <Typography variant="h5" style={{ margin: "20px 0" }}>
              SIGN UP
            </Typography>
            <TextField label="First Name" fullWidth margin="normal" variant="outlined" InputLabelProps={{ style: { color: "Grey" } }} InputProps={{ style: { color: "white" } }} />
            <TextField label="Last Name" fullWidth margin="normal" variant="outlined" InputLabelProps={{ style: { color: "Grey" } }} InputProps={{ style: { color: "white" } }} />
            <TextField label="Phone Number" fullWidth margin="normal" variant="outlined" InputLabelProps={{ style: { color: "Grey" } }} InputProps={{ style: { color: "white" } }} />
            <TextField label="Email" fullWidth margin="normal" variant="outlined" InputLabelProps={{ style: { color: "Grey" } }} InputProps={{ style: { color: "white" } }} />
            <TextField label="Password" type="password" fullWidth margin="normal" InputLabelProps={{ style: { color: "Grey" } }} variant="outlined" InputProps={{ style: { color: "white" } }} />
            <TextField label="Confirm Password" type="password" fullWidth margin="normal" variant="outlined" InputLabelProps={{ style: { color: "Grey" } }} InputProps={{ style: { color: "white" } }} />
            <Button variant="contained" fullWidth style={{ marginTop: "20px", backgroundColor: "#ff4081" }}>
              SIGN UP
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Signup;
