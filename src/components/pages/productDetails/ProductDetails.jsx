import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="border py-20 grid grid-cols-2">
                    <div className='w-4/6 mx-auto '>
                        <img src={product.image} className=" rounded-lg w-full shadow-2xl" />
                    </div>
                    <div className=''>
                        <h1 className="text-5xl font-bold">{product.title}</h1>
                        <h4 className='font-semibold my-4'>Color veriation :</h4>
                        <div className='flex gap-2'>
                            {
                                product.colorVariations?.map((color, ind) => <div key={ind}>
                                    <button style={{ background: color }} className='w-5 h-5 border-2 hover:border-red-900 '></button>
                                </div>)
                            }
                        </div>
                        <h4 className='font-semibold my-4'>Size veriation :</h4>

                        <div className='flex gap-4'>
                            {
                                product.sizeVariations?.map((size, ind) => <div key={ind}>

                                    <button className='px-4 py-2 border-2 hover:border-red-900'>{size}</button>

                                </div>)
                            }
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-around'>
                            <div>

                            </div>
                            <button className="px-4 py-2 border-2 hover:border-red-900">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;