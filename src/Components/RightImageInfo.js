import React from 'react';
import Info from './Info';
import "../Styles/RightImageInfo.scss"

const RightImageInfo = ({data}) => {
    return ( 
        <div className="container right-info">
            <span className="info">
                <Info info={data.data}/>
            </span>
            <img src={data.img} alt="error" style={{maxWidth:data.data.width}}/>
        </div>
     );
}
 
export default RightImageInfo;