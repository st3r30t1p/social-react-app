import React from 'react';

export const required = (value) => {
    if(!value) {
        return 'Field is required';
    }
};

export const Input = ({input, meta: {touched, error, warning}, ...props}) => {
    console.log(touched, error, warning);
   return (
        <div>
            <input {...input} {...props}/>
            {touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        </div>)
};