import React from 'react';

const Cart = ({ cart }) => {
    
    return (
        <div>
            <h1>Cart container</h1>
            <p>Selected Items: {cart.length}</p>
            <div className="card mb-3">
                <div className="card-body">
                    {
                        cart.map(coffee => <h5 className="card-title">{coffee.name}</h5>)
                    }
                    <button type="button" className="btn btn-outline-primary btn-sm mb-2">Choose one for me</button>
                    <button type="button" className="btn btn-outline-secondary btn-sm">Choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;