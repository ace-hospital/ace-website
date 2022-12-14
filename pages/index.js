import Link from "next/dist/client/link";
import { useState } from "react";
import Counter from "../src/components/Counter";
import BrandSlider from "../src/components/slider/BrandSlider";
import TestimonialSlider from "../src/components/slider/TestimonialSlider";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";

const Index = () => {
  const [videoPopup, setVideoPopup] = useState(false);
  const [tab, setTab] = useState("innovation");
  const activeTrigger = (value) => (value === tab ? "active-btn" : ""),
    activeTab = (value) => (value === tab ? "active-tab" : "");
  return (
    <Layout header={1} footer={1} featuresContentOff>
      {videoPopup && <VideoPopup close={setVideoPopup} />}
      <section className="banner-one clearfix">
        <div
          className="shape1 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="3500ms"
        >
          <img src="../assets/images/shapes/banner-shape-1.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner-one__inner-box">
                <h2 className="banner-one__big-title">Ace</h2>
                <div className="banner-one__content">
                  <div className="section-title">
                    <div
                      className="section-title__tagline wow slideInUp animated"
                      data-wow-delay="0.2s"
                      data-wow-duration="1500ms"
                    >
                      <span className="left" />
                      <h4>Consulting Agency</h4>
                    </div>
                    <h2
                      className="section-title__title  wow slideInUp animated"
                      data-wow-delay="0.3s"
                      data-wow-duration="1500ms"
                    >
                      Business &amp;
                      <br />
                      Technology <br />
                      Consulting
                    </h2>
                  </div>
                  <p
                    className="banner-one__text wow slideInUp animated"
                    data-wow-delay="0.4s"
                    data-wow-duration="1500ms"
                  >
                    Building a learning culture that drives business
                  </p>
                  <div
                    className="banner-one__btn wow slideInUp animated"
                    data-wow-delay="0.5s"
                    data-wow-duration="1500ms"
                  >
                    <Link href="/contact">
                      <a className="thm-btn">
                        Free Consultation{" "}
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
                    src="../assets/images/backgrounds/banner-img1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner One*/}
      {/*Features One Start*/}
      <section className="features-one clearfix">
        <div className="container">
          <div className="row">
            {/*Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInLeft animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img
                      src="../assets/images/icon/features-v1-icon1.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <Link href="/about">
                        <a>
                          Guide to Becoming a Digital
                          <br />
                          First Organization
                        </a>
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <Link href="/services-1">
                      <a>
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
            {/*End Single Features One */}
            {/*Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInRight animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img
                      src="../assets/images/icon/features-v1-icon2.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        We???re Committed to Creating
                        <br />
                        Change That Matters
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Features One */}
          </div>
        </div>
      </section>
      {/*Features One End*/}
      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            {/* Start About One Left*/}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="shape1 float-bob-y">
                  <img src="../assets/images/shapes/thm-shape-1.png" alt="image" />
                </div>
                <div className="about-one__left-img">
                  <img src="assets/images/about/about-v1-1.jpg" alt="image" />
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
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                          animationDelay: "300ms",
                          animationName: "zoomIn",
                        }}
                        onClick={() => setVideoPopup(true)}
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
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>About Conbiz</h4>
                  </div>
                  <h2 className="section-title__title">
                    Build Your Business <br />
                    With Right Way
                  </h2>
                </div>
                <div className="about-one__right-inner">
                  <h5 className="about-one__right-tagline">
                    25 Years of experience in consulting service
                  </h5>
                  <p className="about-one__right-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptem
                    accusantium doloremu laudantium totam rem aperiam eaque upsa
                    quae abillo inventore veritatis architecto
                  </p>
                  <div className="about-one__author-box">
                    <div className="img-box">
                      <img
                        src="assets/images/about/about-v1-author.png"
                        alt="image"
                      />
                    </div>
                    <div className="title">
                      <h3>Business &amp; Consulting</h3>
                      <p>
                        Quis autem vel eumiure reprehen quein
                        <br />
                        voluptate esse quam molestiae
                      </p>
                      <h5>Lewis G. Valazquez</h5>
                    </div>
                  </div>
                  <div className="about-one__btn">
                    <Link href="/about">
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
            {/* End About One Right*/}
          </div>
        </div>
      </section>
      {/*About One End*/}
      {/*Start Feauters Two*/}
      <section className="feauters-two">
        <div
          className="feauters-two__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/feature-v1-bg.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>How Can Help You</h4>
            </div>
            <h2 className="section-title__title">
              We Make Your Agency
              <br />
              Are Full Bright
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="feauters-two__content-box">
                <div className="feauters-two__big-title">
                  <h2>Feature</h2>
                </div>
                <div className="shape1 zoom-fade">
                  <img
                    src="assets/images/shapes/feature-v1-shape1.png"
                    alt="image"
                  />
                </div>
                <div className="shape2 zoom-fade">
                  <img
                    src="assets/images/shapes/feature-v1-shape2.png"
                    alt="image"
                  />
                </div>
                <div className="row">
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img1.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              <a>Business Consulting</a>
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                <a>Business Consulting</a>
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
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
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img2.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              <a>Technology Services</a>
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Technology Services
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
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
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img3.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              Digital Solutions
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Digital Solutions
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
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
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img4.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              Product Engineering
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Product Engineering
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
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
                  </div>
                  {/*End Feauters Two Single*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Feauters Two*/}
      {/*Counter One Start*/}
      <section className="counter-one clearfix">
        <div className="auto-container">
          <div
            className="counter-one__wrapper clearfix wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="shape1">
              <img
                src="assets/images/shapes/counter-v1-shape.png"
                alt="image"
              />
            </div>
            <div className="row">
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={356} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Saticfied Clients</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img2.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={784} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Project Complate</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img3.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={963} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Support Team</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__company-chievement-box clearfix">
                  <div
                    className="counter-one__company-chievement-img"
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
                        <Link href="/company-history">
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
              {/*End Counter One Single*/}
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
      {/*Service One Start*/}
      <section className="service-one clearfix">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Popular Service</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Take a Look Our Unmatched
              <br />
              Consulting Approach
            </h2>
          </div>
          <div className="service-one__tabs tabs-box">
            <ul className="tab-buttons clearfix list-unstyled">
              <li
                data-tab="#innovation"
                onClick={() => setTab("innovation")}
                className={`tab-btn thm-btn ${activeTrigger("innovation")}`}
              >
                <span>Strategy &amp; Innovation</span>
              </li>
              <li
                data-tab="#compliance"
                onClick={() => setTab("compliance")}
                className={`tab-btn thm-btn ${activeTrigger("compliance")}`}
              >
                <span>Quality Compliance</span>
              </li>
              <li
                data-tab="#marketing"
                onClick={() => setTab("marketing")}
                className={`tab-btn thm-btn ${activeTrigger("marketing")}`}
              >
                <span>Sales &amp; Marketing</span>
              </li>
              <li
                data-tab="#analytics"
                onClick={() => setTab("analytics")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Data Analytics</span>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div className={`tab ${activeTab("innovation")}`} id="innovation">
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Management Consulting and <br />
                          Strategy Consulting
                        </h2>
                        <p className="service-one__right-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptem accusantium doloremu laudantium totam rem
                          aperiam eaque upsa quae abillo inventore veritatis
                          architecto
                        </p>
                        <ul className="service-one__right-list list-unstyled">
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Static Innovations
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Consulting &amp; Advisory
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Turnaround Situations
                          </li>
                        </ul>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
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
              </div>
              {/*tab*/}
              <div className={`tab ${activeTab("compliance")}`} id="compliance">
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Management Consulting and <br />
                          Strategy Consulting
                        </h2>
                        <p className="service-one__right-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptem accusantium doloremu laudantium totam rem
                          aperiam eaque upsa quae abillo inventore veritatis
                          architecto
                        </p>
                        <ul className="service-one__right-list list-unstyled">
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Static Innovations
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Consulting &amp; Advisory
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Turnaround Situations
                          </li>
                        </ul>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
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
              </div>
              {/*tab*/}
              <div className={`tab ${activeTab("marketing")}`} id="marketing">
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Management Consulting and <br />
                          Strategy Consulting
                        </h2>
                        <p className="service-one__right-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptem accusantium doloremu laudantium totam rem
                          aperiam eaque upsa quae abillo inventore veritatis
                          architecto
                        </p>
                        <ul className="service-one__right-list list-unstyled">
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Static Innovations
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Consulting &amp; Advisory
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Turnaround Situations
                          </li>
                        </ul>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
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
              </div>
              {/*tab*/}
              <div className={`tab ${activeTab("analytics")}`} id="analytics">
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Management Consulting and <br />
                          Strategy Consulting
                        </h2>
                        <p className="service-one__right-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptem accusantium doloremu laudantium totam rem
                          aperiam eaque upsa quae abillo inventore veritatis
                          architecto
                        </p>
                        <ul className="service-one__right-list list-unstyled">
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Static Innovations
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Consulting &amp; Advisory
                          </li>
                          <li>
                            <i
                              className="fa fa-check-circle"
                              aria-hidden="true"
                            />
                            Turnaround Situations
                          </li>
                        </ul>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Service One End*/}
      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Consultants</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="team-one__content-wrapper">
                <div className="team-one__big-title">
                  <h2>Team</h2>
                </div>
                <div className="row">
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-1.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-2.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-3.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInRight"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-4.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Douglas B. Robin</a>
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Douglas B. Robin</a>
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  <div className="team-one__button">
                    <Link href="/team">
                      <a className="thm-btn team-one__btn">
                        View All Member{" "}
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
        </div>
      </section>
      {/*Team One End*/}
      {/*Cta One Start*/}
      <section
        className="cta-one jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/resources/cta-v1-bg-img.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one__wrapper">
                <div className="section-title text-center">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Popular Service</h4>
                    <span className="right" />
                  </div>
                  <h2 className="section-title__title">
                    Take a Look Our Unmatched
                    <br />
                    Consulting Approach
                  </h2>
                </div>
                <div className="cta-one__btn-box text-center">
                  <Link href="/contact">
                    <a className="thm-btn">
                      Get Free Quote{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </Link>
                  <div className="video-button">
                    <a
                      className="video-popup video-btn"
                      title="Conbiz Video Gallery"
                      href="#"
                      onClick={() => setVideoPopup(true)}
                    >
                      <span className="txt">cause video</span>
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cta One End*/}
      {/*Testimonial One Start*/}
      <section className="testimonial-one">
        <div
          className="testimonial-one-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/testimonial-v1-bg.png)",
          }}
        />
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Consultants</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-one__content-box">
                <div className="testimonial-one__big-title">
                  <h2>Fedback</h2>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <TestimonialSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}
      {/*Blog One Start*/}
      <section className="blog-one">
        <div
          className="shape1 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="2500ms"
        >
          <img src="assets/images/shapes/blog-v1-shape1.png" alt="image" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Blog &amp; News</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Trending Business Consulting
              <br />
              Article &amp; Tips
            </h2>
          </div>
          <div className="row">
            {/*Start Single Blog One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single  wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img1.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img2.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Design Decision With Bea
                        <br />
                        Feitler Unstoppable{" "}
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single wow fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img3.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
          </div>
        </div>
      </section>
      {/*Blog One End*/}
      {/*Partner One Start*/}
      <section className="partner-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
            </div>
            <h2 className="section-title__title">
              We???ve More Than 259+
              <br />
              Global Clients
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="partner-one__content">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Partner One End*/}
      {/*Info One Start*/}
      <section className="info-one">
        <div className="container">
          <div className="row">
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img1.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Let???s Ready to Get
                      <br />
                      Work Together
                    </h2>
                    <div className="button">
                      <Link href="/career">
                        <a className="thm-btn info-one__btn">
                          Join Now
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
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img2.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Request To Call Back
                      <br />
                      We Will Call!
                    </h2>
                    <div className="button">
                      <Link href="/contact">
                        <a className="thm-btn info-one__btn">
                          Get A Quote
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
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img3.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Build A Better Career
                      <br />
                      With Conbiz
                    </h2>
                    <div className="button">
                      <Link href="/career">
                        <a className="thm-btn info-one__btn">
                          View Jobs
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
            {/*End Single Info One*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
