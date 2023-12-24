import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [confirmpass, setConfirmPass] = useState('');
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)


                const userInfo = { userName: data.name, Email: data.email,password:data.password, photoURL: data.photo,cart:[]}

                fetch('https://sore-jade-alligator-ring.cyclic.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId){
                            reset()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Resister successfully',
                                showConfirmButton: false,
                                timer: 1000
                              })
                            navigate('/')
                        }
                    })


            })
            .catch(error => {
                console.log(error)
            })

    }

    const validateConfirmPassword = (value) => {
        if (value !== confirmpass) {
            return 'Passwords do not match';
        }
        return true;
    };

    return (
        <div>
            <div className="bg-base-100">

                <div className='w-full flex items-center justify-center'>
                    <div className="w-1/2 border-2 p-10 mb-12 mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Resister</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            <div style={{ justifyContent: 'space-between' }} className="flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Name <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Name..." {...register("name", { required: true, maxLength: 80 })} />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="email" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            <div style={{ justifyContent: 'space-between' }} className="flex">
                                <div style={{ width: '270px' }} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="Name..." {...register("password", { required: true, maxLength: 80, validate: validateConfirmPassword })} />
                                    {errors.password && <span className='text-warning'>{errors.password.message}</span>}
                                </div>
                                <div style={{ width: '270px' }} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Confirm Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="Confirm Password..." {...register("confirmpass", { required: true, maxLength: 80, validate: validateConfirmPassword })}
                                        onChange={(e) => setConfirmPass(e.target.value)} />
                                    {/* {errors.confirmpass && <span>password not matching</span>} */}
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Photo URL <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Photo URL..." {...register("photo", { required: true, maxLength: 80 })} />
                                {errors.photo && <span>This field is required</span>}
                            </div>

                            <input className=' btn bg-[#B2AB8C] w-full text-white hover:text-orange-600 mt-4' type="submit" value='Resister' />
                            <p className='mt-2 '>Allready have an account? <Link className='font-bold text-orange-600' to='/signIn' >Please Login</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;