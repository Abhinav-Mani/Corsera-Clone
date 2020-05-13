import React from 'react';
import NavBar from "./Components/NavBar"
import Banner from './Components/Banner';
import Parteners from "./Components/Parteners"
import Achieve from './Components/Achieve';
import PromoAdd from './Components/PromoAdd';
import ValueProps from './Components/ValueProps';
import SocialSlider from './Components/SocialSlider';
import PromoAdd2 from "./Components/PromoAdd2"
import LeftImageInfo from './Components/LeftImageInfo';
import FooterTop from './Components/FooterTop';

function App() {
  const buissenessInfo={
    data:{
        meta:"Coursera for Business",
        desc:"We’ve got the solution: world-class training and development programs developed by top universities and companies. All on Coursera for Business.",
        width:386
    },
    img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/offerings2.png?auto=format%2Ccompress&dpr=2&w=386&h="
  }
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Parteners/>
      <Achieve/>
      <PromoAdd/>
      <ValueProps/>
      <SocialSlider/>
      <PromoAdd2/>
      <div style={{marginTop:40,marginBottom:40}}>
      <LeftImageInfo  data={buissenessInfo}/>
      </div>
      <FooterTop/>
    </div>
  );
}

export default App;
