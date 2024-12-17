import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
