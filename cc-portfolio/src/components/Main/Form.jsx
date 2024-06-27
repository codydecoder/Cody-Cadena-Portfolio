//React
import React, { useRef } from 'react'
//EmailJS
import emailjs from '@emailjs/browser'

export const ContactMeForm = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_icapb5z', 'contact_me', form.current, {
                publicKey: 'EmGlcGOBZXN-hJSa3',
            })
            .then(
                () => {
                    console.log('Success!')
                },
                (error) => {
                    console.log('Failed...', error.text)
                },
            )
            console.log(`username: ${user_name}, useremail: ${user_email}, usermessage: ${user_message}`)

    }

    return (
        <form ref={form} onSubmit={sendEmail} className='border-4 border-black bg-gray-300 p-2'>
            <div className='text-2xl m-2'>Send me a message! <br/> It will be automatically delivered straight to my email.</div>
            <div className='flex border-2 border-black p-2 font-semibold rounded-xl'>
                <label className='p-2'>Name:</label>
                <input type='text' name='user_name' className='w-1/6 rounded-lg'/>
                <label className='p-2'>Email:</label>
                <input type='email' name='user_email' className='w-1/5 rounded-lg'/>
                <label className='p-2'>Message:</label>
                <textarea name='user_message' className='w-1/4 rounded-lg mr-2'/>
                <input type='submit' value='Send' className='bg-red-800 p-2 w-1/6 rounded-lg border-2 border-black'/>
            </div>
        </form>
    );

}