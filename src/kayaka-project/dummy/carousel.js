function SampleNextArrow(props) {


    const { className, style, onClick, onMouseEnter } = props;
  
    // let handleVisible = ()=>{
  
    //     className.style.display='flex'
  
  
  
  
    // }
    return (
  
      <div
  
        className={className}
  
        style={{
  
          ...style,
  
          //   display: "none",
  
          display: "flex",
  
          background: "#421c52",
  
          position: "absolute",
  
          right: 4,
  
          borderRadius: "25px",
  
          height: "30px",
  
          width: "30px",
  
          justifyContent: "center",
  
          alignItems: "center",
  
          paddingTop: "3px",
  
        }}
  
        onClick={onClick}
  
        // onMouseEnter={handleVisible}
  
      />
  
    );
  
  }
  
  function SamplePrevArrow(props) {
  
    const { className, style, onClick } = props;
  
    return (
  
      <div
  
        className={className}
  
        style={{
  
          ...style,
  
          display: "flex",
  
          background: "#421c52",
  
          position: "absolute",
  
          left: 4,
  
          borderRadius: "25px",
  
          height: "30px",
  
          width: "30px",
  
          justifyContent: "center",
  
          alignItems: "center",
  
          paddingTop: "3px",
  
          zIndex: 22,
  
        }}
  
        onClick={onClick}
  
      />
  
    );
  
  }
  
  export const settings = {
  
    infinite: true,
  
    speed: 500,
  
    slidesToShow: 2,
  
    slidesToScroll: 1,
  
    initialSlide: 0,
  
    autoplay: true,
  
    // autoplaySpeed: 2000,
  
    //pauseOnHover: true,
  
    arrows: true,
  
    nextArrow: <SampleNextArrow />,
  
    prevArrow: <SamplePrevArrow />,
  
    responsive: [
  
      {
  
        breakpoint: 1536,
  
        settings: {
  
          slidesToShow: 3,
  
          slidesToScroll: 1,
  
          arrows: true,
  
        },
  
      },
  
      {
  
        breakpoint: 1280,
  
        settings: {
  
          slidesToShow: 3,
  
          slidesToScroll: 1,
  
          arrows: true,
  
        },
  
      },
  
      {
  
        breakpoint: 1100,
  
        settings: {
  
          slidesToShow: 2,
  
          slidesToScroll: 1,
  
          arrows: true,
  
        },
  
      },
  
      {
  
        breakpoint: 950,
  
        settings: {
  
          slidesToShow: 2,
  
          slidesToScroll: 1,
  
          arrows: true,
  
        },
  
      },
  
      {
  
        breakpoint: 800,
  
        settings: {
  
          slidesToShow: 1,
  
          slidesToScroll: 1,
  
          arrows: true,
  
        },
  
      },
  
    ],
  
  };