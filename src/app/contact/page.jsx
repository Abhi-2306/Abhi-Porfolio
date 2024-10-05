"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say Hello";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccess(true);
                    form.current.reset();
                },
                () => {
                    setError(true);
                }
            );
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="flex items-center justify-center text-4xl w-full lg:w-1/2 p-4">
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="flex flex-col gap-4 justify-center p-8 bg-red-50 rounded-xl w-full lg:w-1/2"
                >
                    <span className="text-lg">Dear Abhijith,</span>
                    <textarea
                        rows={4}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none mb-4 p-2"
                        name="user_message"
                        placeholder="Write your message here..."
                    />
                    <span className="text-lg">My email address is:</span>
                    <input
                        name="user_email"
                        type="email"
                        className="bg-transparent border-b-2 border-b-black outline-none mb-4 p-2"
                        placeholder="your.email@example.com"
                    />
                    <span className="text-lg">Regards</span>
                    <button className="bg-purple-200 rounded font-semibold text-gray-600 p-2 mt-4">
                        Send
                    </button>
                    {success && (
                        <span className="text-green-600 font-semibold mt-2">
                            Your message has been sent successfully!
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold mt-2">
                            Something went wrong!
                        </span>
                    )}
                </form>
            </div>
        </motion.div>
    );
};

export default ContactPage;
