
import './App.css';
import CircularNavbarMenu from './kayaka-project/components/CircularNavbarMenu';
import LoginForm from './kayaka-project/components/LoginForm';
import NoticeAndNews from './kayaka-project/components/NoticeAndNews';
import RadialScrollBar from './kayaka-project/components/RadialScrollBar';
import RegisterForm from './kayaka-project/components/RegisterForm';
import TeachersCard from './kayaka-project/components/TeachersCard';
import VisionMission from './kayaka-project/components/VisionMission';
import Fire from './kayaka-project/components/CelebAnime';
import Test from './kayaka-project/dummy/Test';
import Triangle from './kayaka-project/dummy/Triangle';
import Vision from './kayaka-project/dummy/Vision';
import Waves from './kayaka-project/dummy/Waves';
import Parallel from './kayaka-project/dummy/Parallel';
import RocketAnimation from './kayaka-project/dummy/RocketAnimation';
import AutoScroll from './kayaka-project/dummy/AutoScroll';
import OurGallery from './kayaka-project/components/OurGallery';
import { BrowserRouter } from 'react-router-dom';
import CardEvent from './kayaka-project/dummy/CardEvent';
import CardEventMain from './kayaka-project/dummy/CardEventMain';


function App() {
  return (
   
    <div className="App">
    {/* <TeachersCard/> */}
    {/* <VisionMission/> */}
     {/* <RegisterForm/>  */}
    {/* <NoticeAndNews/>  */}
    <LoginForm/>  
     {/* <AutoScroll/> */}

      {/* <Triangle/> */}
      {/* <Parallel/> */}
      <BrowserRouter>
    <OurGallery/>
    <CardEventMain/>

    {/* <Vision/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
