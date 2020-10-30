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
    title: "Philippines Landing Page",
    description: "Philippines Landing Page",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/philippines-landing-page",
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
          <h2 className="landing__page__title_1">
            MBBS ADMISSION IN PHILIPPINES
          </h2>
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
                    alt=""
                  />
                </div>
              </Col>
              <Col md={2}>
                <div>
                  <img
                    className="arrow__image"
                    src="assets/images/arrow.png"
                    alt=""
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
                  <LandingPageForm/>
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
                        Guaranteed Admission In Top Universities<br/>/ Colleges
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
                  src="assets/images/testimonials/md-farah-idid.png"
                  alt="MD. Farah IDID"
                />
                <p className="home__carousel__stuname">MD. Farah IDID</p>
                <p className="home__carousel__uni">
                  AMA School Of Medicine, Philippines
                </p>
                <p className="home__carousel__info">
                “I’m the Student of AMA School of Medicine and that was my dream and i never thought i will get my dream university in Philippines. Thanks to Destinex who helped me for admission process, thank you Avinash sir because of Destinex and your team my dreams come true.”
                </p>
              </div>
            </Item>
            <Item>
              <div>
                <img
                  className="home__carousel__img"
                  src="assets/images/testimonials/kala-vipul-vijay.png"
                  alt="Kala Vipul Vijay"
                />
                <p className="home__carousel__stuname">Kala Vipul Vijay</p>
                <p className="home__carousel__uni">
                  University of Northern Philippines, Philippines
                </p>
                <p className="home__carousel__info">
                 “Thank you so much Destinex for helping me out through NEET preparation and also guiding me towards the selection of top medical university. I would recommend Destinex to all those who are planning to get success in their career.”
                </p>
              </div>
            </Item>
            <Item>
              <div>
                <img
                  className="home__carousel__img"
                  src="assets/images/testimonials/hoque-moushin-sarif-mohammad.png"
                  alt="Hoque Moushin Sarif Mohammad"
                />
                <p className="home__carousel__stuname">Hoque Moushin Sarif Mohammad</p>
                <p className="home__carousel__uni">
                  AMA School Of Medicine, Philippines
                </p>
                <p className="home__carousel__info">
                 “Best place for admissions guidance, they have helped me to choose the best college & they have given proper information about MCI Screening Test & i must say what i have achieved because of Destinex.”
                </p>
              </div>
            </Item>
            <Item>
              <div>
                <img
                  className="home__carousel__img"
                  src="assets/images/testimonials/gojree-mohammad-rafiq.png"
                  alt="Gojree Mohammad Rafiq"
                />
                <p className="home__carousel__stuname">Gojree Mohammad Rafiq</p>
                <p className="home__carousel__uni">
                  Cagayan State University, Philippines
                </p>
                <p className="home__carousel__info">
                  “I suggest Destinex is India’s most trustworthy consultancy which always delivered what they commit to the students. I’m very thankful to Destinex and their team for quality and innovative services which delivered value to my dreams.”
                </p>
              </div>
            </Item>
            <Item>
              <div>
                <img
                  className="home__carousel__img"
                  src="assets/images/testimonials/bhat-mashood-ahmad.png"
                  alt="Bhat mashood Ahmad "
                />
                <p className="home__carousel__stuname">Bhat mashood Ahmad </p>
                <p className="home__carousel__uni">
                  AMA School of Medicine, Philippines
                </p>
                <p className="home__carousel__info">
                  Destinex OverSeas Education Consultants have given us a beautiful exposure to the university, AMA School of Medicine. I am really enjoying the immaculate ambiance and friendly people here in the Philippines.
                </p>
              </div>
            </Item>
            <Item>
              <div>
                <img
                  className="home__carousel__img"
                  src="assets/images/testimonials/mir-mubashir-ahmad.png"
                  alt="Mir Mubashir Ahmad"
                />
                <p className="home__carousel__stuname">Mir Mubashir Ahmad</p>
                <p className="home__carousel__uni">
                  AMA School of Medicine, Philippines
                </p>
                <p className="home__carousel__info">
                 I had a dream to become a doctor and study abroad for that... both my dreams are being fulfilled by Destinex consultants. They were very helpful and I had no difficulty to reach my destination , I am living my dream here in Philippines!!!
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
              <h5 className="landing__page__title">
                About Mbbs In Philippines
              </h5>
              <p className="landing__page__desc_1">
                MBBS in Philippines is the best considerable destination to
                study a course of medicine for Indian students. It enables the
                students to have brighter career growth after Study MBBS in
                Philippines. It provides the magnificent theoretical as well as
                practical education which empowers the candidates to become
                successful practitioners.
              </p>
              <p className="landing__page__desc_1">
                The Philippines provides the American system of medical
                education and the Primary Medical qualification. The MBBS course
                offered to students in the Philippines is known as the MD
                program (Doctor of Medicine). Philippines MBBS College fees
                would range anywhere between INR 15 to 25 lacs.
              </p>
              <p className="landing__page__desc_1">
                About 8000 foreign students are taking MBBS Admission in
                Philippines every year. The MMBS course from Philippines is
                globally recognized including the Medical Council of India. The
                best part is that almost everyone speaks English in the
                Philippines which is an added advantage to students who want to
                fulfil their dream to pursue MBBS in Philippines.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container fluid>
            <h5 className="landing__page__title">
              Top Universities In Philippines
            </h5>
            <Row>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  OUR PARTNER UNIVERSITIES IN PHILIPPINES
                </h6>
                <Row>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/ama-logo.png"
                        alt="AMA Logo"
                      />
                      <h6 className="lp__college__name">
                        AMA School of Medicine
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/bicol-christian-college.png"
                        alt="Bicol Christian College Logo"
                      />
                      <h6 className="lp__college__name">
                        Bicol Christian College Of Medicine
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/davao-medical-school.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        Davao Medical School Foundation
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/emilio-logo.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        Emilo Aguinaldo College
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/our-lady-fatima-university.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        Our Lady of Fatima University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/xavier-university.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        Xavier <br /> University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/university-of-perpetual-help.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        University of Perpetual Help Rizal
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/philippines-college-logo/lyceum-logo.png"
                        alt=""
                      />
                      <h6 className="lp__college__name">
                        Lyceum Northwestern University
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  LIST OF UNIVERSITIES IN PHILIPPINES
                </h6>
                <div className="lp__college__list">
                  <ul>
                    <li>
                      Ago Medical and Educational Center Bicol Christian College
                      of Medicine
                    </li>
                    <li>AMA School of Medicine</li>
                    <li>Angeles University Foundation</li>
                    <li>Ateneo de Zamboanga University</li>
                    <li>Baguio Central University</li>
                    <li>BICOL CHRISTIAN COLLEGE OF MEDICINE</li>
                    <li>Cagayan State University Tuguegarao (Carig)</li>
                    <li>Cebu Doctors University College of Medicine</li>
                    <li>Cebu Institute of Medicine</li>
                    <li>Central Philippine University</li>
                    <li>Davao Medical School Foundation</li>
                    <li>De La Salie University Health Sciences Campus</li>
                    <li>Dona Remedos Trinidad Medical Foundation</li>
                    <li>Emilo Aguinaldo College, Manila</li>
                    <li>
                      Far Eastern University Dr. Nicanor Reyes Medical
                      Foundation
                    </li>
                    <li>FEU Dr. Nicanor Reyes Medical Foundation</li>
                    <li>Iloilo Doctors College of Medicine</li>
                    <li>Lyceum Northwestern University</li>
                    <li>Manila Central University</li>
                    <li>
                      Our Lady of Fatima University (Fatima Medical Science
                      Foundation) Valenzuela
                    </li>
                    <li>Pamantasan ng Lungsod ng Maynila</li>
                    <li>Saint Louis University</li>
                    <li>San Beda College</li>
                    <li>Silliman University</li>
                    <li>
                      Southwestern University Matias H. Aznar Memorial College
                      of Medicine
                    </li>
                    <li>
                      Southwestern University, Urgello, Cebu City, Philippines
                    </li>
                    <li>
                      St. Lukes College of Medicine William H. Quasha Memorial
                    </li>
                    <li>St. Paul University,Philippines</li>
                    <li>University of Northern Philippines</li>
                    <li>
                      University of Perpetual Help (Dr. Jose G. Tamayo Medical
                      University)
                    </li>
                    <li>University of Perpetual Help Rizal</li>
                    <li>University of Saint La Salle</li>
                    <li>University of Santo Tomas</li>
                    <li>
                      University of the East Ramon Magsaysay Memorial Medical
                      Center
                    </li>
                    <li>University of the Philippines Manila</li>
                    <li>UV Gullas College of Medicine</li>
                    <li>Virgen Milagrosa University Foundation</li>
                    <li>West Visayas State University</li>
                    <li>Xavier University</li>
                    <li>Zamboanga Medical School Foundation</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
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
        </section>
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
                  <b className="accordion__title">
                    Is MBBS in Philippines good?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">
                      It’s a great option to opt for pursuing MBBS in
                      Philippines
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
                    How much is the cost for MBBS in Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      It is very affordable to Study MBBS in Philippines as its
                      cost between 12 to 25 lacs.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">
                    Is NEET required for MBBS in Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      It is compulsory for Indian students to clear the NEET
                      exam to pursue MBBS in Philippines.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">
                    How many years in MBBS in Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">MBBS duration is 6 years.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">
                    Which is the best MBBS College in Philippines for Indian
                    Students?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">
                      Almost every college provides the best education to Indian
                      students. The best MBBS Colleges in Philippines for Indian
                      Students include AMA School of Medicine, University of
                      Perpetual Help System, Our Lady of Fatima University, and
                      Angeles University Foundation.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
                    What are the career options for an Indian student doing an
                    MBBS in Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">
                      Medical Degrees get from Philippines Medical Colleges or
                      Universities have worldwide recognition. After completion
                      of MBBS in Philippines, the further scope includes doing
                      PG in another country or practice as a Doctor in India as
                      well as in another foreign country after clear the
                      National Exit Exam.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <b className="accordion__title">
                    Why is NMAT required in Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p className="service__info">
                      NMAT is required in Philippines for the entrance to any
                      medical college in Philippines It also improves the
                      quality of medical education in Philippines.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <b className="accordion__title">
                    What is the passing score for NMAT Philippines?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <p className="service__info">
                      The passing score for NMAT Philippines is 40 percentile.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </section>
        <section>
          <Container>
						<h6 className="landing__page__title">DIRECT MBBS ADMISSION IN ABROAD</h6>
						<Row className="justify-content-md-center">
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/germany-flag.png" alt="Germany Flag" />
									<h6 className="lp__country__name">Germany</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/poland-flag.jpg" alt="Poland Flag" />
									<h6 className="lp__country__name">Poland</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/austria-flag.png" alt="Austria Flag" />
									<h6 className="lp__country__name">Austria</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/hungary-flag.jpg" alt="Hungary Flag" />
									<h6 className="lp__country__name">Hungary</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/kyrgyzstan-flag.png" alt="Kyrgyzstan Flag" />
									<h6 className="lp__country__name">Kyrgyzstan</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/kazakhstan-flag.png" alt="Kazakhstan Flag" />
									<h6 className="lp__country__name">Kazakhstan</h6>
								</div>
							</Col>

							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/georgia-flag.png" alt="Georgia Flag" />
									<h6 className="lp__country__name">Georgia</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/armenia-flag.png" alt="Armenia Flag" />
									<h6 className="lp__country__name">Armenia</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/denmark-flag.png" alt="Denmark Flag" />
									<h6 className="lp__country__name">Denmark</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/sweden-flag.png" alt="Sweden Flag" />
									<h6 className="lp__country__name">Sweden</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/norway-flag.jpg" alt="Norway Flag" />
									<h6 className="lp__country__name">Norway</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/netherlands-flag.png" alt="Netherlands Flag" />
									<h6 className="lp__country__name">Netherlands</h6>
								</div>
							</Col>

							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/russia-flag.jpg" alt="Russia Flag" />
									<h6 className="lp__country__name">Russia</h6>
								</div>
							</Col>
							<Col md={2} xs={6}>
								<div className="lp__country__sec">
									<img className="lp__country__img" src="assets/images/country-flag/ukraine-flag.png" alt="Ukraine Flag" />
									<h6 className="lp__country__name">Ukraine</h6>
								</div>
							</Col>
						</Row>
          </Container>
				</section>
				<section>
					<div className="free__consultation">
						<img className="excellence__img" src="assets/images/excellence-image.png" alt="Excellence Images" />
						<p className="free__cons__desc">Since 2009 We've Been Partnering With <span style={{ color: "red" }}>Top Medical Universities Of Philippines</span> And Also Assisted More Than <span style={{ color: "red" }}>1500+ Students For Admission</span> Till Now..</p>
						<button className="free__cons__btn" ><a href="#form">Get Free Consultation</a></button>
					</div>
				</section>
				<section>
					<Container>
						<h6 className="landing__page__title">ADDRESS</h6>
						<Row>
							<Col md={6}>
								<div className="map-responsive">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.188506035561!2d77.63650851415788!3d13.023664717259088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178102563701%3A0x7caa9fbade767ad1!2sMBBS%20Admission%20in%20Abroad%20-%20Destinex%20Education!5e0!3m2!1sen!2sin!4v1602073195312!5m2!1sen!2sin" width="570" height="320" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" title="Office Map"  />
								</div>
							</Col>
							<Col md={6}>
								<div>
									<Row><br/><br/>
										<Col md={6} xs={12}>
												<span className="lp__contact__no"><a href="tel:9341666667"><i class="fa fa-phone"></i> +91 (934) 166-6667</a></span>
										</Col>
										<Col md={6} xs={12}>
												<span className="lp__contact__no"><a href="tel:9606089089"><i class="fa fa-phone"></i> +91 (960) 608-9089</a></span>
										</Col><br/><br/>
										<Col md={12}>
											<span className="lp__contact__no"><a href="mailto:info@mbbsadmissionsinabroad.com"><i class="fa fa-envelope" aria-hidden="true"></i> info@mbbsadmissionsinabroad.com</a></span>
										</Col><br/><br/>
										<Col md={12}>
											<span className="lp__contact__no">404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru – 560043</span>
										</Col>
										<Col md={12}><br/>
											<h6 className="landing__page__title">FOLLOW US ON SOCIAL MEDIA</h6>
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
