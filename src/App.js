import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="container">
          <img src="/img/logo.svg" alt="Logo" />
          <div className="navbar">
            <a className="link" href="#Home">
              Home
            </a>
            <a href="#Contact">Contact</a>
          </div>
        </nav>
        <div className="hero">
          <div className="hero-sec">
            <h1 className="hero-title">THIS IS VELOCITY</h1>
            <div className="btn-gr">
              <button className="sign-btn">SIGN UP</button>
              <button className="learn-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="sec-1 container">
            <h1>WHAT WE DO</h1>
            <p className="title-dec">
              THIS IS SOME NEXT INSIDE OF A DIV BLOCK.
            </p>
            <div className="box-gr">
              <div className="box">
                <img src="/img/watch.svg" alt="Icon" />
                <div className="dec">
                  <h2>GRAPHIP DESIGN</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src="/img/awe.svg" alt="Icon" />
                <div className="dec">
                  <h2>AWESOME CODE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
              <div className="box">
                <img src="/img/free.svg" alt="Icon" />
                <div className="dec">
                  <h2>FREE TEMPLATE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg">
            <div className="sec-2 container">
              <h1>SERVICES</h1>
              <p className="sec-2-dec">THIS SOME TEXT INSIDE OF A DIV BLOCK.</p>
              <div className="box-gr2">
                <div className="box2">
                  <img src="/img/seviz1.svg" alt="Icon" />
                  <h2>SERVICES ONE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius.
                  </p>
                  <button>LEARN MORE</button>
                </div>
                <div className="box2">
                  <img src="/img/seviz1.svg" alt="Icon" />
                  <h2>SERVICES ONE</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius.
                  </p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec-3 container">
            <h1>TAB SECTION</h1>
            <p>THIS IS SOME TEXT INSIDE OF A DIV BLOCK</p>
            <div className="select-gr">
              <button>TAB BUTTON 1</button>
              <button>TAB BUTTON 2</button>
              <button>TAB BUTTON 3</button>
            </div>
            <img src="/img/man-img.svg" alt="man"></img>
            <h1>Some Title Here</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-hero container">
          <div
            className="
          box3">
            <h1>ABOUT VELOCITY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div
            className="
          box3">
            <h1>USEFUL LINKS</h1>
            <div className="link">
              {" "}
              <a href="#link"> Phasellus gravida semper nisi</a>{" "}
            </div>
            <div className="link">
              {" "}
              <a href="#link"> Suspendisse nisl elit</a>{" "}
            </div>
            <div className="link">
              {" "}
              <a href="#link"> Dellentesque habitant morbi</a>{" "}
            </div>
            <div className="link">
              {" "}
              <a href="#link"> Etiam sollicitudin ipsum</a>{" "}
            </div>
          </div>
          <div
            className="
          box3">
            <h1>SOCIAL</h1>
            <div className="link">
              <img src="/img/twiter.svg" alt="man"></img>{" "}
              <a href="#link">Twiter</a>{" "}
            </div>
            <div className="link">
              <img src="/img/facebook.png" alt="man"></img>{" "}
              <a href="#link">Facebook</a>{" "}
            </div>
            <div className="link">
              <img src="/img/pinterest.svg" alt="man"></img>{" "}
              <a href="#link">Pinterest</a>{" "}
            </div>
            <div className="link">
              <img src="/img/google.svg" alt="man"></img>{" "}
              <a href="#link">Google</a>{" "}
            </div>
            <div className="link">
              <img src="/img/webflow.svg" alt="man"></img>{" "}
              <a href="#link">Webflow</a>{" "}
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright Velocity Inc. Made in Webflow.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
