import React from 'react';

const FreeCoffee = ({ freeCoffee }) => {
    const { name } = freeCoffee;
    return (
        <div>
            <p>This <span className='fw-semibold'>{name}</span> is free for you.</p>
        </div>
    );
};

export default FreeCoffee;