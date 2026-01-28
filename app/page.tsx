"use client";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";



export default function Home() {
  const { scrollYProgress } = useScroll();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
  
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  
  return (
    <main className="relative text-white min-h-screen overflow-hidden bg-gradient-to-br from-[#0b0014] via-[#160025] to-[#2b003a]">
      <div
  className="pointer-events-none fixed inset-0 z-0"
  style={{
    background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(217,70,239,0.15), transparent 70%)`
  }}
/>

<motion.div
  className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 z-[999]"
  style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
/>

<div className="absolute top-20 left-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />
<div className="absolute bottom-20 right-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" />

<nav className="fixed top-0 w-full backdrop-blur border-b border-gray-800 z-50">
  <div className="max-w-5xl mx-auto flex justify-between p-4">
    <span>Saurabh</span>

    <div className="flex gap-6">
    <a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a>
<a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a>

    </div>
  </div>
</nav>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
{/* Hero Background Effects */}
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-purple-500/10 to-indigo-600/20 animate-pulse" />


<div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />

<div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
<div className="relative z-10">

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl md:text-6xl font-bold"
  >
    Saurabh Malwar
  </motion.h1>
  </div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-gray-400 mt-4 text-lg"
  >
     <Typewriter
    words={["Frontend Developer", "React Developer", "Next.js Developer"]}
    loop
    cursor
  />
  </motion.p>
</section>


      {/* ABOUT */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-20 px-6 max-w-5xl mx-auto"
>

        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I'm a frontend developer with 3+ years of experience creating
          user-friendly web applications. I specialize in React and Next.js,
          focusing on performance, clean code, and pixel-perfect UI.
          Currently looking for opportunities where I can grow and
          contribute to impactful products.
        </p>
        </motion.section>


      {/* SKILLS */}
      <section className="py-20 bg-white/5 backdrop-blur px-6">

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind",
              "Git",
              "REST API",
            ].map(skill => (
              <div
  key={skill}
  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl py-4 text-center transition hover:scale-105 hover:border-white"

>
  {skill}
</div>

            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-gray-800 p-6 transition hover:border-white hover:scale-[1.02] group">
  <h3 className="text-xl font-semibold group-hover:text-white">
    Portfolio Website
  </h3>

  <p className="text-gray-400 mt-2">
    Personal portfolio built with Next.js & Tailwind.
  </p>

  <span className="text-sm text-gray-500 mt-4 inline-block group-hover:text-white">
    View Project →
  </span>
</div>


          <div className="border border-gray-800 p-6 hover:border-white transition">
            <h3 className="text-xl font-semibold">Admin Dashboard</h3>
            <p className="text-gray-400 mt-2">
              React dashboard with charts and authentication.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 bg-white/5 backdrop-blur border-y border-white/10 px-6">


        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>

          <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative pl-8 border-l border-white/20"
>

<span className="absolute -left-[7px] top-2 w-3 h-3 bg-fuchsia-500 rounded-full" />

<h3 className="text-xl">Frontend Developer</h3>

<p className="text-gray-400">3 Years Experience</p>

<p className="text-gray-500 mt-2">
  Worked on enterprise applications, improving UI performance,
  building reusable components and integrating APIs.
</p>

</motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-400">📧 saurabhmalwar619@gmail.com</p>
        <p className="text-gray-400">GitHub: github.com/saurabhmalwar</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/saurabh-malwar</p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-600 border-t border-gray-800">
        © 2026 Saurabh Malwar
      </footer>
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 border p-3 rounded-full hover:bg-white hover:text-black"
>
  ↑
</button>

    </main>
  );
}
