import React from 'react'
import Title from '../components/Title'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("Send Message");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "55b5edc9-2737-43e6-86c5-02fc4509d0b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form SUbmitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className='h-screen w-full flex flex-col items-center pt-20 gap-15 px-6 md:px-20 lg:px-32'>
            <Title
                heading="Contact"
                highlight="With Us"
                paragraph="Ready to Make a Move? Let’s Build Your Future Together"
            />

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto py-5 flex flex-col'>
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-4 w-full'>
                    <div className='flex flex-col gap-1 w-sm'>
                        <label className='text-lg font-medium text-gray-700'>Your Name</label>
                        <input type='text' className='w-full border rounded-md text-md border-gray-300 px-6 py-3' placeholder='Your Name' required />
                    </div>
                    <div className='flex flex-col gap-2 w-sm'>
                        <label className='text-lg font-medium text-gray-700'>Your Email</label>
                        <input type='email' className='w-full border rounded-md border-gray-300 px-6 py-3' placeholder='Your Email' required />
                    </div>
                </div>
                <div className='mt-6 flex flex-col gap-2 w-full'>
                    <label className='text-lg font-medium text-gray-700'>Message</label>
                    <textarea className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' rows='7' placeholder='Your Message' required></textarea>
                </div>
                <button type='submit' className='mt-6 px-10 py-3 mx-auto bg-blue-500 text-white text-md rounded-md hover:bg-blue-700 transition duration-300'>{result ? result : "Send Message"}</button>
            </form>
        </motion.div>
    )
}

export default Contact