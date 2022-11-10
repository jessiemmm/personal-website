import Navigation from "../../Navigation";
import "./index.css";
import ImageDisplay from "../../ImageDisplay";

function Design() {
  return (
    <div className="wholeThing">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="designBody">
        <div className="bigTitle">
          <h1>Design</h1>
        </div>
        <br></br>
        <ImageDisplay
          filePath="/images/design/BloodrightLipstickAd.jpg"
          title="Bloodright"
          description="Made in the form of an advertisement for lipsticks made of animal blood, Bloodright is a stab at consumerism in modern society, where animal testing is 
            rampant and largely ignored. The name of each lipstick corresponds to a popular brand that uses animal testing."
          moreFiles={[]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/design/HolocaustPosters1.png"
          title="International Holocaust Film Festival"
          description="This is a collection of a series of posters, stamps, and a logo for the International Holocaust Film Festival. This project was a part
            of a Graphic Design class and the imagery used in the posters are from photographs I made. Each stamp has a white outline of the corresponding
            Holocaust memorial of each country."
          moreFiles={[
            "/images/design/HolocaustPosters2.png",
            "/images/design/HolocaustPosters3.png",
            "/images/design/HolocaustStamps.JPG",
            "/images/design/HolocaustLogo.JPG",
            "/images/design/HolocaustBrochure.png",
          ]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/design/BrochureMockup2.png"
          title="Zodiac Hunt"
          description="Zodiac Hunt is a brochure for a proposal of a month-long integrative art exhibit in the streets of Manhattan’s Chinatown during the month 
            of the Moon Festival. Featuring 
            the twelve Chinese zodiacs etched onto glass installations of the moon near the entrances of local businesses, it is designed to bring 
            life back to the struggling neighborhood, which has recently been a target for hate due to the COVID pandemic."
          moreFiles={[
            "/images/design/BrochureMockup1.png",
            "/images/design/brochure.jpg",
            "images/design/brochure2.jpg",
          ]}
        />
      </div>
    </div>
  );
}

export default Design;
