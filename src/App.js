

import IntroComp from "./Components/IntroComp";
import Tranding from "./Components/Trending";
import Footer from "./Components/Footer";
import "./css/Main.css";
import NavbarComp from "./Components/NavbarComp";
import HeroComp from "./Components/HeroComp";

function App() {
  return (
    <div>

     {/* navbarsection */}
      <div className="myBg">
      <NavbarComp/>
      <IntroComp/>
      </div>

      <HeroComp/>
      <Tranding/>


      {/* footer */}
      <Footer/>

    </div>
  );
};

export default App;
