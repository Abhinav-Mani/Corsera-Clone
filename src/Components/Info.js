import React from 'react';
import "../Styles/Info.scss"

const Info = ({info}) => {
    return (
    <div className="info"> 
        <h4>{info.title}</h4>
        <h3>{info.meta}</h3>
        <div className="divider"></div>
        <p>
            <span>
                {info.desc}
            </span>
        </p>
    </div>
     );
}
 
export default Info;