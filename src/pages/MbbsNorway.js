import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import NorwayForm from "../components/ContactForm/NorwayForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsNorway() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Norway for Indian Students from MCI Approved University',
    description: 'MBBS Admission in Norway for Indian Students from MCI Approved University. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-norway-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Norway'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Norway</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-norway.png"
          alt="Study In Norway"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						<b>MBBS in Norway</b> is the best considerable destination to study a course of medicine for Indian students as it enables the students to have brighter 	career growth. It provides the magnificent theoretical as well as practical education which empowers the candidates to become successful practitioners.<br/><br/>
						<b>MBBS in Norway fees</b> is very affordable. The MBBS course offered to students in Norway is known as the MD program (Doctor of Medicine). More than 5000 foreign students are taking MBBS Admission in Norway every year. The best part of taking admission to <b>MBBS in Norway</b> is that the medium of instruction is English.

          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Norway</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Norway</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Norway for Indian Students 2021 - 2022</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Norway</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Norway </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Norway 2021 - 2022 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Norway 2021 - 2022 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Norway Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Norway </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Norway </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Norway </a></li>
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
          <h2 className="service__sub__title">About Norway</h2>
          <p className="service__info">Norway is well-known for its natural beauty, fjords, and mountains. It is situated in Northern Europe, the western portion of the Scandinavian Peninsula. It shares its land border with three countries which are Sweden, <Link to="/mbbs-in-russia">Russia</Link>, and <Link to="/mbbs-admission-in-finland-from-mci-approved-universities">Finland</Link>. It has a population of about 5 million & it is the second least densely populated country in Europe. It has warmer temperatures whereas summer temperatures of around 15 to 20 degrees Celsius and winter temperatures mostly above zero degree Celsius (+32 F).</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Norway</h2>
					<p className="service__info">
					<b>MBBS in Norway for Indian Students</b> is the best option because of the following reasons:
						<ul>
							<li>Travel to the Norway is much easier and even economical than traveling to other countries.</li>
							<li>A medical program provided by the Norway to their students is recognized worldwide.</li>
							<li>The language of coaching in Norway is also English.</li>
							<li>The students who have cleared <Link to="/mbbs-admission-in-norway-from-mci-approved-universities">MBBS in Norway</Link> can also practice in India.</li>
							<li>A unified problem-based learning approach offers better exposure to future medical practitioners.</li>
							<li>Advanced teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
							<li>Norway is extremely safe for Indian students and the environment is also safe.</li>
							<li>There is no donation or capitation fee required in these Norway universities/colleges.</li>
							<li>Norway MBBS Colleges/universities provide the best education at affordable fees.</li>
							<li>The cost of living is quite favorable for Indian students as there are excellent boarding and lodging provided by the university with the availability of Indian food for the students.</li>
						</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Norway for Indian Students 2021 - 2022
          </h3>
          <p className="service__info">
						Norway is the best place for Indian students to study MBBS because of the following benefits:
						<ul>
							<li>It is easy to get admission to <b>MBBS in Norway</b> because of the simple procedure for Indian students.</li>
							<li>After completing <b>MBBS in Norway</b>, students will get the best placement in India as well.</li>
							<li>Norway is safe for Indian students and they get everything for their survival.</li>
							<li>The students can fulfill their dream of studying <b>MBBS in Norway</b> with the minimum expense.</li>
							<li>The local language of Norway is Norwegian but the whole MBBS course is conducted in the English language.</li>
							<li>Modern teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
							<li>There is no requirement of any entrance exam, and donation, & capitation fees to take MBBS admission in Norway.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Norway
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Norway</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to Norway Medical College/ Universities.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Norway	</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Norway
          </h5>
          <p className="service__info">
					<ul>
						<li>University of Oslo.</li>
						<li>University of Bergen.</li>
						<li>Norwegian University of Science and Technology.</li>
						<li>University of Tromsø</li>
						<li>Norwegian School of Sport Sciences.</li>
						<li>Oslo & Akershus University College.</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Norway 2021 - 2022
          </h6>
          <p className="service__info">
						The necessary documents for taking MBBS Admission in Norway are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to Norway Medical College.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Norway 2021 - 2022
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Norway</b> will range anywhere around 4200 Euros per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Norway Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Norway:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Norway Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Norway
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to Norway Medical Colleges/universities. But Norway has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people of Norway. Norway Medical Universities/colleges provide hostels to the Indian students for accommodation with Indian food.<br/><br/>
						The climate conditions in Norway often become problematic for some students to adjust well. The local language in Norway is Norwegian so the students might feel the language as a barrier outside the university campus. But the coaching in Norway Medical College or Universities is conducted in English.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Norway
          </h6>
          <p className="service__info">
					The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Norway</b>. They need to pay the <b>MBBS in Norway fees</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!	
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Norway</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Norway for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Most of the Norway Medical College provides the best quality of education. The best Norway colleges for Indian Students are as follows:
										<ul>
											<li>University of Oslo.</li>
											<li>University of Bergen.</li>
											<li>Norwegian University of Science and Technology.</li>
											<li>University of Tromsø</li>
											<li>Norwegian School of Sport Sciences.</li>
											<li>Oslo & Akershus University College.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Norway a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Norway is one of the best options to study MBBS. <b>MBBS in Norway fee</b> is affordable as compared to other countries.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Norway for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to pursue MBBS in Norway can easily get Indian food in hostels which makes them comfortable in adjusting to this country. <b>MBBS in Norway</b> is recognized worldwide.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Norway at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Yes, a medical student can study <b>MBBS in Norway</b> at affordable fee structure because it is quite worthy & cost-effective for Indian students to pursue medicine course.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Norway?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to Norway Medical College/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Norway</b>.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Norway 2021 - 2022?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Norway</b> 2021 - 2022 is 50 percentile.</p>
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
          Apply To MBBS Universities In Norway
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NorwayForm />
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

export default MbbsNorway;