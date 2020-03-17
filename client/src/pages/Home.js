import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import HomeCard from "../components/HomeCard"
import { Container } from "../components/Grid";
import "./style.css";
class Home extends Component {

  render() {
    return (
      <div>
      {/* <Nav /> */}
        <Container container>
          {/* <Row> */}
            {/* <Col size="md-1"></Col> */}
            {/* <Col size="md-8"> */}
                <HomeCard />
            {/* </Col> */}
            {/* <Col size="md-1"></Col> */}
          {/* </Row> */}
        </Container>
      </div>
    );
  }
}

export default Home;
