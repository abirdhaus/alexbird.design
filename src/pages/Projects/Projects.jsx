import React, { Fragment, useState } from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCards from "../../components/experienceCards/Cards";
import ProductCards from "../../components/productCards/Cards";
import $ from "jquery";
import { Link } from "react-router-dom";

const Projects = () => {
  const handleSlideDivs = () => {
    $(".card__detail__div1").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div2").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div3").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div4").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div5").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div6").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div7").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div8").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".card__detail__div9").css({
      bottom: "-100%",
      opacity: "0",
    });

    $("#card-iframe-1").attr("src", "");
    $("#card-iframe-2").attr("src", "");
    $("#card-iframe-3").attr("src", "");
    $("#card-iframe-4").attr("src", "");
    $("#card-iframe-5").attr("src", "");
    $("#card-iframe-6").attr("src", "");
    $("#card-iframe-7").attr("src", "");
    $("#card-iframe-8").attr("src", "");
    $("#card-iframe-9").attr("src", "");
  };

  const [isClicked, setIsClicked] = useState(true);

  const handleNavbar = () => {
    
    setIsClicked(!isClicked);
    
    const circle__nav__btn = document.querySelector(".circle__nav__btn");
    
    circle__nav__btn.classList.toggle("expand__navBar");
    
    if (isClicked) {
      $(".bg__black__effect1").css("display", "block");
      $('body','html').css('overflow','hidden')
    } else {
      $('body','html').css('overflow','unset')
      $(".bg__black__effect1").css("display", "none");
    }
  };

  const handleCloseNav = () => {
    $(".bg__black__effect2").css("display", "none");

    $('body','html').css('overflow','unset')
    
    handleSlideDivs()
  }

  return (
    <Fragment>
      <div className="bg__black__effect1" onClick={handleNavbar}></div>
      <div className="bg__black__effect2" onClick={handleCloseNav}></div>

      <Container fluid={true} className="p-0 section s1">
        <Row className="m-0 p-0 s1__top__area">
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="p-0"
            onClick={handleSlideDivs}
          ></Col>
        </Row>

        <Row className="m-0 p-0">
          <div className="p-0 s1__left__area" onClick={handleSlideDivs}></div>

          <Col className="p-0 s1__main__div">
            <Row className="p-0 m-0" onClick={handleSlideDivs}>
              <Col
                xxl={11}
                xl={11}
                lg={11}
                md={11}
                sm={10}
                xs={10}
                className="p-0 d-flex justify-content-start align-items-center"
              >
                <h1>Hi! I’m Alex Bird.</h1>
              </Col>

              <div className="circle__nav__btn" onClick={handleNavbar}>
                {isClicked && (
                  <img
                    src="./images/Nav-btn-desktop.svg"
                    className="navlogo1"
                    alt="ig"
                  />
                )}

                {isClicked && <div className="mobile_bird_1"></div>}

                {!isClicked && (
                  <img
                    src="./images/Bird - Flight.svg"
                    className="navlogo1 navlogo2"
                    alt=""
                  />
                )}

                <ul className="p-0">
                  <div className="li1__container">
                    <Link to="/about" style={{ textDecoration: "none" }}>
                      <li className="li1" id="about">
                        About
                      </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>
                      <li className="li1 activeli" id="projects">
                        Projects
                      </li>
                    </Link>

                    <a
                      href="./Alex Bird - Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <li className="li1">Resume</li>
                    </a>
                  </div>

                  <div className="icon__container">
                    <a
                      href="https://www.linkedin.com/in/adabird/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li className="li2__icon">
                        <img src="./images/Linkedin.svg" alt="ig" />
                      </li>
                    </a>

                    {!isClicked && <div className="mobile_bird_2"></div>}
                    <a href="mailto:alex@bird.haus" style={{ textDecoration: "none" }}>
                      <li className="li3__icon">
                        <img src="./images/Mail.svg" alt="ig" />
                      </li>
                    </a>
                  </div>
                </ul>
              </div>

              <Col
                xxl={1}
                xl={1}
                lg={1}
                md={1}
                sm={2}
                xs={2}
                className="p-0 d-flex justify-content-end align-items-center nav_container"
              ></Col>
            </Row>

            <Row className="p-0 m-0 py-3" onClick={handleSlideDivs}>
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="p-0"
              >
                <h2>I design experiences.</h2>
              </Col>
            </Row>

            <Row className="p-0 m-0 pt-4">
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="p-0 s1__pSlider__col1"
              >
                <div className="product__slider__container">
                  <ExperienceCards />
                </div>
              </Col>
            </Row>

            <Row className="p-0 m-0 py-5" onClick={handleSlideDivs}>
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="p-0 pt-3"
              >
                <h2>I build products.</h2>
              </Col>
            </Row>

            <Row className="p-0 m-0">
              <Col
                xxl={12}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="p-0 s1__pSlider__col1"
              >
                <div className="product__slider__container">
                  <ProductCards />
                </div>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="extra__space"></div>
              </Col>
            </Row>
          </Col>

          <div className="p-0 s1__right__area" onClick={handleSlideDivs}></div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Projects;
