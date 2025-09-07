// src/components/Experience.jsx
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        title: "Full Stack Web Developer Intern",
        company: "Learn & Build Pvt Ltd",
        duration: "July 2023 - Sept 2023",
        description: "Developed responsive, high-performance web applications using the MERN stack. Translated complex design mockups into pixel-perfect, accessible user interfaces and optimized API calls, reducing load time by 30%."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12"><span className="gradient-text">Where I've Worked</span></h2>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-zinc-700">
                    {experienceData.map((job, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-900 rounded-full -left-3 ring-8 ring-sky-900/30">
                                <Briefcase className="w-3 h-3 text-sky-400" />
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{job.title}</h3>
                            <p className="block mb-2 text-sm font-normal leading-none text-zinc-400">{job.company} | {job.duration}</p>
                            <p className="text-zinc-300">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;