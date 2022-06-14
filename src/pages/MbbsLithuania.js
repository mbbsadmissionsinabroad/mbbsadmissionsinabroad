import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import LithuaniaForm from "../components/ContactForm/LithuaniaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsLithuania() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Lithuania for Indian Students at MCI Approved Universities',
    description: 'MBBS Admission in Lithuania for Indian Students at MCI Approved Universities. The students pursuing MBBS in Lithuania can apply for USMLE or PLAB exams for practicing MBBS.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-lithuania',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Lithuania for Indian Students'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS Admission in Lithuania for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-lithuania.png"
          alt="Study In Lithuania"
        />
      </div>
      <Container>
				<div>
					<p className="service__info">Lithuania is one of the best destinations for international students who are seeking <Link to="mbbs-admission-in-lithuania">MBBS admission in Lithuania</Link> at affordable fees. The medical colleges/universities in Lithuania are accredited by the WHO and MCI. The students pursuing <Link to="mbbs-admission-in-lithuania">MBBS in Lithuania</Link> can apply for USMLE or PLAB exams for practicing MBBS. The total duration of <b>MBBS in Lithuania</b> is five years. The medium of coaching MBBS course in medical colleges/universities is the English language. The students get an advanced training program as conducted by the medical universities of Lithuania.</p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Lithuania</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Lithuania</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Lithuania for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Lithuania</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Lithuania </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Lithuania Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Lithuania </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Lithuania </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Lithuania </a></li>
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
          <h2 className="service__sub__title">About Lithuania</h2>
          <p className="service__info">
						Lithuania is a beautiful country which is situated in northeastern Europe and one of the largest Baltic States in Southern Europe. It is bordered by the Belarus, <Link to="/mbbs-admission-in-poland-for-indian-students">Poland</Link>, <Link to="/mbbs-in-russia">Russia</Link> and Latvia. The local language in Lithuania is Lithuanian but English & Russian is the commonly taught language. It has a transitional and continental climate. The rainfall exceeds up to 800 mm per annum. It has a great nature that cherishes the heart of each visitor.
					</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Lithuania</h2>
					<p className="service__info">
					<b>MBBS in Lithuania</b> is the best option because of the following reasons:
					<ul>
						<li>The medical universities in Lithuania provide high-quality education to medical students.</li>
						<li><b>MBBS in Lithuania</b> has reasonable tuition fees.</li>
						<li>There is no requirement of any entrance exam for taking <b>MBBS Admission in Lithuania</b>.</li>
						<li>After completing MBBS course, the students will get MBBS degree which is globally accepted and recognized by the MCI.</li>
						<li>The medical universities in Lithuania have an affiliation with the hospitals that provide paid internships to medical students.</li>
						<li><b>MBBS in Lithuania</b> mainly focuses on offering practical exposure to medical students.</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Lithuania for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h3>
          <p className="service__info">
						Lithuania is one of the best places for Indian students to pursue MBBS because of the following benefits:
						<ul>
							<li>Travel to Lithuania is much easier and even economical than traveling to other countries.</li>
							<li>The students can also get Indian food in Lithuania and the climate is suitable for Indian students</li>
							<li>Modern teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
							<li>The cost of living and the tuition fee of Lithuania MBBS Colleges is quite low and affordable for Indian students.</li>
							<li>The MBBS degree provided by Lithuania medical colleges is renowned globally and has great value.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Lithuania
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Lithuania</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 60% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take <b>MBBS Admission in Lithuania</b>.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Lithuania</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Lithuania
          </h5>
          <p className="service__info">
					<ul>
						<li>Lithuanian University of Health Science Kaunas</li>
						<li>Vilnius University</li>
						<li>Kaunas University of Technology</li>
						<li>Vytautas Magnus University</li>
						<li>Klaipeda University</li>
						<li>Siauliai University</li>
						<li>Mykolas Romeris University</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS admission in Lithuania</b> are the following:
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
						MBBS Fees in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Lithuania</b> will range from 4.29 lakhs to 10.5 lakhs per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Lithuania Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Lithuania:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the <b>Lithuania Medical College</b> within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Lithuania
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek <b>MBBS Admission in Lithuania</b>. But Lithuania has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people living in Lithuania. The medical degrees awarded to students are recognized by the MCI which enables them to work practically anywhere in the world. Indian students also get hostel accommodation with Indian food.<br/><br/>
						The climate conditions in Lithuania often become problematic for some students to adjust well. The local language in Lithuania is Lithuanian so the students might feel the language as a barrier outside the university campus.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Lithuania
          </h6>
          <p className="service__info">The students need to fill up the online application form with the right details all the required documents. The students then will receive an offer letter from the university that they have applied to study <b>MBBS in Lithuania</b>. They need to pay the fees for taking <b>MBBS admission in Lithuania</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!</p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Lithuania</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">How Safe is Lithuania as a country?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">As a country, Lithuania is very safe. It is one of the safest countries in Europe with a low crime rate in the European Union. It is also one of the favorite tourist destinations.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Lithuania a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Yes, it is definitely a good option as the infrastructure is good and the fees is affordable</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How is it beneficial for Indian Students to study MBBS in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">It is beneficial for Indian students to study MBBS in Lithuania as the accommodation is good, kitchen facilities are there and the standard of education is also very good with affordable fees structure.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a student study MBBS at affordable fees structure in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The fees structure for MBBS is quite affordable with INR 5 lakhs to 10 lakhs per year depending on the university.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">The admission requirement is passing 10+2 with Physics, Chemistry and Biology with 60% marks.<br/> The students should be at least 17 years old to take admission in Lithuanian Medical Colleges<br/> The student should have studied English as a subject at the 10+2 level</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Are hostel accommodations available?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">Hostel accommodation is available for the Indian Students who are studying MBBS. There are both non sharing and sharing option available to the students. Rooms are comfortable with a common kitchen space. Bathrooms are there attached with the rooms as well as in each floor. The charge of accommodation is generally taken along with the tuition fees.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">Is NEET required for studying MBBS in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">The NEET score does not have a major impact in the admission decision in the medical colleges in Lithuania. However, it is advised that the student should have the passing score of NEET before applying to any good medical college in Lithuania.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">Is learning Lithuanian compulsory?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">Although, the classes are held in English, it is advised to learn Lithuanian/Russian as it is the local language of the country.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                <b className="accordion__title">Which is the best College to study MBBS in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
									<p className="service__info">The best college to study MBBS is Lithuanian University of Health Sciences.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                <b className="accordion__title">What is the job prospect of doing MBBS from Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
									<p className="service__info">After doing MBBS from Lithuania, one can practice in the country of Lithuania. If someone wants to come back to India, he has to pass the MCI screening test.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10">
                <b className="accordion__title">How can New-Lyf education help you to study MBBS in Lithuania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
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
          Apply To MBBS Universities In Lithuania
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LithuaniaForm />
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

export default MbbsLithuania;