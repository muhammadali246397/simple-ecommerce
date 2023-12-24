import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='text-center font-semibold text-black w-full h-12 space-x-4 shadow-md bg-slate-100 flex justify-center items-center '>
                <Link className='hover:text-red-900' to='/'>All product</Link>
                <Link className='hover:text-red-900' to='/signUp'>SignUp</Link>
            </div>
        </div>
    );
};

export default Navigation;