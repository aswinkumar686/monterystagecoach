import Banner from "./components/banner";
import Guest from "./components/Guest";
import Welcome from "./components/Welcome";
import PhotoGallery from "./components/PhotoGallery";
import Attraction from "./components/Attraction";
import SisterProperties from "./components/SisterProperties";
import Footer from "./components/Footer";
import Location from "./components/Location";
import ScrollToTop from "./components/TotopButton";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Fade bottom>
        <Guest />
      </Fade>
      <Fade bottom>
        <PhotoGallery />
      </Fade>
      <Fade bottom>
        <Attraction />
      </Fade>
      <Fade bottom>
        <Location />
      </Fade>
      <Fade bottom>
        <SisterProperties />
      </Fade>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
