import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div>
            <div className="bg-base-200">
                <div className='w-full flex items-center justify-center'>
                    <div className="w-1/3 border-2 p-10 mb-12 mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Login</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                </label>
                                <div className="relative">
                                    <input className="input input-bordered w-full" type={passwordVisible ? "text" : "password"} placeholder="Password..." {...register("password", { required: true, maxLength: 80 })} />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        {passwordVisible ? (
                                            <FaEyeSlash className="text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        ) : (
                                            <FaEye className="text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
                                        )}
                                    </div>
                                </div>
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <input className=' btn bg-[#B2AB8C] w-full text-white hover:text-orange-600 mt-4' type="submit" value='Login' />
                            <p className='mt-2 '>New to our website? <Link className='font-bold text-orange-600' to='/signup' >Please Resister</Link></p>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;