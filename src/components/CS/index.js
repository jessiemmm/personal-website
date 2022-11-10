import Navigation from "../Navigation";
import "./index.css";
import ImageDisplay from "../ImageDisplay";

function ComputerScience() {
  return (
    <div className="wholeThing">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="designBody">
        <div className="bigTitle">
          <h1>Computer Science</h1>
        </div>
        <br></br>
        <ImageDisplay
          filePath="/images/screenshots/mainWebsite.JPG"
          title="Personal Website (This One)"
          description="This site is made from scratch! (I also made the logo.) I first designed this website in Figma and then
            utilized Javascript and React to code it. Feel free to navigate around the website to see each
            page :)"
          moreFiles={[]}
          links=<p className="links">
            If you're curious, you can look at the Github repo{" "}
            <a href="https://github.com/jessiemmm/personal-website">here.</a>
          </p>
        />
        <br></br>
        <ImageDisplay
          filePath="/images/screenshots/jrivia.JPG"
          title="Jrivia"
          description="A fun trivia website made in collaboration with Jared Rudnicki using Javascript, React, and Node. Supports multiple types of users,
            such as moderators, general users, and guests. Also supports manually creating and answering trivia questions, as 
            well as generating random ones from an external API."
          moreFiles={["/images/screenshots/jrivia1.JPG", "/images/screenshots/jrivia2.JPG"]}
          links=<p className="links">
            See the deployed website{" "}
            <a href="https://jrivia.herokuapp.com/">here!</a>
            <br></br>
            You can also check out the{" "}
            <a href="https://github.com/jessiemmm/jrivia">main repo</a> and{" "}
            <a href="https://github.com/jaredrudnicki/jrivia-node">node repo.</a>
          </p>
        />
        <br></br>
        <ImageDisplay
          filePath="/images/screenshots/graphics1.png"
          title="2.5D Game"
          description="Coded in C++ and utilizes OpenGL. Using some starter code, implemented a basic skybox and animation that corresponds to keys being
            pressed, as well as a capability to change the platform texture. Also implemented camera
            movement to follow the character, zoom in/out of the scene and use the mouse to look around the environment.
            Unfortunately, the repository is private due to this being a project for a Computer Graphics
            class, but let me know if you'd like to see it and I can ask my professor!"
          moreFiles={[
            "/images/screenshots/graphics2.png",
            "/images/screenshots/screenshot3.png",
          ]}
        />
        <br></br>
        <ImageDisplay
          filePath="/images/screenshots/catchingup.JPG"
          title="Catching Up"
          description="Help a bear navigate his relationship with his uncle. A small dialogue-based visual novel game made with Ren'py. 
            The deployed website is supported on Firefox."
          moreFiles={[
            "/images/screenshots/catchingup1.JPG",
            "/images/screenshots/catchingup2.JPG",
            "/images/screenshots/catchingupDialogue.png",
          ]}
          links=<p className="links">
            Click <a href="https://nostalgic-euler-5c026f.netlify.app/">here</a>{" "}
            to see the deployed website (Firefox only).
            <br></br>
            <p>
              Github repo can be found{" "}
              <a href="https://github.com/jessiemmm/catching-up">here.</a>
            </p>
          </p>
        />
        <br></br>
        <ImageDisplay
          filePath="/images/screenshots/addictionwebsite.JPG"
          title="(Spoof) Social Media Addiction Help"
          description="This website mimics the existing website on American Addiction Centers for alcohol addiction. 
            The focus for this project was to shine some light on social media addiction and the dangers of it.
            The coding has been done by me and the images/assets have been created by me, 
            Brooke Elmore, Emily Liu, and Sadhana Pakala."
          moreFiles={[
            "/images/screenshots/addictionwebsite1.JPG",
            "/images/screenshots/addictionwebsite3.JPG",
            "/images/screenshots/addictionwebsite2.JPG",
          ]}
          links=<p className="links">
            See the deployed website{" "}
            <a href="https://relaxed-bhabha-04906a.netlify.app/">here </a>
            and the Github repo{" "}
            <a href="https://github.com/jessiemmm/addiction-website">here.</a>
          </p>
        />
        <br></br>
      </div>
    </div>
  );
}

export default ComputerScience;
