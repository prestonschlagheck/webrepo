import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Hello! I'm a passionate developer with a love for creating beautiful, 
              functional, and user-centered digital experiences. With several years 
              of experience in web development, I enjoy turning complex problems 
              into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge with 
              the developer community.
            </p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Profile Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 