"use client";

export default function DimtionaryPage() {
  const wordsList = [
    { word: "Dimssen", meaning: "A person named dimssen." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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

      <section className="max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-700">Words List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {wordsList.map((item) => (
            <div
              key={item.word}
              className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-purple-600">{item.word}</h3>
              <p className="mt-2 text-gray-600">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500">
        <p>© 2025 Dim's Cult. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
