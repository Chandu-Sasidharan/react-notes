import backImg from "../Images/background1.jpeg";
import styled from "styled-components";
// import "./profile.css";
import Button from "../UI/Button";
import { Card, Nav, Link, Footer, ExtList } from "./style";

function Profile() {
  return (
    <Card>
      <Nav>
        <Link>
          <li>Home</li>
          <li>Contact</li>
          <li>Service</li>
        </Link>
      </Nav>
      <img src={backImg} alt="Background" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
      <Button color="#FF7F50">Submit</Button>
      <Footer>
        <Nav>
          <ExtList>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Xing</li>
          </ExtList>
        </Nav>
      </Footer>
    </Card>
  );
}

export default Profile;
