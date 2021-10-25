import React from "react";
import './menu-item.style.scss';


 const MenuItem = ({title, imageUrl, size})=> {
    return (
    <div className= {`menu-item ${size}`}>
        <div style= {{backgroundImage: `url(${imageUrl})`}} 
            className="background-image" />
            <div className="content">
                <h1 className="title">
                 {title.toUpperCase()}
                </h1>
                <span>SHOP NOW</span>
            </div>
        </div>
    )
}


export default MenuItem;