import Link from "next/dist/client/link";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const ServicesDetails = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName="services" />
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/*Start Services Details Sidebar*/}
            <div className="col-xl-4 col-lg-8">
              {/*Search*/}
              <div
                className="sidebar-search-box wow fadeInUp animated animated animated"
                data-wow-delay="0.1s"
                data-wow-duration="1200ms"
                style={{
                  visibility: "visible",
                  animationDuration: "1200ms",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="search-form"
                  action="#"
                >
                  <input placeholder="Search" type="text" />
                  <button type="submit">
                    <i className="icon-search" />
                  </button>
                </form>
              </div>

              {/*Category*/}
              <div className="services-details__sidebar">
                <div
                  className="services-details__services-list-box wow fadeInUp animated"
                  data-wow-delay="0.0s"
                  data-wow-duration="1200ms"
                >
                  <h3 className="services-details__sidebar-title">
                    All Services Category
                  </h3>
                  <ul className="services-details__services-list list-unstyled">
                    <li>
                      <Link href="/services-1">
                        <a>
                          Clinical Department {" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-1">
                        <a>
                        Diagnostic and Therapeutics{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-1">
                        <a>
                        Mobile Clinic{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-1">
                        <a>
                        Nursing Department{" "}
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/*Start Single Sidebar*/}
                <div className="sidebar__single">
                    <div
                      className="sidebar__single-contact-box wow fadeInUp animated"
                      data-wow-delay="0.5s"
                      data-wow-duration="1200ms"
                    >
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/sidebar-contact-box-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="shape2">
                        <img
                          src="assets/images/shapes/sidebar-contact-box-shape2.png"
                          alt="image"
                        />
                      </div>
                      <h2>
                        Looking For <br />
                        Professional <br />
                        Doctor ?
                      </h2>
                      <div className="sidebar__single-contact-box-btn">
                        <a href="/ace-doctors" className="thm-btn">
                          Find Doctor
                          <i className="fa fa-chevron-right" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="sidebar__single-contact-box-img">
                        <img
                          src="assets/images/blog/blog-sidebar-img1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*End Single Sidebar*/}

              </div>
            </div>
            {/*End Services Details Sidebar*/}
            {/*Start Services Details Content*/}
            <div className="col-xl-8">
            <div className="section-title text-center">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>How Can We Help You</h4>
                      <span className="right" />
                    </div>
                    <h2 className="section-title__title">
                      Our Services
                    </h2>
                  </div>
                  <div className="row">
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/anes1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">
                            <a>ANESTHESIOLOGY</a>
                          </Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/dental1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">DENTAL</Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/derma1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">DERMATOLOGY</Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/ent1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">
                            <a>ENT</a>
                          </Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/im1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">INTERNAL MEDICINE</Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                    {/*Start Single Features Three*/}
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1000ms"
                    >
                      <div className="features-three__single text-center">
                        <div
                          className="layer-outer"
                          style={{
                            backgroundImage:
                              "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                          }}
                        ></div>
                        <div className="features-three__single-icon">
                          <img
                            src="../assets/images/icon-services/ob1.svg"
                            alt="image"
                            style={{width:"50%"}}
                          />
                        </div>
                        <h4 className="features-three__single-title">
                          <Link href="/services-details">OBSTETRICS &amp; GYNECOLOGY</Link>
                        </h4>
                        <div className="features-three__single-btn">
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
                    {/*End Single Features Three*/}
                  </div>
            </div>
            {/*End Services Details Content*/}
          </div>
        </div>
      </section> <br/><br/>

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

export default ServicesDetails;
