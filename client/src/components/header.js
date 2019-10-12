import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {

	render() {
		return(
			<header>
				<Navbar bg="dark" className="navbar" expand="true">
					<Navbar.Brand className="navbar__brand">
					<img
						src="../img/logo2_white.png"
						alt="logo"
						height="80"
						className="d-inline-block align-top"
					/>
					</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/" style={{color: 'white'}}>Home</Nav.Link>
							<Nav.Link href="/artists" style={{color: 'white'}}>Artists</Nav.Link>
						</Nav>
					</Navbar.Collapse> */}
				</Navbar>
			</header>
		);
	}
}

export default Header;