// src/components/Hero.jsx

import { Github, Linkedin, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <p className="text-sky-400 font-medium mb-2">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100">Manjeet Sharan.</h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-400 mt-2">I build things for the web.</h2>
        <p className="mt-6 max-w-xl text-zinc-300 leading-relaxed mx-auto">
          I'm a passionate and results-driven MERN Stack Developer, bringing ideas to life from concept to deployment. With hands-on internship experience and deployed applications, I thrive on solving complex problems and engineering seamless, user-centric experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-transform hover:scale-105">View My Work</a>
          <a href="/MsUpdated.pdf" target="_blank" className="px-8 py-3 font-semibold text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-lg transition-transform hover:scale-105">View Resume</a>
        </div>

        {/* Social Media Links - MOVED INSIDE the main div */}
        <div className="mt-12 flex justify-center items-center space-x-6">
          <a href="https://github.com/klaus2514" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/manjeet-sharan-3a19bb202/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://leetcode.com/u/klaus_2514/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="LeetCode Profile">
            <img width="21" height="21" src="https://img.icons8.com/small/16/FFFFFF/leetcode.png" alt="leetcode"/>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;