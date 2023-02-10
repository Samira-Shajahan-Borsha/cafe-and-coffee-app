import React, { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import FreeCoffee from '../FreeCoffee/FreeCoffee';
import './Cart.css';

const Cart = ({ cart, setCart, handleDelete }) => {

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
    }, [cart]);

    const handleChooseAgain = () => {
        setFreeCoffee({});
        setCart([]);
    }

    return (
        <div className="cart card mb-3 p-4 shadow-lg border-0">
            <h4>Selected Items: {cart.length}</h4>
            <div className="card-body">
                {
                    cart.map((coffee, index) => <h5
                        key={index} className="card-title"
                    >{coffee.name} <BiTrash className='delete-btn' onClick={() => handleDelete(coffee)} /></h5>)
                }
                <button onClick={() => handleChooseOne(cart)} type="button" className="btn btn-primary btn-sm mb-2" disabled={!showOffer}>Choose one for me</button>
                {
                    Object.keys(freeCoffee).length > 0 && cart.length > 0 && (<FreeCoffee freeCoffee={freeCoffee}></FreeCoffee>)
                }
                <button onClick={handleChooseAgain} disabled={!showOffer} type="button" className="btn btn-secondary btn-sm">Choose again</button>
            </div>
        </div>
    );
};

export default Cart;