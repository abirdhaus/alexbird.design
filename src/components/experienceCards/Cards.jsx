import React, { Fragment, useEffect } from "react";
import "./Cards.css";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Card = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(
        "#carouselExampleIndicators2__1"
      ).carousel();
    });

    return () => {
      clearAllBodyScrollLocks();
    }
  }, []);

  const handleSlideUp1 = () => {
    $(".card__detail__div1").css({
      bottom: "0%",
      opacity: "1",
    });
    $("#card-iframe-1").attr("src", $("#card-iframe-1").attr("data-src"));
    
    let body = document.querySelector('body')

    disableBodyScroll(body);

    $(".bg__black__effect2").css("display", "block");
    $("body","html").css("overflowY", "hidden");
  };

  const handleSlideDown1 = () => {
    $(".card__detail__div1").css({
      bottom: "-100%",
      opacity: "0",
    });
    
    let body = document.querySelector('body')

    enableBodyScroll(body);

    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-1").attr("src", "");
    $("body","html").css("overflowY", "unset");
  };

  const handleSlideUp2 = () => {
    $(".card__detail__div2").css({
      bottom: "0%",
      opacity: "1",
    });

    // let body = document.querySelector('body')

    // disableBodyScroll(body);

    $(".bg__black__effect2").css("display", "block");
    $("body","html").css("overflowY", "hidden");
  };

  const handleSlideDown2 = () => {
    $(".card__detail__div2").css({
      bottom: "-100%",
      opacity: "0",
    });
    
    // let body = document.querySelector('body')

    // enableBodyScroll(body);

    $(".bg__black__effect2").css("display", "none");
    $("body","html").css("overflowY", "unset");

  };

  const handleSlideUp4 = () => {
    $(".card__detail__div4").css({
      bottom: "0%",
      opacity: "1",
    });
    $("#card-iframe-4").attr("src", $("#card-iframe-4").attr("data-src"));
    
    let body = document.querySelector('body')

    disableBodyScroll(body);

    $(".bg__black__effect2").css("display", "block");
    $("body","html").css("overflowY", "hidden");
  };

  const handleSlideDown4 = () => {
    $(".card__detail__div4").css({
      bottom: "-100%",
      opacity: "0",
    });
    
    let body = document.querySelector('body')

    enableBodyScroll(body);

    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-4").attr("src", "");
    $("body","html").css("overflowY", "unset");
  };

  const handleSlideUp5 = () => {
    $(".card__detail__div5").css({
      bottom: "0%",
      opacity: "1",
    });
    $("#card-iframe-5").attr("src", $("#card-iframe-5").attr("data-src"));
    
    let body = document.querySelector('body')

    disableBodyScroll(body);

    $(".bg__black__effect2").css("display", "block");
    $("body","html").css("overflowY", "hidden");
  };

  const handleSlideDown5 = () => {
    $(".card__detail__div5").css({
      bottom: "-100%",
      opacity: "0",
    });
    
    let body = document.querySelector('body')

    enableBodyScroll(body);

    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-5").attr("src", "");
    $("body","html").css("overflowY", "unset");
  };

  const handleOpenFullImage1 = () => {
    $(".card__detail__div1").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const fullImageDiv = document.querySelector(".bottom__full__image1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage1 = () => {
    $(".card__detail__div1").css({
      bottom: "0%",
      opacity: "1",
    });

    const fullImageDiv = document.querySelector(".bottom__full__image1");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage2__1 = () => {
    $(".card__detail__div2").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const sliderItem2__1 = document.querySelector(".sliderItem2__1");
    const sliderItem2__2 = document.querySelector(".sliderItem2__2");
    const sliderItem2__3 = document.querySelector(".sliderItem2__3");

    const sliderBtn2__1 = document.querySelector(".sliderBtn2__1");
    const sliderBtn2__2 = document.querySelector(".sliderBtn2__2");
    const sliderBtn2__3 = document.querySelector(".sliderBtn2__3");

    sliderBtn2__1.classList.add("active");
    sliderBtn2__2.classList.remove("active");
    sliderBtn2__3.classList.remove("active");

    sliderItem2__1.classList.add("active");
    sliderItem2__2.classList.remove("active");
    sliderItem2__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image2__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage2__2 = () => {
    $(".card__detail__div2").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const sliderItem2__1 = document.querySelector(".sliderItem2__1");
    const sliderItem2__2 = document.querySelector(".sliderItem2__2");
    const sliderItem2__3 = document.querySelector(".sliderItem2__3");

    const sliderBtn2__1 = document.querySelector(".sliderBtn2__1");
    const sliderBtn2__2 = document.querySelector(".sliderBtn2__2");
    const sliderBtn2__3 = document.querySelector(".sliderBtn2__3");

    sliderBtn2__1.classList.remove("active");
    sliderBtn2__2.classList.add("active");
    sliderBtn2__3.classList.remove("active");

    sliderItem2__1.classList.remove("active");
    sliderItem2__2.classList.add("active");
    sliderItem2__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image2__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage2__3 = () => {
    $(".card__detail__div2").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const sliderItem2__1 = document.querySelector(".sliderItem2__1");
    const sliderItem2__2 = document.querySelector(".sliderItem2__2");
    const sliderItem2__3 = document.querySelector(".sliderItem2__3");

    const sliderBtn2__1 = document.querySelector(".sliderBtn2__1");
    const sliderBtn2__2 = document.querySelector(".sliderBtn2__2");
    const sliderBtn2__3 = document.querySelector(".sliderBtn2__3");

    sliderBtn2__1.classList.remove("active");
    sliderBtn2__2.classList.remove("active");
    sliderBtn2__3.classList.add("active");

    sliderItem2__1.classList.remove("active");
    sliderItem2__2.classList.remove("active");
    sliderItem2__3.classList.add("active");

    const fullImageDiv = document.querySelector(".bottom__full__image2__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage2__1 = () => {
    $(".card__detail__div2").css({
      bottom: "0%",
      opacity: "1",
    });

    const fullImageDiv = document.querySelector(".bottom__full__image2__1");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage4 = () => {
    $(".card__detail__div4").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const fullImageDiv = document.querySelector(".bottom__full__image4");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage4 = () => {
    $(".card__detail__div4").css({
      bottom: "0%",
      opacity: "1",
    });

    const fullImageDiv = document.querySelector(".bottom__full__image4");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage5 = () => {
    $(".card__detail__div5").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const fullImageDiv = document.querySelector(".bottom__full__image5");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage5 = () => {
    $(".card__detail__div5").css({
      bottom: "0%",
      opacity: "1",
    });

    const fullImageDiv = document.querySelector(".bottom__full__image5");
    fullImageDiv.classList.remove("active__full__image");
  };

  return (
    <Fragment>
      {/* Card 1 */}

      <div className="card__box" onClick={handleSlideUp1}>
        <div className="card__image">
          <img src="./images/Square.png" alt="" />
        </div>

        <h3>Style Guide</h3>

        <p>
          Shop with a fashion expert, & find new
          styles for different occasions.
        </p>
      </div>

      {/* Card 2 */}

      <div className="card__box" onClick={handleSlideUp2}>
        <div className="card__image">
          <img src="./images/Square-6.png" alt="" />
        </div>

        <h3>Fly with Breeze</h3>

        <p>Reimagine airport food with this new consumer brand & service.
        </p>
      </div>

      {/* Card 3 */}

      
      <div className="card__box" onClick={handleSlideUp5}>
        <div className="card__image">
          <img src="./images/Square-9.png" alt="" />
        </div>

        <h3>Baby Gift Finder</h3>

        <p>
          Build your perfect gift for making memories
          with baby.
        </p>
      </div>

      {/* Card 4 */}

      <div className="card__box" onClick={handleSlideUp4}>
        <div className="card__image">
          <img src="./images/Square-3.png" alt="" />
        </div>

        <h3>Wizard Sidequest</h3>

        <p>
          Manifest a nest in this brand episode of an
          interactive series.
        </p>
      </div>

      {/* Card Slide 1 */}

      <div className="card__detail__div1" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown1}
          >
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <img src="./images/Handle.svg" className="handleImg" alt="" />
            </Col>
          </Row>

          <Row className="p-0 m-0 pt-3">

            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={6}
              sm={12}
              xs={12}
              className="p-0 card__content__container"
            >
              <div className="main__content">
                <h4>What I did</h4>

                <p>
                  As <b>UX Lead</b> for Walmart's 2021 fall fashion campaign, I concepted & designed
                  this interactive lookbook experience featuring{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Brandon_Maxwell"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <u>Brandon Maxwell</u>.
                  </a>
                </p>

                <p>
                  I directed video production & dev teams to prototype & deliver
                  iteratively, resulting in a 60% clickthrough rate that converted 24% of engaged users to shop.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>UX design</li>
                  <li>User flow</li>
                  <li>IA</li>
                  <li>Prototype</li>
                  <li>UI design</li>
                  <li>Spec</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>

              <div className="bottom__img" onClick={handleOpenFullImage1}></div>
            </Col>

            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-start"
            >
              <div className="card__detail__img" id="myContainer">
                <iframe
                  id="card-iframe-1"
                  src=""
                  data-src="https://de.eko.com/style-guide-fall"
                  title="Style Guide"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  allowFullScreen
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Card Slide 2 */}

      <div className="card__detail__div2" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown2}
          >
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <img src="./images/Handle.svg" className="handleImg" alt="" />
            </Col>
          </Row>

          <Row className="p-0 m-0 pt-3">
          <Col
              xxl={8}
              xl={8}
              lg={8}
              md={6}
              sm={12}
              xs={12}
              className="p-0 card__content__container"
            >
              <div className="main__content">
                <h4>What I did</h4>
                <p> As <b>Product Designer</b>, I explored the airport problem space to design a consumer service that delivers healthy food options to on-the-go travellers. I created the flows, wireframes, prototypes, UI, and
                  tech specs required to ship & deliver the{" "}
                  <a
                    href="https://apps.apple.com/us/app/fly-with-breeze/id1476095831"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "white",
                    }}
                  >
                    Breeze iOS app
                  </a>
                  .</p>
                <p>
                  As <b>Creative Director</b> for{" "}
                  <a
                    href="https://www.instagram.com/flywithbreeze/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <u>@flywithbreeze</u>
                  </a>
                  , I led an agency team to produce editorial content leading up to the brand's 2020 launch. Working with the founder to define identity & voice, my team
                  produced a multitude of assets to educate flyers about the new healthy foodservice.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>B2C</li>
                  <li>Brand strategy</li>
                  <li>Product strategy</li>
                  <li>UX/UI design</li>
                  <li>User flow</li>
                  <li>Wireframes</li>
                  <li>Prototypes</li>
                  <li>Systems design</li>
                  <li>Content strategy</li>
                  <li>Copywriting</li>
                  <li>Video production</li>
                  <li>Art direction</li>
                </ul>
              </div>

              <div className="three__img__div">
                <div
                  className="three__img1"
                  onClick={handleOpenFullImage2__1}
                ></div>
                <div
                  className="three__img2"
                  onClick={handleOpenFullImage2__2}
                ></div>
                <div
                  className="three__img3"
                  onClick={handleOpenFullImage2__3}
                ></div>
              </div>
            </Col>
            
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-start"
            >
              <a
                href="https://www.instagram.com/flywithbreeze/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="card__detail__img2"></div>
              </a>
            </Col>

            
          </Row>
        </Container>
      </div>

      {/* Full Image Divs */}

      <div className="bottom__full__image2__1" >
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage2__1}
        />

        <div
          id="carouselExampleIndicators2__1"
          data-bs-interval="false"
          className="carousel slide sliderimg7"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators2__1"
              data-bs-slide-to="0"
              className="sliderBtn2__1 active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="sliderBtn2__2"
              data-bs-target="#carouselExampleIndicators2__1"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className="sliderBtn2__3"
              data-bs-target="#carouselExampleIndicators2__1"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
            <div className="carousel-item sliderItem2__1 active">
              <img
                src="./images/BreezeContent1.gif"
                className="d-block w-100 imageSize2"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem2__2">
              <img
                src="./images/BreezeContent4.gif"
                className="d-block w-100 imageSize2"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem2__3">
              <img
                src="./images/BreezeContent3.gif"
                className="d-block w-100 imageSize2"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev preBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators2__1"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next nextBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators2__1"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Card Slide 3 */}


      <div className="card__detail__div5" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown5}
          >
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <img src="./images/Handle.svg" className="handleImg" alt="" />
            </Col>
          </Row>

          <Row className="p-0 m-0 pt-3">
            <Col
              xxl={0}
              xl={0}
              lg={0}
              md={0}
              sm={0}
              xs={0}
              className="p-0 d-flex justify-content-center align-items-start"
            >
              <div className="card__detail__img5">
                <iframe
                  id="card-iframe-5"
                  src=""
                  data-src="https://video.eko.com/baby-gift-finder/V1W65G/embed?autoplay=true&pageViewId=37697131-4cff-4ff4-a11a-6dca31dfa5c1&clearcheckpoints=true&urlsmode=proxy&eauid=f2b54dad-b652-46dc-bf5a-796885542a72&easid=e617ec52-a7f8-4c65-87fe-586ad81d72a0&headnodeid=node_1_0_start_screen_1f2e10&embedapi=1.0&embedid=ekoembed-1&wcp=8636404&events=canplay%2Cplaying%2Cnodestart%2Cinteractions.report%2Cvariables.update%2Cplugininitvariables%2Ccontrol.replay%2Curls.intent%2Cend.started%2Cended%2Csubtitles.visibilitychange%2Csubtitles.substart%2Csubtitles.subend%2Csubtitles.effectivelanguagechange%2Cplugininit&cover=false&device=desktop"
                  title="Baby Gift Finder"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  allowFullScreen
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
              </div>
            </Col>

            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="p-0 card__content__container"
            >
              <div className="main__content">
                <h4>What I did</h4>

                <p>
                  As <b>UX Lead</b> & <b>Creative Director</b>, I concepted & created this first-of-its-kind finder starring{" "}
                  <a
                    href="https://www.instagram.com/tiamowry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <u>Tia Mowry</u>. </a> I designed the user flow, wireframes, prototype, identity, and UI to ship this guided shopping experience.
                  
                  
                </p>

                <p>
                  At the height of the 2020 holiday season, Tia's recommendations resulted in a 50% clickthrough rate that converted 33% of engaged users to shop.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>UX/UI design</li>
                  <li>User flow</li>
                  <li>IA</li>
                  <li>Prototype</li>
                  <li>Wireframes</li>
                  <li>Spec</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>

              <div
                className="bottom__img bottom__img5"
                onClick={handleOpenFullImage5}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full Image Div */}

      <div className="bottom__full__image5" onClick={handleCloseFullImage5}>
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage5}
        />

        <img src="./images/BabyGift.png" alt="" />
      </div>

      {/* Card Slide 4 */}

      <div className="card__detail__div4" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown4}
          >
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-center"
            >
              <img src="./images/Handle.svg" className="handleImg" alt="" />
            </Col>
          </Row>

          <Row className="p-0 m-0 pt-3">
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="p-0 d-flex justify-content-center align-items-start"
            >
              <div className="card__detail__img4">
                <iframe
                  id="card-iframe-4"
                  src=""
                  data-src="https://video.eko.com/wsd-/the-sidequests?clearcheckpoints=true"
                  title="Wizard Sidequest"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  allowFullScreen
                  scrolling="no"
                  allow="fullscreen"
                ></iframe>
              </div>
            </Col>

            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className="p-0 card__content__container"
            >
              <div className="main__content main__content4">
                <h4>What I did</h4>

                <p>
                  As <b>UX Lead</b> & <b>Creative Director</b>, I concepted & designed this branded
                  sidequest to accompany eko’s Telly award-winning original series,{" "}
                  <a
                    href="https://video.eko.com/shows/the-choice-is-yours/wizard-school-dropout/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   Wizard School Dropout.
                  </a>{" "}
                  
                </p>

                <p>
                  I directed studio production & dev teams to deliver this
                  integrated brand experience, which was engaged with and completed
                  at the same rates as the series itself. 
                  
                  <p>Read more about it on{" "}
                  <a
                    href="https://blog.helloeko.com/consumer-first-advertising-lessons-from-a-branded-sidequest-405363597e44?gi=fdd5b3d55f8f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://variety.com/2019/digital/news/eko-interactive-video-series-walmart-shopping-1203410553/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Variety
                  </a>
                  .</p>
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>UX design</li>
                  <li>User flow</li>
                  <li>Systems design</li>
                  <li>Copywriting</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>
            </Col>

            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="p-0 mt-4 d-flex justify-content-center align-items-start"
            >
              <div
                className="bottom__img bottom__img4"
                onClick={handleOpenFullImage4}
              ></div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Full Image Div */}

      <div className="bottom__full__image4" onClick={handleCloseFullImage4}>
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage4}
        />

        <img src="./images/WizardSidequest.png" alt="" />
      </div>
      

      {/* Full Image Div */}

      <div className="bottom__full__image1" onClick={handleCloseFullImage1}>
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage1}
        />

        <img src="./images/StyleGuide.png" alt="" />
      </div>
    </Fragment>
  );
};

export default Card;
