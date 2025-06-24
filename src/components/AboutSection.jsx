import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='about-cursor py-24 pa-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
            <p className='text-muted-foreground'>
              With Over 2 years of experience in web development, I specialize in creating dynamic
               and responsive web applications. My journey began with a fascination for technology 
               and a desire to build impactful digital solutions.
            </p>
            <p className='text-muted-foreground'>
              I'm passionate about creating elegant solutions to complex problems.
              I thrive on challenges and enjoy pushing the boundaries of what's possible with code.              
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>

              <a href='#contact' className='cosmic-button'>Get In Touch</a>

              <a href="projects/YahyaCV.pdf" download className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              
              <div className="flex items-start gap-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className="text-muted-foreground">
                    Proficient in HTML, CSS, JavaScript, React, Next js, Node.js, and more.
                    I build responsive and user-friendly web applications.
                    </p>

                </div>
              </div>
              
              {/* <h4 className="text-lg font-semibold mb-2">Skills & Technologies</h4>
              <p className="text-muted-foreground">
                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, and more.
              </p> */}
            </div>
            <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className="text-muted-foreground">
                   Designing intuitive and engaging user interfaces.
                   I focus on user experience to create seamless interactions.
                    </p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
               <div className="flex items-start gap-4">
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className="text-muted-foreground">
                    Experienced in managing projects from concept to deployment.
                    I ensure timely delivery and quality assurance throughout the development process.
                    </p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection

