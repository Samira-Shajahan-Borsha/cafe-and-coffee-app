import React, { useEffect, useState } from 'react';
import Coffee from '../Coffee/Coffee';
import './Shop.css';

const Shop = () => {
    const [coffees, setCoffees] = useState([]);

    // console.log(coffees);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCoffees(data));
    }, [])

    return (
        <div>
            <h1 className='text-center  my-3'>Start your day with a black coffee</h1>
            <div className='row g-4'>
                <div className="col-md-9 my-5">
                    <div className="row g-4">
                        {
                            coffees.map(coffee => <Coffee
                                key={coffee.id}
                                coffee={coffee}
                            ></Coffee>)
                        }
                    </div>
                </div>
                <div className="col-md-3 my-5">
                    <h1>Cart container</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;