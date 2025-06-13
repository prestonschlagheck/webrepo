import React from 'react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led development of multiple web applications using modern technologies.',
      skills: ['React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed and maintained client websites and web applications.',
      skills: ['JavaScript', 'Python', 'MongoDB'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2019 - 2020',
      description: 'Started career building responsive websites and learning modern frameworks.',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-8 relative"
            >
              <div className="absolute -left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection 