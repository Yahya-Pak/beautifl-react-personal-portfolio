import React, { useState } from 'react'
import { cn } from '../lib/utils'
const skills = [
    //Frontend Skills
    { name: "HTML/CSS", level: "80", category: "frontend" },
    { name: "JavaScript", level: "70", category: "frontend" },
    { name: "React", level: "80", category: "frontend" },
    { name: "Bootstrap", level: "80", category: "frontend" },
    { name: "Tailwind CSS", level: "60", category: "frontend" },
    { name: "Next.js", level: "70", category: "frontend" },

    //Backend Skills
    { name: "ASP.NET Core Blazor", level: "90", category: "backend" },
    { name: "Node.js", level: "40", category: "backend" },
    { name: "Express", level: "50", category: "backend" },
    { name: "Microsoft SQL", level: "90", category: "backend" },
    { name: "MongoDB", level: "80", category: "backend" },
    { name: "My SQL", level: "80", category: "backend" },

    //Tools and Technologies
    { name: "Git/GitHub", level: "70", category: "tools" },
    { name: "Docker", level: "50", category: "tools" },
    { name: "Postman", level: "60", category: "tools" },
    { name: "Figma", level: "60", category: "tools" },
    { name: "Visual Studio Code", level: "90", category: "tools" },
    { name: "Visual Studio", level: "90", category: "tools" }
    
]

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
);


  return (
    <section  id='skills' className='skill-cursor py-24 px-4 relative bg-secondary/30'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                My <span className='text-primary'>Skills</span>
            </h2>

             <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category,key) => (
                    <button key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                            {category} 
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill,key)=>(
                    <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                       <div className='text-left mb-4 '>
                         <h3 className='text-lg font-semibold '>{skill.name}</h3>
                        </div>

                        <div className='w-full bg-secondary/50 rounded-full h-2 overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                            style={{ width: `${skill.level}%` }}
                            />
                        </div>

                        <div className='text-right mt-2'>
                            <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                        </div>

                    </div>
                ))}

            </div>




        </div>

    </section>
  )
}

export default SkillsSection
