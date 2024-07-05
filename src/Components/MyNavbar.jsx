import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const MyNavbar = (props) => {
  const setcategory = props.setcategory;

  const handleCategoryClick = (category) => {
    console.log("clicked")
    setcategory(category);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">News-API call project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleCategoryClick("everything")}>
                General
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("technology")}>
                Technology
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("business")}>
                Business
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("health")}>
                Health
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("sport")}>
                Sport
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#contact">Contact me</Nav.Link>
          <Nav.Link href="/searchkeyword" style={{marginLeft: '15px'}}>Search with keyword</Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
