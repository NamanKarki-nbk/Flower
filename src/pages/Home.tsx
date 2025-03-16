import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <h1>Section</h1>
      </main>
    </>
  );
};

export default Home;
