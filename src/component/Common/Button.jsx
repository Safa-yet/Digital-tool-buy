import React from 'react';

const Button = ({btn="Get Started",className="text-white linear"}) => {
    return (
        <div>
            <button className={`${className} btn btn-lg  rounded-full `}>{btn}</button>
        </div>
    );
};

export default Button;