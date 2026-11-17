"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { availability, projects } from "@/data/content";

const fromContent = (p, id, color) => ({
  id,
  color,
  title: p.title,
  badge: null,
  desc: p.desc,
  url: p.demo || p.github,
  github: p.github,
  githubOnly: !p.demo,
  tags: p.stack,
});

const items = [
  fromContent(projects.aiSplit, 1, "from-purple-300 to-pink-300"),
  fromContent(projects.financeAssistant, 2, "from-indigo-300 to-blue-300"),
  {
    id: 3,
    color: "from-yellow-300 to-orange-300",
    title: "Trust Agentic Commerce",
    badge: "🏆 1st / 80+ teams",
    desc: "1st place out of 80+ teams at the SundAI × W&B Multi-Agent Hackathon at The Engine, MIT (Boston Tech Week, May 2026). Multi-agent security system with 4 isolated security sub-agents and structured verdict aggregation built with Python, LLMs, and W&B Weave observability.",
    url: "https://github.com/ColeLeng/trust-agentic-commerce",
    github: "https://github.com/ColeLeng/trust-agentic-commerce",
    githubOnly: true,
    tags: ["Python", "LLMs", "Multi-Agent", "W&B Weave"],
  },
  fromContent(projects.docQuery, 4, "from-red-300 to-orange-300"),
  fromContent(projects.kambaz, 5, "from-green-300 to-blue-300"),
  {
    id: 6,
    color: "from-yellow-300 to-green-300",
    title: "NLP Sentiment Analyzer",
    badge: null,
    desc: "Machine learning model achieving 95.4% accuracy on sentiment classification. Built using Python, TensorFlow, and Word2Vec embeddings with a comprehensive text preprocessing pipeline.",
    url: "https://nbviewer.org/github/Abhi-2306/SentimentAnalysis/blob/main/Sentiment_Analysis.ipynb",
    github: "https://github.com/Abhi-2306/SentimentAnalysis",
    githubOnly: false,
    tags: ["Python", "TensorFlow", "NLP", "Word2Vec", "ML"],
  },
  {
    id: 7,
    color: "from-orange-300 to-red-300",
    title: "Next.js Blog Platform",
    badge: null,
    desc: "Full-featured blogging platform with NextAuth authentication (credentials & GitHub), an admin panel for user and post management, and bcryptjs password hashing.",
    url: "https://blog-app-two-jade.vercel.app/",
    github: "https://github.com/Abhi-2306/BlogApp",
    githubOnly: false,
    tags: ["Next.js", "NextAuth", "MongoDB", "bcrypt"],
  },
  {
    id: 8,
    color: "from-blue-300 to-violet-300",
    title: "MERN E-Commerce",
    badge: null,
    desc: "Full-stack e-commerce platform with product filtering by brand and category, price and rating sorting, shopping cart, Stripe payments, and an admin panel for product and order management.",
    url: "https://mern-ecommerce-three-xi.vercel.app",
    github: "https://github.com/Abhi-2306/MERN-ECOMMERCE",
    githubOnly: false,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "JWT", "Stripe"],
  },
  {
    id: 9,
    color: "from-teal-300 to-cyan-300",
    title: "Portfolio Website",
    badge: null,
    desc: "Personal portfolio built with Next.js for server-side rendering, Tailwind CSS for responsive design, and Framer Motion for smooth page transitions and animations.",
    url: "https://abhi-porfolio-zeta.vercel.app/",
    github: "https://github.com/Abhi-2306/Abhi-Porfolio",
    githubOnly: false,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 10,
    color: "from-violet-300 to-purple-300",
    title: "TastyTerrain",
    badge: null,
    desc: "Food delivery app with category browsing, search, add-to-cart functionality, and secure authentication. Built with the MERN stack using Bootstrap for UI and bcrypt for password hashing.",
    url: "https://tasty-terrain-full-stack.vercel.app",
    github: "https://github.com/Abhi-2306/TastyTerrain-Full_Stack",
    githubOnly: false,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap", "bcrypt"],
  },
];

