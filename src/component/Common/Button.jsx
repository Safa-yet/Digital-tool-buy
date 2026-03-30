import React from 'react';

const Button = ({btn="Get Started",className="text-white linear btn btn-lg  rounded-full"}) => {
    return (
        <div>
            <button className={className}>{btn}</button>
        </div>
    );
};

export default Button;