import Link from "next/dist/client/link";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Team = () => {
  return (
    <Layout header={3}>
      <PageBanner pageName="Find Doctor" />
      <section className="team-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Doctors</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Doctors
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
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
                    <input placeholder="Search for Name, Department or Expertise ... " type="text" />
                    <button type="submit">
                      <i className="icon-search" />
                    </button>
                  </form>
                </div>
              <div className="team-one__content-wrapper">
                <div className="team-one__big-title">
                  <h2>Doctors</h2>
                </div>
                <div className="row">
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                          <p>Medical Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>Medical Director</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                          <p>Therapist</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Therapist</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                              Douglas B. Robinson
                            </Link>
                          </h4>
                          <p>Therapist</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              Douglas B. Robinson
                            </Link>
                          </h4>
                          <p>Therapist</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-5.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Delmer H. Harrison</Link>
                          </h4>
                          <p>Diagnostic Medical Sonographer</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Delmer H. Harrison</Link>
                          </h4>
                          <p>Diagnostic Medical Sonographer</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-6.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Michael R. Spencer</Link>
                          </h4>
                          <p>Therapist</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael R. Spencer</Link>
                          </h4>
                          <p>Therapist</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-7.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Matthew B. Thomas</Link>
                          </h4>
                          <p>Surgical Technologist</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Matthew B. Thomas</Link>
                          </h4>
                          <p>Surgical Technologist</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-8.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Gary R. Anderson</Link>
                          </h4>
                          <p>Surgeon</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Gary R. Anderson</Link>
                          </h4>
                          <p>Surgeon</p>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  <div className="team-one__button team-one__button-team">
                    <a href="#" className="thm-btn">
                      View All Member{" "}
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
        </div>
      </section>
      {/*Team One End*/}
      {/*Why Choose One Start*/}
      <section
        className="why-choose-one why-choose-one-team"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/why-choose-one-team-bg.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-one__content">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Why Choose Us</h4>
                  </div>
                  <h2 className="section-title__title">
                    Help to Rapidly Shift
                    <br />
                    Remote Work
                  </h2>
                </div>
                <ul className="why-choose-one__list list-unstyled">
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Static Innovations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Consulting &amp; Advisory</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Turnaround Situations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-one__img">
                <img
                  src="assets/images/resources/why-choose-one-img1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section> <br/><br/><br/>

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

export default Team;
