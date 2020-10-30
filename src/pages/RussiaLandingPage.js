import React, { useEffect } from 'react';
import "./LandingPage.css";
import DocumentMeta from "react-document-meta";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Timeline from "../components/Timeline";
import LandingPageForm from "../components/LandingPageForm";

import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import "../components/HomeCarousel.css";

import ReactGA from 'react-ga';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

function PhilippinesLandingPage() {

  useEffect(() => {
    ReactGA.initialize('AW-604143024');
    ReactGA.pageview(window.location.pathname);
  }, []);

  const meta = {
    title: "Russia Landing Page",
    description: "Russia Landing Page",
    canonical: "https://www.mbbsadmissionsinabroad.com/russia-landing-page",
    // meta: {
    //   charset: 'utf-8',
    //   name: {
    //     keywords: 'MBBS Admission in Sweden'
    //   }
    // }
  };

  return (
    <DocumentMeta {...meta}>
      <div className="landing__page__body">
        <section className="landing__page">
          <Row className="justify-content-md-center">
            <img
              className="landing__page__logo"
              src="assets/destinex-logo.png"
              alt="Destinex Logo"
            />
          </Row>
          <h2 className="landing__page__title_1">MBBS ADMISSION IN Russia</h2>
          <h3 className="landing__page__title_2">
            GET UPTO <span style={{ color: "red" }}>15 LACS SCHOLARSHIP </span>
            FOR INDIAN STUDENTS
          </h3>
          <Container>
            <Row>
              <Col md={5}>
                <div>
                  <img
                    className="doctor__image"
                    src="assets/images/doctor-image.png"
                    alt="DoctorImage"
                  />
                </div>
              </Col>
              <Col md={2}>
                <div>
                  <img
                    className="arrow__image"
                    src="assets/images/arrow.png"
                    alt="ArrowImage"
                  />
                </div>
              </Col>
              <Col md={5}>
                <div className="form__bg" id="form">
                  <img
                    className="form__head__img"
                    src="assets/images/get_form_hedding.png"
                    alt="Heading"
                  />
                  <LandingPageForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Row className="justify-content-md-center">
            <p className="landing__page__desc">
              Destinex Education a Promising Overseas Educational Consultant
              based out in Bangalore.
            </p>
            <h4 className="landing__page__title_3">
              "Don't Worry We Are Here To Assist You"
            </h4>
          </Row>
          <Container>
            <div className="landing__page__sec">
              <Row>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/counselling.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        Free Counselling
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/college.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        Guaranteed Admission In Top Universities
                        <br />
                        /Colleges
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/fees.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        Low Admission Fees
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/visa.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        All Documents & 100% Visa Clearance Assistance
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/no-donation.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        No Donation & Capitation Fees
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="landing__page__box">
                    <img
                      className="landing__page__box__image"
                      src="assets/images/mci-screening.png"
                      alt=""
                    />
                    <div>
                      <p className="landing__page__box__desc">
                        MCI Screening Test Support
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section>
          <div className="lp__testimonials">
            <h5 className="landing__page__title">Testimonials</h5>
            <Container>
              <Carousel breakPoints={breakPoints}>
                <Item>
                  <div>
                    <img
                      className="home__carousel__img"
                      src="assets/images/testimonials-image/ashish-kumar.jpeg"
                      alt="Ashish Kumar"
                    />
                    <p className="home__carousel__stuname">Ashish Kumar</p>
                    <p className="home__carousel__uni">
                      V.N. Karazin Kharkiv National University, Ukraine
                    </p>
                    <p className="home__carousel__info">
                      Destinex Education Consultants have given us a beautiful
                      exposure to the Kharkiv National University. I am really
                      enjoying the immaculate ambiance and friendly people here
                      in Ukraine.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img
                      className="home__carousel__img"
                      src="assets/images/testimonials-image/saurav-kumar.jpeg"
                      alt="Saurav Kumar"
                    />
                    <p className="home__carousel__stuname">Saurav Kumar</p>
                    <p className="home__carousel__uni">
                      Dnipropetrovsk National University, Ukraine
                    </p>
                    <p className="home__carousel__info">
                      I had a dream to become a doctor and study abroad for
                      that..both my dreams are being fulfilled by Destinex
                      Education consultants. They were very helpful and I had no
                      difficulty to reach my destination, I am living my dream
                      here in Ukraine!!!
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img
                      className="home__carousel__img"
                      src="assets/images/testimonials-image/kuldeep-kumar.jpeg"
                      alt="Kuldeep Kumar"
                    />
                    <p className="home__carousel__stuname">Kuldeep Kumar</p>
                    <p className="home__carousel__uni">
                      Dnipropetrovsk National University, Ukraine
                    </p>
                    <p className="home__carousel__info">
                      Destinex Education consultants have given us a whole new
                      exposure to studying abroad, otherwise, in our city we had
                      no clue we can go to study abroad. The best education
                      consultants facilitated everything for us in Ukraine.
                      Thank u so much for your guidance...
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img
                      className="home__carousel__img"
                      src="assets/images/testimonials-image/bambam-chaurasiya.jpeg"
                      alt="Bambam Chaurasiya"
                    />
                    <p className="home__carousel__stuname">Bambam Chaurasiya</p>
                    <p className="home__carousel__uni">
                      Dnipropetrovsk National University, Ukraine
                    </p>
                    <p className="home__carousel__info">
                      I was not getting admission to my own country to study
                      medicine so I approached Destinex Education consultants.
                      They told me about the universities in Ukraine. I took no
                      time to think again for I wanted to become a doctor.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <img
                      className="home__carousel__img"
                      src="assets/images/testimonials-image/snehil.jpeg"
                      alt="Snehil"
                    />
                    <p className="home__carousel__stuname">Snehil</p>
                    <p className="home__carousel__uni">
                      Odessa National Medical University, Ukraine
                    </p>
                    <p className="home__carousel__info">
                      Studying in another country was a big concern for me and
                      my parents, but Destinex Education Consultants removed all
                      our doubts by assuring us for safety and explained to us
                      as to how much Ukraine.
                    </p>
                  </div>
                </Item>
              </Carousel>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <div>
              <h5 className="landing__page__title">About Mbbs In Russia</h5>
              <p className="landing__page__desc_1">
                Russia is well-acclaimed among international students for
                providing top-notch education facilities and has been amassing
                huge numbers of students the past few decades. The medical
                courses offered in Russia are recognized by the 5 renowned
                international medical councils namely the WHO, FAIMER, IMED,
                MCI, WFME and also by the Medical Council of leading countries
                like U.S.A, U.K, the Middle East, Australia, India, and Canada.
                Also, medical universities in Russia offer students, subsidized
                education along with scholarship. This subsidized fee is
                provided by the Russian Ministry of Health & Education. High
                quality of education along with the low cost of tuition fee is
                one of the main reasons for choosing the top medical
                universities in Russia for MBBS. Students and teachers are
                divided into batches of the ratio 15:2. Later, they are taught
                the local language and split into a ratio of 7:1. Also, about 12
                of these universities provide MBBS in English medium. The
                graduates from Russian Medical Universities are presently
                working in leading hospitals across the world. Duration of MBBS
                in Russia in English Medium is 6 years (5+1). Students also can
                choose MBBS in Russian Medium, of which the duration is 7 years
                which incorporates one year for Russian language training
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container fluid>
            <h5 className="landing__page__title">Top Universities In Russia</h5>
            <Row>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  Our Partner Universities In Russia
                </h6>
                <Row>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/russia-logo/kazan-federal-university-logo.png"
                        alt="Kazan Federal University"
                      />
                      <h6 className="lp__college__name">
                        Kazan Federal University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/russia-logo/altai-state-medical-university-logo.png"
                        alt="Altai State Medical University"
                      />
                      <h6 className="lp__college__name">
                        Altai State Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/russia-logo/pirogov-russian-national-research-medical-university-logo.png"
                        alt="Pirogov Russian National Research Medical University"
                      />
                      <h6 className="lp__college__name">
                        Pirogov Russian National Research Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/russia-logo/rostov-state-medical-university-logo.png"
                        alt="Rostov State Medical University"
                      />
                      <h6 className="lp__college__name">
                        Rostov State Medical University
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  List Of Universities IN Russia
                </h6>
                <div className="lp__college__list__russia">
                  <ul>
                    <li>
                      Pirogov Russian National Research Medical University
                      (RNRMU)
                    </li>
                    <li>
                      Pavlov First Saint Petersburg State Medical University
                    </li>
                    <li>Kazan Federal University</li>
                    <li>
                      I. M. Sechenov First Moscow State Medical University
                    </li>
                    <li>Altai State Medical University</li>
                    <li>Astrakhan State Medical University</li>
                    <li>Bashkir State Medical University</li>
                    <li>Belgorod State National Research University</li>
                    <li>Chechen State University</li>
                    <li>Chuvash State University named after I.N. Ulyanov</li>
                    <li>
                      Crimean Federal University named after V.I. Vernadsky
                    </li>
                    <li>Dagestan State Medical University</li>
                    <li>Far Eastern Federal University</li>
                    <li>Immanuel Kant Baltic Federal University</li>
                    <li>Irkutsk State Medical University</li>
                    <li>Ivanovo State Medical Academy</li>
                    <li>Izhevsk State Medical Academy</li>
                    <li>Kabardino-Balkarian State University</li>
                    <li>Kazan Federal (Volga) University</li>
                    <li>Kazan State Medical University</li>
                    <li>Kemerovo State Medical Academy</li>
                    <li>Kuban State Medical University</li>
                    <li>Kursk State Medical University</li>
                    <li>Mari State University</li>
                    <li>National Research Nuclear University “MIFI”</li>
                    <li>National Research Ogarev Mordovia State University</li>
                    <li>North Ossetian State Medical Academy</li>
                    <li>
                      North-Eastern Federal University named after MK Ammosov
                    </li>
                    <li>Northern State Medical University</li>
                    <li>Novosibirsk National Research State University</li>
                    <li>Omsk State Medical University</li>
                    <li>Orel State University</li>
                    <li>Orenburg State Medical University</li>
                    <li>Pacific State Medical University</li>
                    <li>Penza State University</li>
                    <li>
                      Perm State Medical University named after E.A. Vagner
                    </li>
                    <li>Privolzhsky Research Medical University</li>
                    <li>Pskov State University</li>
                    <li>Rostov State Medical University</li>
                    <li>
                      Russian National Research Medical University named after
                      N.I. Pirogov
                    </li>
                    <li>Russian Peoples Friendship University</li>
                    <li>
                      Ryazan State Medical University named after I.P. Pavlov
                    </li>
                    <li>Saratov State Medical University</li>
                    <li>Siberian State Medical University</li>
                    <li>Smolensk State Medical University</li>
                    <li>St. Petersburg State Pediatric Medical Academy</li>
                    <li>Stavropol State Medical University</li>
                    <li>Tambov State University named after G.R. Derzhavin</li>
                    <li>
                      The First Moscow State Medical University named after
                      Sechenov
                    </li>
                    <li>
                      The First St. Petersburg State Medical University named
                      after Pavlov
                    </li>
                    <li>Tula State University</li>
                    <li>Tver State Medical University</li>
                    <li>Tyumen State Medical University</li>
                    <li>Ulyanovsk State University</li>
                    <li>Ural State Medical University</li>
                    <li>Volgograd State Medical University</li>
                    <li>
                      Voronezh State Medical University named after N.N.
                      Burdenko
                    </li>
                    <li>Yaroslavl State Medical University</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/*<section>
          <Container>
            <h6 className="landing__page__title">
              MEDICAL UNIVERSITIES ACCREDITED BY
            </h6>
            <Row>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/mci-logo.png"
                  alt="Logo"
                />
              </Col>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/who-logo.png"
                  alt="Logo"
                />
              </Col>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/usmle-logo.png"
                  alt="Logo"
                  style={{ marginTop: "50px" }}
                />
              </Col>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/faimer-logo.png"
                  alt="Logo"
                />
              </Col>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/wfme-logo.png"
                  alt="Logo"
                />
              </Col>
              <Col md={2} xs={6}>
                <img
                  className="mci__logo"
                  src="assets/images/commission-on-higher-education-logo.png"
                  alt="Logo"
                />
              </Col>
            </Row>
          </Container>
        </section> */}
        <section>
          <Container>
            <h6 className="landing__page__title">FEE STRUCTURE</h6>
            <h6 className="landing__page__title">
              STARTS FROM
              <span style={{ color: "red" }}>
                <i>RS. 15,00,000/- TO RS. 25,00,000/-</i>
              </span>
              MAXIMUM
            </h6>
          </Container>
        </section>
        <section>
          <Container>
            <h6 className="landing__page__title">WORK PROCESS</h6>
            <Timeline />
          </Container>
        </section>
        <section>
          <Container>
            <h6 className="landing__page__title">FAQ</h6>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">Is MBBS in Russia good?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">
                      Destinex is one of the best overseas education consultants
                      in India. We have already placed hundreds of Indian
                      students in Russia for pursuing MBBS course in the top
                      medical universities that taught MBBS course in English
                      language.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
                    How much is the cost for MBBS in Russia?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      The cost of education in Russia varies from 3,500 to 6,000
                      USD (tuition fees).
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">
                    Is NEET required for MBBS in Russia?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      Yes, NEET score card is mandatory for applying to Russian
                      universities.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">
                    How many years in MBBS in Russia?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">
                      Duration of MBBS in Russia is 6 years(5+1). Students can
                      also opt for MBBS in Russian Medium, of which the duration
                      is 7 years which includes 1 year as Russian Language
                      Training.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">
                    Which is the best MBBS College in Russia for Indian
                    Students?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">
                      <ul>
                        <li>Kazan state medical university</li>
                        <li>Crimean Federal University</li>
                        <li>Altai State Medical University</li>
                        <li>Dagestan State Medical University</li>
                        <li>Irkutsk State Medical University</li>
                        <li>Mari State Medical University</li>
                        <li>Orel State Medical University</li>
                        <li>Bashkir State Medical University</li>
                      </ul>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
                    What are the career options for an Indian student doing an
                    MBBS in Russia?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">
                      Once the students have completed their MBBS course in
                      Russia they can practice in Russia itself. They can also
                      complete their PG in USA or Germany. Another option is the
                      student returning to India and practicing in India.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </section>
        <section>
          <Container>
            <h6 className="landing__page__title">
              DIRECT MBBS ADMISSION IN ABROAD
            </h6>
            <Row className="justify-content-md-center">
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/germany-flag.png"
                    alt="Germany Flag"
                  />
                  <h6 className="lp__country__name">Germany</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/poland-flag.jpg"
                    alt="Poland Flag"
                  />
                  <h6 className="lp__country__name">Poland</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/austria-flag.png"
                    alt="Austria Flag"
                  />
                  <h6 className="lp__country__name">Austria</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/hungary-flag.jpg"
                    alt="Hungary Flag"
                  />
                  <h6 className="lp__country__name">Hungary</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/kyrgyzstan-flag.png"
                    alt="Kyrgyzstan Flag"
                  />
                  <h6 className="lp__country__name">Kyrgyzstan</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/kazakhstan-flag.png"
                    alt="Kazakhstan Flag"
                  />
                  <h6 className="lp__country__name">Kazakhstan</h6>
                </div>
              </Col>

              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/georgia-flag.png"
                    alt="Georgia Flag"
                  />
                  <h6 className="lp__country__name">Georgia</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/armenia-flag.png"
                    alt="Armenia Flag"
                  />
                  <h6 className="lp__country__name">Armenia</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/denmark-flag.png"
                    alt="Denmark Flag"
                  />
                  <h6 className="lp__country__name">Denmark</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/sweden-flag.png"
                    alt="Sweden Flag"
                  />
                  <h6 className="lp__country__name">Sweden</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/norway-flag.jpg"
                    alt="Norway Flag"
                  />
                  <h6 className="lp__country__name">Norway</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/netherlands-flag.png"
                    alt="Netherlands Flag"
                  />
                  <h6 className="lp__country__name">Netherlands</h6>
                </div>
              </Col>

              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/philippines-flag.png"
                    alt="Philippines Flag"
                  />
                  <h6 className="lp__country__name">Philippines</h6>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div className="lp__country__sec">
                  <img
                    className="lp__country__img"
                    src="assets/images/country-flag/ukraine-flag.png"
                    alt="Ukraine Flag"
                  />
                  <h6 className="lp__country__name">Ukraine</h6>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <div className="free__consultation">
            <img
              className="excellence__img"
              src="assets/images/excellence-image.png"
              alt="Excellence Images"
            />
            <p className="free__cons__desc">
              Since 2009 We've Been Partnering With
              <span style={{ color: "red" }}>
                Top Medical Universities Of Russia
              </span>
              And Also Assisted More Than
              <span style={{ color: "red" }}>1500+ Students For Admission</span>
              Till Now..
            </p>
            <button className="free__cons__btn">
              <a href="#form">Get Free Consultation</a>
            </button>
          </div>
        </section>
        <section>
          <Container>
            <h6 className="landing__page__title">ADDRESS</h6>
            <Row>
              <Col md={6}>
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.188506035561!2d77.63650851415788!3d13.023664717259088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178102563701%3A0x7caa9fbade767ad1!2sMBBS%20Admission%20in%20Abroad%20-%20Destinex%20Education!5e0!3m2!1sen!2sin!4v1602073195312!5m2!1sen!2sin"
                    width="570"
                    height="320"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <Row>
                    <br />
                    <br />
                    <Col md={6} xs={12}>
                      <span className="lp__contact__no">
                        <a href="tel:9341666667">
                          <i class="fa fa-phone"></i> +91 (934) 166-6667
                        </a>
                      </span>
                    </Col>
                    <Col md={6} xs={12}>
                      <span className="lp__contact__no">
                        <a href="tel:9606089089">
                          <i class="fa fa-phone"></i> +91 (960) 608-9089
                        </a>
                      </span>
                    </Col>
                    <br />
                    <br />
                    <Col md={12}>
                      <span className="lp__contact__no">
                        <a href="mailto:info@mbbsadmissionsinabroad.com">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          info@mbbsadmissionsinabroad.com
                        </a>
                      </span>
                    </Col>
                    <br />
                    <br />
                    <Col md={12}>
                      <span className="lp__contact__no">
                        404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru – 560043
                      </span>
                    </Col>
                    <Col md={12}>
                      <br />
                      <h6 className="landing__page__title">
                        FOLLOW US ON SOCIAL MEDIA
                      </h6>
                      <ul className="lp__social__links">
                        <li>{/*eslint-disable-next-line */}
                          <a href="https://www.facebook.com/pg/mbbsadmissionsinabroad/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>{/*eslint-disable-next-line */}
                          <a href="https://twitter.com/_mbbsabroad"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        <li>{/*eslint-disable-next-line */}
                          <a href="https://www.instagram.com/mbbsadmissionsinabroad/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>{/*eslint-disable-next-line */}
                          <a href="https://www.youtube.com/channel/UCzTBawHuvJcQdGizhBgJPwA"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </DocumentMeta>
  );
}

export default PhilippinesLandingPage;
