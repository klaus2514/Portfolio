// src/components/Skills.jsx

const skillCategories = [
    {
        title: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Redux"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js"]
    },
    {
        title: "Databases & Languages",
        skills: ["MongoDB", "MySQL", "Java"]
    },
    {
        title: "DevOps",
        skills: ["Docker", "CI/CD", "Kubernetes"]
    },
];

const otherSkills = ["Git/GitHub", "Vercel", "Render", "Postman", "REST APIs", "JWT", "WebSockets", "Agile", "OOP"];

const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16"><span className="gradient-text">Technical Skills</span></h2>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {skillCategories.map(category => (
                        <div key={category.title} className="glassmorphism p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-4 text-center">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {category.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                     <div className="glassmorphism p-6 rounded-lg sm:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-4 text-center">Tools & Concepts</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {otherSkills.map(skill => (
                                 <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;