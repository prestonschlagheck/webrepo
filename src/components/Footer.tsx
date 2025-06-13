import React from 'react'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '🔗' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Thank you for visiting my portfolio. I'm always open to discussing 
            new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
                title={link.name}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 