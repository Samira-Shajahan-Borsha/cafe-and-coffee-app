import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Coffee from '../Coffee/Coffee';

const Shop = () => {

    const [coffees, setCoffees] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCoffees(data));
    }, []);

    const handleAddToCart = (selectedCoffee) => {
        let newCart = [];
        const selectedCoffeeOnCart = cart.find(coffee => coffee.id === selectedCoffee.id);
        if (!selectedCoffeeOnCart) {
            newCart = [...cart, selectedCoffee];
            setCart(newCart);
        }
        else {
            alert('The product is already added in cart');
        }
    }

    const handleDelete = (selectedCoffee) => {
        let newCart = [];
        const rest = cart.filter(coffee => coffee.id !== selectedCoffee.id);
        if (selectedCoffee) {
            newCart = [...rest];
            setCart(newCart);
        }
    }

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
                                handleAddToCart={handleAddToCart}
                            ></Coffee>)
                        }
                    </div>
                </div>
                <div className="col-md-3 my-5">
                    <Cart cart={cart}
                        setCart={setCart}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default Shop;