"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 lg:w-2/3 xl:w-1/2">
          <section className="space-y-6">
            <h1 className="font-bold text-3xl">About Me</h1>
            <p className="text-lg">
              I'm a first-year Master's student in Computer Science at Northeastern
              University's Khoury College (4.0 GPA, graduating June 2027),
              specializing in full-stack development and machine learning
              applications.
            </p>
            <p className="text-lg">
              Currently, I serve as Secretary &amp; Lead Developer for the
              Computer Society of India Student Branch, where I coordinate a
              17-member team and manage platforms serving over 500 students
              across multiple states.
            </p>
            <p className="text-lg">
              My recent work includes building Kambaz, a full-featured learning
              management system using Next.js and MongoDB, and developing NLP
              models for sentiment analysis that achieved 95.4% accuracy. I'm
              passionate about creating scalable web applications that solve
              real problems.
            </p>
            <div className="flex gap-3">
              <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded">
                Download Resume
              </a>
              <a href="/contact" className="px-4 py-2 border border-black rounded">
                Contact Me
              </a>
            </div>
          </section>

          <section ref={skillRef} className="pt-8">
            <motion.h2
              initial={{ x: -200 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              Technical Skills
            </motion.h2>

            <motion.div
              initial={{ x: -200 }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div>
                <div className="font-semibold mb-2">Frontend Development</div>
                <div className="flex flex-wrap">
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">React.js</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Next.js</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Redux Toolkit</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Tailwind CSS</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Bootstrap</span>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">Backend Development</div>
                <div className="flex flex-wrap">
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Node.js</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Express.js</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">MongoDB</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">PostgreSQL</span>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">Programming Languages</div>
                <div className="flex flex-wrap">
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">JavaScript/TypeScript</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Python</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Java</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">SQL</span>
                </div>
              </div>

              <div>
                <div className="font-semibold mb-2">Tools &amp; Platforms</div>
                <div className="flex flex-wrap">
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Git/GitHub</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">AWS</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Vercel</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Render</span>
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">Postman</span>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium">Frontend proficiency</div>
                <div className="w-full bg-gray-200 rounded h-2 mt-1">
                  <div className="bg-black h-2 rounded" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Backend proficiency</div>
                <div className="w-full bg-gray-200 rounded h-2 mt-1">
                  <div className="bg-black h-2 rounded" style={{ width: "75%" }} />
                </div>
              </div>
            </div>
          </section>

          <section ref={experienceRef} className="pt-8">
            <motion.h2
              initial={{ x: -200 }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h2>

            <div className="mt-4">
              <div className="font-semibold">Secretary &amp; Lead Developer</div>
              <div className="text-sm italic">Computer Society of India Student Branch • Present</div>
              <ul className="list-disc ml-5 mt-2">
                <li>Coordinate 17-member technical team managing platforms for 500+ students</li>
                <li>Organize technical workshops and events across multiple states</li>
                <li>Lead full-stack development initiatives and student database management</li>
              </ul>
            </div>
          </section>

          <section className="pt-8">
            <h2 className="font-bold text-2xl">Education</h2>
            <div className="mt-4 space-y-2">
              <div>
                <div className="font-semibold">Northeastern University — Master of Science in Computer Science</div>
                <div className="text-sm italic">Boston, MA • Sep 2025 - Jun 2027 (Expected) • GPA: 4.0/4.0</div>
                <div className="text-sm mt-1">Relevant Coursework: Algorithms (CS 5800), Natural Language Processing (CS 6120)</div>
              </div>

              <div>
                <div className="font-semibold">CVR College of Engineering — B.Tech in Computer Science &amp; Engineering</div>
                <div className="text-sm italic">2021 - 2025 • GPA: 9.03/10.0</div>
              </div>
            </div>
          </section>

          <section className="pt-8 pb-48">
            <h2 className="font-bold text-2xl">What I'm Looking For</h2>
            <p className="mt-2">I'm actively seeking Summer 2026 software engineering internships and co-op opportunities where I can contribute to building scalable systems and work with talented teams.</p>
          </section>
        </div>

        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;