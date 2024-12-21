import Footer from "./components/footer";
import GetStarted from "./components/getStarted";
import Header from "./components/header";
import Hero from "./components/hero";
import Hero2 from "./components/hero2";
import Hero3 from "./components/hero3";
import Mission from "./components/mission";
import Plan from "./components/plan";
import Why from "./components/why";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="relative">
        <Hero />
        <div className="flex justify-center m-auto w-full md:absolute bottom-0 md:-bottom-80">
          <Hero2 />
        </div>
      </div>
      <div className="mt-10 md:mt-80 mb-10 mx-10">
        <Why />
      </div>
      <Hero3 />
      <Mission />
      <Plan />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
