import "./index.css";
import Navigation from "../Navigation";

function Art() {
  return (
    <div className="all">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="bodyText">
        <div className="artElements row justify-content-center">
          <a className="col-sm design" href="/design">
            <h4>Design</h4>
            <img
              src="/images/design/BloodrightLipstickAd.jpg"
              alt="brochure"
              width="100%"
            />
          </a>
          <a className="col-sm illustration" href="/illustration">
            <h4>Illustration</h4>
            <img
              src="/images/illustration/selfPortrait.png"
              alt="selfPortrait"
              width="100%"
            />
          </a>
          <a className="col-sm animation" href="/animation">
            <h4>Character Design/Animation</h4>
            <img
              src="/images/animation/trainRenders.png"
              alt="trainRender"
              width="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Art;
