import { Row, Col, Card } from "antd";
import React from "react";
import testImage from "./images/vasily.jpg";
import CardImage from "./images/Card1.jpg";
import Card1Image from "./images/Card2.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Wrapper2 } from "./App.styles";
import Footer from "./components/Footer";
const { Meta } = Card;
function Home() {
  return (
    <Wrapper2>
      <Row justify="center" align="middle" className=" bg-intro">
        <Col md={24}>
          <h1> Fun Quiz Game</h1>
        </Col>
        <Col md={24}>
          <h3 className="p-intro">
            Play amazing quiz games that test your general knowlege of Science,
            Programming, Movies and lots more. Fun games that allow you have fun
            while learning new things at thesame time.
          </h3>
          <Link to="/Quizgame">
            {" "}
            <Button className="button" type="primary">
              Play Quiz game
            </Button>
          </Link>
        </Col>
      </Row>
      <section>
        <Row justify="center" align="middle">
          <Col md={6} className="m-card">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={testImage} />}
            >
              <Meta
                title="Science"
                description="Do you love Science?
              then this is the right game for you where you can have fun answering fun Science questions learning and having fun at thesame time."
              />
            </Card>
          </Col>
          <Col md={6} className="m-card">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={CardImage} />}
            >
              <Meta
                title="Programming"
                description="Do you love Programming?
              then this is the right game for you where you can have fun answering fun Programming questions learning and having fun at thesame time."
              />
            </Card>
          </Col>
          <Col md={6} className="m-card">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={Card1Image} />}
            >
              <Meta
                title="Movies and lots more"
                description="Do you love Movies?
                then this is the right game for you where you can explore and have fun answering fun questions about your favourite movie characters and lots more."
              />
            </Card>
          </Col>
        </Row>

        <Link to="/Quizgame">
          {" "}
          <Button className="button" type="primary">
            Play Quiz game
          </Button>
        </Link>
      </section>
      <Footer />
    </Wrapper2>
  );
}
export default Home;
