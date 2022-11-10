import Navigation from "../../Navigation";
import "./index.css";
import ImageDisplay from "../../ImageDisplay";

function Animation() {
  return (
    <div className="wholeThing">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="designBody">
        <div className="bigTitle">
          <h1>Character Design &amp; Storytelling</h1>
        </div>
        <br></br>
        <ImageDisplay
          filePath="/images/characterDesign/Polly_body2.png"
          title="Lost On Vacation"
          description="Digital, Photoshop. Character designs for the story of a young blind girl named Polly, who gets lost on vacation. Luckily,
            she has her android Rudy by her side and she meets some locals who help her out."
          moreFiles={[
            "/images/characterDesign/Rudy_body2.png",
            "/images/characterDesign/Mallory_body2.png",
            "/images/characterDesign/Bernie_body2.png",
          ]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/concept trio.png"
          title="Ghost Hunters"
          description="Digital, Photoshop. Concept art for a high school trio of ghost hunters who roam around finding work wherever they can."
          moreFiles={[
            "/images/characterDesign/ruina.jpg",
            "/images/characterDesign/novi.jpg",
            "/images/characterDesign/chase.jpg",
          ]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/illustration/sva comic - resiezd.jpg"
          title="In Close Quarters"
          description="Traditional, Ink. A 10-page comic made during a pre-college program at SVA completed over the course of a summer."
          moreFiles={[
            "/images/illustration/pg1.JPG",
            "/images/illustration/pg2.JPG",
            "/images/illustration/pg3.JPG",
            "/images/illustration/pg4.JPG",
            "/images/illustration/pg5.JPG",
            "/images/illustration/pg6.JPG",
            "/images/illustration/pg7.JPG",
            "/images/illustration/pg8.JPG",
            "/images/illustration/pg9.JPG",
            "/images/illustration/pg10.JPG",
          ]}
        />
        <br></br>
        <br></br>
        <div className="bigTitle">
          <h1>Animation</h1>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm">
            <video className="videoIn" controls="controls">
              <source
                src="/images/animation/TedTalkAnimationFINAL.mp4"
                type="video/mp4"
              />
            </video>
            <h3>
              Why We Fear and Hold Back From What We Want (TED Talk Animated)
            </h3>
            <p>
              An animated section of the TED Talk "Why We Fear and Hold Back
              From What We Want" by Stuti Singh. Created in collaboration with
              Tejlim Lee and Syd Tomasello using Clip Studio Paint. Using a
              storyboard that we made together, each member was responsible for
              animating 1/3 of the final video. My section is the first third
              (up until about the 0:50 mark).
            </p>
          </div>
          <div className="col-sm">
            <video className="videoIn" controls="controls">
              <source
                src="/images/animation/JessieChin_TalentShow_FINAL.mp4"
                type="video/mp4"
              />
            </video>
            <h3>Talent Show</h3>
            <p>
              Using Maya for the modeling and animation, this is a short
              animation of my frog ghost performing his talent in a talent show.
              I modeled, rigged, and textured everything except for the stage
              and lighting (which was provided to me).
            </p>
          </div>
        </div>
        <br></br>
        <ImageDisplay
          filePath="/images/animation/trainRenderDaylight.JPG"
          title="Train"
          description="A model of a NYC train car done using Maya and Substance."
          moreFiles={[
            "/images/animation/trainRenderNight.JPG",
            "/images/animation/trainRenders.png",
          ]}
        />

        <br></br>
      </div>
    </div>
  );
}

export default Animation;
