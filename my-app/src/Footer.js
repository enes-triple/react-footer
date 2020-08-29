import React from "react";
import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter className="page-footer footer font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <MDBContainer>
                <a class="logo-area" href="#!">
                    <img src="https://reverehome.ca/assets/icons/footerLogo.png" alt="logo" />
                    <h5 className="font-weight-bold mt-2">REVERE</h5>
                </a>
                <h6 className="text-uppercase mb-3 mt-4 font-weight-bold">
                    Real Estate is the Where of our stories
                </h6>
                <p>
                    We are focused on building the platform for people and places - To connect the world to where we live, grow, and become.
                </p>
                <a href="#!" className="btn btn-md btn-warning mt-3 mb-3" style={{ marginLeft: 0 }}>
                    JOIN REVERE <MDBIcon icon="arrow-right" className="ml-2" />
                </a>
            </MDBContainer>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" className="offset-md-1">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Company
            </h5>
            <ul className="list-unstyled">
              <li>
                <h6 className="pb-2"><a href="#!">The Vision</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">About Revere</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Careers</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Legal & Security</a></h6>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Services
            </h5>
            <ul className="list-unstyled">
              <li>
                <h6 className="pb-2"><a href="#!">Buy a Home</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Sell your House</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Rent a Place</a></h6>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Resources
            </h5>
            <ul className="list-unstyled">
              <li>
                <h6 className="pb-2"><a href="#!">Getting into Real Estate</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Pricing</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Help Centre</a></h6>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Contact
            </h5>
            <ul className="list-unstyled">
              <li>
                <h6 className="pb-2"><a href="#!">Support</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Find an Agent</a></h6>
              </li>
              <li>
                <h6 className="pb-2"><a href="#!">Contact Us</a></h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-2">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Mobile Apps</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-md btn-outline-white btn-rounded">
                <MDBIcon fab icon="apple" size="lg" className="mr-2" />iOS
            </a>
            <a href="#!" className="btn btn-md btn-outline-white btn-rounded">
                <MDBIcon fab icon="android" size="lg" className="mr-2" />Android
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-icon mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-icon mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-icon mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-icon mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-icon mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Revere.&ensp;All rights reserved.&ensp;<a href="https://www.MDBootstrap.com">Made with Love In Canada</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;