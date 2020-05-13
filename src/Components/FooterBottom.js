import React from 'react';
const apple = 'https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg';
const playstore = 'https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png';
const facebook = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&dpr=2&w=28&h=28';
const twitter = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&dpr=2&w=28&h=28';
const linkedin = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&dpr=2&w=28&h=28';
const instagram = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&dpr=2&w=28&h=28';

function FooterBottom() {
    return (
        <div class =" container">
            <div class ="row">
                <div class ="col-md-7 col-sm-12">
                        <div class ="row">
                            <div class ="col-md-4 col-sm-12">
                                <ul style ={{listStyle:"none"}}><li><b>Coursera</b></li></ul>
                                <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>Community</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>More</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                        </div>
                </div>
                   <div class ="col-md-5 col-sm-12">
                        <div>
                            <ul style ={{listStyle:"none"}}>
                                <li><img src ={apple} alt="" width="200" height="60"/></li>
                                <li><img src ={playstore} alt=""width="200" height="60"/></li>
                            </ul>
                        </div>
                   </div>
                </div>
                <hr/>
                <div class ="row">
                    <div class ="col-md-9 col-sm-12">
                        <p>© 2020 Coursera Inc. All rights reserved.</p>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <img src ={facebook} alt="" style={{padding:"10px",maxWidth:60}}/>
                        <img src ={linkedin} alt="" style={{padding:"10px",maxWidth:60}}/>
                        <img src ={twitter} alt="" style={{padding:"10px",maxWidth:60}}/>
                        <img src ={instagram} alt="" style={{padding:"10px",maxWidth:60}}/>
                    </div>
                </div>
            </div>
    )
}

export default FooterBottom