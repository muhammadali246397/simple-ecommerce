import React from 'react';
import  {Link}  from 'react-router-dom';

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <div className='px-4'>
            <div className="card  bg-base-100 shadow-md hover:shadow-xl">
                <figure className="px-10">
                    <img src={product.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                     
                            <button className="px-4 py-2 border-2 hover:border-red-900"><Link to={`/products/${product._id}`}>DETAILS</Link></button>
                            
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;