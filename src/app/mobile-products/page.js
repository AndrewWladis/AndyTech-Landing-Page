"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function MobileProducts() {
  const products = [
    { 
      name: "Swiftie Swipe", 
      description: "The #1 unofficial daily Swiftie challenge mobile game! Test your Taylor Swift knowledge with daily challenges, compete with friends, and discover new facts about your favorite artist.",
      icon: "/swiftie.png",
      link: "https://apps.apple.com/us/app/swiftie-swipe/id6479224086",
      category: "Entertainment"
    },
    {
      name: "Dunk Rank",
      description: "The premiere app for ranking you and your friends based off basketball 1v1 scores. Track your basketball skills, organize tournaments, and see who's the ultimate baller.",
      icon: "/dunkrank.png",
      link: "https://apps.apple.com/us/app/dunk-rank/id6448699695",
      category: "Sports"
    },
    {
      name: "Powerscaler",
      description: "Powerscaler is the first fan-driven character ranking experience! Vote and rank your favorite fictional characters from across pop culture.",
      icon: "/powerscaler.png",
      link: "https://apps.apple.com/us/app/powerscaler/id6748239904",
      category: "Entertainment"
    },
    {
      name: "Music Box'd",
      description: "Discover and share your favorite albums with Music Box'd! Elevate your music experience by rating albums, showcasing your top picks, and connecting with fellow music enthusiasts.",
      icon: "/musicboxd.png",
      link: "https://apps.apple.com/us/app/music-boxd/id6476071299",
      category: "Entertainment"
    },
    {
      name: "Quote Cook",
      description: "The daily competitive unofficial Breaking Bad game. Test your knowledge of the iconic series with daily quote challenges and compete with fellow fans.",
      icon: "/quotecook.png",
      link: "https://apps.apple.com/us/app/quote-cook/id6447148619",
      category: "Entertainment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />

      {/* Products Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Our Mobile Apps
            </h2>
            <p className="text-blue-200 text-xl max-w-3xl mx-auto">
              Each app is carefully crafted to deliver exceptional user experiences and drive engagement
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 flex flex-col w-full md:w-80 lg:w-80">
                <div className="flex flex-row items-center mb-4">
                  <div className="bg-white/20 rounded-2xl p-3">
                    <Image 
                      src={product.icon} 
                      alt={product.name} 
                      width={90} 
                      height={90} 
                      className="rounded-xl" 
                    />
                  </div>
                  <div className="flex flex-col items-start ml-4">
                    <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed mb-4 flex-grow">
                  {product.description}
                </p>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 mt-auto"
                >
                  Download on App Store
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Next App?
          </h2>
          <p className="text-blue-200 text-xl max-w-3xl mx-auto mb-8">
            Let's work together to bring your mobile app idea to life with the same level of quality and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/freelancing" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
                Creating innovative mobile experiences that users love.
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
