import React from 'react';
import Info from './Info';
import "../Styles/LeftImageInfo.scss"

const LeftImageInfo = ({data}) => {
    return ( 
        <div className="container left-info">
            <img src={data.img} alt="error" style={{maxWidth:data.data.width}}/>
            <span className="info">
                <Info info={data.data}/>
            </span>
        </div>
     );
}
 
export default LeftImageInfo;