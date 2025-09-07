// src/components/AchievementsHobbies.jsx

import { FileText, Trophy, Code, Dribbble, BookOpen, ArrowUpRight } from 'lucide-react';

// 1. DATA: Each object has a `url` property with the link
const achievements = [
    {
        icon: <FileText className="w-7 h-7 text-sky-400 mt-1 shrink-0" />,
        title: "Published Research Paper",
        description: 'Authored "Sports Safari: An Online Sports Ground Booking Platform" in the International Journal of Emerging Technology and Advanced Engineering (IJETA).',
        url: 'https://www.ijetajournal.org/volume-12/issue-4/IJETA-V12I4P40.pdf' 
    },
    {
        icon: <Trophy className="w-7 h-7 text-sky-400 mt-1 shrink-0" />,
        title: "Build with India Hackathon",
        description: "Achieved a Top 20% placement (top 5,000 of 25,000+ teams), showcasing strong performance in a competitive national event.",
        url: 'https://drive.google.com/file/d/1FWyQ6xkEBBRosMFKE7I31cupUxb62tGt/view?usp=sharing' 
    },
    {
        icon: <Code className="w-7 h-7 text-sky-400 mt-1 shrink-0" />,
        title: "LeetCode Problem Solver",
        description: "Solved 50+ DSA challenges, consistently outperforming 52% of global users.",
        url: 'https://leetcode.com/u/klaus_2514/'
    }
];

const AchievementsHobbies = () => {
    return (
        <section id="achievements" className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    <h2 className="text-3xl font-bold tracking-tight text-center lg:text-left mb-12"><span className="gradient-text">Achievements</span></h2>
                    <div className="space-y-6">
                        {achievements.map((item, index) => (
                            // 2. CLICKABLE WRAPPER: This <a> tag makes the entire card a link.
                            <a 
                                key={index} 
                                href={item.url}      // The link destination
                                target="_blank"     // Opens the link in a new tab
                                rel="noopener noreferrer"
                                className="block p-5 rounded-lg glassmorphism transition-all duration-300 group hover:bg-white/5 hover:scale-[1.02] relative" // 'group' and 'relative' are for the icon
                            >
                                {/* 3. LINK ICON: This icon appears on hover to show it's a link */}
                                <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="flex items-start gap-4">
                                    {item.icon}
                                    <div>
                                        <h3 className="font-semibold text-white">{item.title}</h3>
                                        <p className="text-zinc-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Hobbies Section */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12"><span className="gradient-text">Hobbies</span></h2>
                    <div className="flex justify-center items-center h-full gap-8">
                        <div className="text-center text-zinc-300">
                            <Dribbble className="w-16 h-16 mx-auto mb-2 text-purple-400" />
                            <p>Playing Cricket</p>
                        </div>
                        <div className="text-center text-zinc-300">
                            <BookOpen className="w-16 h-16 mx-auto mb-2 text-sky-400" />
                            <p>Reading Books</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsHobbies;