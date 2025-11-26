"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const products = [
    { 
      name: "Swiftie Swipe", 
      description: "The #1 unofficial daily Swiftie challenge mobile game!",
      icon: "/swiftie.png",
      link: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086"
    },
    {
      name: "Dunk Rank",
      description: "The premiere app for ranking you and your friends based off basketball 1v1 scores.",
      icon: "/dunkrank.png",
      link: "https://apps.apple.com/us/app/dunk-rank/id6448699695"
    },
    {
      name: "Quote Cook",
      description: "The daily competitive unofficial Breaking Bad game",
      icon: "/quotecook.png",
      link: "https://apps.apple.com/us/app/quote-cook/id6447148619"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const targetCount = 20000;
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 16); // 60fps

    const timer = setInterval(() => {
      setDownloadCount(prevCount => {
        if (prevCount >= targetCount) {
          clearInterval(timer);
          return targetCount;
        }
        return Math.min(prevCount + increment, targetCount);
      });
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="font-extrabold text-white text-center" style={{ fontSize: Math.max(48, screenWidth/8) }}>
              AndyTech
            </h1>
            <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Creating innovative mobile applications that deliver exceptional user experiences and drive engagement.
            </p>
            <div className="text-5xl font-mono text-center md:text-5xl font-bold mb-2 text-blue-100">
                  {Math.floor(downloadCount).toLocaleString()}+ Downloads
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              Discover our portfolio of innovative mobile applications designed to enhance your digital experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.name}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white/20 rounded-2xl p-4 mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image 
                        src={product.icon} 
                        alt={product.name} 
                        width={80} 
                        height={80} 
                        className="rounded-xl" 
                      />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <span className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                        View on App Store
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                About AndyTech
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                We are passionate about creating mobile applications that not only meet user needs but exceed expectations. 
                Our focus on performance, user experience, and innovative design sets us apart in the competitive app market.
              </p>
              <p className="text-blue-200 text-lg leading-relaxed">
                Each product is crafted with attention to detail, ensuring maximum engagement and user satisfaction. 
                We believe in the power of technology to bring people together and create meaningful experiences.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-200 leading-relaxed">
                To develop mobile applications that combine cutting-edge technology with intuitive design, 
                delivering exceptional user experiences that drive engagement and create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white/5 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">AndyTech</h3>
              <p className="text-blue-200">
                Creating innovative mobile experiences that users love.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/mobile-products" className="text-blue-200 hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="/freelancing" className="text-blue-200 hover:text-white transition-colors">Software Freelancing</a></li>
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
