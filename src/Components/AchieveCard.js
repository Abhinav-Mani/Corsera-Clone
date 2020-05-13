import React from 'react';
import "../Styles/AchieveCards.scss"

const AchieveCard = ({achieve}) => {
    return ( 
        <div className="achieve-card">          
            <img src={achieve.img} alt="no image"/>
            <h3>{achieve.title}</h3>
            <p>{achieve.desc}</p>
        </div>
     );
}
 
export default AchieveCard;