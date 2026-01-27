export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Saurabh Malwar
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Frontend Developer • React • Next.js
        </p>

        <p className="max-w-xl mt-6 text-gray-500">
          I build modern, fast and responsive web applications with clean UI
          and scalable architecture.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="border px-6 py-3 hover:bg-white hover:text-black transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 hover:opacity-80 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I'm a frontend developer with 3+ years of experience creating
          user-friendly web applications. I specialize in React and Next.js,
          focusing on performance, clean code, and pixel-perfect UI.
          Currently looking for opportunities where I can grow and
          contribute to impactful products.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-[#111] px-6">
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
                className="border border-gray-800 py-4 text-center hover:border-white transition"
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

          <div className="border border-gray-800 p-6 hover:border-white transition">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio built with Next.js & Tailwind.
            </p>
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
      <section className="py-20 bg-[#111] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>

          <div className="border-l border-gray-700 pl-6">
            <h3 className="text-xl">Frontend Developer</h3>
            <p className="text-gray-400">3 Years Experience</p>
            <p className="text-gray-500 mt-2">
              Worked on enterprise applications, improving UI performance,
              building reusable components and integrating APIs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <p className="text-gray-400">📧 yourmail@gmail.com</p>
        <p className="text-gray-400">GitHub: github.com/saurabhmalwar</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/yourname</p>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-600 border-t border-gray-800">
        © 2026 Saurabh Malwar
      </footer>

    </main>
  );
}
