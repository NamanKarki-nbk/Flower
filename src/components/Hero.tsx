const Hero: React.FC = () => {
  return (
    <section className="w-full h-screen bg-cover bg-[url('/leaf.png')] bg-center">
      <div className="flex flex-col  items-center justify-center h-full">
        <h1 className="text-[36px] text-center text-[#174800] max-w-xs ">
          Grow your health, Grow a Garden
        </h1>
        <button className="rounded-md px-8 py-3 text-white bg-[#16411D] hover:bg-[#B5CF48] mt-12">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
