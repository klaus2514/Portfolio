// src/components/Education.jsx
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: "B.Tech, Computer Science & Eng.",
        institution: "Global Institute of Technology, Jaipur",
        duration: "2022 - 2025",
        isCurrent: true
    },
    {
        degree: "Diploma, Electrical Engineering",
        institution: "Government Polytechnic, Dumka",
        duration: "2019 - 2022",
        isCurrent: false
    },
    {
        degree: "Matriculation",
        institution: "DAV Public School, Bhagalpur",
        duration: "2018 - 2019",
        isCurrent: false
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12"><span className="gradient-text">My Education</span></h2>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-zinc-700">
                    {educationData.map((edu, index) => (
                         <div key={index} className="mb-10 ml-6 last:mb-0">
                            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ${edu.isCurrent ? 'bg-sky-900 ring-sky-900/30' : 'bg-zinc-800 ring-zinc-800/30'}`}>
                                <GraduationCap className={`w-3 h-3 ${edu.isCurrent ? 'text-sky-400' : 'text-zinc-400'}`} />
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{edu.degree}</h3>
                            <p className="block mb-2 text-sm font-normal leading-none text-zinc-400">{edu.institution} | {edu.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;