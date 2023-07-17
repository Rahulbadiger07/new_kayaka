import { styled } from "@mui/material/styles";

import Slider from "react-slick";

 const AppSlider = styled(Slider)`

  width: 100%;

  .slick-track {

    display: flex;
    padding-bottom:"10px";

    // padding: 30px 0 30px 0;

    //overflow: hidden;

  }

  .slick-slide {

    display: flex;

    justify-content: center;

    margin-bottom: 1;
    padding-bottom:"10px";


    // overflow: hidden;

    outline: none;

  }

  .slick-list {
  

    overflow: hidden;

  }

`;




export default AppSlider