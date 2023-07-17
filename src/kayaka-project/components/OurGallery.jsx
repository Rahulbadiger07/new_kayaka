import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Gallery from "./Gallery";
// import carddata from "./cardata";
import styles from '../dummy/cardevent.module.css'

import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const GridBox=styled(Box)(({theme})=>({
    display: "grid",
    gridTemplateColumns: "250px 250px 250px 250px",
    justifyContent: "space-evenly",
    gap: "20px",
    [theme.breakpoints.down(1000)]:{
        gridTemplateColumns: "auto auto ",
    },
    [theme.breakpoints.down(660)]:{
        gridTemplateColumns: "auto",
    }
}))

  



const TextBox=styled(Box)(({theme})=>({
    textAlign:"center"
}))

const Heading=styled(Typography)(({theme})=>({
    color:"#FF6D34",
    fontSize:"1rem",
    fontFamily:"sans-serif",
    fontWeight:"bold",
}))


const SecondHeading=styled(Typography)(({theme})=>({
    color:"#2c2c2c",
    fontWeight:"bold",
    fontSize:"2.5rem",
    fontFamily:"sans-serif",
    marginTop:"0.8rem"
}))


export default function OurGallery() {

    const[ModalData,setModalData]=useState(false)
  let sliderRef = React.useRef(null);


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[values,setValues]=useState('')

const carddata = [
    {
      desc: "Student Voting in School",
    //   path: "/card1",
      roles: [
        {
          role1: "Design",
          role2: "Development",
          price: "$200",
          path1: "/Design",
          path2: "/Development",
          buy: "/buy",
          onClick: handleOpen,
          dp:[ "https://images.pexels.com/photos/16388234/pexels-photo-16388234/free-photo-of-moscow-street-art.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/17591298/pexels-photo-17591298/free-photo-of-wood-city-street-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/17215283/pexels-photo-17215283/free-photo-of-bird-water-animal-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],

          dpPath: "/dp1",
        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    //   path: "/card2",
      roles: [
        {
          role1: "Photo",
          price: "$100",
          path1: "/Photo",
          dpPath: "/dp2",
          buy: "/buy",
  
          dp:[ "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg","https://live.staticflickr.com/5023/5646102132_4486c65e22_c.jpg","https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    //   path: "/card3",
      roles: [
        {
          role1: "Languages",
          price: "$100",
          path1: "/Languages",
          dpPath: "/dp3",
          buy: "/buy",
  
          dp:[ "https://images.pexels.com/photos/17458347/pexels-photo-17458347/free-photo-of-summer-pattern-texture-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/15222280/pexels-photo-15222280/free-photo-of-blurred-walking-person-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/17577062/pexels-photo-17577062/free-photo-of-montmartre-sacre-coeur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000",
    //   path: "/card4",
      roles: [
        {
          role1: "Design",
          role2: "Development",
          price: "Free",
          path1: "/Design",
          path2: "/Development",
          dpPath: "/dp4",
          buy: "/buy",
  
          dp:[ "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg","https://live.staticflickr.com/5023/5646102132_4486c65e22_c.jpg","https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://t3.ftcdn.net/jpg/04/36/67/54/360_F_436675446_jGWzkVDah3b6ONZxhhN13s6I4iFnjLGJ.jpg",
    //   path: "/card5",
      roles: [
        {
          role1: "Phychology",
          price: "$100",
          path1: "/Phychology",
          dpPath: "/dp5",
          buy: "/buy",
  
          dp:[ "https://images.pexels.com/photos/17228932/pexels-photo-17228932/free-photo-of-california-surfer-beach-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    //   path: "/card6",
      roles: [
        {
          role1: "Technology",
          price: "$300",
          path1: "/Technology",
          dpPath: "/dp6",
          buy: "/buy",
  
          dp:[ "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg","https://live.staticflickr.com/5023/5646102132_4486c65e22_c.jpg","https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ=",
    //   path: "/card7",
      roles: [
        {
          role1: "Development",
          price: "$200",
          path1: "/Development",
          dpPath: "/dp7",
          buy: "/buy",
  
          dp:[ "https://images.pexels.com/photos/14958090/pexels-photo-14958090/free-photo-of-aerial-view-of-hills-in-the-death-valley.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://live.staticflickr.com/5023/5646102132_4486c65e22_c.jpg","https://images.pexels.com/photos/17568714/pexels-photo-17568714/free-photo-of-subway-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"],

        },
      ],
    },
    {
      // name: "React",
      desc: "Student Voting in School",
      onClick: handleOpen,

      image:
        "https://live.staticflickr.com/5023/5646102132_4486c65e22_c.jpg",
    //   path: "/card8",
      roles: [
        {
          role1: "Business",
          price: "$300",
          path1: "/Business",
          dpPath: "/dp8",
          buy: "/buy",
          dp:[ "https://images.pexels.com/photos/15222280/pexels-photo-15222280/free-photo-of-blurred-walking-person-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/15740547/pexels-photo-15740547/free-photo-of-the-courtyard-of-the-sheikh-zayed-grand-mosque-in-abu-dhabi-united-arab-emirates.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="]
        //   images:[ "https://i.pinimg.com/236x/15/49/08/154908b6e42458d2d1cb6f5b7b2864a1.jpg", "https://i.pinimg.com/236x/15/49/08/154908b6e42458d2d1cb6f5b7b2864a1.jpg", "https://i.pinimg.com/236x/15/49/08/154908b6e42458d2d1cb6f5b7b2864a1.jpg"]
       
        },
        
      ],
    },
  ];


  let navigate = useNavigate();
  

  return (
    <>
      {/* <Grid container>
        <Grid item xs={12} md={12} lg={12} sm={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "5vh",
            }}
          >
            <Typography variant="caption" sx={{ color: "#f55214" }}>
              DISCOVER NEW
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Our Top Online Courses
            </Typography>
            <Grid item xs={12} md={8} lg={7} sm={8} sx={{ marginTop: "5vh" }}>
              <Typography component="div" variant="body1">
                We’ll then ask you to tell us your current level of English or
                invite you to take our quick 20 minute placement test so we can
                make sure you start learning English at the level that’s right
                for you
              </Typography>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "5vh",
            }}
          >
            {courses.map((data, i) => {
              return (
                <React.Fragment key={i}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", "&:hover": { color: "#00bda6" } }}
                  >
                    {data}
                  </Typography>
                </React.Fragment>
              );
            })}
          </Box>
          

        </Grid>
      </Grid> */}

      <TextBox>
              <Heading>DISCOVER NEW</Heading>
              <SecondHeading>Our Top Events</SecondHeading>
             
                </TextBox>
      <Box>
             
              <ul className={styles.list}>
                <li style={{borderLeft:"3px solid #DFDFDF",paddingLeft:"0.5rem",color:"#00BDA6"}}>ALL</li>
                <li onClick={(e)=>setValues(e.target.value)}>BUSINESS</li>
                <li>DESIGN</li>
                <li>DEVELOPMENT</li>
                <li>LANGUAGES</li>
                <li>MANAGEMENT</li>
                <li>PHOTO</li>
                <li>PSYCHOLOGY</li>
                <li>TECHNOLOGY</li>
              </ul>
             
          </Box>

      <GridBox
      
      >
        {carddata.map((items, i) => {
          return (
            <React.Fragment key={i}>
              {items.roles && items.roles.map((subitem, i) => {
                return (
                    <React.Fragment key={i}>
                    <Gallery  role={subitem} data={items} onClick={items.onClick} />
                    </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </GridBox>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            bgcolor: "#00bda6",
            color: "white",
            border: "solid #00bda6",
            "&:hover": { bgcolor: "transparent", color: "black" },
          }}
        >
          View Courses
        </Button>
      </Box>


       {/* <Button onClick={handleOpen}>Open modal</Button> */}
{ModalData && <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  
    {carddata.map((data,i)=>{
        return(
            <>
            {data.roles.map((items,i)=>{
                return(
                    <Box sx={{position:"absolute",top:0,height:"500px",width:"800px"}}>
                    <img src={items.dp} style={{height:"500px",width:"800px"}} alt="" />
                    </Box>
                )
                    
            })}
            </>
        )
    })}
  </Box>
</Modal> }
    </>
  );
}

