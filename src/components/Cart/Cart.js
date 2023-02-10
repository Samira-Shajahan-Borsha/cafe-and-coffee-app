import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import FreeCoffee from '../FreeCoffee/FreeCoffee';

const Cart = ({ cart }) => {

    const [freeCoffee, setFreeCoffee] = useState({});
    const [showOffer, setShowOffer] = useState(false);

    const handleChooseOne = (cart) => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const item = cart[randomNumber];
        setFreeCoffee(item);
    }

    useEffect(() => {
        if (cart.length > 0) {
            setShowOffer(true);
        }
        else {
            setShowOffer(false);
        }
    }, [cart])


    return (
        <div className="card mb-3 p-4">
            <p>Selected Items: {cart.length}</p>
            <div className="card-body">
                {
                    cart.map((coffee, index) => <h5
                        key={index} className="card-title"
                    >{coffee.name} <BiTrash /></h5>)
                }
                <button onClick={() => handleChooseOne(cart)} type="button" className="btn btn-outline-primary btn-sm mb-2" disabled={!showOffer}>Choose one for me</button>
                {
                    Object.keys(freeCoffee).length > 0 && (<FreeCoffee freeCoffee={freeCoffee}></FreeCoffee>)
                }
                <button type="button" className="btn btn-outline-secondary btn-sm">Choose again</button>
            </div>
        </div>
    );
};

export default Cart;