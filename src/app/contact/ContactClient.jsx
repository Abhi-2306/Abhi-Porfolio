"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { availability } from "@/data/content";

export default function ContactClient() {
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
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-4">
                {/* TEXT CONTAINER */}
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-2">
                    <div className="text-3xl md:text-4xl mb-4">
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

                    <div className="space-y-3 text-center lg:text-left w-full max-w-md">
                        <div>
                            <h1 className="font-bold text-lg mb-2">Get in Touch</h1>
                            <p className="text-gray-600 text-sm mb-4">
                                {availability} Let&apos;s connect!
                            </p>
                        </div>

                        <div className="space-y-2 text-xs">
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span className="font-semibold">📧</span>
                                <a href="mailto:pandiri.a@northeastern.edu" className="underline hover:text-blue-600">
                                    pandiri.a@northeastern.edu
                                </a>
                            </div>

                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span className="font-semibold">📍</span>
                                <span>Boston, MA</span>
                            </div>

                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <span className="font-semibold">🎓</span>
                                <span>Northeastern University · MS CS · Graduating December 2027</span>
                            </div>
                        </div>

                        <div className="pt-3">
                            <p className="font-semibold mb-2 text-sm">Connect:</p>
                            <div className="flex gap-2 justify-center lg:justify-start flex-wrap">
                                <a
                                    href="https://github.com/abhi-2306"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-gray-900 text-white rounded hover:bg-gray-800 transition text-xs"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/abhijith-pandiri-7a0350273"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://leetcode.com/Abhijith23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-xs"
                                >
                                    LeetCode
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="flex flex-col gap-3 justify-center p-6 bg-red-50 rounded-xl w-full lg:w-1/2"
                >
                    <h2 className="text-lg font-bold mb-1">Send a Message</h2>

                    <div>
                        <input
                            name="user_name"
                            type="text"
                            required
                            className="w-full bg-white border border-gray-300 rounded p-2 outline-none focus:border-black transition text-sm"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <input
                            name="user_email"
                            type="email"
                            required
                            className="w-full bg-white border border-gray-300 rounded p-2 outline-none focus:border-black transition text-sm"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <input
                            name="user_subject"
                            type="text"
                            className="w-full bg-white border border-gray-300 rounded p-2 outline-none focus:border-black transition text-sm"
                            placeholder="Subject (optional)"
                        />
                    </div>

                    <div>
                        <textarea
                            rows={5}
                            className="w-full bg-white border border-gray-300 rounded p-2 outline-none focus:border-black transition resize-none text-sm"
                            name="user_message"
                            required
                            placeholder="Your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 transition rounded font-semibold text-white p-2 mt-1 text-sm"
                    >
                        Send Message
                    </button>

                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded text-xs">
                            ✓ Message sent! I&apos;ll get back to you soon.
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-xs">
                            ✗ Error. Please email me directly.
                        </div>
                    )}
                </form>
            </div>
        </motion.div>
    );
}
