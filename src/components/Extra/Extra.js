import React from 'react';

const Extra = () => {
    return (
        <div className='container w-75 my-5'>
            <div>
                <h2>Props Vs State:</h2>
                <ul>
                    <li>Props are read only whereas states are not read only.</li>
                    <li>Props can never be changed/updated. Every state has a function to update it's value</li>
                    <li>State is a hook which can be changed where a button is clicked or any user interaction happens. If user doesn't interact, the state will not be changed.</li>
                    <li>State stays where it is declared. If there's any need to send state in child component, it can be sent via props.</li>
                    <li>Props and state both work in unidirectional way.</li>
                </ul>
            </div>
            <div>
                <h2>How useState works?</h2>
                <p>useState is a React hook which always takes a default value. The deafult value is used to set for initial render. This initial value can be any type. But there's a special behaviour of this function. <br />
                The useState returns an array which has two elements. One is the current state another one is 'set function'. This 'set function' is used to update the initial state variable. </p>
            </div>
        </div>
    );
};

export default Extra;