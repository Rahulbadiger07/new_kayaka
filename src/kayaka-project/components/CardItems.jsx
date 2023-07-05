import { Box, Grid,  Typography } from '@mui/material'
import React from 'react'
import css from "../styles/MuiCard.module.css";
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import TwitterIcon from "@mui/icons-material/Twitter";


const CardItems = ({items}) => {
  return (
    <Box sx={{ margin: "5%" }}>
        <Grid container  className={css.mainGrid} >
        <Grid item xs={12} md={6} className={css.primaryGrid} >
            <img className={css.pic} style={{height:"310px",width:"252px"}} src={items.photo} alt="no img" />

            <Box className={css.mainLogo}>
              <Box className={css.facebookLogo}>
                <TiSocialFacebook color="white" />
              </Box>
              <Box className={css.twitterLogo}>
                <TwitterIcon sx={{ color: "white" }} />
              </Box>
              <Box className={css.linkdinLogo}>
              
                <FaLinkedinIn color="white" />
              </Box>
            </Box>
        </Grid>
        <Grid item className={css.secondaryGrid} xs={12} md={6} sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
            <Typography sx={{fontWeight:"bold"}}  className={css.heading}>{items.name}</Typography>
            <Typography  className={css.designation}>{items.designation}</Typography>
            <Typography className={css.description}>{items.description}</Typography>
            <Typography  className={css.footname} >READ MORE</Typography>
           
        </Grid>
    </Grid>
    </Box>
  )
}

export default CardItems