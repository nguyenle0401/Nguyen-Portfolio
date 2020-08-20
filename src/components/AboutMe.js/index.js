import React from "react";
import "./style.css";


const AboutMe = () => {
  return (
    <div>
      <section class="site-section bg-2 position-me" id="section-about">
            <div class="container">
              <div class="row mb-5 align-items-center">
                <div class="col-lg-5 pl-lg-5">
                  <div class="section-heading">
                    <h2>
                      <strong>About Me</strong>
                    </h2>
                  </div>
                  <p>
                  "If you wish to reach the highest, begin at the lowest"
                  </p>
                  <p>
                   I'm Nguyen Le, innovation is my passion. With every line of code, I strive to make the web a beautiful place.
                  </p>
                </div>
                <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                  <img src="./Images/me.jpg" alt="me" class="size-img" />
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default AboutMe;
