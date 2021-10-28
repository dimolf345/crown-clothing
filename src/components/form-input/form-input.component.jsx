import React from 'react'
import './form-input.styles.scss'


const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="group">
            <input
                {...otherProps}
                onChange={handleChange} 
                className="form-input" />
        
        {label? 
        (<label className=
            {`${otherProps.value.lenght? 'shrink' : ''} form-input-label`}>{label}
        </label>) : null 
        }
        </div>
    )
}



export default FormInput
