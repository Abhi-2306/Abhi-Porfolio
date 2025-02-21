// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// const items = [
//   {
//     id: 1,
//     color: "from-red-300 to-blue-300",
//     title: "React Commerce",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     link: "https://lama.dev",
//   },
//   {
//     id: 2,
//     color: "from-blue-300 to-violet-300",
//     title: "Next.js Medium Blog",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     link: "https://lama.dev",
//   },
//   {
//     id: 3,
//     color: "from-violet-300 to-purple-300",
//     title: "Vanilla Book App",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     link: "https://lama.dev",
//   },
//   {
//     id: 4,
//     color: "from-purple-300 to-red-300",
//     title: "Spotify Music App",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
//     img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     link: "https://lama.dev",
//   },
// ];

// const PortfolioPage = () => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-[600vh] relative" ref={ref}>
//         <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
//           My Works
//         </div>
//         <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex">
//             <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
//             {items.map((item) => (
//               <div
//                 className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
//                 key={item.id}
//               >
//                 <div className="flex flex-col gap-8 text-white">
//                   <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
//                     {item.title}
//                   </h1>
//                   <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
//                     <Image src={item.img} alt="" fill />
//                   </div>
//                   <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
//                     {item.desc}
//                   </p>
//                   <Link href={item.link} className="flex justify-end">
//                     <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//       <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
//         <h1 className="text-8xl">Do you have a project?</h1>
//         <div className="relative">
//           <motion.svg
//             animate={{ rotate: 360 }}
//             transition={{ duration: 8, ease: "linear", repeat: Infinity }}
//             viewBox="0 0 300 300"
//             className="w-64 h-64 md:w-[500px] md:h-[500px] "
//           >
//             <defs>
//               <path
//                 id="circlePath"
//                 d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
//               />
//             </defs>
//             <text fill="#000">
//               <textPath xlinkHref="#circlePath" className="text-xl">
//                 Front-end Developer and UI Designer
//               </textPath>
//             </text>
//           </motion.svg>
//           <Link
//             href="/contact"
//             className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
//           >
//             Hire Me
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default PortfolioPage;

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Portfolio Website",
    desc: "A personal portfolio built using Next.js for server-side rendering, Tailwind CSS for responsive design, and Framer Motion for smooth animations and interactive elements. The project highlights professional achievements, skills, and showcases of past work, with a focus on clean design and seamless user experience.",
    img: "/portfolioSS.png",
    link: "https://abhi-porfolio-zeta.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Blog Website",
    desc: "A platform built using Next.js for server-side rendering and static site generation, with authentication handled by NextAuth for login via credentials and GitHub. It includes an admin panel for managing users and posts, and bcryptjs is used for secure password hashing. MongoDB serves as the database. ",
    img: "/blog.png",
    link: "https://blog-2p47qi4aa-abhijiths-projects-7705a139.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "E-Commerce Website",
    desc: "An e-commerce website featuring product filtering by brand and category, sorting by price and rating, and a shopping cart. It uses the MERN stack, Redux Toolkit for state management, JWT for secure authentication, MongoDB for database management, and Stripe for payment integration. The admin panel allows product and order management.",
    img: "/ecommerce.png",
    link: "https://mern-ecommerce-three-xi.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Food Delivery App",
    desc: "A food delivery platform that provides food categories, a search option, and add-to-cart functionality. The project is built using the MERN stack, Bootstrap for the user interface, bcrypt for secure authentication, and MongoDB for database storage. ",
    img: "/tastyterrain.png",
    link: "https://tasty-terrain-full-stack.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`min-h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white pt-4">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[300px] lg:h-[200px] xl:w-[400px] xl:h-[300px]">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="w-80 md:w-[500px] lg:w-[700px] lg:text-md xl:w-[800px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-md bg-white text-gray-600 font-semibold m-2 rounded">
                      View Website
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-10">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Web Developer - MERN
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
