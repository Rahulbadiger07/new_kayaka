import React from 'react'

import { Box, Grid, Stack, Typography } from '@mui/material'
import css from "../styles/MuiCard.module.css"
import CardItems from './CardItems'



const Data = [
    {
      id:"1",
      name:"JOHN DUE",
      photo:new URL("https://shtheme.com/demosd/eduvisionwp/wp-content/uploads/2017/08/team-img1.jpg"),
      designation:"Finance Teacher",
      description:"Lorem ipsum dolor sit amet,consec tetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Uwisi enim adi min veniam."
    },
    {
      id:"2",
      name:"ADAM SMITH",
      photo:new URL("https://shtheme.com/demosd/eduvisionwp/wp-content/uploads/2017/08/9k-copy-2.jpg"),
      designation:"Language Teacher",
      description:"Lorem ipsum dolor sit amet,consec tetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Uwisi enim adi min veniam."    },
    {
      id:"3",
      name:"ARENA SILVA",
      photo:new URL("https://shtheme.com/demosd/eduvisionwp/wp-content/uploads/2017/08/team-img2.jpg"),
      designation:"Computer Teacher",
      description:"Lorem ipsum dolor sit amet,consec tetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Uwisi enim adi min veniam."
    },
    {
      id:"4",
      name:"RICKY POINTING",
      photo:new URL("https://shtheme.com/demosd/eduvisionwp/wp-content/uploads/2017/08/team-img3.jpg"),
      designation:"Math Teacher",
      description:"Lorem ipsum dolor sit amet,consec tetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Uwisi enim adi min veniam."
    }
  ]
  
  

const Cards = () => {
  return (
    <>
    <Stack   spacing={2} className={css.coursedetails} sx={{maxWidth:"100%",display:"flex",flexDirection:"column",height:"auto"}}>

   <Box  sx={{display:"flex"}}>
   <Typography variant="h3" color='#243b62'>OUR</Typography>&nbsp;&nbsp;
      <Typography  className={css.bigg}  variant="h3">TEACHERS</Typography>
   </Box>
      <Box sx={{display:"flex",flexDirection:"column"}}>
      <Typography color='#a57a7a'  variant="caption">Lorem ipsum dolor sit amet.</Typography>
      <img src="divider.png" alt="" width="190px" style={{marginLeft:"-1%"}}/>
      </Box>
    </Stack>
    <Grid container sx={{marginTop:"1%"}}>
      {Data.map((data) => (
        <React.Fragment key={data.id}>
          <Grid item xs={12} sm={6}>
            <CardItems  items={data} />
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  </>
  )
}

export default Cards