const ProjectCard = ({ item, isActive }) => {
  const [zoom, setZoom] = useState(0.65);
  const [pointerEvents, setPointerEvents] = useState("none");
  const [iframeKey, setIframeKey] = useState(0);
  const [controlsPosition, setControlsPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!isActive && pointerEvents === "auto") {
      setPointerEvents("none");
      setIframeKey((prev) => prev + 1);
    }
  }, [isActive, pointerEvents]);

  const handleZoomChange = (newZoom) => setZoom(newZoom);
  const toggleInteraction = () => setPointerEvents((prev) => (prev === "auto" ? "none" : "auto"));

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.currentTarget.dataset.startX = e.clientX - controlsPosition.x;
    e.currentTarget.dataset.startY = e.clientY - controlsPosition.y;
  };

  const handleDrag = (e) => {
    if (!isDragging || e.clientX === 0) return;
    const startX = parseInt(e.currentTarget.dataset.startX || 0);
    const startY = parseInt(e.currentTarget.dataset.startY || 0);
    setControlsPosition({ x: e.clientX - startX, y: e.clientY - startY });
  };

  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className={`min-h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} px-8 py-6`}>
      <div className="flex flex-col lg:flex-row gap-6 w-full h-[85vh] max-w-7xl">
        {/* LEFT — LIVE WEBSITE */}
        <div className="flex-1 bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white/30 relative">
          {/* Draggable Zoom Controls */}
          <div
            draggable
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className="absolute z-10 flex gap-2 bg-black/80 rounded-lg p-2 cursor-move select-none"
            style={{
              top: controlsPosition.y ? `${controlsPosition.y}px` : "12px",
              left: controlsPosition.x ? `${controlsPosition.x}px` : "auto",
              right: !controlsPosition.x ? "12px" : "auto",
            }}
          >
            <span className="px-2 py-1 text-white text-xs cursor-move" title="Drag to move">⋮⋮</span>
            <button
              onClick={(e) => { e.stopPropagation(); handleZoomChange(Math.max(0.4, zoom - 0.05)); }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold"
            >−</button>
            <span className="px-2 py-1 text-white text-xs font-bold">{Math.round(zoom * 100)}%</span>
            <button
              onClick={(e) => { e.stopPropagation(); handleZoomChange(Math.min(1.2, zoom + 0.05)); }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold"
            >+</button>
            <button
              onClick={(e) => { e.stopPropagation(); handleZoomChange(0.65); }}
              className="px-2 py-1 bg-white/20 hover:bg-white/30 text-white rounded text-xs font-bold ml-1"
            >Fit</button>
          </div>

          {/* Interaction Toggle */}
          <div className="absolute top-3 left-3 z-10">
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); toggleInteraction(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                pointerEvents === "auto"
                  ? "bg-green-600/90 hover:bg-green-700 text-white"
                  : "bg-black/80 hover:bg-black/90 text-white"
              }`}
            >
              {pointerEvents === "auto" ? "🔓 Interactive" : "🔒 Click to Interact"}
            </button>
          </div>

          {/* Overlay when locked */}
          {pointerEvents === "none" && (
            <div
              className="absolute inset-0 z-5 bg-transparent cursor-pointer"
              onClick={(e) => { e.stopPropagation(); toggleInteraction(); }}
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

        {/* RIGHT — PROJECT INFO */}
        <div className="lg:w-96 flex flex-col justify-center gap-4 text-white">
          <div className="flex items-start gap-3 flex-wrap">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              {item.title}
            </h2>
            {item.badge && (
              <span className="text-sm bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold shrink-0 mt-1">
                {item.badge}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base leading-relaxed">{item.desc}</p>

          <div className="flex flex-col gap-3 mt-2">
            {item.github && (
              <Link href={item.github} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-4 py-3 text-sm bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg">
                  📂 View Code on GitHub
                </button>
              </Link>
            )}
            {!item.githubOnly && (
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-4 py-3 text-sm bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg">
                  🚀 Open Full Site
                </button>
              </Link>
            )}
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

export default function PortfolioClient() {
  const ref = useRef();
  const [activeProject, setActiveProject] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90.9%"]);

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
      <div className="h-[1000vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <h1 className="text-8xl font-light">My Works</h1>
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
        <h2 className="text-8xl">Do you have a project?</h2>
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            {availability}
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white rounded-full font-semibold text-base hover:bg-gray-800 transition"
              >
                Let&apos;s Work Together
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black rounded-full font-semibold text-base hover:bg-gray-100 transition"
              >
                View Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
