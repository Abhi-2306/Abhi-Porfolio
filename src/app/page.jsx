"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
const Homepage = () => {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className=" h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image */}
        <div className="h-1/2 lg:w-1/2 lg:h-full relative ">
          <Image src="/hero.png" fill className="object-contain" alt="logo" />
        </div >
        {/* Text */}
        <div className="h-1/2 flex flex-col gap-8 lg:w-1/2 lg:h-full items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">Full Stack Web Developer</h1>
          <p className="md:text-xl">Hi, I'm Abhijith. I'm a full stack web developer.
            I love to build beautiful websites.
          </p>
          {/* buttons */}
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio">View My Work</Link>
              </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
              </button>
          </div>
        </div>
      </div>
    </motion.div>);
};

export default Homepage;
