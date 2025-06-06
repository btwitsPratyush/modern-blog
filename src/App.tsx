import React from 'react';
import { Code2, Github, Linkedin, Mail, ExternalLink, Coffee, Zap, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Pratyush</h1>
            <p className="text-slate-600 text-sm font-medium">Full Stack Developer</p>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg text-slate-700 font-light italic">Code by Pratyush</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200">
            <Github className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">GitHub</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200">
            <Linkedin className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200">
            <Mail className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Contact</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I'm a passionate full-stack developer who loves crafting digital experiences that make a difference. 
                With a keen eye for detail and a drive for clean, efficient code, I build applications that are both 
                beautiful and functional.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                My journey in software development started with curiosity and has evolved into a deep appreciation 
                for the art of problem-solving through code. I believe in writing code that not only works but tells 
                a story – code that future developers (including myself) can read, understand, and build upon.
              </p>
              <p className="text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges and 
                collaborate on projects that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Frontend Development</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Creating responsive, interactive user interfaces with modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Tailwind CSS</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Backend Development</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Building scalable server-side applications and APIs with robust architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Design & UX</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Crafting intuitive user experiences with attention to detail and accessibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Figma</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">UI/UX</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Responsive Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">E-Commerce Platform</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A full-stack e-commerce solution built with React and Node.js, featuring real-time inventory 
                  management, secure payment processing, and an intuitive admin dashboard.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">MongoDB</span>
                  </div>
                  <a href="#" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Coffee className="w-16 h-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Task Management App</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A collaborative task management application with real-time updates, team collaboration features, 
                  and advanced project tracking capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Redis</span>
                  </div>
                  <a href="#" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Development Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Code2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Clean Code</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Writing code that is readable, maintainable, and tells a clear story to future developers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Performance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Optimizing applications for speed, efficiency, and exceptional user experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">User-Centric</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Designing with empathy, ensuring every interaction is intuitive and meaningful.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-slate-200 mt-16">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-700 font-medium">Pratyush</span>
          </div>
          <p className="text-slate-600 text-sm mb-4">
            Crafting digital experiences with passion and precision
          </p>
          <p className="text-slate-500 text-xs">
            © 2024 Pratyush. Built with care and attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;