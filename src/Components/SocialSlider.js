import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Styles/SocialSlider.scss"
import ReviewCards from './ReviewCards';

const SocialSlider = ({people}) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };

    const persons=[{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=2&w=270&h=",
        name:"Kara A.",
        state:"United States",
        college:"iMBA Graduate, University of Illinois Gies College of Business",
        review:"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=2&w=270&h=",
        name:"Kara A.",
        state:"United States",
        college:"iMBA Graduate, University of Illinois Gies College of Business",
        review:"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=2&w=270&h=",
        name:"Kara A.",
        state:"United States",
        college:"iMBA Graduate, University of Illinois Gies College of Business",
        review:"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/social-proof/kara.png?auto=format%2Ccompress&dpr=2&w=270&h=",
        name:"Kara A.",
        state:"United States",
        college:"iMBA Graduate, University of Illinois Gies College of Business",
        review:"It’s a really big deal to offer an online MBA that’s a real MBA at a price that’s achievable. This program is totally disrupting higher education."
    }]
    
    return ( 
    <section className="social-slider container">
      <h3> From the Coursera community</h3>
      <h4>45+ million people are already learning on Coursera</h4>
      <div className="content">
        <Slider {...settings}>
            {
            persons.map(person=>(
                <div>
                    {console.log(person)}
                    <ReviewCards person={person}/>
                </div>
            ))
            }
        </Slider>
      </div>
    </section>
        
     );
}
 
export default SocialSlider;