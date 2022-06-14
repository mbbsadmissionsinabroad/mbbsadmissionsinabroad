import React from "react";
import Slider from "../components/Slider";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "../components/HomeComponent.css";
import HomeCarousel from "../components/HomeCarousel";
import { Link } from "react-router-dom";

function Home() {

  const meta = {
    title: 'MBBS Admission in Abroad - Overseas MBBS Consultants in India',
    description: 'MBBS Admission in Abroad, New-Lyf an Overseas MBBS Consultants in India. Study MBBS in Russia, Ukraine & Philippines at Low Cost from MCI Approved Universities.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Abroad'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <div>
      <Slider />
      <div className="home__component">
        <section className="abroad__title">
          <h2 className="head__title">Mbbs In Abroad</h2>
          <Container-Fluid>
            <Row>
              <Col md={6} xs={12}>
                <img className="banner__image" src="/assets/images/home-page-banner-1.png" alt="Home Banner" />
              </Col>
              <Col md={6} xs={12}>
                <div>
                  <h3 className="banner__sub_title">
                    "Don't Worry We Are Here To Assist You"
                  </h3>
                  <p>
                    Grab the top abroad education consultant to fulfill your
                    aspiration with:
                  </p>
                  <ul>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">1</strong>
                      </span>
                      Free Counseling
                    </li>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">2</strong>
                      </span>
                      Guaranteed Admission In Top Universities/Colleges
                    </li>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">3</strong>
                      </span>
                      Low Admission Fees
                    </li>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">4</strong>
                      </span>
                      100% Visa Clearance Assistance
                    </li>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">5</strong>
                      </span>
                      No Donation & Capitation Fees
                    </li>
                    <li>
                      <span class="fa-stack">
                        <span class="fa fa-circle-o fa-stack-2x"></span>
                        <strong class="fa-stack-1x">6</strong>
                      </span>
                      All Documentation Support
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container-Fluid>
        </section>
        <section className="banner__bg">
          <Container fluid>
            <Row noGutters={true}>
              <Col md={6} xs={12}>
                <div className="who__we_are">
                  <h3>Who We Are?</h3>
                  <p>With the core objective of rendering the best services and quality guidance to Indian students to fulfill their dream of <Link to="/">studying MBBS abroad</Link>, we are engaged in providing the professional study abroad consulting services since 2009. We are the one-stop and most trusted <Link to="/">MBBS study abroad consultant</Link> offering the complete admission support services round the clock. <br /> We have great experience in the education field and have a team of experts who help and guide Indian students to select the right course and country. You can always assure the highly satisfactory and professional services with us.</p>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div>
                  <Row>
                    <Col md={6} xs={12}>
                      <div className="four__col">
                        <span className="banner__icon">
                          <i class="fa fa-headphones banner__icon"></i>
                        </span>
                        <h3>Counselling</h3>
                        <p>
                          Reliable Counseling & Guidance to Select The Country
                          And The University Is The Most Important Service
                          Provided By New-Lyf
                        </p>
                      </div>
                    </Col>
                    <Col md={6} xs={12}>
                      <div className="four__col">
                        <span className="banner__icon">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </span>
                        <h3>Guideness</h3>
                        <p>
                          All Your Travel Requirements Such As Air Ticket, Visa,
                          Airport Pick up And Drop To The Hostel Is Taken Care
                          Of By New-Lyf
                        </p>
                      </div>
                    </Col>
                    <Col md={6} xs={12}>
                      <div className="four__col">
                        <span className="banner__icon">
                          <i class="fa fa-plane" aria-hidden="true"></i>
                        </span>
                        <h3>Travel</h3>
                        <p>
                          All Your Travel Requirements Such As Air Ticket, Visa,
                          Airport pick up And Drop To Hostel Is Taken Care Of By
                          New-Lyf
                        </p>
                      </div>
                    </Col>
                    <Col md={6} xs={12}>
                      <div className="four__col">
                        <span className="banner__icon">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                        <h3>Mission</h3>
                        <p>
                          We Aim To Reach The Scope of International Education
                          To All Aspiring Student Communities of India. We Vow
                          To Motivate And Guide Candidates To Realize Their
                          Dream.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <div>
            <h3 className="head__title">Our Services</h3>
            <p className="head__desc"> We provide complete study abroad admission solution services to Indian students in seeking admission to the popular course MBBS. We render Indian students to the best when it comes to <Link to="/">MBBS admission in abroad</Link> including MBBS in Philippines, Armenia, Belize, France, support services at an affordable consulting fee.
              <br />
              <br />
              We build careers with great opportunities, come and join us for a
              great future!
            </p>
          </div>
        </Container>
        <section className="home__info">
          <Container fluid>
            <Row noGutters={true}>
              <Col md={3}>
                <div>
                  <span className="info__icon">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </span>
                  <h3>13 Countries</h3>
                  <p>Medical Program At The Cost Of Private Medical College</p>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <span className="info__icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </span>
                  <h3>3000+</h3>
                  <p>Students Already Enrolled Through Us</p>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <span className="info__icon">
                    <i class="fa fa-handshake-o" aria-hidden="true"></i>
                  </span>
                  <h3>250+</h3>
                  <p>Universities Authorized Partners</p>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <span className="info__icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                  </span>
                  <h3>15+</h3>
                  <p>Years of Experience In Guiding & Assisting Students</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="study__mbbs">
          <Container>
            <h3 className="head__title">Why Study Mbbs In Abroad?</h3>
            <Row>
              <Col md={6}>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Admission in the top-ranked Universities/Colleges: </b> We assist you to obtain a seat in the top universities for studying medicine in the Philippines, Armenia, Belize, France, Kazakhstan, and many more. </p>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></b> Pursue MBBS in abroad with best MCI approved medical universities with very reasonable tuition fees structure and the expense of living is also low. </p>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> Top MCI & WHO approved medical universities: </b> Most of the medical universities are MCI and WHO accredited. The student will be eligible to practice in India or any other country after completing the MBBS course from abroad. </p>
              </Col>

              <Col md={6}>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> No entrance test: </b> There is no requirement of the entrance exam to take admission in the MBBS course abroad. Indian students only require fulfilling the eligibility criteria to study in abroad. </p>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> No Donation:</b> There is no donation and capitation fee for pursuing MBBS in abroad. </p>
                <p><b><i class="fa fa-chevron-circle-right" aria-hidden="true"></i> The medium of teaching is English: </b> The whole course of MBBS is conducted in English in spite of having their own official language. It is not mandatory for Indian students to learn the local language for classroom learning. </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <h3 className="head__title">How Can We Assist You</h3>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">Counseling Process</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">We have a dedicated team of experts who provide quality
                    guidance to students who want to fulfill their dream of
                    pursuing MBBS in abroad. Students can book their appointment
                    for the counseling process round the clock using our
                    helpline numbers, chat support or over the email.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">Course and Country selection</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">We have a highly experienced and professional team that
                    assists you to select the best course in the popular
                    university in the well-renowned country providing the best
                    MBBS course. So, leave your worries about the selection
                    process as we resolve your problem in minutes with proper
                    counseling.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">Admission guidance & process</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">The admission process can be tough for Indian students as
                    they are not familiar with it. We make the admission process
                    of MBBS abroad hassle-free by assisting you in preparing
                    applications and documents that need to be submitted.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">Visa assistance</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">A student visa is an essential part of taking admission in
                    the MBBS course abroad. We assist students in preparing the
                    required documents important for visa application and make
                    students comply with the complete visa eligibility for 100%
                    approvals.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">Travel and Forex assistance</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">Safe and secure travel is the hearty wish of each student
                    who travels abroad for the MBBS course. We help in booking
                    air tickets for the selected destination and make students’
                    stay and travel easy. We also help with the travel and forex
                    conversion without any additional price.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">Pre-Departure guidance</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">Travel abroad for pursuing MBBS includes specific terms and
                    conditions such as how much luggage allowed in flights,
                    check-in, boarding terminal, safe & secure travel. Our
                    experts assist you through the pre-departure procedures and
                    give all the information to have a safe and cheerful
                    journey.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </section>
        <section className="countries__list">
          <Container>
            <h3 className="head__title">List Of Countries</h3>
            <Row>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/russia-flag.jpg"
                    alt="russia flag"
                  />
                  <p className="countries__name">Study MBBS In Russia</p>
                    {/*                  <p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Russia from Top University.
                  </p> */}
                  <Link to="/mbbs-in-russia"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/ukraine-flag.png"
                    alt="ukraine flag"
                  />
                  <p className="countries__name">Study MBBS In Ukraine</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Ukraine from Top University.
                  </p> */}
                  <Link to="/mbbs-in-ukraine"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/georgia-flag.png"
                    alt="georgia flag"
                  />
                  <p className="countries__name">Study MBBS In Georgia</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Georgia from Top University.
                  </p> */}
                  <Link to="/mbbs-in-georgia"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/armenia-flag.png"
                    alt="armenia flag"
                  />
                  <p className="countries__name">Study MBBS In Armenia</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Armenia from Top University.
                  </p> */}
                  <Link to="/mbbs-in-armenia"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/kazakhstan-flag.png"
                    alt="kazakhstan flag"
                  />
                  <p className="countries__name">Study MBBS In Kazakhstan</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Kazakhstan from Top University.
                  </p> */}
                  <Link to="/mbbs-in-kazakhstan"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/philippines-flag.png"
                    alt="philippines flag"
                  />
                  <p className="countries__name">Study MBBS In Philippines</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Philippines from Top University.
                  </p> */}
                  <Link to="/mbbs-in-philippines"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/belize-flag.png"
                    alt="belize flag"
                  />
                  <p className="countries__name">Study MBBS In Belize</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Belize from Top University.
                  </p> */}
                  <Link to="/mbbs-in-belize"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/france-flag.png"
                    alt="france flag"
                  />
                  <p className="countries__name">Study MBBS In France</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    France from Top University.
                  </p> */}
                  <Link to="/mbbs-in-france"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="countries__info">
                  <img
                    className="countries__flag"
                    src="/assets/images/country-flag/kyrgyzstan-flag.png"
                    alt="kyrgystan flag"
                  />
                  <p className="countries__name">Study MBBS In Kyrgyzstan</p>
                  {/*<p className="countries__desc">
                    We provide Counselling, Guidance & Admission to MBBS in
                    Kyrgyzstan from Top University.
                  </p> */}
                  <Link to="/mbbs-in-kyrgyzstan"><button className="apply__now__btn">Apply Now!</button></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <h3 className="head__title">Founder’S Message</h3>
          <p className="head__desc">
            Hello! I am Dr. Vinnit Singh, a study abroad consultant working
            since 2009. I am specialized in MBBS Admission Abroad and guided
            several students regarding the best selection of university, course
            as well as the country. I have traveled to various universities and
            countries such as the Russia, Ukraine, Philippines, Armenia, Belize,
            France, and Kazakhstan for our MBBS students. <br />
            My main objective is to provide transparency in the MBBS abroad
            admission process and information. I want to make New-Lyf
            the most trusted MBBS abroad consultancy for Indian students. Feel
            free to contact me at our helpline numbers, chat support or drop a
            mail at <a href="mailto:info@mbbsadmissionsinabroad.com"> info@mbbsadmissionsinabroad.com </a>
            <br /> Apply today for Free Counseling and Start your Journey with us!!
          </p>
        </Container>
        <section>
          <Container>
            <h3 className="head__title">Testimonial</h3>
            <HomeCarousel />
          </Container>
        </section>
        <section>
          <Container>
            <h3 className="head__title">{(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} Mbbs Admission In Abroad</h3>
            <p className="head__desc"> MBBS is an extremely valued course and degree across the globe and it is totally worth to <Link to="/mci-approved-medical-universities-in-abroad">study MBBS in abroad with top MCI approved medical universities/colleges</Link> with a reasonable fee structure & without any donation and capitation fees for MBBS admission in different countries such as Russia, Ukraine, Belize, <Link to="/mbbs-in-philippines">Philippines</Link> , and many more. Abroad universities/colleges provide a high quality of education. Every year, more than 20,000 Indian students are taking <Link to="/">MBBS Admission in Abroad</Link>.</p>
          </Container>
        </section>
        <section>
          <Container>
            <h3 className="head__title">Mbbs Abroad Consultancy In India</h3>
            <p className="head__desc"> New-Lyf is one of the <Link to="/">best MBBS Abroad Consultancy in India</Link> that offers professional consultancy services to aspiring students who wish to pursue a lucrative career in the field of medicine. Most of the students want to obtain an immensely valued MBBS degree from some of the top-class universities abroad. <br /> If you also wish to pursue an MBBS degree from some prestigious educational college/university abroad, contact the reliable <Link to="/">New-Lyf MBBS abroad consultants in India</Link>. We have a team of highly qualified and experienced MBBS consultants that aims at delivering the best results for your professional MBBS career. <br /> Our counselors have more than 10 years of experience in the given field that provide in-depth, accurate information that you require to know about MBBS abroad. We suggest the best-suited MBBS program for you on the basis of your personal academic & financial profile, future career plans, and so more.</p>
          </Container>
        </section>
        <section className="consultancy__india">
          <Container>
            <h3 className="head__title">Mbbs Admission Consultancy In India</h3>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">Is it a Good Option to Study MBBS in Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body> <p className="service__info">MBBS in Abroad is a great option to Study MBBS because the fee structure of MCI approved universities is very affordable. Every year, more than 20,000 Indian students take admission in abroad to study MBBS.</p> </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">Studying MBBS in Abroad is too expensive?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">Studying MBBS in Abroad is affordable as compared to India.
                    Many countries provide high-quality medical education at
                    very reasonable fees.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">Are these Medical Universities/Colleges are approved by MCI?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">Yes, these Medical Universities/Colleges are approved by
                    MCI. Indian students can study MBBS and come back to India
                    after completing MBBS and will then get the license of
                    Doctor to work in India after clearing the NEXT / MCI Test.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">Is the NEET required for an MBBS Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">Yes, the students need to qualify for the NEET exam
                    conducted by the National Testing Agency.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">Which Country is best for MBBS abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">Most of the Indian students wish to pursue MBBS abroad.
                    Countries all over the world develop the structural design
                    of the course as per the criteria they deem as best suited.
                    The top countries to study MBBS are Russia, Ukraine, Belize,
                    Philippines, Armenia, France, Kazakhstan, and many more.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">How is education for an MBBS abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">The students who want to study MBBS abroad can get the best
                    quality education at a reasonable fee of 15-25 Lakhs. There
                    is no requirement to pay any donation or capitation fees.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <b className="accordion__title">What is the eligibility to do MBBS in Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p className="service__info">
                    The students who want to study MBBS abroad can get the best
                    quality education at a reasonable fee of 15-25 Lakhs. There
                    is no requirement to pay any donation or capitation fees.
                    <ul>
                      <li>
                        The students should have aggregate 50% marks in physics,
                        chemistry, and biology in the 12th standard.
                      </li>
                      <li>
                        The students should have English subject in their higher
                        secondary.
                      </li>
                      <li>
                        The students should be at least 17 years of age on or
                        before 31st December of the admission year.
                      </li>
                      <li>
                        The students need to qualify for the NEET entrance
                        examination conducted by the (NTA) National Testing
                        Agency.
                      </li>
                      <li>
                        The students must not be more than 25 years of age.
                      </li>
                    </ul>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <b className="accordion__title">What is the procedure for MBBS Admission in Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <p className="service__info">
                    The students who want to study MBBS abroad need a student
                    visa. Therefore, the required documents for getting the
                    Student’s Visa are as follows:
                    <ul>
                      <li>Original and photocopies of Passport.</li>
                      <li>
                        Original and one photocopy of mark sheets of both 10th &
                        12th standard.
                      </li>
                      <li>
                        Leaving certificate from the previous studying college.
                      </li>
                      <li>A medical checkup certificate is also essential</li>
                      <li>Passport size photographs</li>
                      <li>
                        Birth certificate and other mandatory certificates must
                        be submitted to the concerned authority.
                      </li>
                      <li>
                        The students must clear the National Medical Admission
                        Test.
                      </li>
                      <li>A code of conduct certificate must be submitted.</li>
                      <li>
                        The students must fill the online admission form with
                        their accurate details
                      </li>
                      <li>
                        A bank statement of the guardian should be submitted
                        which should include the fee structure of the 1st year
                        of the education.
                      </li>
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
                    <p className="service__info">We are one of the top MBBS Abroad Consultancy in India that
                    offers professional consultancy services to aspiring
                    students who wish to pursue a lucrative career in the field
                    of medicine. We have a team of highly qualified and
                    experienced MBBS consultants that aims at delivering the
                    best results for your professional career. We provide
                    in-depth, accurate information that you require to know
                    about MBBS abroad.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  <b className="accordion__title">What is the Cost of Studying MBBS in Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <p className="service__info">The cost of studying MBBS in abroad would range anywhere
                    between 15-25 Lakhs.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  <b className="accordion__title">Will COVID-19 affects MBBS Abroad?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p className="service__info">We are keeping a close watch on COVID-19 effects on MBBS
                    Abroad education. As per the current situation, countries
                    that are famous for MBBS Abroad such as Ukraine, Russia, and
                    Philippines have minor effects and have contained the virus
                    very well. According to the reviews from countries and
                    universities, they will be accepting the admissions in MBBS
                    in {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} without any restrictions. MBBS abroad {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} students
                    will be traveling in October {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} and by that time the
                    complete situation will be under control. So, the students
                    no need to worry, admissions in MBBS Abroad {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} will remain
                    unaffected and New-Lyf MBBS Abroad Consultancy in India
                    will help you get admission in MBBS abroad smoothly and
                    safely.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </section>
      </div>
    </div>
    </DocumentMeta>
  );
}

export default Home;
