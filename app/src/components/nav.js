import React, {
    Component
} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from '../assets/img/logo.PNG';
import '../styles/nav.css';
import resume from '../assets/downloads/TraiLynneCompton_Resume.pdf';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="https://www.trailynne.org"><img src={logo} style={{height: 30}} alt='Trai Lynne Logo'/> Trai Lynne</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto main" navbar>
              <NavItem>
                <NavLink href='#project-container'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#skills-container'>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact-container'>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://www.trailynne.org/blog'>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={resume} download>Resume</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto social" navbar>
              <NavItem>
                <NavLink href='mailto:trailynne@gmail.com' target='_blank'><i class="fas fa-envelope-open-text"></i></NavLink>
              </NavItem>
              <NavItem href=''>
                <NavLink href='https://www.linkedin.com/in/trai-lynne-compton/' target='_blank'><i class="fab fa-linkedin-in"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/trailynne' target='_blank'><i class="fab fa-github"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://www.instagram.com/trailynne/' target='_blank'><i class="fab fa-instagram"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://twitter.com/trailynne/' target='_blank'><i class="fab fa-twitter"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}