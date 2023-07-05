import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/MovingText.module.css";

let names = ["Rajesh-10(C)", "Suresh-9(D)", "Geeta-10(A)", "Alia-8(C)"];

const RegisterForm = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: "url(https://excellentschool.in/bday%20banner0.png)",
      }}
    >
      <Grid item xs={12} md={6}>
        {/* <Typography variant="h4" sx={{marginLeft:"50%"}}>Birthday Events</Typography> */}
        <Box sx={{ margin: "20%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>HAPPY BIRTHDAY</Typography>
            <img
              src="cake-bg3.png"
              style={{ height: "50px", width: "60px" }}
              alt=""
            />
          </Box>
          <Box
            className={styles.movingtextcontainer}
            sx={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <Typography component="div" className={styles.movingtext}>
              <ul style={{ listStyle: "none" }}>
                {names.map((names) => (
                  <li key={names}>{names}</li>
                ))}
              </ul>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ margin: "5%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color="white"
            variant="h4"
            bgcolor={"#80cd36"}
            paddingTop={4}
            paddingBottom={4}
            textAlign={"center"}
            // style={{ borderRadius: "15px 15px 0px 0px" }}
          >
            REGISTER FORM
          </Typography>

          <Stack
            spacing={2}
            sx={{
              backgroundColor: "#ffff",
              paddingTop: "30px",
              paddingBottom: "35px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "0px 0px 0.5rem 0.5rem",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required type="text"
              sx={{
                border: "none",
                backgroundColor: "#F3F3F3",
                width: "90%",
                alignSelf: "center",
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required 
              type="email"
              sx={{
                border: "none",
                backgroundColor: "#F3F3F3",
                width: "90%",
                alignSelf: "center",
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Message"
              variant="outlined" 
              sx={{
                border: "none",
                backgroundColor: "#F3F3F3",
                width: "90%",
                alignSelf: "center",
              }}
            />
            <Button
              fullWidth
              sx={{
                color: "white",
                backgroundColor: "#80cd36",
                border: "2px solid #80cd36",
                borderRadius: "5px",
                paddingTop: "10px",
                paddingBottom: "10px",
                textAlign: "center",
                width: "90%",
                fontWeight: "bold",
                alignSelf: "center",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "none",
                  color: "#80cd36",
                },
              }}
            >
              REGISTER NOW
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
