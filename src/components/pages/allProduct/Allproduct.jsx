import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard';

const Allproduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://sore-jade-alligator-ring.cyclic.app/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='my-20 bg-slate-100'>

            <div className='container md:px-10 mx:auto py-10zz'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        data.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Allproduct;