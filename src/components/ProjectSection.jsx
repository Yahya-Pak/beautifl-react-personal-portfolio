import { ArrowRight, ExternalLink, Github, GithubIcon } from 'lucide-react';
import React from 'react'

const projects = [
  
  { 
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills using React and Tailwind.',
    image: "projects/Portfolio.PNG",
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    demoUrl: "#",
    githubUrl: "#",
  },    

  { 
    id: 2,
    title: 'Consultancy Website',
    description: 'A consultancy website built with Html,Css and Javascript featuring a modern design and responsive layout.',
    image: "projects/Consultant.PNG",
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: "#",
    githubUrl: "#",
  },
  

  { 
    id: 3,
    title: 'My Tasks Todo App',
    description: 'A simple todo application to manage tasks with create, update, delete, and complete functionalities using React.',
    image: "projects/Todos.PNG",
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    demoUrl: "#",
    githubUrl: "#",
  },

//   { 
//     id: 4,
//     title: 'Drink Water App',
//     description: 'A hydration reminder app that helps users track their water intake and reminds them to stay hydrated.',
//     image: "/projects/DrinkWater.PNG",
//     tags: ['React', 'Tailwind CSS', 'JavaScript'],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
  
];

const ProjectSection = () => {
  return (
    <section id='projects' className='project-cursor py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'> Projects</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects that showcase my skills and creativity.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                             <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title}
                                 className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                             </div>
                             <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag,key) => (
                                        <span key={key} className='text-xs border px-2 py-1 font-medium rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}

                                </div>
                            

                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={project.demoUrl} className='text-foreground/88 hover:text-primary transition-colors duration-300' target='_blanl'><ExternalLink size={20}/></a>
                                    <a href={project.githubUrl} className='text-foreground/88 hover:text-primary transition-colors duration-300' target='_blank'><GithubIcon size={20}/></a>
                                    
                                    </div>
                                    </div>

                            </div>
                        </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/Yahya-Pak' target='_blank'>
                    Check My Github <ArrowRight size={16} />
                </a>
                
            </div>

        </div>
    </section>
  )
}

export default ProjectSection
