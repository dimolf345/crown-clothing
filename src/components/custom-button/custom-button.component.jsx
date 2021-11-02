import React from "react";
import './custom-button.styles.scss'



const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <div>
            <button {...otherProps} className={`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google-sign-in': ''} custom-button`}>
                 {children}
            </button>
        </div>
    )
}


export default CustomButton;