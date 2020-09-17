import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="border">
      <section class="site-section bg-2 position-me" id="section-about">
        <div class="container">
          <div class="row mb-5 align-items-center">
            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img src="./Images/coder.png" alt="me" class="size-img" />
            </div>
            <div class="col-lg-5 pl-lg-5">
              <div class="section-heading">
                <h2>
                  <strong>About Me</strong>
                </h2>
              </div>
              <p>"If you wish to reach the highest, begin at the lowest"</p>
              <p>
                I'm Nguyen Le, innovation is my passion. With every line of
                code, I strive to make the web a beautiful place.
              </p>
            </div>
          </div>
          {/* <p>
            <a
              href="#section-contact"
              class="btn btn-warning px-4 py-2 btn-sm smoothscroll"
            >
              Hire Me
            </a>
          </p> */}
        </div>
      </section>
      <section class="site-section" id="section-contact">
        <div class="container">
          <div class="row">
            <div class="col-md-2 ml-4">
              <div class="section-heading text-center"></div>
            </div>
            <div class="section-heading">
              <h2 className="mt-7" style={{ color: "black" }}>
                <strong>My Skills</strong>
              </h2>
            </div>
            <div className="icon">
              <img
                src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png"
                style={{ width: "400px", height: "100px" }}
              ></img>
              <img
                src="Images/logo512.png"
                style={{ width: "150px", height: "150px" }}
              ></img>
              <img
                src="https://nodejs.org/static/images/logo.svg"
                style={{ width: "200px", height: "200px" }}
              ></img>
              <img
                src="Images/mongodb.svg"
                style={{ width: "200px", height: "200px" }}
              ></img>
            </div>

            {/* <div class="col-md-7 mb-5 mb-md-0">
              <form action="" class="site-form">
                <h3 class="mb-5 mt-5"><strong>Get In Touch</strong></h3>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control px-3 py-4"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control px-3 py-4"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control px-3 py-4"
                    placeholder="Your Phone"
                  />
                </div>
                <div class="form-group mb-5">
                  <textarea
                    class="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    class="btn btn-warning  px-4 py-3"
                    value="Send Message"
                  />
                </div>
              </form>
            </div> */}
            {/* <div class="col-md-5 pl-md-5 ">
              <h3 class="mb-5">My Details</h3>
              <ul className="list-group bg-list">
                <li className="list-group-item">Full name: Le Thi Thuy Nguyen</li>
                <li className="list-group-item">Birthday: 04/01/1998</li>
                <li className="list-group-item">Email: nle2059@gmail.com</li>
                <li className="list-group-item">Phone: 0833 225 280</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
