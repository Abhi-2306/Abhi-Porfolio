"use client"
import React from 'react'
import Navbar from './navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode='wait'>
                <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-300 to-red-200">
                    <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                        animate={{height:"0vh"}}
                        exit={{height:"140vh"}}
                        transition={{duration:0.5,ease:"easeOut"}}
                    />
                    <motion.div className=" w-fit h-fit fixed m-auto top-0 left-0 right-0 text-8xl cursor-default text-white bottom-0 z-50"
                        initial={{opacity:1}}
                        animate={{opacity:0}}
                        exit={{opacity:0}}
                        transition={{duration:0.8,ease:"easeOut"}}
                    >
                        {pathName=="/" ? "Home" : pathName.substring(1).charAt(0).toUpperCase() + pathName.slice(2)}
                        {/* {pathName.substring(1).toUpperCase()} */}
                    </motion.div>
                    <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
                        initial={{height:"140vh"}}
                        animate={{height:"0vh", transition:{delay:0.5}}}
                    />
                    <div className="h-24">
                        <Navbar />
                    </div>
                    <div className="h-[calc(100vh-6rem)]">
                        {children}
                    </div>
                </div>
        </AnimatePresence>
    )
}

export default TransitionProvider
