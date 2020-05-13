import React from 'react';
import "../Styles/Banner.scss";

const Banner = () => {
    return ( 
    <section className="Banner row">
        <div className="col-lg-6 text-contianer">
            <h1><strong>Your Course to Success</strong></h1>
            <h2>Build skills with courses, certificates, and degrees<br/>online from world-class universities and companies</h2>
            <button>Join for Free</button>
        </div>
        <div id="backgroungGradient"></div>
    </section> 
    );
}
 
export default Banner;