import React, { useEffect, useState } from 'react';

const Allproduct = () => {
    const [data, setData]= useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Allproduct;