import { Fragment } from "react";
import styles from "./page.module.css";
import Header from "@/components/layout-components/Header";
import Image from "next/image";
import computer from '../public/a_computer_being_used.jpeg';
import purple from '../public/purple.jpg';
import banner from '../public/banner.jpg';
import green from '../public/greenComputers.png'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";


export default function Home() {
  return (
    <Fragment>
      <Header style={{postion: 'sticky'}} />
      <div className={styles.banner}>
      <h1 className={styles.mainTag}>
        Affordable Web Design and Software Development Services
      </h1>
      </div>
      <Container>
      <div >
      <h1 className={styles.affordable}>Responsive, User-Friendly Websites That Drive Results
      </h1>
      <Row>
        <Col sm={6}>
        <Card style={{padding: '4rem'}}>
        <p>Let’s Build It By JP provides website design with purpose and practicality in mind. Websites can be built to look cool and have a lot of neat features, , but what’s the point if no one knows you’re online?</p>
      <p>Your website can have amazing photos and look stunning, but if it takes 5 minutes to load, you won’t have a lot of customers tolerating that long load time.</p>
      <p>Let’s Build It By JP LLC builds FAST websites with purpose and practicality in mind! Not only that, we build your website at a price you can afford!</p>
      </Card>
        </Col>
        <Col sm={6}>
        <Image className={styles.rotatingImage} src={purple} alt="A computer being used" />
        </Col>
      </Row>
      </div>
      <br/>
      <Image style={{float: 'right'}} className={styles.rotatingImage} src={green} alt="A computer being used" />
      
      <div>
        <h1 className={styles.affordable}>AFFORDABLE WEBSITE DESIGN WITH PURPOSE!</h1>
        <p>"All businesses should have the ability to maintain an online presence regardless of company size or structure"</p>
      <p>JP</p>
      <p>Owner- Let's Build It By JP LLC</p>
      </div>
      </Container>

    </Fragment>
  );
}
