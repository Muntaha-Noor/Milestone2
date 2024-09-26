import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-5xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 text-5xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" /> },
];

export default function Skills() {
    return (
        <section className="bg-transparent py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-center">
                            <div>{skill.icon}</div>
                            <h3 className="mt-4 text-xl font-medium">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
