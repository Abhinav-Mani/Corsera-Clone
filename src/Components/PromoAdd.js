import React from 'react';
import "../Styles/PromoAdd.scss"

const PromoAdd = () => {
    return ( 
        <section className="promoAdd">
            <div className="topImage">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/pinkish-half-circle.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=50" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/pinkish-half-circle.svg?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=50 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/pinkish-half-circle.svg?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=50 3x" alt=""/>
            </div>
            <div className="Image">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/promoStat.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=250" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/promoStat.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=250 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/promoStat.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=250 3x" alt="3 hero images of people smiling"/>
            </div>
            <div className="Info">
                <h2>Learner outcomes on Coursera</h2>
                <p>
                    <span>
                        <strong>87% of people learning</strong> 
                        for professional development 
                        <strong>report career benefits</strong> 
                        like getting a promotion, a raise, or starting a new career
                    </span>
                </p>
                <span class="subtitle">-  Coursera Learner Outcomes Survey (2019)</span>

            </div>
            <div className="bottomImage">
                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/blue-dotted-blob-half.png?auto=format%2Ccompress&amp;dpr=1&amp;w=&amp;h=64" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/blue-dotted-blob-half.png?auto=format%2Ccompress&amp;dpr=2&amp;w=&amp;h=64 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-story/achieve-your-goals/blue-dotted-blob-half.png?auto=format%2Ccompress&amp;dpr=3&amp;w=&amp;h=64 3x" alt=""/>
            </div>
        </section>
     );
}
 
export default PromoAdd;