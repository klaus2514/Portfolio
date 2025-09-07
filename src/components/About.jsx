const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12"><span className="gradient-text">About Me</span></h2>
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 text-zinc-300 space-y-4 leading-relaxed">
          <p>
            Hello! I'm Manjeet, a developer who loves creating things that live on the internet. My work, including a research paper published in an international journal, reflects a deep commitment to innovation and excellence in the tech landscape.
          </p>
          <p>
            With hands-on internship experience and three deployed MERN-stack applications, I thrive on solving complex problems and engineering seamless, user-centric experiences. My main focus these days is building inclusive products and digital experiences.
          </p>
        </div>
        <div className="md:col-span-2 relative group mx-auto"> {/* Removed w-full max-w-sm here */}
          {/* Blur effect container - Give it a fixed size and rounded-full */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt 
                        w-64 h-64 md:w-80 md:h-80 mx-auto" // <-- Added fixed sizes
          ></div>
          <img 
            src="ManjeetPic.jpg" 
            alt="Manjeet Sharan"
            // Image itself: fixed size, rounded-full, and object-cover
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto" // <-- Added fixed sizes and object-cover
          />
        </div>
      </div>
    </section>
  );
};

export default About;