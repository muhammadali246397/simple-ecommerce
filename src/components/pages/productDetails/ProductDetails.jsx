import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product)
    const [cart,setCart]=useState([])
    const addToCart = () => {
        fetch('https://sore-jade-alligator-ring.cyclic.app/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response (update UI, show notifications, etc.)
                console.log('Added to cart:', data.cart);
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="border py-20 grid md:grid-cols-2">
                    <div className='md:w-4/6 px-4 mx-auto '>
                        <img src={product.image} className=" rounded-lg w-full shadow-2xl" />
                    </div>
                    <div className='px-4'>
                        <h1 className="text-4xl font-bold">{product.title}</h1>
                        <h4 className='font-semibold my-2'>Color veriation :</h4>
                        <div className='flex gap-2'>
                            {
                                product.colorVariations?.map((color, ind) => <div key={ind}>
                                    <button style={{ background: color }} className='w-5 h-5 border-2 hover:border-red-900 '></button>
                                </div>)
                            }
                        </div>
                        <h4 className='font-semibold my-2'>Size veriation :</h4>

                        <div className='flex gap-4'>
                            {
                                product.sizeVariations?.map((size, ind) => <div key={ind}>

                                    <button className='px-4 py-2 border-2 hover:border-red-900'>{size}</button>

                                </div>)
                            }
                        </div>
                        <h4 className='font-semibold mt-2'>Price: $60</h4>
                        <p className="py-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-around'>
                            <div>

                            </div>
                            <button onClick={addToCart} className="px-4 py-2 border-2 hover:border-red-900">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;