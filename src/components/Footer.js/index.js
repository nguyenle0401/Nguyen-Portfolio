import React from "react";
import "./style.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="cyan"
      className="font-small darken-3 pt-0 nguyen-footer-style"
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a
                className="fb-ic"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/nguyen.nguyen.moments/",
                    "_blank"
                  )
                }
              >
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a
                className="tw-ic"
                onClick={() =>
                  window.open(
                    "https://github.com/nguyennguyenmoments/",
                    "_blank"
                  )
                }
                style={{ fontSize: "17px" }}
              >
                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com">
            {" "}
            nguyennguyenmoments@gmail.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
