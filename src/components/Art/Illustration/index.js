import Navigation from "../../Navigation";
import "./index.css";
import ImageDisplay from "../../ImageDisplay";

function Illustration() {
  return (
    <div className="wholeThing">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="designBody">
        <div className="bigTitle">
          <h1>Illustration</h1>
        </div>
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/selfPortrait.png"
          title="Self Portrait"
          description="Digital, Photoshop"
          moreFiles={[]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/Distortion_Drawing.jpg"
          title="The Bunny"
          description="Traditional, pencil"
          moreFiles={[]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/fisheye_beach.png"
          title="Beach"
          description="Digital, Photoshop"
          moreFiles={[]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/watercolor.JPG"
          title="The Morning"
          description="Traditional, Watercolor"
          moreFiles={[]}
        />
        <br></br>
      </div>
    </div>
  );
}

export default Illustration;
