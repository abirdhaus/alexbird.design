import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const handleIcon1 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.toggle("rotateArrow1");
    arrowIcon2.classList.remove("rotateArrow2");
    arrowIcon3.classList.remove("rotateArrow3");
    arrowIcon4.classList.remove("rotateArrow4");
    arrowIcon5.classList.remove("rotateArrow5");
    arrowIcon6.classList.remove("rotateArrow6");
  };

  const handleIcon2 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.remove("rotateArrow1");
    arrowIcon2.classList.toggle("rotateArrow2");
    arrowIcon3.classList.remove("rotateArrow3");
    arrowIcon4.classList.remove("rotateArrow4");
    arrowIcon5.classList.remove("rotateArrow5");
    arrowIcon6.classList.remove("rotateArrow6");
  };

  const handleIcon3 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.remove("rotateArrow1");
    arrowIcon2.classList.remove("rotateArrow2");
    arrowIcon3.classList.toggle("rotateArrow3");
    arrowIcon4.classList.remove("rotateArrow4");
    arrowIcon5.classList.remove("rotateArrow5");
    arrowIcon6.classList.remove("rotateArrow6");
  };

  const handleIcon4 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.remove("rotateArrow1");
    arrowIcon2.classList.remove("rotateArrow2");
    arrowIcon3.classList.remove("rotateArrow3");
    arrowIcon4.classList.toggle("rotateArrow4");
    arrowIcon5.classList.remove("rotateArrow5");
    arrowIcon6.classList.remove("rotateArrow6");
  };

  const handleIcon5 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.remove("rotateArrow1");
    arrowIcon2.classList.remove("rotateArrow2");
    arrowIcon3.classList.remove("rotateArrow3");
    arrowIcon4.classList.remove("rotateArrow4");
    arrowIcon5.classList.toggle("rotateArrow5");
    arrowIcon6.classList.remove("rotateArrow6");
  };

  const handleIcon6 = () => {
    const arrowIcon1 = document.querySelector(".arrowIcon1");
    const arrowIcon2 = document.querySelector(".arrowIcon2");
    const arrowIcon3 = document.querySelector(".arrowIcon3");
    const arrowIcon4 = document.querySelector(".arrowIcon4");
    const arrowIcon5 = document.querySelector(".arrowIcon5");
    const arrowIcon6 = document.querySelector(".arrowIcon6");

    arrowIcon1.classList.remove("rotateArrow1");
    arrowIcon2.classList.remove("rotateArrow2");
    arrowIcon3.classList.remove("rotateArrow3");
    arrowIcon4.classList.remove("rotateArrow4");
    arrowIcon5.classList.remove("rotateArrow5");
    arrowIcon6.classList.toggle("rotateArrow6");
  };

  useEffect(() => {
    $(".profileBox").mouseover(function (e) {
      let myVar = this.id;
      $("img.bigImages").hide();
      $("#img" + myVar).show();

      for (
        let index = 0;
        index < e.currentTarget.parentNode.children.length;
        index++
      ) {
        e.currentTarget.parentNode.children[index].classList.remove(
          "profileOpacity"
        );
      }
      e.currentTarget.classList.add("profileOpacity");
    });

    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");

        $(".accordion-item").click(function (e) {
          for (
            let index = 0;
            index < e.currentTarget.parentNode.children.length;
            index++
          ) {
            e.currentTarget.parentNode.children[index].classList.remove(
              "activeList"
            );
          }
        });
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");

        $(".accordion-item").click(function (e) {
          e.currentTarget.classList.add("activeList");
        });
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  }, []);

  const [isClicked, setIsClicked] = useState(true);

  const handleNavbar = () => {
    setIsClicked(!isClicked);

    const circle__nav__btn = document.querySelector(".circle__nav__btn");

    circle__nav__btn.classList.toggle("expand__navBar");

    if (isClicked) {
      $(".bg__black__effect1").css("display", "block");
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "unset");
      $(".bg__black__effect1").css("display", "none");
    }
  };

  return (
    <Fragment>
      <div className="bg__black__effect1" onClick={handleNavbar}></div>

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
              <li className="li1 activeli" id="about">
                About
              </li>
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="li1" id="projects">
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
            <a href="mailto:" style={{ textDecoration: "none" }}>
              <li className="li3__icon">
                <img src="./images/Mail.svg" alt="ig" />
              </li>
            </a>
          </div>
        </ul>
      </div>

      <Container fluid={true} className="p-0 section about__main">
        <Row className="p-0 m-0">
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="p-0 main__content__col1"
          >
            <h1>About me</h1>

            <p>
              I’m a digital native with a creative passion for technology,
              design and content.
            </p>

            <p>I enjoy solving complex problems in simple ways.</p>

            <p>
              As a digital product leader, I design & build consumer apps that
              promote symbiotic human-computer interaction.
            </p>

            <p>
              I live in New York City with my fiance Colton and our floofer
              Darcy.{" "}
            </p>
          </Col>

          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="p-0 d-flex justify-content-center flex-column align-items-center text-center porfile__div__col"
          >
            <div className="bigImagesContainer">
              <img
                src="./images/Image.png"
                className="m-auto bigImages"
                id="imgfive"
                alt=""
              />
              <img
                src="./images/Image-3.png"
                className="m-auto bigImages"
                id="imgtwo"
                alt=""
              />
              <img
                src="./images/Image-2.png"
                className="m-auto bigImages"
                id="imgthree"
                alt=""
              />
              <img
                src="./images/Image-1.png"
                className="m-auto bigImages"
                id="imgfour"
                alt=""
              />
              <img
                src="./images/Image-4.png"
                className="m-auto bigImages"
                id="imgone"
                alt=""
              />
            </div>

            <div className="mt-4 profileIconBox d-flex justify-content-center align-items-center">
              <div className="profileBox profileBox1 profileOpacity" id="one">
                <img src="./images/Ellipse 3-4.png" alt="" />
              </div>

              <div className="profileBox profileBox2" id="two">
                <img src="./images/Ellipse 3-3.png" alt="" />
              </div>

              <div className="profileBox profileBox3" id="three">
                <img src="./images/Ellipse 3-2.png" alt="" />
              </div>

              <div className="profileBox profileBox4" id="four">
                <img src="./images/Ellipse 3-1.png" alt="" />
              </div>

              <div className="profileBox profileBox5" id="five">
                <img src="./images/Ellipse 3.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="p-0 m-0 pt-5 mt-5">
          <Col className="p-0">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  id="accordion-button-1"
                  aria-expanded="false"
                  onClick={handleIcon1}
                >
                  <img src="./images/arrow.svg" className="arrowIcon1" alt="" />
                  <span className="accordion-title">What drives you?</span>
                </button>
                <div className="accordion-content">
                  <p>
                    I’m driven by a desire to humanize our collective experience
                    of the internet. I believe the convergence of technology & storytelling creates a universal
                    language that furthers our shared understanding of humanity.
                  </p>
                  <p>
                    By building digital experiences that reimagine what online
                    interactions can be, I like to think my work (in some small
                    way) helps the internet live up to it’s revolutionary
                    potential.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  id="accordion-button-2"
                  aria-expanded="false"
                  onClick={handleIcon2}
                >
                  <img src="./images/arrow.svg" className="arrowIcon2" alt="" />
                  <span className="accordion-title">
                    So... how’d you get like this?
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    I grew up gaming on handhelds and consoles, exploring
                    digital worlds tucked away in tiny plastic cartridges. My
                    parents were early dial-up adopters, so I got onto the
                    internet early enough to remember how it used to be — a wild
                    west of beautiful nerddom and chaos.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  id="accordion-button-3"
                  aria-expanded="false"
                  onClick={handleIcon3}
                >
                  <img src="./images/arrow.svg" className="arrowIcon3" alt="" />
                  <span className="accordion-title">
                    Okay so, you like the internet?
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    I love the promise of the internet. Growing up, my affinity
                    for technology was nurtured by online forums, sci-fi novels
                    and films that helped my generation imagine what the
                    internet could be.
                  </p>
                  <p>
                    Since then, I’ve watched the net’s promise of youth fade
                    away. Instead of wielding the internet as a revolutionary
                    tool for self-actualization, we’ve become complacent and
                    accepting of profitable mediocrity that chokes real
                    innovation. I believe we, the users, deserve better.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  id="accordion-button-4"
                  aria-expanded="false"
                  onClick={handleIcon4}
                >
                  <img src="./images/arrow.svg" className="arrowIcon4" alt="" />
                  <span className="accordion-title">
                    What do you wish the internet was like?
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    I’ve never stopped dreaming about what the internet could be
                    — a transformative & magical place where anything you can
                    imagine is possible, tangible, and real.
                  </p>
                  <p>
                    I believe new technologies are the closest thing we’re ever
                    gonna get to realizing that magic, so I’ve spent my career
                    building digital products and experiences that reimagine
                    what online behaviors can be.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button
                  id="accordion-button-5"
                  aria-expanded="false"
                  onClick={handleIcon5}
                >
                  <img src="./images/arrow.svg" className="arrowIcon5" alt="" />
                  <span className="accordion-title">
                    How do you make the internet a more magical place?
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    By building user-first experiences. In my work, I lead
                    design teams to discover real consumer problems & build
                    solutions around them. Using UX and design-thinking
                    methodologies, we prototype, test, & build consumer
                    applications, forging creative solutions to complex problems
                    in helpful, communicative interfaces.
                  </p>
                  <p>
                    From my years at eko, I’ve built an expertise in using
                    interactive video technology with traditional software
                    development to personalize interactive narratives towards
                    utilitarian ends. Like shopping, for instance.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button
                  id="accordion-button-5"
                  aria-expanded="false"
                  onClick={handleIcon6}
                >
                  <img src="./images/arrow.svg" className="arrowIcon6" alt="" />
                  <span className="accordion-title">
                  So you invent new ways of shopping online?
                  </span>
                </button>
                <div className="accordion-content">
                  <p>
                    Something like that! 50% of pages on the internet are
                    commerce-related, so it feels like a good place to start.
                  </p>
                  <p>
                    My current projects focus on making online shopping a more
                    human experience. It’s my hope that by facilitating more
                    human behaviors in digital spaces, we’ll set the internet
                    back on a course to realize its limitless potential.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="extra__space__about"></div>
    </Fragment>
  );
};

export default About;
