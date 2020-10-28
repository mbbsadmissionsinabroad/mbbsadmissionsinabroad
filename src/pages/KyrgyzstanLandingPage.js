import React from 'react';
import "./LandingPage.css";
import DocumentMeta from "react-document-meta";
import { Container, Row, Col, Accordion, Card, Table } from "react-bootstrap";
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

function KyrgyzstanLandingPage() {
	const meta = {
    title: "Kyrgyzstan Landing Page",
    description: "Kyrgyzstan Landing Page",
    canonical: "https://www.mbbsadmissionsinabroad.com/kyrgyzstan-landing-page",
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
          <h2 className="landing__page__title_1">MBBS Admission In Kyrgyzstan</h2>
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
            <h3 className="landing__page__title_3">
              "Don't Worry We Are Here To Assist You"
            </h3>
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
                        Guaranteed Admission
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
            <h4 className="landing__page__title">Testimonials</h4>
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
              <h5 className="landing__page__title">About International School of Medicine, Bishkek</h5>
							<Row>
								<Col md={12} lg={3}>
										<img className="ism__logo" src="assets/images/ism-logo.jpg" alt="Logo" />
								</Col>
								<Col md={12} lg={9}>
									<p className="landing__page__desc_1">The International School of Medicine as a structural division of IUK was established in 2003. The main foundation for establishment of the school was a strategy of reforming Kyrgyz education system and increasing competitiveness of domestic universities, which resulted in the main emphasis of ISM administration and faculty being focused on the creation of a modern dynamic educational institution that can provide high quality training and has competitive potentials in the medical education market. Currently, the International School of Medicine is a modern university with a comprehensive infrastructure, and experienced faculty members that are nationally and some of them worldwide recognized specialists in different areas of medicine, professional health organizations and agencies.</p>
								</Col>
							</Row>
            </div>
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
                  src="assets/images/asea-logo.jpg"
                  alt="Logo"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <h6 className="landing__page__title">FEE STRUCTURE</h6>
            <div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Year</th>
												<th>Semester wise fee acceptable( In USD )</th>
												<th>Annual Fee ( In USD )</th>
												<th>Medical Assistence ( In USD )</th>
												<th>Refundable Security ( In USD )</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1st Year</td>
												<td>4,250</td>
												<td>6,500</td>
												<td>100</td>
												<td>100</td>
											</tr>
											<tr>
												<td>2nd Year</td>
												<td>2,250</td>
												<td>4,500</td>
												<td>100</td>
												<td>N/A</td>
											</tr>
											<tr>
												<td>3rd Year</td>
												<td>2,250</td>
												<td>4,500</td>
												<td>100</td>
												<td>N/A</td>
											</tr>
											<tr>
												<td>4th Year</td>
												<td>2,250</td>
												<td>4,500</td>
												<td>100</td>
												<td>N/A</td>
											</tr>
											<tr>
												<td>5th Year</td>
												<td>2,250</td>
												<td>4,500</td>
												<td>100</td>
												<td>N/A</td>
											</tr>
											<tr>
												<td colSpan="3"><span className="asterik__sym">*</span> Hostel, Mess and Transport Fee (USD)</td>
												<td colSpan="2">2,050</td>
											</tr>
											<tr>
												<td colSpan="3"><span className="asterik__sym">**</span> Processing Fee (INR)</td>
												<td colSpan="2">1,25,000</td>
											</tr>
										</tbody>
									</Table>
								</div>
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
                  <b className="accordion__title">Is MBBS in Kyrgyzstan good?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">Yes, doing MBBS in Kyrgyzstan is an excellent option for an Indian student. The education is very low of cost and feasible. They also provide scholarships, good accommodation and canteen facilities to the students. The Kyrgyzstan medical universities are accredited by the top medical councils like WHO, FAIMER, MCI and UNESCO. It is also easy to apply and enroll. And there are myriad job opportunities for a medical student graduated from a medical college in Kyrgyzstan</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">How much does cost MBBS in Kyrgyzstan?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">The tuition fee varies from 3300 USD to 6000 USD per annum with very less accommodation fees.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">Is NEET required for MBBS in Kyrgyzstan?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">Yes, NEET qualification is required for an Indian student enrolling for MBBS in Kyrgyzstan.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">How many years in MBBS in Kyrgyzstan?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">The course duration is 6 years i.e. 5 years+1 year of internship.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
									<b className="accordion__title">Which is the best MBBS College in Kyrgyzstan for Indian Students?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
										<p className="service__info">
											<ul>
												<li>Osh State University</li>
												<li>Jalalabad State Medical University</li>
												<li>Kyrgyz State Medical Academy</li>
												<li>Asian Medical Institute</li>
												<li>International School of Medicine</li>
											</ul>
										</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">What are the career options for an Indian student doing an MBBS in Kyrgyzstan?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">After the students have completed their MBBS course in Kyrgyzstan they can practice in Kyrgyzstan itself. They can join the private or government sector for a job. Another option is the student returning to India and practicing in India.</p>
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
            <p className="free__cons__desc"> Since 2009 We've Been Partnering With <span style={{ color: "red" }}>
                Top Medical Universities Of Kyrgyzstan </span> And Also Assisted More Than <span style={{ color: "red" }}>1500+ Students For Admission</span> Till Now..
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

export default KyrgyzstanLandingPage;