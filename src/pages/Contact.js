import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
    Input,
    Textarea
} from "@material-tailwind/react";
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from '../features/userSlice';
const Contact = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            message: '',
            id: nanoid()
        },
        onSubmit: (val, { resetForm }) => {
            resetForm()
            dispatch(addUser(val))
            alert('Message Send')
        }

    })
    return (
        <div className='container md:mt-[7rem]'>
            <h1 className='text-3xl font-bold mt-7'>Contact Us</h1>

            <form onSubmit={formik.handleSubmit} className=' w-[50%] py-4 md:w-[80%]'>

                <div className='flex gap-6 sm:flex-wrap'>
                    <Input size="lg" 
                    label="Name" 
                    name='username'
                    id='username'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    />
                    <Input size="lg" 
                    label="Email" 
                    type='email'
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                </div>
                <div className="w-full my-5">
                    <Textarea label="Message" 
                    name='message'
                    id='message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    />
                </div>
                <button type='submit' className='bg-[#ff642f] text-center font-bold rounded-lg py-3 px-4 text-white'>Submit</button>
            </form>
        </div>
    )
}

export default Contact