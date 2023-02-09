import React from 'react';

const Coffee = ({ coffee }) => {
    const { name, price, img } = coffee;
    console.log(coffee)
    return (
        <div className='col-md-4'>
            <div className="card h-100">
                <img src={img} alt="" className='img-fluid rounded img-thumbnail' />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text h6">Price: ${price}</p>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <button type="button" class="btn btn-dark w-75">Add To Cart</button>
                </div>

            </div>

        </div>
    );
};

export default Coffee;