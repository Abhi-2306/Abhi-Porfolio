"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './navLink';
import { motion } from "framer-motion"

const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
]

const topVariants = {
    opened: {
        rotate: 0
    },
    closed: {
        rotate: 45,
        backgroundColor: "#ffffff",
    }
}

const centerVariants = {
    opened: {
        rotate: 0
    },
    closed: {
        opacity: 0
    }
}

const bottomVariants = {
    opened: {
        rotate: 0
    },
    closed: {
        rotate: -45,
        backgroundColor: "rgb(255,255,255)",
    }
}

const listVariants = {
    closed: {
        x: "100vw"
    },
    opened: {
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        }
    }
}

const listItemVariants = {
    closed: {
        x: -10,
        opacity: 0
    },
    opened: {
        x: 0,
        opacity: 1
    }
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            <div className='hidden md:flex gap-8 w-1/3 items-center'>
                {links.map((link) => (
                    <NavLink key={link.title} link={link} />
                ))}
                <a 
                    href="/resume.pdf" 
                    className="px-3 py-1 bg-black text-white rounded text-sm hover:bg-gray-800 transition"
                >
                    Resume
                </a>
            </div>
            
            <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
                <Link href="/" className='font-semibold text-2xl bg-black rounded-md p-1 flex justify-center items-center hover:bg-gray-800 transition'>
                    <h1 className='text-white mr-1'>Abhijith</h1>
                </Link>
            </div>
            
            <div className='hidden md:flex gap-4 w-1/3 justify-end items-center'>
                <Link href="https://github.com/abhi-2306" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.png" width={24} height={24} alt="GitHub" className="hover:opacity-70 transition" />
                </Link>
                <Link href="https://www.linkedin.com/in/abhijith-pandiri-7a0350273/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.png" width={24} height={24} alt="LinkedIn" className="hover:opacity-70 transition" />
                </Link>
                <Link href="https://www.instagram.com/abhi23604/" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" width={24} height={24} alt="Instagram" className="hover:opacity-70 transition" />
                </Link>
                <Link href="https://leetcode.com/Abhijith23/" target="_blank" rel="noopener noreferrer">
                    <Image src="/leetcode.png" width={24} height={24} alt="LeetCode" className="hover:opacity-70 transition" />
                </Link>
            </div>
            
            <div className='md:hidden'>
                <button 
                    className='w-10 h-8 flex flex-col justify-between z-50 relative' 
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <motion.div 
                        animate={open ? "closed" : "opened"} 
                        variants={topVariants} 
                        className='w-10 h-1 bg-black rounded origin-left'
                    />
                    <motion.div 
                        animate={open ? "closed" : "opened"} 
                        variants={centerVariants} 
                        className='w-10 h-1 bg-black rounded'
                    />
                    <motion.div 
                        animate={open ? "closed" : "opened"} 
                        variants={bottomVariants} 
                        className='w-10 h-1 bg-black rounded origin-left'
                    />
                </button>
                
                {open && (
                    <motion.div 
                        variants={listVariants} 
                        initial="closed" 
                        animate="opened" 
                        className='absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl bg-black z-40'
                    >
                        {links.map((link) => (
                            <motion.div variants={listItemVariants} key={link.url}>
                                <Link href={link.url} onClick={() => setOpen(false)}>
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div variants={listItemVariants}>
                            <a href="/resume.pdf" className="text-2xl">
                                Resume
                            </a>
                        </motion.div>
                        
                        <motion.div 
                            variants={listItemVariants}
                            className="flex gap-6 mt-4"
                        >
                            <Link href="https://github.com/abhi-2306" target="_blank">
                                <Image src="/github-white.png" width={32} height={32} alt="GitHub" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/abhijith-pandiri-7a0350273/" target="_blank">
                                <Image src="/linkedin-white.png" width={32} height={32} alt="LinkedIn" />
                            </Link>
                            <Link href="https://leetcode.com/Abhijith23/" target="_blank">
                                <Image src="/leetcode-white.png" width={32} height={32} alt="LeetCode" />
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Navbar;