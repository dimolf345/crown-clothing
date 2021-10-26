import React from "react";
import { withRouter } from "react-router-dom"; //HoC


import './menu-item.style.scss';


 const MenuItem = ({title, imageUrl, size, history, linkUrl, match})=> {
    return (
    <div 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}
        className= {`menu-item ${size}`}>
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


export default withRouter(MenuItem);