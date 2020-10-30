import React from "react";
import "./LandingPage.css";
import DocumentMeta from "react-document-meta";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Timeline from "../components/Timeline";
import LandingPageForm from "../components/LandingPageForm";

import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import "../components/HomeCarousel.css";
// import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

function PhilippinesLandingPage() {
  const meta = {
    title: "Ukraine Landing Page",
    description: "Ukraine Landing Page",
    canonical: "https://www.mbbsadmissionsinabroad.com/ukraine-landing-page",
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
          <h2 className="landing__page__title_1">MBBS Admission In Ukraine</h2>
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
                        <br />/ Colleges
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
              <h5 className="landing__page__title">About Mbbs In Ukraine</h5>
              <p className="landing__page__desc_1">
                Ukraine is the largest region in Europe. At the current time,
                Ukraine has a top-rated position in Europe for getting the most
                significant quantity of postgraduates in areas of medication. If
                you are planning to study MBBS in Ukraine, it’s a good though.
                At present, Ukraine is ranked at the fourth position in Europe
                for having the largest number of postgraduates in the fields of
                medicine. Ukraine has a number of Top Government Medical
                Universities offering MBBS, MD and other degrees in medicine to
                the local students as well as international students across the
                world.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container fluid>
            <h5 className="landing__page__title">
              Top Universities In Ukraine
            </h5>
            <Row>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  Our Partner Universities In Ukraine
                </h6>
                <Row>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/ivano-frankvisk-national-medical-university-logo.png"
                        alt="Ivano-Frankvisk National Medical University"
                      />
                      <h6 className="lp__college__name">
                        Ivano-Frankvisk National Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/lviv-national-medical-university-logo.png"
                        alt="Lviv National Medical University"
                      />
                      <h6 className="lp__college__name">
                        Lviv National Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/kharkov-national-medial-university-logo.png"
                        alt="Kharkov National Medial University"
                      />
                      <h6 className="lp__college__name">
                        Kharkov National Medial University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/vinnytsia-national-medical-university-logo.png"
                        alt="Vinnytsia National Medical University"
                      />
                      <h6 className="lp__college__name">
                        Vinnytsia National Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/dnipropetrovsk-state-medical-university-logo.png"
                        alt="Dnipropetrovsk State Medical University"
                      />
                      <h6 className="lp__college__name">
                        Dnipropetrovsk State Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/bogomolets-national-medical-university-logo.png"
                        alt="Bogomolets National Medical University"
                      />
                      <h6 className="lp__college__name">
                        Bogomolets National Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/sumy-state-medical-university-logo.png"
                        alt="Sumy State Medical University"
                      />
                      <h6 className="lp__college__name">
                        Sumy State Medical University
                      </h6>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="landing__page__box">
                      <img
                        className="lp_college__logo"
                        src="assets/images/ukraine-logo/ternopil-state-medical-university-logo.png"
                        alt="Ternopil State Medical University"
                      />
                      <h6 className="lp__college__name">
                        Ternopil State Medical University
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} xs={12}>
                <h6 className="landing__page__title_4">
                  List Of Universities In Ukraine
                </h6>
                <div className="lp__college__list">
                  <ul>
                    <li>Bogomolets National Medical University, Kyiv</li>
                    <li>Odessa National Medical University, Odessa</li>
                    <li>Blaksea State Medical University, Mykolaiv</li>
                    <li>Donetsk National Medical University, Mariupol</li>
                    <li>Donetsk National Medical University, Kirovograd</li>
                    <li>Donetsk National Medical University, Chemigiv</li>
                    <li>Vinnytsia National Medical University, Vinnytsia</li>
                    <li>
                      Ivano-Frankvisk National Medical University,
                      Ivano-Frankvisk
                    </li>
                    <li>Sumy State Medical University, Sumy</li>
                    <li>Zaporozhye State Medical University, Zaporozhye</li>
                    <li>Kyiv Medical University of UAFM, Kyiv</li>
                    <li>Uzhgorod State Medical University, Uzhgorod</li>
                    <li>Poltava State Medical University, Poltava</li>
                    <li>Ternopil State Medical University, Ternopil</li>
                    <li>Lviv National Medical University, Lviv</li>
                    <li>Bukovinian State Medical University, Chernovtsy</li>
                    <li>Kharkov National Medial University, Kharkov</li>
                    <li>V. N. Karazin Medical University, Kharkov</li>
                    <li>
                      Dnipropetrovsk State Medical University, Dnipropetrovsk
                    </li>
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
                  src="assets/images/umc-logo.png"
                  alt="Logo"
                  style={{ marginTop: "50px" }}
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
                    What is the eligibility to study MBBS in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">
                      Students who meet all these criteria are eligible to
                      enroll overseas for MBBS course.
                      <ol>
                        <li>
                          Attained 17 years of age as on December 31st of the
                          year of admission.
                        </li>
                        <li>
                          Passed 10+2 from a recognized council/board in
                          India/abroad.
                        </li>
                        <li>
                          Have Physics, Chemistry, and Biology & English as
                          subjects in class 11 and in class 12 and passed in
                          each subject, Physics, chemistry and Biology should
                          have a practical test in each subject.
                        </li>
                        <li>
                          Obtain minimum 50% (40% for SC/ST/OBC) in aggregate in
                          PCB combined in 12th board.
                        </li>
                        <li>
                          B.Sc examination of an Indian university provided that
                          he/she have passed the B.Sc examination with not less
                          than two of the following subjects. Physics,
                          Chemistry, Biology (Botany, Zoology) and further that
                          he/she has passed the earlier qualifying examination
                          with the following subjects – Physics, Chemistry,
                          Biology and English.
                        </li>
                        <li>
                          Any other examination which in scope and standard is
                          found to be equivalent to the intermediate science
                          examination of an Indian University/Board, taking
                          physics, Chemistry and Biology including practical
                          test in each of these subjects and English.
                        </li>
                      </ol>
                      <br />
                      Note: This is the requirement for admission as prescribed
                      by MCI which is needed for issue of the MCI eligibility
                      certificate.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
                    Medical council of India registration?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      What is MCI’s certificate of eligibility and how do I get
                      it? How do I register as a doctor in India?
                      <br />
                      <ol>
                        <li>
                          Medical Council of India (MCI) regulates Doctors in
                          India. All Doctors need to register with MCI.
                        </li>
                        <li>
                          Students are eligible to Register with MCI Students
                          from India are eligible certificate and can register
                          with MCI after their degree from Respective College.
                          They can get Government Jobs in India. They can
                          practice in India & enroll in PG courses in India,
                          provided they comply with the process as laid down by
                          the MCI.
                        </li>
                        <li>
                          Overseas Education World will assist students in
                          filing for Certificate of Eligibility from MCI.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">
                    Can I practice in India on my return, after MBBS/MD degree
                    or primary medical qualification from Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      Yes, as per the current rules of the Medical Council of
                      India (MCI), you can practice in India. After graduating
                      from Ukraine, you have to appear for a screening test
                      conducted by the National Board of Education (NBE), New
                      Delhi. On clearing this test, you need to register with
                      the MCI with all their rules and then you will get a
                      registration which will allow you to practice medicine in
                      India.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">
                    How many times can I appear in the screening test?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">
                      There is NO LIMIT on the number of attempts in the
                      screening test. A sincere student will pass screening test
                      in the first attempt. It is a qualifying test similar to
                      class XII test. It is not an elimination test such as PMT.
                      <br />
                      NOTE: It is likely that the screening test will be
                      administered to all students from India, studying in
                      private and government colleges in India. In addition to
                      students from overseas, in order to create a uniform MBBS
                      education competency standard in India. This proposal is
                      on the MCI website, please see
                      <a href="www.mciindia.org">www.mciindia.org</a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">
                    Can I get a job in Government Hospitals or applied medical
                    institutions of India?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">
                      Yes. After registering with MCI, the doctor can apply for
                      Government & Private jobs or do his/her own practice, as
                      the person is now recognized by the Indian Authorities as
                      a Qualified Doctor.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
                    What kind of food will I get in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Students can cook their own food, kitchen facilities
                          are available.
                        </li>
                        <li>
                          Canteens and restaurants are available in the city and
                          near the university’s premises.
                        </li>
                        <li>
                          Establishment of a dedicated low cost canteen serving
                          Indian food for international students in the Hostel
                          premises is under consideration by the university.
                        </li>
                        <li>
                          All food items such as rice, dal, potatoes, tomatoes,
                          flour, pizzas, fruits, spices, tea, milk, butter, etc
                          are available for sale in the markets and bazaars.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <b className="accordion__title">
                    Are there any Indian students already studying in “Ukraine”?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p className="service__info">
                      Over 5000 Indian students are already studying MBBS/MD in
                      Ukraine. There are many Indian boys and girls from India.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <b className="accordion__title">
                    Can I get bank loan and to what extent?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <p className="service__info">
                      As per RBI regulations, students pursuing education abroad
                      can obtain load up to 15 lakhs. Visit the local branch of
                      a nationalized bank to find terms and conditions. Amount
                      sanctioned depends on income proof of parents; i.e. Last
                      three years income tax returns/or salary certificate. You
                      will have to satisfy the criteria that the bank will
                      apply. Visit the local branches of nationalized banks in
                      your areas to find out more.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  <b className="accordion__title">
                    Can I get help for the bank loan from you?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    <p className="service__info">
                      The world can advice you, but the bank will deal directly
                      with you and your documentation. Visit a nationalized bank
                      near your residence, which will then give you its
                      guidelines and terms and conditions.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  <b className="accordion__title">
                    Are Ukrainian colleges listed in the world health
                    organization (WHO) directory?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <p className="service__info">
                      Yes, it’s listed in WHO directory of Medical Institutions,
                      WHO publishes a list of medical colleges, given by various
                      countries.
                      <br />
                      NOTE: WHO does not rank medical universities? What WHO
                      does is simply publish the list of Medical Institutes give
                      to it by each government.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  <b className="accordion__title">
                    Can I do master’s or post graduation there?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p className="service__info">
                      Yes, after completion of MBBS degree from India/Ukraine or
                      any other recognized institute, you can pursue PG studies
                      in Ukraine. The quality of education in Ukraine is very
                      high, as the institute teaches not only at the Bachelors,
                      but also the masters and PhD level.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                  <b className="accordion__title">
                    What is the currency of Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <p className="service__info">
                      The currency of Ukraine is <b>Hryvna</b> pronounced as
                      Grieve. Approximately
                      <b>8 Hryvna =1 US$ or 72 Rupees or 9 Rupees = 1 Hryvna</b>
                      .
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="12">
                  <b className="accordion__title">
                    Is there any entrance examination prior to joining/What be
                    the admission process? As there are no all India entrance
                    examinations, does it mean that the quality of study in
                    Ukraine is bad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
                    <p className="service__info">
                      No CIS country conducts an entrance examination the way it
                      happens in India. Admission is granted on the basis of
                      class XII marks and an interview and a competency test.
                      This has been their tradition. Just as in India, the
                      tradition is an all India Entrance Examination due to
                      India’s huge population and shortage of seats. The
                      population of India is over 110 crore and India has 30,000
                      medical seats each year. As explained, elsewhere
                      facilities and quality of education imparted in Ukraine
                      are excellent from the Bachelors to the PhD level.
                      Students have to pass the annual examinations to be
                      promoted. The standard of education is very high. Tests
                      are conducted every day from Monday to Friday and 100%
                      attendance is needed. Students should be good and
                      hardworking to do well. European Credit Transfer Scheme
                      (ECTS) is followed. The standard of education offered is
                      that of European quality in Ukraine.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="13">
                  <b className="accordion__title">
                    How does one apply for a passport and what documents do I
                    need?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    <p className="service__info">
                      You need to either apply for your passport online or
                      apply. The passport application process is moving online.
                      Visit www.passport.gov.in. The website contains the name,
                      address and phone numbers of passport offices all over
                      India. You can submit your application online or via speed
                      post or via a form. In some cases, the applications are
                      being received online only. We recommend that you apply
                      for your passport immediately. Fill out the form on the
                      net and you get an appointment date. Visit the passport
                      office and show you documents, they keep the photocopies
                      and return the originals. Normally, it takes 6 to 8 weeks
                      to receive a new passport. The following documents are
                      needed for the application of your passport.
                      <ol>
                        <li>Your birth certificate.</li>
                        <li>Proof of residence and Proof of identity.</li>
                        <li>Certificate of educations qualifications.</li>
                        <li>The prescribed fee by the passport office.</li>
                      </ol>
                      <br />
                      Visit the following websites for passport application and
                      current information.
                      <br />
                      <ol>
                        <li>
                          <a href="www.passport.nic.in">www.passport.nic.in</a>
                        </li>
                        <li>
                          <a href="www.passport.gov.in">www.passport.gov.in</a>
                        </li>
                        <li>
                          <a href="www.passportindia.gov.in">
                            www.passportindia.gov.in
                          </a>
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="14">
                  <b className="accordion__title">
                    Is the Bachelor’s degree recognized in India and abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <p className="service__info">
                      Yes, the Bachelor’s degree is recognized in India and in
                      more than 180 countries around the world. Graduates can
                      practice in the following countries after completing
                      formalities as needed by each country.
                      <ol>
                        <li>
                          India. After clearing a screening test conducted by
                          the National council of Education. The test is held
                          twice a year (last Saturday/Sunday of September and
                          last Saturday/Sunday of March|).
                        </li>
                        <li>
                          United Kingdom. After passing the PLAB examination.
                        </li>
                        <li>
                          United states of America. After clearing the USMLE.
                        </li>
                        <li>
                          European union (EU). The degree is recognized by the
                          European Union.
                        </li>
                      </ol>
                      <br />
                      NOTE: In addition to Professional Qualifications, the
                      applicant has to comply with all other immigration rules
                      of the host country, such as VISA, work permits, medical
                      fitness, language, etc.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="15">
                  <b className="accordion__title">
                    Can a student open a bank account in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="15">
                  <Card.Body>
                    <p className="service__info">
                      Yes, a student can open a bank account in Ukraine in his
                      own name and parents can transfer money. Students can also
                      take an international debit card from any bank in India.
                      Parents can deposit money in to this account in India and
                      the student can withdraw foreign exchange in Ukraine.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="16">
                  <b className="accordion__title">
                    Does the student have to carry blankets and bed sheets from
                    India ?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="16">
                  <Card.Body>
                    <p className="service__info">
                      Hostel supplies student with linen required; i.e. a
                      pillow, bed sheet, warm blankets, etc. Student will have
                      to carry with him everyday clothes. Winter clothes can be
                      purchased there as needed by the student.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="17">
                  <b className="accordion__title">
                    How long does it require for the admission procedure to be
                    completed?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="17">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          The initial admission letter by the university is
                          issued in 10 to 15 working days.
                        </li>
                        <li>
                          Thereafter other documentation is completed subject to
                          production of original papers from the student, such
                          as passport, mark sheets, etc. This usually takes 6 to
                          8 weeks.
                        </li>
                        <li>
                          Student will have to visit Delhi at least once for 4
                          to 7 days in the month of August or September to
                          his/her VISA issued, have a medical test and to comply
                          with documentation with the MCI and other government
                          agencies.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="18">
                  <b className="accordion__title">
                    In comparison to Ukraine education, what is the cost of
                    medical education in comparison to Indian counterpart?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="18">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Fees are Rs 1.80 Lacs/year. Private colleges in Uttar
                          Pradesh charge Rs. 6.1 Lacs/year or Rs. 30 Lacs as
                          fees. Ukraine is 60 to 70% cheaper than private Indian
                          colleges, as it is owned by the government and not by
                          private sector.
                        </li>
                        <li>
                          Cost of food + Hostel + Insurance in Ukraine works out
                          to Rs. 90,000 to 1 Lac a year, which is similar to the
                          cost in a city in India.
                        </li>
                        <li>
                          Ukraine quality of education is much better than most
                          India private and government medical colleges. They
                          have much better facilities and international
                          collaborations than Indian Medical Institutes.
                        </li>
                        <li>
                          Ukraine offers excellent value for money education for
                          medical students.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="19">
                  <b className="accordion__title">
                    Can my parents visit me in Ukraine ?. Can I travel back to
                    India during holidays or should I stay back there.
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="19">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Parents/friends/relatives of students can visit
                          Ukraine. Invitations can be issued from Ukraine to
                          facilitate VISA processing in New Delhi.
                        </li>
                        <li>
                          There are two holidays in a year, first 15 days in
                          January and 2 months in summer (July and August).
                          During holidays, students have the option of staying
                          back there or travelling in Europe or coming back to
                          India to spend time with their family.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="20">
                  <b className="accordion__title">
                    How is living in Ukraine, is it secure and safe?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="20">
                  <Card.Body>
                    <p className="service__info">
                      Ukraine is a former part of USSR. It is primarily a
                      Christian Dominated Country with over 95% of the
                      population being Christian. It has good law and order and
                      security in place. Ukraine is trying for European Union
                      (EU) membership. There is a large amount of Indian
                      students in Ukraine. Students have a comfortable and
                      pleasant stay.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="21">
                  <b className="accordion__title">
                    What are the facilities in the hostel?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="21">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>Washing Machine.</li>
                        <li>Hot water.</li>
                        <li>Free electric stoves for cooking.</li>
                        <li>Change of bed sheets every 2-3 weeks for free.</li>
                        <li>Free electricity.</li>
                        <li>Security guard.</li>
                        <li>Hostel Dean.</li>
                        <li>
                          High speed internet with 10 mbps speed cost
                          approximately Rs. 600 a month.
                        </li>
                      </ol>
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
                    src="assets/images/country-flag/russia-flag.jpg"
                    alt="Russia Flag"
                  />
                  <h6 className="lp__country__name">Russia</h6>
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
                Top Medical Universities Of Ukraine
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
                      <span className="lp__contact__no"> 404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru – 560043 </span>
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
