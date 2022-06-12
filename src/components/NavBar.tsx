import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {}

function NavBar(props: Props) {
	const {} = props;

	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Link to="/">Главная</Link>
					<Link to="/map">Карта</Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBar;
