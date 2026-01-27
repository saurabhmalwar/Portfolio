export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Saurabh Malwar</h1>
        <p className="text-xl mt-3 text-gray-400">
          Frontend Developer | React | Next.js
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block border px-6 py-3 w-fit hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-400 max-w-xl">
          Frontend developer with 3 years experience building responsive
          web apps using React and Next.js. Passionate about clean UI and
          performance.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Git", "API"].map(skill => (
            <div key={skill} className="border p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">Personal portfolio using Next.js</p>
          </div>

          <div className="border p-6">
            <h3 className="text-xl font-semibold">Dashboard App</h3>
            <p className="text-gray-400 mt-2">React admin dashboard</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <p className="text-gray-400">Email: yourmail@gmail.com</p>
        <p className="text-gray-400">GitHub: github.com/yourname</p>
        <p className="text-gray-400">LinkedIn: linkedin.com/in/yourname</p>
      </section>

    </main>
  );
}
