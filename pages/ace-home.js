import Link from "next/dist/client/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Counter from "../src/components/Counter";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { home3SliderProps } from "../src/sliderProps";

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout header={3}>
      {video && <VideoPopup close={setVideo} />}
      <section className="main-slider main-slider-one">
        <Swiper
          {...home3SliderProps}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                }}
              />
              <div className="" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner-one__inner-box">
                      <h2 className="banner-one__big-title"></h2>
                      <div className="banner-one__content">
                        <div className="section-title">
                          <div
                            className="section-title__tagline wow slideInUp animated"
                            data-wow-delay="0.5s"
                            data-wow-duration="1500ms"
                          >
                            <span className="left" />
                            <h4>Medical Center</h4>
                          </div>
                          <h2
                            className="section-title__title  wow slideInUp animated"
                            data-wow-delay="0.1s"
                            data-wow-duration="1500ms"
                          >
                            Let us Make it Easy &amp;
                            <br />
                            Hassle Free
                          </h2>
                        </div>
                        <p
                          className="banner-one__text wow slideInUp animated"
                          data-wow-delay="0.4s"
                          data-wow-duration="1500ms"
                        >
                          Register and Book our services today!
                        </p>
                        <div
                          className="banner-one__btn wow slideInUp animated"
                          data-wow-delay="0.5s"
                          data-wow-duration="1500ms"
                        >
                          <Link href="">
                            <a className="thm-btn">
                              Sign Up {" "}
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="banner-one__banner-img wow slideInRight"
                        data-wow-delay="500ms"
                        data-wow-duration="2500ms"
                      >
                        <img
                          src="../assets/images/backgrounds/banner-img0.png"
                          alt="image"
                          style={{ marginBottom: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                }}
              />
              <div className="" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/main-slider-one-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>ACEMC</h4>
                          <span className="right" />
                        </div>
                        <h2 className="section-title__title">
                          Sample Text <br />
                          Sample Text
                        </h2>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="btns-box">
                          <a href="#" className="thm-btn">
                            Free Consultation
                          </a>
                        </div>
                        <div className="banner-video-gallery">
                          <div className="video-box">
                            <a
                              className="video-popup"
                              title="Video Gallery"
                              href="#"
                              onClick={() => setVideo(true)}
                              style={{ visibility: "visible" }}
                            >
                              <i className="fa fa-play" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="title-box">
                            <h5>Watch Video</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                }}
              />
              <div className="" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/main-slider-one-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>ACEMC</h4>
                          <span className="right" />
                        </div>
                        <h2 className="section-title__title">
                        Sample Text <br />
                          Sample Text
                        </h2>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="btns-box">
                          <a href="#" className="thm-btn">
                            Free Consultation
                          </a>
                        </div>
                        <div className="banner-video-gallery">
                          <div className="video-box">
                            <a
                              className="video-popup"
                              title="Video Gallery"
                              href="#"
                              onClick={() => setVideo(true)}
                              style={{ visibility: "visible" }}
                            >
                              <i className="fa fa-play" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="title-box">
                            <h5>Watch Video</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
          </div>
          {/* If we need navigation buttons */}
          <div className="swiper-pagination" id="main-slider-pagination" />
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="icon-left" />
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="icon-right" />
            </div>
          </div>
        </Swiper>
      </section>


      {/*Start Working Process One*/}
      <section className="working-process-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Book Services</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Fast and Hassle
              <br />
              Free Booking
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="working-process-one__wrapper">
                <div className="working-process-one__shape">
                  <img
                    src="assets/images/shapes/working-process-v1-shape1.png"
                    alt="image"
                  />
                </div>
                <ul className="list-unstyled">
                  {/*Start Working Process One Single*/}
                  <li
                    className="working-process-one__single top50 text-center wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-coffee-cup" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Book Service</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single style2 text-center wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-advisor" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Book Consultation</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single top65 text-center wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-dashboard" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Find a Doctor</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single style2 top20 text-center wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-success" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Patient Portal</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Working Process One*/}

      {/*About One Start*/}
      <section className="about-one about-one--about">
        <div className="container">
          <div className="row">
            {/* Start About One Left*/}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="about-one--about__big-title">
                  <h2>About</h2>
                </div>
                <div className="shape1">
                  <img src="assets/images/shapes/thm-shape-1.png" alt="image" />
                </div>
                <div className="about-one__left-img">
                  <img src="assets/images/about/about-v1-3.jpg" alt="image" />
                </div>
                <div className="about-one__left-bottom">
                  <div className="about-one__logo">
                    <img
                      src="../assets/images/about/about-v1-logo.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="about-one__video-gallery wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src="assets/images/about/about-v1-2.jpg" alt="image" />
                    <div className="video-box">
                      <a
                        className="video-popup wow zoomIn animated animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        title=" Video Gallery"
                        href="#"
                        onClick={() => setVideo(true)}
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                          animationDelay: "300ms",
                          animationName: "zoomIn",
                        }}
                      >
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Left*/}
            {/* Start About One Right*/}
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="about-one__right-inner">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>About Valenzuela Ace Hospital</h4>
                    </div>
                    <h2 className="section-title__title">
                      Fast and Easy <br />
                      Digitalize Hospital
                    </h2>
                  </div>
                  <div className="about-one__right-inner" style={{textAlign:"justify"}}>
                    <h5 className="about-one__right-tagline">
                      9 Years of experience in Medical Service
                    </h5>
                    <p className="about-one__right-text">
                      Allied Care Experts Medical Center-Valenzuela (ACEMC-Valenzuela), 
                      authorized under the Republic of the Philippines, Department of Health, 
                      to operate a Level II Secondary Hospital Permit No. 13-318-15-60-H2-2.
                    </p> <br/>

                    <p className="about-one__right-text">
                    Allied Care Experts Medical Center-Valenzuela (ACEMC-Valenzuela) conceived when local Medical Practitioners saw the need for a state of 
                    the art medical facility, providing excellent health service not only for the 
                    local community in Valenzuela area, but also its neighboring towns, Bulacan and Metro Manila.
                    </p>
                    <div className="about-one__btn">
                      <Link href="/ace-about">
                        <a className="thm-btn">
                          Learn More{" "}
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Right*/}
          </div>
        </div>
      </section>

      {/*Ads Start*/}
      <section style={{ display:"block", width:"100%", height:"auto", alignItems:"center"}}>
        <div className="center">
          <div className="row">
            {/* Start About One Left*/}
            <div className="">
                <div className="" style={{ display:"block", width:"100%", alignItems:"center"}}>
                  <img src="assets/images/Poster-landscape.png" alt="image" />
                </div>
              </div>
            {/* End About One Left*/}
              </div>
        </div>
      </section>

      {/*Case Studies Two Start*/}
      <section
        className="case-studies-two"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/case-studies-two-bg.png)",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Health Information</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’re Committed to Creating <br />
              Change That Matters
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="case-studies-two__wrapper">
                <div className="row">
                  {/*Start Single Case Studies Two*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="case-studies-two__single">
                      <div className="case-studies-two__single-text-box">
                        <div className="case-studies-two__single-left">
                          <h2>NATIONAL ATTENTION DEFICIT DISORDER AWARENESS WEEK</h2>
                          <p>To Our Valued ACE Patients,Accessible healthcare services thru our website.....</p>
                        </div>
                        <div className="case-studies-two__single-right">
                          <div className="case-studies-two__single-right-btn">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="case-studies-two__single-img">
                        <img
                          src="assets/images/resources/case-studies-v2-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*End Single Case Studies Two*/}
                  {/*Start Single Case Studies Two*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="case-studies-two__single">
                      <div
                        className="case-studies-two__single-text-box style2"
                        style={{
                          backgroundImage:
                            "url(assets/images/backgrounds/case-studies-two-single-bg.png)",
                        }}
                      >
                        <div className="case-studies-two__single-left">
                          <h2 className="padding-top3">BREAST CANCER AWARENESS MONTH A</h2>
                          <p>
                          To Our Valued ACE Patients,Accessible healthcare services thru our website.
                          Convenience for every patient.Experience personal assistance from our staff for scheduling and...
                          </p>
                        </div>
                        <div className="case-studies-two__single-right">
                          <div className="case-studies-two__single-right-btn">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="case-studies-two__single-img">
                        <img
                          src="assets/images/resources/case-studies-v2-img2.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*End Single Case Studies Two*/}
                </div>
                <div className="case-studies-two__btn">
                  <a href="" className="thm-btn">
                    View More Health Information
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Case Studies Two End*/}
      {/*Chart One Start*/}
      <section className="chart-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="chart-one__left">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Company Analysis</h4>
                  </div>
                  <h2 className="section-title__title">
                    Les’s Look About Our
                    <br />
                    Company Statices
                  </h2>
                </div>
                <p className="chart-one__left-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptem
                  accusantiu dolorem ulau dantium totam
                </p>
                <div className="chart-one__btn">
                  <a href="#" className="thm-btn">
                    Get Free Quote{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="chart-one__right">
                <div className="chart-one__img">
                  <img
                    src="assets/images/resources/chart-v1-img.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Chart One End*/}

      {/*Team Two Start*/}
      <section className="team-two">
        <div className="team-two__left-bg">
          <img
            src="assets/images/backgrounds/team-two-left-bg.png"
            alt="image"
          />
        </div>
        <div className="team-two__right-bg">
          <img
            src="assets/images/backgrounds/team-two-right-bg.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Booking</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Simple and Easy 
              <br />
              Steps of Booking
            </h2>
          </div>
          <div className="row">
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Michael J. Behne</Link>
                  </h3>
                  <p>CEO &amp; Founder</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
            
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img2.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Edgar B. Hamdan</Link>
                  </h3>
                  <p>Senior Manager</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}

            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img3.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Howard B. Lusby</Link>
                  </h3>
                  <p>Marketing Officer</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img4.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Thomas C. Greene</Link>
                  </h3>
                  <p>Web Designer</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
          </div>
        </div>
      </section>
      {/*Team Two End*/}


      {/*Blog Two Start*/}
      <section className="blog-two">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>News &amp; Updates</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
               ACE Valenzuela Medical Center
              <br />
              Article &amp; Tips
            </h2>
          </div>
          <div className="row">
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="">Views (1,505)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Good Better Best Untang
                        <br />
                        Comple World Acce
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="">Views (955)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Optimize Progresive Web
                        <br />
                        Going Beyond Basics
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="">Views (95)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
          </div>
        </div>
      </section> <br/>
      {/*Blog Two End*/}

      {/*Emergency One Start*/}
      <section className="counter-one clearfix" style={{marginBottom:"-5%"}}>
        <div className="auto-container">
          <div
            className="counter-one__wrapper clearfix wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="shape1">
              <img
                src="assets/images/shapes/counter-v1-shape.png"
                alt="image"
              />
            </div>
            <div className="row">
              {/*Start Emergency One Single*/}
              <div className="col-xl-8 col-lg-8 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h1 style={{color:"white"}}> 
                        <b> (02) 8366-0000 to 05 </b>
                      </h1>
                    </div>
                    <div className="counter-one__title">
                      <h6 style={{fontSize:"22px", marginTop:"10px"}}>Need a Doctor for Check up? Call for an Emergency Service !</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Emergency One Single*/}
              
              {/*Start Emergency One Single*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="counter-one__company-chievement-box clearfix">
                  <div
                    className="counter-one__company-chievement-img style2"
                    style={{
                      backgroundImage:
                        "url(assets/images/resources/counter-v1-bg-img.jpg)",
                    }}
                  >
                    <div className="overly-content">
                      <h2>
                        Company
                        <br /> Achievement
                      </h2>
                      <div className="button">
                        <Link href="/about">
                          <a className="thm-btn company-chievement-btn">
                            Read More
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Emergency One Single*/}
            </div>
          </div>
        </div>
      </section>
      {/*Emergency One End*/}
    </Layout>
  );
};

export default Index;
