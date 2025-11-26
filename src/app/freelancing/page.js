"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Freelancing() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Next.js, Node.js, and more.",
      icon: "🌐",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      technologies: ["React Native", "Expo"]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions with robust APIs and database design.",
      icon: "⚙️",
      technologies: ["Node.js", "Python"]
    },
    {
      title: "Database Design",
      description: "Optimized database architecture and data modeling for performance and scalability.",
      icon: "🗄️",
      technologies: ["MongoDB", "MySQL", "Firebase"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Software Freelancing & Consulting
            </h1>
            <p className="text-blue-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Professional software development services tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:awladis@andytech.it.com" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              Comprehensive software development solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-white font-bold text-2xl">{service.title}</h3>
                </div>
                <p className="text-blue-200 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Why Choose AndyTech?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-blue-200">Successfully delivered multiple mobile apps with thousands of downloads</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Modern Technologies</h3>
                    <p className="text-blue-200">Using the latest frameworks and best practices for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Flexible Engagement</h3>
                    <p className="text-blue-200">Project-based, hourly, or ongoing support - whatever works for your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Transparent Communication</h3>
                    <p className="text-blue-200">Regular updates, clear timelines, and open communication throughout the project</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Let's discuss your project requirements and create a solution that drives your business forward.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:awladis@andytech.it.com" 
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Email for a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">AndyTech</h3>
              <p className="text-blue-200">
                Professional software development services for your business needs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/mobile-products" className="text-blue-200 hover:text-white transition-colors">Mobile Development</Link></li>
                <li><Link href="/freelancing" className="text-blue-200 hover:text-white transition-colors">Software Freelancing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-blue-200">
                Get in touch with us for collaboration opportunities and support at awladis@andytech.it.com
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8">
            <p className="text-blue-200 text-center">
              © 2025 AndyTech, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
