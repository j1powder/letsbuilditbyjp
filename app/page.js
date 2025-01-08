'use client'

import { Fragment, useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from "@/components/layout-components/Header";
import Footer from "@/components/layout-components/Footer";
import Image from "next/image";
import computer from '../public/a_computer_being_used.jpeg';
import Computer from '../public/computer.jpg';
import purple from '../public/purple.jpg';
import banner from '../public/banner.jpg';
import green from '../public/greenComputers.png'
import gray from '../public/grayComputers.png'
import seoContent from '../public/seoContent.jpeg'
import secondBanner from '../public/secondBanner.jpeg'
import thisComp from '../public/AdobeStock1.jpeg'
import world from '../public/anotherWorld.png'
import phoenix from '../public/phoenix.jpeg'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from 'next/link';


export default function Home() {
const [rotation, setRotation] = useState(0);


useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setRotation(scrollPosition / 4);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

console.log(rotation)


  return (
    <Fragment>
      <Header style={{postion: 'sticky'}} />
      <div className={styles.banner}>
      {/* <h1 className={styles.mainTag}>
        Affordable Web Design and Software Development Services
      </h1> */}
      <h1 className={styles.affordable}>Responsive, User-Friendly Websites That Drive Results
      </h1>
      
      <div className={styles.container}>
      <div className={styles.div1}><p>Let’s Build It By JP provides website design with purpose and practicality in mind. Websites can be built to look cool and have a lot of neat features, , but what’s the point if no one knows you’re online?</p>
      <p>Your website can have amazing photos and look stunning, but if it takes 5 minutes to load, you won’t have a lot of customers tolerating that long load time.</p>
      <p>Let’s Build It By JP LLC builds FAST websites with purpose and practicality in mind! Not only that, we build your website at a price you can afford!</p>
      </div>
      <div className={styles.div2}>        
         <Image className={styles.seoCont}  src={computer} alt="A computer being used" /> 
      </div>
    </div>

      </div>
      <Container>
      <div >


        <Row>
          <Col sm={12}>
          <h1 style={{textAlign: 'center', padding: '3rem 0rem'}}>Expert Website and App Development Tailored to You
          </h1>
          </Col>
        </Row>

        <Row>
        <Col sm={12} >
        
        <p>At Let’s Build It By JP LLC, 
          we specialize in crafting custom websites and applications 
          that align perfectly with your business goals. 
          Whether you’re a startup looking to establish a strong digital presence or 
          a growing company in need of scalable software, 
          our expert team combines cutting-edge technology with user-focused design to deliver exceptional results. 
          From responsive websites that captivate your audience to robust applications that 
          streamline your operations, we tailor every solution to meet your unique needs. 
          Let us help you transform your ideas into reality and give your business the competitive edge it deserves. 
          Contact us today to start building your future.

        </p>
      
        </Col>
        </Row>
        <Row>
        <Col sm={12} className={styles.rotatingcontainer} >
        <h2>Websites and Apps for any device</h2>
        <br/>
        <br/>
        {/* <Image style={{ transform: `rotateY(${rotation}deg)` }} className={styles.rotatingImage} src={world} alt="A computer being used" /> */}
        <Image style={rotation < 115 ? {width: '10%' } : 
                      rotation >= 115 && rotation < 145 ? { width: "30%"} :
                      rotation >= 145 && rotation < 185 ? { width: '40%'} :
                      rotation >= 185 && rotation < 215 ? {width: '50%'} : 
                      rotation >= 215 && rotation < 245 ? {width: '60%'} :
                      rotation >= 245 && rotation < 275 ? {width: '70%'} :
                      {width: '85%'}} className={styles.rotatingImage} src={phoenix} alt="A computer being used" />

        </Col>
      </Row>
      <Row>
        <Col sm={12}>
        <h1 style={{padding: '2rem 0rem', textAlign:'center'}}>Based In Phoenix Metro!</h1>
        </Col>
      </Row>
      </div>
      </Container>
      <Container fluid>

      <Row className={styles.middleRow}>
        
        <h1 style={{textAlign: 'center', color: 'white', textShadow: '2px 2px 2px black'}}>
          Transforming Ideas into Powerful Websites and Software
        </h1>
        <br/>
        <br/>
        
        <p style={{  fontSize:'1.2rem', textShadow:'2px 2px 2px black', color: 'white' }}>
          Let’s Build It By JP LLC turns your innovative ideas into dynamic websites and 
                software that drive success. Our expertise spans custom web development, 
                modern app creation, and seamless software solutions, ensuring your digital 
                presence is as unique as your business. </p>

                <p style={{  fontSize:'1.2rem', textShadow:'2px 2px 2px black', color: 'white' }}>We prioritize functionality, speed, and user experience, 
                creating platforms that not only look great but also perform flawlessly. 
                Whether you need a cutting-edge e-commerce site, a professional business website, or 
                a custom application, we deliver solutions tailored to your goals. </p>
                <p style={{  fontSize:'1.2rem', textShadow:'2px 2px 2px black', color: 'white' }}>By combining advanced technologies with 
                a deep understanding of your industry, we help you stand out in a crowded market. 
                Let’s build something extraordinary together—your journey starts here. 
                Contact us today to get started!</p>
            
 

                <div className={styles.container}>
      <div className={styles.div1}>  
      <p>"All businesses should have the ability to maintain an online presence regardless of company size or structure"</p>
      <p>JP</p>
      <p>Owner- Let's Build It By JP LLC</p>     

      </div>
      <div className={styles.div2}>        
         <Image className={styles.seoCont}  src={phoenix} alt="A computer being used" /> 
      </div>
    </div>

      </Row>

      </Container>
      <Container>



      <br/>
      <Image style={{width:'400px', height: 'auto', display: 'block', margin: '0 auto', padding: '3rem 0rem'}}  src={Computer} alt="A computer being used" />
      <Row>
        <Col sm={12}>
        <h1 style={{textAlign: 'center'}}>
          Transforming Ideas into Powerful Websites and Software
        </h1>
        </Col>
      </Row>
      
      <Row>
        <Col sm={12}>
              <p>Let’s Build It By JP LLC turns your innovative ideas into dynamic websites and 
                software that drive success. Our expertise spans custom web development, 
                modern app creation, and seamless software solutions, ensuring your digital 
                presence is as unique as your business. We prioritize functionality, speed, and user experience, 
                creating platforms that not only look great but also perform flawlessly. 
                Whether you need a cutting-edge e-commerce site, a professional business website, or 
                a custom application, we deliver solutions tailored to your goals. By combining advanced technologies with 
                a deep understanding of your industry, we help you stand out in a crowded market. 
                Let’s build something extraordinary together—your journey starts here. 
                Contact us today to get started!</p>
        </Col>
      </Row>
      <Row style={{margin: '3rem 0rem'}}>
        <Col sm={6}>
      <div className={styles.quote}>
      <p>"All businesses should have the ability to maintain an online presence regardless of company size or structure"</p>
      <p>JP</p>
      <p>Owner- Let's Build It By JP LLC</p>
      </div>
        
        </Col>
        <Col sm={6}>
        <Image style={{boxShadow:'2px 2px 10px 5px gray', width: '100%', height: 'auto'}}  src={thisComp} alt="A computer being used" /> 
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
            <Link href="tel:6233135230" style={{textDecoration: 'none'}}><Button className={styles.contactBtn}>We Want to Hear From You</Button></Link>
        </Col>
      </Row>


      <br/>

    <br/>
    <br/>
      </Container>
        <Footer />
    </Fragment>
  );
}
