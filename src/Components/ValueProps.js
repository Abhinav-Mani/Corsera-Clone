import React from 'react';
import "../Styles/ValueProps.scss"
import RightImageInfo from './RightImageInfo';
import LeftImageInfo from "./LeftImageInfo"
const ValueProps = () => {
    const info=[{
        data:{
            title:"Top Quality",
            desc:"Start streaming on-demand video lectures today from top instructors in subjects like business, computer science, data science, language learning, & more.",
            meta:"Learn from leading universities and companies",
            width:595
        },
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/andrewng.png?auto=format%2Ccompress&dpr=2&w=695&h="
    },{
        data:{
            title:"Accessible",
            meta:"Find flexible, affordable options",
            desc:"Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online.",
            width:386
        },
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/offerings2.png?auto=format%2Ccompress&dpr=2&w=386&h="
    },{
        data:{
            title:"Applied Learning",
            desc:"Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners.",
            meta:"Master skills with in-depth learning",
            width:620
        },
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/quizCompletion.png?auto=format%2Ccompress&dpr=2&w=820&h="
    },{
        data:{
            title:"Shareable Certificates",
            desc:"Demonstrate your new skills by sharing your Course Certificate, Professional Certificate, MasterTrack™ Certificate, or diploma with your network.",
            meta:"Earn industry-recognized credentials",
            width:546
        },
        img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-story/how-it-works/certificates4.png?auto=format%2Ccompress&dpr=2&w=546&h="
    }
]
    return ( 
        <section className="value-props">
            <h3>World-class learning for anyone, anywhere</h3>
            <RightImageInfo data={info[0]}/>
            <br/>
            <br/>
            <br/>
            <LeftImageInfo data={info[1]}/>
            <br/>
            <br/>
            <br/>
            <RightImageInfo data={info[2]}/>
            <br/>
            <br/>
            <br/>
            <LeftImageInfo data={info[3]}/>
            <br/>
            <br/>
            <br/>
        </section>
     );
}
 

export default ValueProps;