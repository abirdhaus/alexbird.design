import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "../experienceCards/Cards.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Card = () => {
  useEffect(() => {
    $("iframe").css("borderRadius", "10px");

    $(document).ready(function () {
      $(
        "#carouselExampleIndicators6",
        "#carouselExampleIndicators7",
        "#carouselExampleIndicators8",
        "#carouselExampleIndicators8"
      ).carousel();
    });
    return () => {
      clearAllBodyScrollLocks();
    }
  }, []);

  const handleSlideUp3 = () => {
    $(".card__detail__div3").css({
      bottom: "0%",
      opacity: "1",
    });
    $("#card-iframe-3").attr("src", $("#card-iframe-3").attr("data-src"));
    
    let body = document.querySelector('body')

    disableBodyScroll(body);

    $(".bg__black__effect2").css("display", "block");
    $("body","html").css("overflowY", "hidden");
  };
  
  const handleSlideDown3 = () => {
    $(".card__detail__div3").css({
      bottom: "-100%",
      opacity: "0",
    });
    
    let body = document.querySelector('body')

    enableBodyScroll(body);

    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-3").attr("src", "");
    $("body","html").css("overflowY", "unset");
  };

  const handleSlideUp6 = () => {
    $(".card__detail__div6").css({
      bottom: "0%",
      opacity: "1",
    });
    $(".bg__black__effect2").css("display", "block");
    $("#card-iframe-6").attr("src", $("#card-iframe-6").attr("data-src"));

    let body = document.querySelector('body')

    disableBodyScroll(body)
    
    $("body","html").css("overflowY", "hidden");
  };

  const handleSlideDown6 = () => {
    $(".card__detail__div6").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-6").attr("src", "");

    let body = document.querySelector('body')

    enableBodyScroll(body);

    $("body","html").css("overflowY", "unset");
  };

  const handleSlideUp8 = () => {
    $(".card__detail__div8").css({
      bottom: "0%",
      opacity: "1",
    });
    $(".bg__black__effect2").css("display", "block");
    
    let body = document.querySelector('body')

    disableBodyScroll(body)

    $("body","html").css("overflowY", "hidden");
    $("#card-iframe-8").attr("src", $("#card-iframe-8").attr("data-src"));
  };

  const handleSlideDown8 = () => {
    $(".card__detail__div8").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-8").attr("src", "");

    let body = document.querySelector('body')

    enableBodyScroll(body);

    $("body","html").css("overflowY", "unset");
  };

  const handleSlideUp9 = () => {
    $(".card__detail__div9").css({
      bottom: "0%",
      opacity: "1",
    });
    $(".bg__black__effect2").css("display", "block");
    
    let body = document.querySelector('body')

    disableBodyScroll(body)

    $("body","html").css("overflowY", "hidden");
    $("#card-iframe-9").attr("src", $("#card-iframe-9").attr("data-src"));
  };

  const handleSlideDown9 = () => {
    $(".card__detail__div9").css({
      bottom: "-100%",
      opacity: "0",
    });
    $(".bg__black__effect2").css("display", "none");
    $("#card-iframe-9").attr("src", "");

    let body = document.querySelector('body')

    enableBodyScroll(body);

    $("body","html").css("overflowY", "unset");
  };

  const handleOpenFullImage3 = () => {
    $(".card__detail__div3").css({
      bottom: "0%",
      opacity: "1",
    });

    $("body","html").css("overflowY", "hidden");

    const fullImageDiv = document.querySelector(".bottom__full__image3");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage3 = () => {
    $(".card__detail__div3").css({
      bottom: "0%",
      opacity: "1",
    });

    const fullImageDiv = document.querySelector(".bottom__full__image3");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage6__1 = () => {
    $(".card__detail__div6").css("bottom", "0%");


    const sliderItem6__1 = document.querySelector(".sliderItem6__1");
    const sliderItem6__2 = document.querySelector(".sliderItem6__2");
    const sliderItem6__3 = document.querySelector(".sliderItem6__3");

    const sliderBtn6__1 = document.querySelector(".sliderBtn6__1");
    const sliderBtn6__2 = document.querySelector(".sliderBtn6__2");
    const sliderBtn6__3 = document.querySelector(".sliderBtn6__3");

    sliderBtn6__1.classList.add("active");
    sliderBtn6__2.classList.remove("active");
    sliderBtn6__3.classList.remove("active");

    sliderItem6__1.classList.add("active");
    sliderItem6__2.classList.remove("active");
    sliderItem6__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image6__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage6__2 = () => {
    $(".card__detail__div6").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem6__1 = document.querySelector(".sliderItem6__1");
    const sliderItem6__2 = document.querySelector(".sliderItem6__2");
    const sliderItem6__3 = document.querySelector(".sliderItem6__3");

    const sliderBtn6__1 = document.querySelector(".sliderBtn6__1");
    const sliderBtn6__2 = document.querySelector(".sliderBtn6__2");
    const sliderBtn6__3 = document.querySelector(".sliderBtn6__3");

    sliderBtn6__1.classList.remove("active");
    sliderBtn6__2.classList.add("active");
    sliderBtn6__3.classList.remove("active");

    sliderItem6__1.classList.remove("active");
    sliderItem6__2.classList.add("active");
    sliderItem6__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image6__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage6__3 = () => {
    $(".card__detail__div6").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem6__1 = document.querySelector(".sliderItem6__1");
    const sliderItem6__2 = document.querySelector(".sliderItem6__2");
    const sliderItem6__3 = document.querySelector(".sliderItem6__3");

    const sliderBtn6__1 = document.querySelector(".sliderBtn6__1");
    const sliderBtn6__2 = document.querySelector(".sliderBtn6__2");
    const sliderBtn6__3 = document.querySelector(".sliderBtn6__3");

    sliderBtn6__1.classList.remove("active");
    sliderBtn6__2.classList.remove("active");
    sliderBtn6__3.classList.add("active");

    sliderItem6__1.classList.remove("active");
    sliderItem6__2.classList.remove("active");
    sliderItem6__3.classList.add("active");

    const fullImageDiv = document.querySelector(".bottom__full__image6__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage6__1 = () => {
    $(".card__detail__div6").css("bottom", "0%");

    const fullImageDiv = document.querySelector(".bottom__full__image6__1");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage8__1 = () => {
    $(".card__detail__div8").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem8__1 = document.querySelector(".sliderItem8__1");
    const sliderItem8__2 = document.querySelector(".sliderItem8__2");
    const sliderItem8__3 = document.querySelector(".sliderItem8__3");

    const sliderBtn8__1 = document.querySelector(".sliderBtn8__1");
    const sliderBtn8__2 = document.querySelector(".sliderBtn8__2");
    const sliderBtn8__3 = document.querySelector(".sliderBtn8__3");

    sliderBtn8__1.classList.add("active");
    sliderBtn8__2.classList.remove("active");
    sliderBtn8__3.classList.remove("active");

    sliderItem8__1.classList.add("active");
    sliderItem8__2.classList.remove("active");
    sliderItem8__3.classList.remove("active");
    
    const fullImageDiv = document.querySelector(".bottom__full__image8__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage8__2 = () => {
    $(".card__detail__div8").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem8__1 = document.querySelector(".sliderItem8__1");
    const sliderItem8__2 = document.querySelector(".sliderItem8__2");
    const sliderItem8__3 = document.querySelector(".sliderItem8__3");

    const sliderBtn8__1 = document.querySelector(".sliderBtn8__1");
    const sliderBtn8__2 = document.querySelector(".sliderBtn8__2");
    const sliderBtn8__3 = document.querySelector(".sliderBtn8__3");

    sliderBtn8__1.classList.remove("active");
    sliderBtn8__2.classList.add("active");
    sliderBtn8__3.classList.remove("active");

    sliderItem8__1.classList.remove("active");
    sliderItem8__2.classList.add("active");
    sliderItem8__3.classList.remove("active");
    
    const fullImageDiv = document.querySelector(".bottom__full__image8__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage8__3 = () => {
    $(".card__detail__div8").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem8__1 = document.querySelector(".sliderItem8__1");
    const sliderItem8__2 = document.querySelector(".sliderItem8__2");
    const sliderItem8__3 = document.querySelector(".sliderItem8__3");

    const sliderBtn8__1 = document.querySelector(".sliderBtn8__1");
    const sliderBtn8__2 = document.querySelector(".sliderBtn8__2");
    const sliderBtn8__3 = document.querySelector(".sliderBtn8__3");

    sliderBtn8__1.classList.remove("active");
    sliderBtn8__2.classList.remove("active");
    sliderBtn8__3.classList.add("active");

    sliderItem8__1.classList.remove("active");
    sliderItem8__2.classList.remove("active");
    sliderItem8__3.classList.add("active");
    
    const fullImageDiv = document.querySelector(".bottom__full__image8__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage8__1 = () => {
    $(".card__detail__div8").css("bottom", "0%");

    const fullImageDiv = document.querySelector(".bottom__full__image8__1");
    fullImageDiv.classList.remove("active__full__image");
  };

  const handleOpenFullImage9__1 = () => {
    $(".card__detail__div9").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem9__1 = document.querySelector(".sliderItem9__1");
    const sliderItem9__2 = document.querySelector(".sliderItem9__2");
    const sliderItem9__3 = document.querySelector(".sliderItem9__3");

    const sliderBtn9__1 = document.querySelector(".sliderBtn9__1");
    const sliderBtn9__2 = document.querySelector(".sliderBtn9__2");
    const sliderBtn9__3 = document.querySelector(".sliderBtn9__3");

    sliderBtn9__1.classList.add("active");
    sliderBtn9__2.classList.remove("active");
    sliderBtn9__3.classList.remove("active");

    sliderItem9__1.classList.add("active");
    sliderItem9__2.classList.remove("active");
    sliderItem9__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image9__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage9__2 = () => {
    $(".card__detail__div9").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem9__1 = document.querySelector(".sliderItem9__1");
    const sliderItem9__2 = document.querySelector(".sliderItem9__2");
    const sliderItem9__3 = document.querySelector(".sliderItem9__3");

    const sliderBtn9__1 = document.querySelector(".sliderBtn9__1");
    const sliderBtn9__2 = document.querySelector(".sliderBtn9__2");
    const sliderBtn9__3 = document.querySelector(".sliderBtn9__3");

    sliderBtn9__1.classList.remove("active");
    sliderBtn9__2.classList.add("active");
    sliderBtn9__3.classList.remove("active");

    sliderItem9__1.classList.remove("active");
    sliderItem9__2.classList.add("active");
    sliderItem9__3.classList.remove("active");

    const fullImageDiv = document.querySelector(".bottom__full__image9__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleOpenFullImage9__3 = () => {
    $(".card__detail__div9").css("bottom", "0%");

    $("body","html").css("overflowY", "hidden");

    const sliderItem9__1 = document.querySelector(".sliderItem9__1");
    const sliderItem9__2 = document.querySelector(".sliderItem9__2");
    const sliderItem9__3 = document.querySelector(".sliderItem9__3");

    const sliderBtn9__1 = document.querySelector(".sliderBtn9__1");
    const sliderBtn9__2 = document.querySelector(".sliderBtn9__2");
    const sliderBtn9__3 = document.querySelector(".sliderBtn9__3");

    sliderBtn9__1.classList.remove("active");
    sliderBtn9__2.classList.remove("active");
    sliderBtn9__3.classList.add("active");

    sliderItem9__1.classList.remove("active");
    sliderItem9__2.classList.remove("active");
    sliderItem9__3.classList.add("active");

    const fullImageDiv = document.querySelector(".bottom__full__image9__1");
    fullImageDiv.classList.add("active__full__image");
  };

  const handleCloseFullImage9__1 = () => {
    $(".card__detail__div9").css("bottom", "0%");

    const fullImageDiv = document.querySelector(".bottom__full__image9__1");
    fullImageDiv.classList.remove("active__full__image");
  };

  return (
    <Fragment>

    {/* Card 5 */}

            <div className="card__box" onClick={handleSlideUp3}>
        <div className="card__image">
          <img src="./images/Square-2.png" alt="" />
        </div>

        <h3>Pet Gift Finder</h3>

        <p>
        Answer questions from expert pets to find the pawfect gift for yours.
        </p>
      </div>
      
      {/* Card 8 */}

      <div className="card__box" onClick={handleSlideUp8}>
        <div className="card__image">
          <img src="./images/Square-7.png" alt="" />
        </div>

        <h3>Coffee Maker Finder</h3>

        <p>
          Spill your tastes to a barista pro, & let her find the
          right maker for you.
        </p>
      </div>

      {/* Card 9 */}

      <div className="card__box" onClick={handleSlideUp9}>
        <div className="card__image">
          <img src="./images/Square-8.png" alt="" />
        </div>

        <h3>Paint Finder</h3>

        <p>
          Get interior design help finding the right shade for your room.
        </p>
      </div>

      {/* Card 6 */}

      <div className="card__box" onClick={handleSlideUp6}>
        <div className="card__image">
          <img src="./images/Square-5.png" alt="" />
        </div>

        <h3>Car Seat Finder</h3>

        <p>
          Shop with a safety expert, and learn helpful tips along the way.
          {" "}
        </p>
      </div>

      {/* Card Slide 5 */}


      <div className="card__detail__div3" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown3}
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
                  As <b>Product Lead</b>, I worked with Walmart's Pets team to design
                  & build this interactive pet gift finder.
                </p>

                <p>
                  Recommending over 800+ dog & cat products, this pawesome experience
                  answered 12+ unique customer needstates, resulting in a 45% clickthrough rate that converted 24% of engaged users to shop.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>UX design</li>
                  <li>IA</li>
                  <li>Systems design</li>
                  <li>UI design</li>
                  <li>Spec</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>

              <div
                className="bottom__img bottom__img3"
                onClick={handleOpenFullImage3}
              ></div>
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
              <div className="card__detail__img3">
                <iframe
                  id="card-iframe-3"
                  src=""
                  data-src="https://de.eko.com/pet-gift"
                  title="Pet Gift Finder"
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

      {/* Full Image Div */}

      <div className="bottom__full__image3" onClick={handleCloseFullImage3}>
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage3}
        />

        <img src="./images/PetGift.png" alt="" />
      </div>

      {/* Card Slide 8 */}

      <div className="card__detail__div8" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown8}
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
                  As <b>Product Lead</b>, I worked with Walmart's Home team to design & build
                  a more humanized way to shop for coffee makers.
                </p>

                <p>
                  This experience helped both novice and informed drinkers find the right makers, resulting in a 31% clickthrough rate that converted 19% of engaged users to shop.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>B2C</li>
                  <li>Product strategy</li>
                  <li>User research</li>
                  <li>UX Design</li>
                  <li>Roadmap</li>
                  <li>Spec</li>
                  <li>Data analysis</li>
                  <li>Optimization</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>

              <div className="product__img__div1">
                <div
                  className="product__img__1__1 product__img__3__1"
                  onClick={handleOpenFullImage8__1}
                ></div>
                <div
                  className="product__img__1__2 product__img__3__2"
                  onClick={handleOpenFullImage8__2}
                ></div>
                <div
                  className="product__img__1__3 product__img__3__3"
                  onClick={handleOpenFullImage8__3}
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
              <div className="card__detail__img8">
                <iframe
                  id="card-iframe-8"
                  src=""
                  data-src="https://de.eko.com/coffee-maker"
                  title="Coffee Maker Finder"
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

      {/* Full Image Divs */}

      <div className="bottom__full__image6__1 bottom__full__image8__1">
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage8__1}
        />

        <div
          id="carouselExampleIndicators8"
          data-bs-interval="false"
          className="carousel slide sliderimg6"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators8"
              data-bs-slide-to="0"
              className="sliderBtn8__1 active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="sliderBtn8__2"
              data-bs-target="#carouselExampleIndicators8"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className="sliderBtn8__3"
              data-bs-target="#carouselExampleIndicators8"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
            <div className="carousel-item sliderItem8__1 active">
              <img
                src="./images/Coffee1.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem8__2">
              <img
                src="./images/Coffee3.png"
                className="d-block w-100 imageSize6 imageSize6__2"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem8__3">
              <img
                src="./images/Coffee2.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev preBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators8"
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
            data-bs-target="#carouselExampleIndicators8"
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

{/* Card Slide 6 */}

<div className="card__detail__div6" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown6}
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
                  As <b>Product Lead</b>, I worked with Walmart's Baby team to design &
                  build this interactive car seat finder for kids of all ages.
                </p>

                <p>
                  This experience solved real problems for new and experienced parents alike, resulting in a 40% clickthrough rate that
                  converted 20% of engaged users to shop.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>B2C</li>
                  <li>Product strategy</li>
                  <li>User research</li>
                  <li>UX design</li>
                  <li>Roadmap</li>
                  <li>Spec</li>
                  <li>Data analysis</li>
                  <li>Optimization</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                </ul>
              </div>

              <div className="product__img__div1">
                <div
                  className="product__img__1__1"
                  onClick={handleOpenFullImage6__1}
                ></div>
                <div
                  className="product__img__1__2"
                  onClick={handleOpenFullImage6__2}
                ></div>
                <div
                  className="product__img__1__3"
                  onClick={handleOpenFullImage6__3}
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
              <div className="card__detail__img6">
                <iframe
                  id="card-iframe-6"
                  src=""
                  data-src="https://de.eko.com/car-seat"
                  title="Car Seat Finder"
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

      {/* Full Image Divs */}

      <div className="bottom__full__image6__1">
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage6__1}
        />

        <div
          id="carouselExampleIndicators6"
          data-bs-interval="false"
          className="carousel slide sliderimg6"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators6"
              data-bs-slide-to="0"
              className="sliderBtn6__1 active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="sliderBtn6__2"
              data-bs-target="#carouselExampleIndicators6"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className="sliderBtn6__3"
              data-bs-target="#carouselExampleIndicators6"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
            <div className="carousel-item sliderItem6__1 active">
              <img
                src="./images/CarSeat1.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem6__2">
              <img
                src="./images/CarSeat3.png"
                className="d-block w-100 imageSize6 imageSize6__2"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem6__3">
              <img
                src="./images/CarSeat2.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev preBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators6"
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
            data-bs-target="#carouselExampleIndicators6"
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

      {/* Card Slide 9 */}

      <div className="card__detail__div9" allowTouchMove body-scroll-lock-ignore>
        <Container fluid={true} className="p-0">
          <Row
            className="p-0 m-0 mb-4 cards__handle__row"
            onClick={handleSlideDown9}
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
                  As <b>Product Lead</b>, I worked with Walmart's Home team to make
                  paint shopping more humanized and inspirational.
                </p>
                <p>
                  Using eko’s tech, we helped DIYers curate top colors & imagine
                  how they’d look on the wall, resulting in a 35% clickthrough rate that converted 17% of engaged users to shop.
                </p>
                <p>
                  By collaborating with eko devs, we built a new WebGL chroma
                  key feature that vastly simplified production & implementation.
                </p>
              </div>

              <div className="skills__content">
                <h4>Skills</h4>

                <ul className="p-0">
                  <li>Concepting</li>
                  <li>B2C</li>
                  <li>Product strategy</li>
                  <li>UX Design</li>
                  <li>User flow</li>
                  <li>Spec</li>
                  <li>Video production</li>
                  <li>Digital production</li>
                  <li>Data analysis</li>
                  <li>Optimization</li>
                </ul>
              </div>

              <Row className="m-0 p-0 d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row d-lg-flex justify-content-lg-start align-items-lg-center d-md-flex justify-content-md-start align-items-md-center" style={{height: 'fit-content'}}>
                <Col lg={6} md={6} sm={6} className="p-0 h-100 d-flex justify-content-center" style={{width: 'fit-content'}}>
                  <img
                    src="./images/Paint3.png"
                    className="product9__img1"
                    alt=""
                    onClick={handleOpenFullImage9__1}
                  />
                </Col>

                <Col lg={6} md={6} sm={6} className="p-0 h-100">
                  <Row className="m-0 p-0 h-100 d-flex justify-content-center justify-content-lg-start justify-content-md-start align-items-center">
                    <Col lg={12} md={12} sm={12} className="p-0 h-100 product-9-col-2" style={{width: 'fit-content'}}>
                      <img
                        src="./images/Paint1.png"
                        alt=""
                        className="product9__img2"
                        onClick={handleOpenFullImage9__2}
                      />
                    </Col>

                    <Col lg={12} md={12} sm={12} className="p-0 h-100 product-9-col-3" style={{width: 'fit-content'}}>
                      <img
                        src="./images/Paint2.png"
                        alt=""
                        className="product9__img3"
                        onClick={handleOpenFullImage9__3}
                      />
                    </Col>
                    
                  </Row>
                </Col>
              </Row>
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
              <div className="card__detail__img9">
                <iframe
                  id="card-iframe-9"
                  src=""
                  data-src="https://de.eko.com/paint"
                  title="Paint Finder"
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

      {/* Full Image Divs */}

      <div className="bottom__full__image6__1 bottom__full__image9__1">
        <AiOutlineCloseCircle
          className="closeIcon"
          onClick={handleCloseFullImage9__1}
        />

        <div
          id="carouselExampleIndicators9"
          data-bs-interval="false"
          className="carousel slide sliderimg6"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators9"
              data-bs-slide-to="0"
              className="sliderBtn9__1 active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              className="sliderBtn9__2"
              data-bs-target="#carouselExampleIndicators9"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              className="sliderBtn9__3"
              data-bs-target="#carouselExampleIndicators9"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-75 d-flex justufy-content-center align-items-center">
            <div className="carousel-item sliderItem9__1 active">
              <img
                src="./images/Paint3.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem9__2">
              <img
                src="./images/Paint1.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
            <div className="carousel-item sliderItem9__3">
              <img
                src="./images/Paint2.png"
                className="d-block w-100 imageSize6"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev preBtn"
            type="button"
            data-bs-target="#carouselExampleIndicators9"
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
            data-bs-target="#carouselExampleIndicators9"
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
    </Fragment>
  );
};

export default Card;
