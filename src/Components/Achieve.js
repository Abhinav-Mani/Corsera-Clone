import React from 'react';
import "../Styles/Achieve.scss"
import AchieveCard from './AchieveCard';

const Achieve = () => {
    const achieves=[{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaLearn.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
        title:"Learn the latest skills ",
        desc:"like business analytics, graphic design, Python, and more"
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/teacher-img.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
        title:"Get ready for a career",
        desc:"in high-demand fields like IT, AI and cloud engineering"
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaColorCertificate.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
        title:"Earn a certificate or degree ",
        desc:"from a leading university in business, computer science, and more"
    },{
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/SvgaCommunity.svg?auto=format%2Ccompress&dpr=2&w=&h=55",
        title:"Upskill your organization ",
        desc:"with on-demand training and development programs"
    }];
    return ( 
        <section className="container achieve">
            <h2>Achieve your goals with Coursera</h2>
            <div className="row">
                {
                    achieves.map(achieve=>(
                        <div className="col-md-3">
                            <AchieveCard achieve={achieve}/>
                        </div>
                    ))
                }
            </div>
        </section>
     );
}
 
export default Achieve;