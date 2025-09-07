// src/components/Contact.jsx

import { useState } from 'react'; // 1. Import useState
import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    // 2. Set up state to manage the form status
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

    // 3. Create the function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default page redirect
        setStatus('submitting');
        
        const form = event.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // Clear the form fields
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4"><span className="gradient-text">Get In Touch</span></h2>
            <p className="max-w-2xl mx-auto text-zinc-300 mb-10 text-center">
                I'm currently open to new opportunities and my inbox is always open. Whether you have a question, a proposal, or just want to say hi, feel free to reach out!
            </p>
            <div className="max-w-xl mx-auto glassmorphism rounded-lg p-8">
                
                {/* 4. Conditionally render based on the status state */}
                {status === 'success' ? (
                    <div className="text-center">
                        <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                        <h3 className="mt-4 text-2xl font-semibold text-white">Thank You!</h3>
                        <p className="text-zinc-300 mt-2">Your message has been sent successfully. I'll get back to you soon.</p>
                    </div>
                ) : (
                    <form action="https://formspree.io/f/xldwabjb" method="POST" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                                <input type="text" name="name" id="name" required className="form-input w-full mt-2 px-4 py-2 rounded-md transition" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                                <input type="email" name="email" id="email" required className="form-input w-full mt-2 px-4 py-2 rounded-md transition" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea name="message" id="message" rows="4" required className="form-input w-full mt-2 px-4 py-2 rounded-md transition"></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={status === 'submitting'} // Disable button while submitting
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                <Send className="w-4 h-4" />
                            </button>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">Oops! Something went wrong. Please try again.</p>
                            )}
                        </div>
                    </form>
                )}
            </div>
            {/* The rest of your direct contact info remains the same */}
            <div className="mt-12 text-center">
                <p className="text-zinc-400 mb-4">or contact me directly via</p>
                <div className="flex justify-center gap-4">
                    <a href="https://wa.me/916207052523" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-transform hover:scale-105">
                        <FaWhatsapp className="text-xl" />
                        <span>WhatsApp</span>
                    </a>
                    <a href="mailto:sharanmanjeet16@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-transform hover:scale-105">
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;