import video from "../videos/video-1.mp4";
import logo from "../images/logo-new.png";
import { Col, Row } from "react-bootstrap";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <video src={video} autoplay muted loop />
      <div>
      <nav class="navbar navbar-expand-lg bgnav navbar-light  navbar-dark py-3">
        <div class="container">
            <button     class="navbar-toggler" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">

                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">
                        <a href="#learn" class="nav-link">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#questions" class="nav-link">ROOMS
</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">GALLERY</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">SPECIALS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">DESTINATIONS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">DIRECTIONS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">CONTACT US</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">RESERVATIONS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">ACCESS</a>
                    </li>

                </ul>


            </div>
        </div>
    </nav>
      </div>
      <div className="img-logo">
          <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
export default Banner;
