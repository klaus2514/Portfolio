import { Github, ArrowUpRightFromSquare } from 'lucide-react';

const projectsData = [
    {
        title: "InnerLight - Community Wellness Platform",
        description: "A mental health platform with journaling, mood analysis, and AI chat support to promote emotional well-being.",
        tags: ["MERN Stack", "Socket.IO", "AI Integration"],
        image: "InnerLight.png",
        githubUrl: "https://github.com/tassu1/innerlight.git",
        liveUrl: "https://innerlight-beta.vercel.app/"
    },
    {
        title: "Sports Safari - Booking Platform",
        description: "An interactive sports discovery platform to explore sports, track live events, and engage with a user-friendly interface.",
        tags: ["MERN Stack", "Real-time"],
        image: "Sports.png",
        githubUrl: "https://github.com/klaus2514/Sportsafari.git",
        liveUrl: "https://sportsafari-kappa.vercel.app/home"
    },
    {
        title: "Do-Do - AI-Powered Chatbot",
        description: "A smart task management app that provides AI-driven task suggestions and productivity insights to help users stay focused.",
        tags: ["MERN Stack", "TailwindCSS", "OpenRouter AI"],
        image: "DoDo.png",
        githubUrl: "https://github.com/klaus2514/Do-Do.git",
        liveUrl: "https://do-do-sable.vercel.app/"
    },
];

const ProjectCard = ({ title, description, tags, image, githubUrl, liveUrl }) => (
    <div className="glassmorphism rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:glow-effect">
        <img src={image} alt={`${title} Screenshot`} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-zinc-400 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 transition-colors"><Github className="w-5 h-5" /></a>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 transition-colors"><ArrowUpRightFromSquare className="w-5 h-5" /></a>
            </div>
        </div>
    </div>
);


const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12"><span className="gradient-text">Things I've Built</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;