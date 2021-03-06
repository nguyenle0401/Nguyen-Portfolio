import React from "react";
import "./style.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="bg-footer">
      <MDBFooter className="font-small darken-3 pt-0">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <div className="mb-5 flex-center">
                <a
                  className="fb-ic"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/nguyenle0401",
                      "_blank"
                    )
                  }
                >
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
                <a
                  className="tw-ic"
                  onClick={() =>
                    window.open("https://github.com/nguyenle0401", "_blank")
                  }
                  style={{ fontSize: "17px" }}
                >
                  <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="text-center py-3">
            <MDBContainer fluid style = {{color:"black"}}>
            Copyright © 2020 All rights reserved | This template is made with  by Nguyen Le
            </MDBContainer>
          </div>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
};

export default Footer;
