export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001f3f] to-[#001a34] opacity-60 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl flex flex-col gap-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Enter the Market.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          The entry point to web3 and blockchain education.
          <br />
          A bridge between potential and empowerment.
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="#"
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:bg-green-400 transition"
          >
            Become an Educator
          </a>

          <a
            href="#"
            className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
          >
            Latest News
          </a>
        </div>
      </div>
    </section>
  );
}
