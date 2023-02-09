import React from 'react';
import { BsCartFill } from 'react-icons/bs';

const Coffee = ({ coffee, handleAddToCart }) => {
    const { name, price, img } = coffee;
    return (
        <div className='col-md-4'>
            <div className="card h-100">
                <img src={img} alt="" className='img-fluid img-thumbnail' />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text h6">Price: ${price}</p>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <button onClick={() => handleAddToCart(coffee)} type="button" className="btn btn-dark w-75">Add To Cart <BsCartFill className='ms-4'/> </button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;