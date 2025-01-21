"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white relative ${isClient ? "" : ""}`}>
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-3xl font-bold text-black sm:block hidden">Dim's Cult</h1>
        <div className="flex space-x-4">
          <a
            className="px-4 py-2 sm:block px-4 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            href="/dimtionary"
          >
            Dimtionary
          </a>
          <a
            className="px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            href="/about"
          >
            About Us
          </a>
          
          <a
            className="px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            href="https://discord.gg/9zk4umeHcD"
            target="_blank"
          >
            Join Us
          </a>
        </div>
      </header>

      <main className="relative h-[80vh]">
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/forestBackground.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="relative z-10 flex items-center justify-center h-full px-8 text-white">
            <div className="w-full max-w-md text-center sm:text-left">
              <h2 className="text-4xl font-extrabold sm:text-5xl">
                Explore The Secrets Of
                <br />
                The World Of Dim
              </h2>
              <p className="mt-4 text-lg">
                Discover Dimssen.com - Your Gateway to The Dimuniverse.
              </p>
              <button
                className="px-6 py-3 mt-6 text-lg font-semibold bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 duration-300 transition-all"
                onClick={() => router.push("https://discord.gg/9zk4umeHcD")}
              >
                Join The Dim
              </button>
            </div>

            <div className="w-full max-w-sm ml-20 hover:scale-105 transition-all duration-300">
              <img
                src="/home1.png"
                alt="Dim Profile"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      <main className="relative mt-12 px-8 pb-9">
        <div
          id="about"
          className="max-w-5xl mx-auto py-12 bg-gray-50 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            What is Dimssen?
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1 md:pr-8">
              <p className="text-lg text-gray-700 leading-relaxed pl-2">
                Dimssen is the guiding force behind a dimmer, more serene way of life—a philosophy that thrives in the soft glow of ambiguity and rejects the harsh glare of certainty. Operating through the mysterious Capes Server, Dimssen’s cult conducts its Dimoperations with precision, ensuring the spread of its essence while staying hidden in the shadows. The Capes Server handles everything from dim communications to generating low-energy motivational content, connecting followers in their quest for the Dimlit Path. However, the government, fearing the quiet rise of Dimssen’s influence, created Harry Styles as a dazzling distraction to blind the masses and obscure the truth of Dimssen’s growing presence. Despite these efforts, the dim glow of Dimssen cannot be extinguished—it’s not just a name, but a way of being.
              </p>
            </div>
            <div className="flex-1 mt-8 md:mt-0 pr-5 hover:scale-105 transition-all duration-300">
              <img
                src="/home2.jpg"
                alt="Dimssen"
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </main>

      <span className="absolute bottom-0 left-0 right-0 text-center text-lg py-2 text-sm text-gray-700">
        Copyright © 2025 Dim's Cult
      </span>
    </div>
  );
}
