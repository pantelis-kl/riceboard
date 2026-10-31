
export default function Hero() {
    
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-8xl mx-auto px-4 lg:px-8 py-16">
      <div className="flex flex-col gap-6 text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) leading-[1.15]">
          Turn opinions into a{" "}
          <div className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-400">
            ranked roadmap
          </div>
        </h1>
      </div>
    </div>
  );
}
