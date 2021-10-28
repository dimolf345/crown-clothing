import React from "react";
import './custom-button.styles.scss'



const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <div>
            <button {...otherProps} className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`}>
                 {children}
            </button>
        </div>
    )
}


export default CustomButton;