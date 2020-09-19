import React from 'react';
import { MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { Navigation } from './Navigation/Navigation';
import  { TransparentButton } from './Button/TransparentButton';
import "./Button/TransparentButton.module.css";

class NavbarNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Navigation />
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <MDBContainer>
                <h2>This Navbar is fixed</h2>
                <h5>It will always stay visible on the top, even when you scroll down</h5>
                <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
              </MDBContainer>
              <MDBContainer className="btn-wrapper pt-3 justify-content-center">
                  <TransparentButton onClick={() => alert("Click")}>Buy a home</TransparentButton>
                  <TransparentButton onClick={() => alert("Click")}>Sell a home</TransparentButton>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default NavbarNew;