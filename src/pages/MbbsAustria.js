import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import AustriaForm from "../components/ContactForm/AustriaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsAustria() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Austria for Indian Students at MCI Approved College',
    description: 'MBBS Admission in Austria for Indian Students at MCI Approved College. Find top university, Eligibility Criteria, Fee Structure, Admission Process, & Visa Clearance.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-austria-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Austria'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Austria</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-in-austria.png"
          alt="Study In Austria"
        />
      </div>
      <Container>
        <div>
					<p className="service__info">
						<b>MBBS in Austria</b> is one of the best destinations to study a course of medicine for Indian students because of providing the magnificent theoretical as well as practical education. Every year, a large number of students take admission in <b>Austria medical college</b> because they are approved by MCI which enables the students to practice in India after completing the <Link to="/mbbs-admission-in-austria-for-indian-students">MBBS in Austria</Link>.<br/><br/>
						Studying <b>MBBS in Austria</b> is a golden opportunity for Indian students because of world-class faculty and innovative teaching methods. <b>MBBS in Austria fees</b> is very affordable which is beneficial for Indian students to study medicine in one of the beautiful country. The local language in Austria is German but the medium of coaching MBBS in Austria medical college is English. The duration of <b>MBBS in Austria</b> is 6 years.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Austria</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Austria</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Austria for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Austria</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Austria </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Austria 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Austria 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Austria Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Austria </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Austria </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Austria </a></li>
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
          <h2 className="service__sub__title">About Austria</h2>
          <p className="service__info">Austria is a landlocked country in Central Europe that shares its borders with Germany, Czech Republic, Italy, Slovakia, Hungary, Slovenia, Liechtenstein, and Switzerland. It is a mostly mountainous country with the Alps that covers the western & the southern parts and mostly gentle hills in the eastern & northern parts. The capital of Austria is Vienna. It has a temperate and alpine climate where summers are warm with occasional rainfall & cool nights. The average temperature in summer ranges between 20°C & 35°C and in winter temperature ranges between 1°C & 4°C.</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Austria</h2>
					<p className="service__info">
					<b>MBBS in Austria for Indian Students</b> is the best option because of the following reasons:
						<ul>
							<li><b>Austria medical college</b> provides high quality education which is according to the western standard curriculum.</li>
							<li><b>Austria medical college</b>/universities ranked among the top 500 universities in the world.</li>
							<li>MBBS degree from the <b>Austria medical college</b> is recognized by the MCI (Medical Council of India)</li>
							<li>Travel to the Austria is much easier and even economical than traveling to other countries.</li>
							<li>The local language in Austria is German but there are top medical colleges that provide MBBS education in English language.</li>
							<li>The cost of living is quite favorable for Indian students as there are excellent boarding and lodging provided by <b>Austria medical college</b> with the availability of Indian food.</li>
							<li>Austria is extremely safe for Indian students and the environment is also safe.</li>
							<li>There is no requirement to pay any donation fee or capitation fee for taking admission to <b>MBBS in Austria</b>.</li>
						</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Austria for Indian Students 2020
          </h3>
          <p className="service__info">
						Austria is the best place for Indian students to study MBBS because of the following benefits:
						<ul>
							<li>It is easy to get MBBS admission in <b>Austria medical college</b> because of the simple procedure for Indian students.</li>
							<li>There is no requirement to clear any English proficiency test for pursuing <b>MBBS in Austria</b>.</li>
							<li>The MBBS degree acquired from any <b>Austria medical college</b> is valid and these degrees are approved by the Medical Council of India.</li>
							<li><b>MBBS in Austria fees</b> is reasonable as compared to Indian Medical Colleges.</li>
							<li><b>MBBS in Austria</b> integrate theoretical and practical learning in such a way that students are taught in the most effective way possible.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Austria
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Austria</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>They should be at least 17 years of age to take admission to <b>Austria medical college</b> / Universities.</li>
							<li>They should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Austria</b>.</li>
							<li>They should have English subject in their higher secondary.</li>
							<li>They must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Austria
          </h5>
          <p className="service__info">
					<ul>
						<li>Medical University of Vienna.</li>
						<li>Medical University of Graz.</li>
						<li>Medical University of Innsbruck.</li>
						<li>Paracelsus Private Medical University.</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Austria 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking admission to <b>MBBS in Austria</b> are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to <b>Austria medical college</b>.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Austria 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Austria</b> will range anywhere around 726 Euros per semester.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Austria Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Austria:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the <b>Austria Medical College</b> within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Austria
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to <b>MBBS in Austria</b>. But Austria has more benefits as compared to other countries with very fewer cons:
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people of Austria. The medical degrees awarded to students are recognized by the MCI which enables them to work practically anywhere in the world. Each MCI approved <b>Austria Medical college</b> provide hostel accommodation to the Indian students with Indian food.
						The climate conditions in Austria often become problematic for some students to adjust well. The local language in Austria is German so the students might feel the language as a barrier outside the university campus.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Austria
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Austria</b>. They need to pay the <b>MBBS in Austria fees</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Austria</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Austria for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Almost every <b>Austria Medical College</b> provides the best quality of education. The best <b>Austria Medical College</b> for Indian Students is as follows:
										<ol>
											<li>Medical University of Vienna.</li>
											<li>Medical University of Graz.</li>
											<li>Medical University of Innsbruck.</li>
											<li>Paracelsus Private Medical University.</li>
										</ol>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Austria a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Studying <b>MBBS in Austria</b> is one of the good options because Austria is well known for its quality and affordable medical education and Austria has one of the best Medical colleges.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Austria for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Indian Medical students can easily pursue <b>MBBS in Austria</b> as they can get hostels accommodation with Indian food which makes them comfortable in adjusting to this beautiful country. <b>MBBS in Austria</b> is recognized worldwide as the each <b>Austria Medical College</b> is acknowledged by the MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Austria at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The tuition fee in <b>Austria Medical College</b> is reasonable so, it is quite worthy & cost-effective for Indian students to study MBBS in Austria.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Austria?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to <b>Austria Medical College</b>/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Austria</b>.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Austria 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Austria</b> 2020 is 50 percentile.</p>
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
          Apply To MBBS Universities In Austria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AustriaForm />
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

export default MbbsAustria;