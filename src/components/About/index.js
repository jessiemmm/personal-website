import Navigation from "../Navigation";
import "./index.css";

function About() {
  const email = () => {
    window.location.href = "mailto:jessmchin@gmail.com";
  };

  return (
    <div className="aboutPage">
      <div style={{ position: "sticky", top: "0", zIndex: "100" }}>
        <Navigation />
      </div>
      <div className="text">
        <h1>JESSICA MEI CHIN</h1>
        <div className="row">
          <div className="col-sm">
            <p>
              An artist and developer from Brooklyn, NY, currently based in
              Boston for college. Majoring in Computer Science and Media Arts at
              Northeastern University.
            </p>
            <p>
              I specialize in frontend development, human computer interaction,
              and animation. Having the opportunity to mix my code with my
              artwork is my favorite part of what I do. In my spare time, I love
              to make wacky characters,{" "}
              <div className="italic">occasionally</div> work out, and play
              video games.
            </p>

            <p>
              Please don't hesitate to reach out if you have any questions (or
              just want to chat about stuff)!
            </p>
            <div className="container bottom">
              <div className="row">
                <div className="col contact">
                  &nbsp; <i className="fa fa-phone-alt"></i> (646) 770-4735
                  <br></br>
                  <button className="btn email" onClick={() => email()}>
                    <i class="fas fa-envelope"></i> jessmchin@gmail.com
                  </button>
                </div>
                <div className="col socialMedias">
                  <a
                    className="linked"
                    href="https://www.linkedin.com/in/jessica-mei-chin/"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  &nbsp;
                  <a className="github" href="https://github.com/jessiemmm">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm me">
            <img src="/images/me.jpg" alt="pic-of-me" id="me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
