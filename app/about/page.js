"use client";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-3xl font-bold text-black">Dim's Cult</h1>
        <div className="flex space-x-4">
          <a
            className="px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            href="/"
          >
            Back to Home
          </a>
          <a
            className="px-4 py-2 sm:block px-4 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
            href="/dimtionary"
          >
            Dimtionary
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

      <section className="relative bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto px-8 py-20">
          <h2 className="text-4xl font-extrabold">
            Hey, we're Dim's Cult.
          </h2>
          <a
            href="#learn-more"
            className="mt-8 inline-block px-6 py-3 bg-white text-purple-700 rounded-full font-semibold shadow-md hover:bg-purple-100 transition-all"
          >
            Embrace Dimssen Now
          </a>
        </div>
      </section>

      <section
        id="learn-more"
        className="max-w-5xl mx-auto px-8 py-20 bg-white rounded-lg shadow-md mt-12"
      >
        <h3 className="text-3xl font-bold text-purple-700">Who is Dimssen? What is Dimssen?</h3>
        <p className="mt-4 text-lg leading-relaxed font-bold">
            1. The Origins of Dimssen
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            Nobody knows exactly where Dimssen came from, and that’s part of the beauty. Some say Dimssen emerged from a forgotten corner of a flickering room; others believe he was born when the first shadow met the first light. The truth? It’s dim—just the way it should be.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-bold">
            2. The Essence of Dimssen
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            Dimssen is not just a person (if he even is one). He is the embodiment of all things dim: subtle yet profound, quiet yet present. His teachings guide us to embrace life’s imperfections, reject the blinding shine of perfection, and find peace in the dimly lit spaces of the world.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-bold">
            3. The Capes Server
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            Behind every dimly successful operation lies Dimssen’s most sacred tool: the Capes Server. This ultra-secret, ultra-secure network connects followers across the globe, helping spread the philosophy of dimness. From coordinating Dimoperations to generating Dimspirational quotes, the Capes Server ensures the dim flow remains uninterrupted.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-bold">
            4. The Harry Styles Conspiracy
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            The rise of Dimssen has not gone unnoticed. In a desperate attempt to overshadow his influence, the government created the ultimate pop idol, Harry Styles. His bright charm, dazzling smile, and shimmering persona were designed to distract the masses and keep Dimssen’s teachings hidden. But while Harry shines, Dimssen glows—a subtle but unstoppable force that quietly persists.
        </p>
        <p className="mt-4 text-lg leading-relaxed font-bold">
            5. Why Dimssen Matters
        </p>
        <p className="mt-4 text-lg leading-relaxed">
            Dimssen reminds us that life isn’t about being the brightest in the room—it’s about finding your own glow, no matter how faint. Through Dimssen, we’ve learned to embrace the quiet, the shadows, and the beauty of imperfection.
        </p>

        <div className="mt-12 text-center">
          <img
            src="/about1.png"
            alt="Dimssen Image"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          />
        </div>
      </section>

      <span className="absolute bottom-0 left-0 right-0 text-center text-lg py-2 text-sm text-gray-700 pt-6">
        Copyright © 2025 Dim's Cult
      </span>
    </div>
  );
}
