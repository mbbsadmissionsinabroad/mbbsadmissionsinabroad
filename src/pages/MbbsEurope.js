import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import EuropeForm from "../components/ContactForm/EuropeForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsEurope() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Europe from MCI Approved Universities',
    description: 'MBBS Admission in Europe from MCI Approved Universities. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-europe-from-mci-approved-university',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Europe'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Europe</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-europe.png"
          alt="Study In Europe"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						Europe is one of the preferred destinations to study MBBS. Most of the students <b>Study MBBS in Europe</b> as all the universities/colleges provide high-quality education at affordable fees. The professors at Europe Medical colleges/universities are experts at their subjects.<br/><br/>
						Every year, a huge number of students take MBBS admission in Europe because all the universities/colleges are approved by MCI which enables the students to practice in India after completing the <b>MBBS in Europe</b>. The students can also pursue a PG degree from India if they want but only after clearing the MCI screening test. The duration of <b>MBBS in Europe</b> in English medium is 6 years.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Europe</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Europe</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Europe for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Europe</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Europe </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Europe 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Europe 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Europe Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Europe </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Europe </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Europe </a></li>
          </ul>

          {/* POP UP Btn */}

          <Button className="popup__btn" onClick={() => setModalShow(true)}>
            Click Here To Apply
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          {/* POP UP Btn Ends */}
        </div>

        <div id="about_sec">
          <h2 className="service__sub__title">About Europe</h2>
          <p className="service__info">
						Europe is the second smallest continent in size and the third largest in population. Europe is located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. The European continent includes 50 countries and of the European countries such as <b>France, <Link to="/mbbs-in-ukraine">Ukraine</Link>, <Link to="/mbbs-in-georgia">Georgia</Link>, Armenia, Germany, Netherlands, Sweden, Denmark, Norway</b>, 27 nations belong to the European Union which is a political and economic union. The climate in Europe is moderate & suitable for the students coming from the countries. The overall atmosphere in the different seasons is temperate.
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Europe</h2>
          <p className="service__info">
						<b>MBBS in Europe for Indian Students</b> is the best option because of the following reasons:
						<ul>
							<li>University in Europe offer top-class education.</li>
							<li><b>MBBS Fees in Europe</b> is less than private medical universities in India. The medium of instruction in each <b>Europe Medical College</b> or university is English.</li>
							<li>The cost of living in Europe is low. The top-rated MBBS universities/colleges provide reasonable accommodation as well as Indian food.</li>
							<li>MBBS degree from the <b>Europe Medical College</b> is recognized by the MCI (Medical Council of India), UNESCO, and WHO.</li>
							<li><b>Europe Medical College</b>/universities are well-known for providing great state-of-the-art-infrastructure which makes the Study <b>MBBS in Europe</b> more productive and has a better future.</li>
							<li>The students can easily come back to India and get a license after clearing the MCI screening test</li>
							<li>The students can also stay in Europe and continue their career here</li>
							<li><b>Europe Medical College</b> offers additional support for the MD degree</li>
							<li>The students get to learn about a new culture and study <b>MBBS in Europe</b> together</li>
						</ul>
          </p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Europe for Indian Students 2020
          </h3>
          <p className="service__info">
						Europe is the best place for Indian students to study MBBS because there is no entrance exam or donation required for getting a seat in the <b>Europe Medical College.</b>
							<ul>
								<li>Travel to Europe is much easier and even economical than traveling to other countries.</li>
								<li><b>MBBS Fees in Europe</b> is very reasonable with a high quality of education</li>
								<li>The state of the art infrastructure and world-class faculty is perfect for <b>Studying MBBS in Europe for Indian Students</b></li>
								<li><b>Europe Medical College</b> provides globally accepted MBBS degrees and they are recognized by MCI and WHO</li>
								<li>There is no requirement for any donations and capitation fees for <b>MBBS Admission in Europe</b></li>
								<li>The students can also get Indian food in Europe and the climate is suitable for Indian students.</li>
								<li>Europe is extremely safe for Indian students and the environment is also safe.</li>
								<li>The medium of instruction in <b>Europe Medical College</b> / Universities is English and European.</li>
							</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Europe
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Europe</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to <b>Europe Medical College</b>/ Universities.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Europe</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Europe
          </h5>
          <p className="service__info">
						<ul>
							<li>Ivane Javakhishvili Tbilisi Medical University</li>
							<li>Taras Shevchenko National University</li>
							<li>Bogomolets National Medical University</li>
							<li>Lviv National Medical University</li>
							<li>Gdansk Medical University</li>
							<li>Belarussian State Medical University</li>
							<li>Vitebsk State Medical University</li>
							<li>Kyiv Medical University of UAFM</li>
							<li>O.O. Bogomolets National Medical University</li>
							<li>Zaporozhye State Medical University</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Europe 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <Link to="/mbbs-admission-in-europe-from-mci-approved-univeristy">MBBS Admission in Europe</Link> are the following:
						<ul>
							<li>A complete filled application form with all accurate details.</li>
							<li>Original and photocopies of Passport.</li>
							<li>Birth certificates and other mandatory certificates must be submitted to the concerned authority.</li>
							<li>Passport size (3cmX4cm) photographs.</li>
							<li>Original and a photocopy of mark sheets of both 10th & 12th standard</li>
							<li>A scorecard of NEFT (if required)</li>
							<li>Transfer certificate from the previous school</li>
							<li>Leaving certificate from the concerned school</li>
							<li>A certificate of code of conduct must be submitted</li>
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to Europe Medical College.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Europe 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Europe</b> will range from 3,200 USD to 6,000 USD per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Europe Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students that take <b>MBBS admission in Europe:</b>
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Europe Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Europe
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to <b>Europe Medical College</b>. But Europe has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the Europeans. The medical degrees awarded to students are recognized by <b>WHO, UNESCO, and the MCI</b> which enables them to work practically anywhere in the world. Each <Link to="/mbbs-admission-in-europe-from-mci-approved-univeristy">MCI approved Europe Medical Universities</Link> provide hostels to the Indian students for accommodation with Indian food.<br/><br/>
						The climate conditions in Europe often become problematic for some students to adjust well. The local language in Europe is European so the students might feel the language as a barrier outside the university campus. But the coaching in <b>Europe Medical College</b> or Universities is conducted in English.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Europe
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Europe</b>. They need to pay the MBBS Fees in Europe and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Europe</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best option to study MBBS in Europe for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Almost every Europe Medical College provides the best quality of education. The best <b>Europe Medical College</b> for Indian Students is as follows:
										<ul>
											<li>Ivane Javakhishvili Tbilisi Medical University</li>
											<li>Taras Shevchenko National University</li>
											<li>Bogomolets National Medical University</li>
											<li>Lviv National Medical University</li>
											<li>Gdansk Medical University</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Europe a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Yes, pursuing <b>MBBS in Europe</b> is truly a rewarding investment of time, finance, and career acquisition. Europe is well known for its quality and affordable medical education. Moreover, Europe has one of the best Medical Universities/colleges.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Europe for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to pursue <b>MBBS in Europe</b> can easily get Indian food in hostels which makes them comfortable in adjusting to this country. MBBS in Europe is recognized worldwide as the <b>Europe Medical College</b> are acknowledged by WHO, UNESCO, and MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Europe at an affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info"><b>Europe Medical College</b> charges reasonable tuition fees from international students. So, it is quite worthy & cost-effective for Indian students to study MBBS in Europe.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Europe?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
										<ul>
											<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
											<li>The students should be at least 17 years of age to take admission to Europe Medical College/ Universities.</li>
											<li>The students should also qualify for the NEET exam with passing marks to apply for MBBS in Europe.</li>
											<li>The students should have English subject in their higher secondary.</li>
											<li>The students must not be more than 25 years of age.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Which of the European countries is good for MBBS?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info"><b>MBBS in Europe</b> has become the best option for Indian students. European countries such as Russia, Georgia, Poland, Germany, and many more are well-known for providing top-class medical education.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
						<Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Europe 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Europe</b> 2020 is 50 percentile.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
				</div>
				<div id="testimonials">
          <h2 className="service__sub__title">Testimonials</h2>
          <HomeCarousel />
				</div>
      </Container>
    </section>
    </DocumentMeta>
  );
}

/* POP UP Section Begins */

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Apply To MBBS Universities In Europe
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EuropeForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="popup__btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

/* POP UP Section Ends */

export default MbbsEurope;