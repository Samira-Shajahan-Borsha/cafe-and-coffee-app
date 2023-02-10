import React from 'react';

const FreeCoffee = ({ freeCoffee }) => {
    const {name} = freeCoffee;
    return (
        <div>
            <p>This "{name}" is free for you.</p>
        </div>
    );
};

export default FreeCoffee;