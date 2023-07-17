import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Person2Icon from "@mui/icons-material/Person2";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider, Grid, Modal, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppSlider from "../dummy/AppSlider";
import { settings } from "../dummy/carousel";
import carddata from "./cardata";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { useRef } from "react";

const IconBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(0,0,0,0.4)",
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "900px",
  height:"500px",
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,

  p: 4,
};

const IconBox2 = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(0,0,0,0.4)",
}));


const CardMain=styled(Card)(({theme})=>({
  width: 350,
  height:350,
  boxShadow:"2px 2px 2px gray",
  border:'1px solid gray',
  borderRadius:"10px",
  marginTop:"2rem",
  [theme.breakpoints.down(415)]:{
      width:250,
      height:400
  },
  [theme.breakpoints.down(315)]:{
    maxWidth:200,
    
},
[theme.breakpoints.down(290)]:{
  height:430,
  maxWidth:200,
  
}

}))

const CustomButton=styled(Button)(({theme})=>({

[theme.breakpoints.down(315)]:{
        marginTop:"-1rem"
}
}))
const Gallery = ({ data, role,onClick }) => {

  let cardRef=useRef()

  let navigate = useNavigate();
  let handleClick = (data) => {
    navigate(data);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const[ModalData,setModalData]=useState(true)


  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImage((prevImage) =>
        prevImage === role.dp.length - 1 ? 0 : prevImage + 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImage((prevImage) =>
        prevImage === 0 ? role.dp.length - 1 : prevImage - 1
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleModal=()=>{
    setModalData(!ModalData);
  }
  

  return (
    <>
      
      <Box sx={{ maxWidth: "300px", position: "relative",marginTop:"20px" }}>
        <Stack
          direction="row"
          sx={{
            zIndex: 50,
            position: "relative",
            bottom: "-20px",
            left: "10px",
            gap: "10px",
          }}
        >
          {role.role1 && (
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClick(role.path1)}
              sx={{
                bgcolor: "#f55214",
                "&:hover": { bgcolor: "#00bda6" },
              }}
            >
              {role.role1}
            </Button>
          )}
          {role.role2 && (
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClick(role.path2)}
              sx={{
                bgcolor: "#f55214",
                "&:hover": { bgcolor: "#00bda6" },
              }}
            >
              {role.role2}
            </Button>
          )}
        </Stack>

        <Card 
        onClick={handleOpen}
          sx={{
            // border:"solid red",
            // backgroundImage:`${role.dp[currentImage]}`,
            backgroundImage:`url(${role.dp[currentImage]})`,
            maxWidth: "374px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           
          }}
        >
          <CardMedia
            component="img"
            alt="Paella dish"
            src={role.dp[currentImage]}

            sx={{ height: 294,}}
            onClick={() => handleClick(data.path)}
          />

          <CardActions sx={{bgcolor:"transparent", display:"flex",alignItems:"center", justifyContent:"center" ,"&:hover": {bgcolor:"white" }}}>
        
        <Typography
              variant="h6"
              sx={{
                color: "white",
                bgcolor:"transparent",
         
                "&:hover": { color: "#ff4500" },
              }}
            >
              {data.desc}
            </Typography>
        
      </CardActions>
        </Card>

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            zIndex: 50,
            top: "50%",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconBox1 onClick={handlePrevious}>
            <KeyboardArrowLeftIcon sx={{ cursor: "pointer", color: "red" }} />
          </IconBox1>
          <IconBox2 onClick={handleNext}>
            <KeyboardArrowRightIcon sx={{ cursor: "pointer", color: "red" }} />
          </IconBox2>
        </Box>
      </Box>
    
       





      {ModalData && <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} >

  
 
        <Card 
        onClick={handleOpen}
          sx={{
            // maxWidth: "374px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // border:"solid red",
            height:"500px",
            width:"900px",
            position:"absolute",
            top:0,
            left:0


           
          }}
        >
          <CardMedia
            component="img"
            alt="Paella dish"
            src={role.dp[currentImage]}
           
            sx={{ height: "100%",width:"100%"}}
            onClick={() => handleClick(data.path)}
          />

          {/* <CardActions>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                "&:hover": { color: "#ff4500" },
              }}
            >
              {data.desc}
            </Typography>
          </CardActions> */}
           <Box
          sx={{
            display: "flex",
            position: "absolute",
            zIndex: 50,
            top: "50%",
            // left:0,
            justifyContent: "space-between",
            width: "100%",
            // border:"solid red",
            
          }}
        >
          <IconBox1 onClick={handlePrevious}>
            <KeyboardArrowLeftIcon sx={{ cursor: "pointer", color: "red" }} />
          </IconBox1>
          <IconBox2 onClick={handleNext}>
            <KeyboardArrowRightIcon sx={{ cursor: "pointer", color: "red" }} />
          </IconBox2>
        </Box>
        </Card>

       
      </Box>
      
</Modal> }
 
    </>
  );
};

export default Gallery;
