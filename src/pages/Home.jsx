import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="md:text-center">
          <Hero />
          <About />
        </section>
      </main>
    </>
  );
}
