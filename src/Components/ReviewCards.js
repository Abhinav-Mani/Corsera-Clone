import React from 'react';
import "../Styles/ReviewCards.scss"

const ReviewCards = ({person}) => {
    return (
        <div className="review-card">
            <div className="imageContainer">
            <img src={person.img}/>
            </div>
            <h3>{person.name}</h3>
            <h4>{person.college}</h4>
            <h4>{person.state}</h4>
            <div className="divider"></div>
            <p>
                <span>
                {person.review}
                </span>
            </p>
        </div>
    );
}
 
export default ReviewCards;