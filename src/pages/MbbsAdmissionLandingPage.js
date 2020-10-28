import React from 'react';
import "./LandingPage.css";
import DocumentMeta from "react-document-meta";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Timeline from "../components/Timeline";
import LandingPageForm from "../components/LandingPageForm";

import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import "../components/HomeCarousel.css";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];	

function MbbsAdmissionLandingPage() {
	const meta = {
    title: "2020 MBBS Admissions In Abroad",
    description: "2020 MBBS Admissions In Abroad",
    canonical: "https://www.mbbsadmissionsinabroad.com/2020-mbbs-admissions-in-abroad",
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
          <h2 className="landing__page__title_1">MBBS Admission In Russia, Ukraine, Philippines</h2>
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
              <h5 className="landing__page__title">Founder's Message</h5>
							<p className="landing__page__desc_1">Hello! I am Dr. Vinnit Singh, a study abroad consultant working since 2009. I am specialized in MBBS Admission Abroad and guided several students regarding the best selection of university, course as well as the country. I have traveled to various universities and countries such as the Russia, Ukraine, Philippines, Armenia, Belize, France, and Kazakhstan for our MBBS students.</p>

							<p className="landing__page__desc_1">My main objective is to provide transparency in the MBBS abroad admission process and information. I want to make Destinex Education the most trusted MBBS abroad consultancy for Indian students. Feel free to contact me at our helpline numbers, chat support or drop a mail at <a href="mailto:info@mbbsadmissionsinabroad.com">info@mbbsadmissionsinabroad.com</a></p>

							<p className="landing__page__desc_1">Apply today for Free Counseling and Start your Journey with us!!</p>
            </div>
          </Container>
        </section>
        <section>
          <Container fluid>
						<Row>
						<Col lg={4} xs={12}>
                <h6 className="landing__page__title_4">
                  List Of Universities In Russia
                </h6>
                <div className="lp__college__list">
								<ul>
									<li>Pirogov Russian National Research Medical University (RNRMU)</li>
									<li>Pavlov First Saint Petersburg State Medical University</li>
									<li>Kazan Federal University</li>
									<li>I. M. Sechenov First Moscow State Medical University</li>
									<li>Altai State Medical University</li>
									<li>Astrakhan State Medical University</li>
									<li>Bashkir State Medical University</li>
									<li>Belgorod State National Research University</li>
									<li>Chechen State University</li>
									<li>Chuvash State University named after I.N. Ulyanov</li>
									<li>Crimean Federal University named after V.I. Vernadsky</li>
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
									<li>North-Eastern Federal University named after MK Ammosov</li>
									<li>Northern State Medical University</li>
									<li>Novosibirsk National Research State University</li>
									<li>Omsk State Medical University</li>
									<li>Orel State University</li>
									<li>Orenburg State Medical University</li>
									<li>Pacific State Medical University</li>
									<li>Penza State University</li>
									<li>Perm State Medical University named after E.A. Vagner</li>
									<li>Privolzhsky Research Medical University</li>
									<li>Pskov State University</li>
									<li>Rostov State Medical University</li>
									<li>Russian National Research Medical University named after N.I. Pirogov</li>
									<li>Russian Peoples Friendship University</li>
									<li>Ryazan State Medical University named after I.P. Pavlov</li>
									<li>Saratov State Medical University</li>
									<li>Siberian State Medical University</li>
									<li>Smolensk State Medical University</li>
									<li>St. Petersburg State Pediatric Medical Academy</li>
									<li>Stavropol State Medical University</li>
									<li>Tambov State University named after G.R. Derzhavin</li>
									<li>The First Moscow State Medical University named after Sechenov</li>
									<li>The First St. Petersburg State Medical University named after Pavlov</li>
									<li>Tula State University</li>
									<li>Tver State Medical University</li>
									<li>Tyumen State Medical University</li>
									<li>Ulyanovsk State University</li>
									<li>Ural State Medical University</li>
									<li>Volgograd State Medical University</li>
									<li>Voronezh State Medical University named after N.N. Burdenko</li>
									<li>Yaroslavl State Medical University</li>
								</ul>
                </div>
							</Col>
							<Col lg={4} xs={12}>
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
							<Col lg={4} xs={12}>
                <h6 className="landing__page__title_4">
                  List Of Universities In Philippines
                </h6>
                <div className="lp__college__list">
								<ul>
								<li>Ago Medical and Educational Center Bicol Christian College of Medicine</li>
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
								<li>Far Eastern University Dr. Nicanor Reyes Medical Foundation</li>
								<li>FEU Dr. Nicanor Reyes Medical Foundation</li>
								<li>Iloilo Doctors College of Medicine</li>
								<li>Lyceum Northwestern University</li>
								<li>Manila Central University</li>
								<li>Our Lady of Fatima University (Fatima Medical Science Foundation) Valenzuela</li>
								<li>Pamantasan ng Lungsod ng Maynila</li>
								<li>Saint Louis University</li>
								<li>San Beda College</li>
								<li>Silliman University</li>
								<li>Southwestern University Matias H. Aznar Memorial College of Medicine</li>
								<li>Southwestern University, Urgello, Cebu City, Philippines</li>
								<li>St. Lukes College of Medicine William H. Quasha Memorial</li>
								<li>St. Paul University,Philippines</li>
								<li>University of Northern Philippines</li>
								<li>University of Perpetual Help (Dr. Jose G. Tamayo Medical University)</li>
								<li>University of Perpetual Help Rizal</li>
								<li>University of Saint La Salle</li>
								<li>University of Santo Tomas</li>
								<li>University of the East Ramon Magsaysay Memorial Medical Center</li>
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
									Is it a Good Option to Study MBBS in Abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">MBBS in Abroad is a great option to Study MBBS because the fee structure of MCI approved universities is very affordable. Every year, more than 20,000 Indian students take admission in abroad to study MBBS.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
										Studying MBBS in Abroad is too expensive?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info"><Link to="/2020-mbbs-fee-structure-in-india-and-abroad">Studying MBBS in Abroad is affordable as compared to India</Link>. Many countries provide high-quality medical education at very reasonable fees.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">Are these Medical Universities/Colleges are approved by MCI?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">Yes, these <Link to="/mci-approved-medical-universities-in-abroad">Medical Universities/Colleges are approved by MCI</Link>. Indian students can study MBBS and come back to India after completing MBBS and will then get the license of Doctor to work in India after clearing the NEXT / MCI Test.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">Is the NEET required for an MBBS Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">Yes, the students need to qualify for the NEET exam conducted by the National Testing Agency.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">Which Country is best for MBBS abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">Most of the Indian students wish to pursue MBBS abroad. Countries all over the world develop the structural design of the course as per the criteria they deem as best suited. The top countries to study MBBS are Russia, Ukraine, Belize, Philippines, Armenia, France, Kazakhstan, and many more.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
										How is education for an MBBS abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">The students who want to study MBBS abroad can get the best quality education at a reasonable fee of 15-25 Lakhs. There is no requirement to pay any donation or capitation fees.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <b className="accordion__title">
										What is the eligibility to do MBBS in Abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
										<p className="service__info">The students who want to study MBBS abroad can get the best quality education at a reasonable fee of 15-25 Lakhs. There is no requirement to pay any donation or capitation fees.
										<ul>
										<li>The students should have aggregate 50% marks in physics, chemistry, and biology in the 12th standard.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students should be at least 17 years of age on or before 31st December of the admission year.</li>
										<li>The students need to qualify for the NEET entrance examination conducted by the (NTA) National Testing Agency.</li>
										<li>The students must not be more than 25 years of age.</li>
										</ul>
										</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <b className="accordion__title">
										What is the procedure for MBBS Admission in Abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
										<p className="service__info">The students who want to study MBBS abroad need a student visa. Therefore, the required documents for getting the Student’s Visa are as follows:
										<ul>
											<li>Original and photocopies of Passport.</li>
											<li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
											<li>Leaving certificate from the previous studying college.</li>
											<li>A medical checkup certificate is also essential</li>
											<li>Passport size photographs</li>
											<li>Birth certificate and other mandatory certificates must be submitted to the concerned authority.</li>
											<li>The students must clear the National Medical Admission Test.</li>
											<li>A code of conduct certificate must be submitted.</li>
											<li>The students must fill the online admission form with their accurate details</li>
											<li>A bank statement of the guardian should be submitted which should include the fee structure of the 1st year of the education.</li>
										</ul>
										</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  <b className="accordion__title">Why do I choose your MBBS Abroad Consultancy?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    <p className="service__info">We are one of the top MBBS Abroad Consultancy in India that offers professional consultancy services to aspiring students who wish to pursue a lucrative career in the field of medicine. We have a team of highly qualified and experienced MBBS consultants that aims at delivering the best results for your professional career. We provide in-depth, accurate information that you require to know about MBBS abroad.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  <b className="accordion__title">What is the Cost of Studying MBBS in Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <p className="service__info">The cost of studying MBBS in abroad would range anywhere between 15-25 Lakhs.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  <b className="accordion__title">
										Will COVID-19 affects MBBS Abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p className="service__info">We are keeping a close watch on COVID-19 effects on MBBS Abroad education. As per the current situation, countries that are famous for MBBS Abroad such as <Link to="/mbbs-in-ukraine">Ukraine</Link>, <Link to="/mbbs-in-russia">Russia</Link>, and <Link to="/mbbs-in-philippines">Philippines</Link> have minor effects and have contained the virus very well. According to the reviews from countries and universities, they will be accepting the admissions in MBBS in 2020 without any restrictions. MBBS abroad 2020 students will be traveling in October 2020 and by that time the complete situation will be under control. So, the students no need to worry, admissions in MBBS Abroad 2020 will remain unaffected and Destinex MBBS Abroad Consultancy in India will help you get admission in MBBS abroad smoothly and safely.</p>
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
                Top Medical Universities Of Russia, Ukraine, Philippines
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
                        <li>
                          <Link to={{ pathname:"https://www.facebook.com/pg/mbbsadmissionsinabroad/" }}><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                        </li>
                        <li>
                          <Link to={{ pathname:"https://twitter.com/_mbbsabroad" }}><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                        </li>
                        <li>
                          <Link to={{ pathname:"https://www.instagram.com/mbbsadmissionsinabroad/" }}><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                        </li>
                        <li>
                          <Link to={{ pathname:"https://www.youtube.com/channel/UCzTBawHuvJcQdGizhBgJPwA" }}><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
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

export default MbbsAdmissionLandingPage;