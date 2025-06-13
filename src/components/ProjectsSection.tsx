import React from 'react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and Next.js',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Two',
      description: 'Full-stack application with user authentication',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project Three',
      description: 'Mobile-first responsive design with modern UI',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 