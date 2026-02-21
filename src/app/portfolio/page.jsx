"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-pink-300",
    title: "Kambaz LMS",
    desc: "Full-featured Canvas-like learning management system with course management, assignments, grading, and role-based access control. Built with Next.js, React, Redux Toolkit, and MongoDB.",
    url: "https://fa25-kambaz-next-js-git-project-abhijiths-projects-7705a139.vercel.app/Account/Signin",
    github: "https://github.com/Abhi-2306/fa25-kambaz-next-js",
    tags: ["Next.js", "React", "Redux", "MongoDB"]
  },
  {
    id: 2,
    color: "from-green-300 to-blue-300",
    title: "NLP Sentiment Analyzer",
    desc: "Machine learning model achieving 95.4% accuracy on sentiment classification. Built using Python, TensorFlow, and Word2Vec embeddings with comprehensive preprocessing pipeline.",
    url: "https://nbviewer.org/github/Abhi-2306/SentimentAnalysis/blob/main/Sentiment_Analysis.ipynb",
    github: "https://github.com/Abhi-2306/SentimentAnalysis",
    tags: ["Python", "TensorFlow", "NLP", "ML"]
  },
  {
    id: 3,
    color: "from-red-300 to-orange-300",
    title: "Portfolio Website",
    desc: "Personal portfolio built using Next.js for server-side rendering, Tailwind CSS for responsive design, and Framer Motion for smooth animations and interactive elements.",
    url: "https://abhi-porfolio-zeta.vercel.app/",
    github: "https://github.com/Abhi-2306/Abhi-Porfolio",
    tags: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Blog Platform",
    desc: "Full-featured blogging platform with NextAuth authentication (credentials & GitHub), admin panel for user/post management, and bcryptjs password hashing.",
    url: "https://blog-app-two-jade.vercel.app/",
    github: "https://github.com/Abhi-2306/BlogApp",
    tags: ["Next.js", "NextAuth", "MongoDB"]
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce site with product filtering, cart functionality, and Stripe payments. Built with MERN stack, Redux Toolkit, JWT authentication, and admin panel.",
    url: "https://mern-ecommerce-three-xi.vercel.app/",
    github: "https://github.com/Abhi-2306/MERN-ECOMMERCE",
    tags: ["MERN", "Redux", "Stripe", "JWT"]
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300",
    title: "Food Delivery App",
    desc: "Food delivery platform with category browsing, search functionality, and cart features. Built using MERN stack with Bootstrap UI and bcrypt authentication.",
    url: "https://tasty-terrain-full-stack.vercel.app/",
    github: "https://github.com/Abhi-2306/TastyTerrain-Full_Stack",
    tags: ["MERN", "Bootstrap", "bcrypt"]
  },
];

const ProjectCard = ({ item, isActive }) => {
  const [zoom, setZoom] = useState(0.65);
  const [pointerEvents, setPointerEvents] = useState('none');
  const [iframeKey, setIframeKey] = useState(0);
  const [controlsPosition, setControlsPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const iframeRef = useRef(null);

  // Reset iframe when project becomes inactive
  useEffect(() => {
    if (!isActive && pointerEvents === 'auto') {
      setPointerEvents('none');
      setIframeKey(prev => prev + 1);
    }
  }, [isActive, pointerEvents]);

  const handleZoomChange = (newZoom) => {
    setZoom(newZoom);
  };

  const toggleInteraction = () => {
    setPointerEvents(prev => prev === 'auto' ? 'none' : 'auto');
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.currentTarget.dataset.startX = e.clientX - controlsPosition.x;
    e.currentTarget.dataset.startY = e.clientY - controlsPosition.y;
  };

  const handleDrag = (e) => {
    if (!isDragging || e.clientX === 0) return;

    const startX = parseInt(e.currentTarget.dataset.startX || 0);
    const startY = parseInt(e.currentTarget.dataset.startY || 0);

    setControlsPosition({
      x: e.clientX - startX,
      y: e.clientY - startY
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className={`min-h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} px-8 py-6`}>
      <div className="flex flex-col lg:flex-row gap-6 w-full h-[85vh] max-w-7xl">
        {/* LEFT SIDE - LIVE WEBSITE */}
        <div className="flex-1 bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white/30 relative">
          {/* Draggable Zoom Controls */}
          <div
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className="absolute z-10 flex gap-2 bg-black/80 rounded-lg p-2 cursor-move select-none"
            style={{
              top: controlsPosition.y ? `${controlsPosition.y}px` : '12px',
              left: controlsPosition.x ? `${controlsPosition.x}px` : 'auto',
              right: !controlsPosition.x ? '12px' : 'auto',
            }}
          >
            <span className="px-2 py-1 text-white text-xs cursor-move" title="Drag to move">⋮⋮</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomChange(Math.max(0.4, zoom - 0.05));
              }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold"
            >
              −
            </button>
            <span className="px-2 py-1 text-white text-xs font-bold">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomChange(Math.min(1.2, zoom + 0.05));
              }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold"
            >
              +
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomChange(0.65);
              }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold ml-1"
            >
              Fit
            </button>
          </div>

          {/* Interaction Toggle */}
          <div className="absolute top-3 left-3 z-10">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                toggleInteraction();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${pointerEvents === 'auto'
                  ? 'bg-green-600/90 hover:bg-green-700 text-white'
                  : 'bg-black/80 hover:bg-black/90 text-white'
                }`}
            >
              {pointerEvents === 'auto' ? '🔓 Interactive' : '🔒 Click to Interact'}
            </button>
          </div>

          {/* Overlay when locked */}
          {pointerEvents === 'none' && (
            <div
              className="absolute inset-0 z-5 bg-transparent cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleInteraction();
              }}
              title="Click to enable interaction"
            />
          )}

          <div className="w-full h-full overflow-auto">
            <iframe
              key={`${item.id}-${iframeKey}`}
              ref={iframeRef}
              src={item.url}
              className="w-full h-full origin-top-left"
              title={item.title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
              style={{
                transform: `scale(${zoom})`,
                width: `${100 / zoom}%`,
                height: `${100 / zoom}%`,
                pointerEvents: pointerEvents,
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE - PROJECT INFO */}
        <div className="lg:w-96 flex flex-col justify-center gap-4 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {item.title}
          </h1>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {item.github && (
              <Link href={item.github} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-4 py-3 text-sm bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg">
                  📂 View Code on GitHub
                </button>
              </Link>
            )}
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              <button className="w-full px-4 py-3 text-sm bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
                🚀 Open Full {item.id === 2 ? 'Notebook' : 'Site'}
              </button>
            </Link>
          </div>

          <div className="text-xs opacity-90 bg-white/10 p-3 rounded-lg mt-2">
            <p className="font-semibold mb-1">💡 Tips:</p>
            <p>• Drag ⋮⋮ to move zoom controls</p>
            <p>• Click 🔒 to unlock interaction</p>
            <p>• Use +/− to zoom in/out</p>
            <p>• Lock 🔓 before scrolling to next project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const ref = useRef();
  const [activeProject, setActiveProject] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.7%"]);

  // Track which project is currently visible
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const projectIndex = Math.floor(latest * (items.length + 1));
      setActiveProject(Math.min(projectIndex, items.length));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

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
            {items.map((item, index) => (
              <ProjectCard key={item.id} item={item} isActive={activeProject === index + 1} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative inline-block">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
            style={{ pointerEvents: 'none' }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
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
            className="w-16 h-16 md:w-28 md:h-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition cursor-pointer font-semibold text-xs md:text-base"
            style={{ pointerEvents: 'auto' }}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;