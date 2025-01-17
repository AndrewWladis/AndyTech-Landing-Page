"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(0);
  const products = [
    { 
      name: "Swiftie Swipe", 
      description: "The #1 unoffical daily Swiftie challenge mobile game!",
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
      description: "The daily competitive daily unofficial Breaking Bad game",
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

  return (
    <main className="flex flex-col justify-center bg-gradient-to-b from-sky-600 to-sky-300 bg-fixed">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="font-extrabold text-white text-center" style={{ fontSize: screenWidth/6 }}>AndyTech</h1>
        <h2 className="text-white text-center text-3xl font-bold">Maximum Performance. Maximum Effort.</h2>
      </div>
      <div className="w-full mt-32">
        <h2 className="text-white text-center font-bold text-3xl">
          Latest Products
        </h2>
        <div className="flex flex-row items-center justify-center flex-wrap">
          {products.map((product) => (
            <div className="flex flex-col items-start justify-center border-2 border-white rounded-xl p-3 max-w-52 min-w-52 bg-opacity-20 m-4 bg-gradient-to-t from-transparent to-sky-200" key={product.name}>
              <a href={product.link} target="_blank">
                <div className="border-2 border-white bg-white bg-opacity-40 rounded-xl mb-2">
                  <Image src={product.icon} alt={product.name} width={75} height={75} className="rounded-xl p-1" />
                </div>
              </a>
              <h3 className="text-white font-bold">{product.name}</h3>
              <p className="text-white">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full mt-32 bottom-0">
        <p className="text-white text-center">
          Copyright © 2025 AndyTech, Inc. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
