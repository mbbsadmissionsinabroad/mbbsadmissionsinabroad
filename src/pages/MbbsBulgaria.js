import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import BulgariaForm from "../components/ContactForm/BulgariaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsBulgaria() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Bulgaria for Indian Students at Top University',
    description: 'MBBS Admission in Bulgaria for Indian Students at MCI Approved Top University. ✓No Capitation & Donation, ✓Free Counseling ✓Top Universities ✓Low Fees ✓0% Consultancy Charges.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-bulgaria-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Bulgaria for Indian Students'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS Admission in Bulgaria for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-bulgaria.png"
          alt="Study In Bulgaria"
        />
      </div>
      <Container>
				<div>
					<p className="service__info">Bulgaria has gained popularity among medical students because of the low-cost <b>MBBS in Bulgaria</b> courses provided by the medical universities/colleges. The process of <Link to="/mbbs-admission-in-bulgaria-for-indian-students">MBBS admission in Bulgaria</Link> in the top medical university is easy. The students do not need to clear entrance exams for taking admission to medical colleges. The universities in Bulgaria offer quality education that meets the global standards & infrastructure in medical colleges is robust. The medical colleges in Bulgaria are approved by the MCI & WHO.</p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Bulgaria</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Bulgaria</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Bulgaria for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Bulgaria</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Bulgaria </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Bulgaria 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Bulgaria 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Bulgaria Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Bulgaria </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Bulgaria </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Bulgaria </a></li>
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
          <h2 className="service__sub__title">About Bulgaria</h2>
          <p className="service__info">
						Bulgaria is a beautiful mountainous country which is located in southeast Europe and occupies the eastern part of the Balkan Peninsula. It shares international borders with Greece, the Republic of Macedonia, Romania, Serbia, and Turkey. It has a temperate-continental climate with moderate features which is characteristic for Central Europe, with hot summers, long, cold winters and very distinct seasons. The temperatures at daytime vary from 0-5°C in the winter & 25-30°C in summer months.
					</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Bulgaria</h2>
					<p className="service__info">
					<b>MBBS in Bulgaria</b> is the best option because of the following reasons:
					<ul>
						<li>Bulgaria is one of the best destinations for MBBS students globally</li>
						<li>Bulgaria has several best medical universities that taught MBBS in English language</li>
						<li>MBBS fees in the medical universities in Bulgaria are affordable for Indian students</li>
						<li>There is no requirement to pay any donation or capitation fee for <b>MBBS admission in Bulgaria</b> The students do not need to give any entrance test for pursuing <b>MBBS in Bulgaria</b></li>
						<li>The best medical colleges in Bulgaria are approved by the MCI & acknowledged by WHO and FAIMER</li>
						<li>The cost of living Bulgaria is very reasonable for Indian students</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Bulgaria for Indian Students 2020
          </h3>
          <p className="service__info">
						Bulgaria is one of the best places for Indian students to pursue MBBS because of the following benefits:
						<ul>
							<li>Indian students who wish to make their career in fields of medicine can choose to pursue <b>MBBS in Bulgaria</b> because acquiring a seat in universities in Bulgaria is easier as compared to get a seat in India</li>
							<li>The best colleges in Bulgaria offer MBBS at low-cost & also provide hostel facilities</li>
							<li>Most of the students who pursue MBBS in universities in Bulgaria successfully clear the MCI screening tests</li>
							<li>The students can pursue MD Courses in the best universities in Bulgaria after completing their MBBS course</li>
							<li>The teaching hospitals affiliated to universities in Bulgaria boasts to have robust infrastructure and modern equipment</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Bulgaria
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Bulgaria</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 60% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take <b>MBBS Admission in Bulgaria</b>.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Bulgaria</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Bulgaria
          </h5>
          <p className="service__info">
					<ul>
						<li>Plovdiv Medical University</li>
						<li>Sofia Medical University</li>
						<li>Varna Medical University</li>
						<li>Pleven Medical University</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Bulgaria 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS admission in Bulgaria</b> are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Bulgaria 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Bulgaria</b> will range from 7500 USD to 9,000 USD per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Bulgaria Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Bulgaria:
            <ul>
							<li>The students must always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the medical College of Bulgaria within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Bulgaria
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek <b>MBBS admission in Bulgaria</b>. But Bulgaria has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people living in Bulgaria. The medical degrees awarded to students are recognized by WHO and the MCI which enables them to work practically anywhere in the world. The medical universities of Bulgaria also provide hostels to the Indian students for accommodation with Indian food.<br/><br/>
						The climate conditions in Bulgaria often become problematic for some students to adjust well. The local language in Bulgaria is Bulgarian so the students might feel the language as a barrier outside the university campus. But the coaching in the medical college or universities of Bulgaria is conducted in English.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Bulgaria
          </h6>
          <p className="service__info">The students need to fill up the online application form with the right details all the required documents. The students then will receive an offer letter from the university that they have applied to <Link to="/mbbs-admission-in-bulgaria-for-indian-students">study MBBS in Bulgaria</Link>. They need to pay the Fees for <b>MBBS admission in Bulgaria</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!</p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Bulgaria</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">How Safe is Bulgaria as a country?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">As a country, Bulgaria is very safe. It is advised not to move around alone at unknown places during the night time.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is studying MBBS in Bulgaria a good option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Yes, it is definitely a good option as the infrastructure is good and the fees is affordable</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How is it beneficial for Indian Students to study MBBS in Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">It is beneficial for Indian students to study MBBS in Bulgaria as the accommodation is good, kitchen facilities are wonderful and the standard of education is good with affordable fees structure.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a student study MBBS at affordable fees structure in Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The fees structure for MBBS is quite affordable with 3000 to 8000 Euro per year depending on the university.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for MBBS in Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">The admission requirement is passing 10+2 with Physics, Chemistry and Biology with 55% marks.<br/> The students should be at least 17 years old to take admission in Bulgarian Medical Colleges<br/>	The student should have studied English as a subject at the 10+2 level<br/>	The student should have passed the NEET exam</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Is learning Bulgarian compulsory?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">Although, the classes are held in English, it is advised to learn Bulgarian as it is the local language of the country.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">Which is the best College to study MBBS in Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">The best college to study MBBS is the university of Sofia and the University of Varna.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">What is the job prospect of doing MBBS from Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">After doing MBBS from Bulgaria, one can practice in the country of Bulgaria. The quality of medical education is high and the infrastructure at the hospital is also good. If someone wants to practice in India, he or she has to pass the MCI screening exam.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                <b className="accordion__title">How can New-Lyf education help you to study MBBS in Bulgaria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
									<p className="service__info">New-Lyf education can help you to choose the right medical college for you. It can also help you to choose the right accommodation. Apart from that, it can also help you with your future career decisions. Lastly, it can help you with your visa processing.</p>
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
          Apply To MBBS Universities In Bulgaria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BulgariaForm />
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

export default MbbsBulgaria;