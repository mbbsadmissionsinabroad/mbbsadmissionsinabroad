import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import DenmarkForm from "../components/ContactForm/DenmarkForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsDenmark() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Denmark for Indian Students from MCI Approved University',
    description: 'MBBS Admission in Denmark for Indian Students from MCI Approved University. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-Denmark-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Denmark'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Denmark</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-denmark.png"
          alt="Study In Denmark"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						Denmark is one of the most popular international study destinations in Europe because of its low study costs with a high-quality education, and innovative teaching methods. International students pursue <Link to="/mbbs-admission-in-denmark-for-indian-students">MBBS in Denmark</Link> due to its great standard of living and the large variety of study subjects available at Danish universities.<br/><br/>
						Denmark provides an MBBS degree program as MD which is equivalent to MBBS in India. It is a golden opportunity for students to study <b>MBBS in Denmark</b> at affordable prices. The students can also pursue a PG degree from India if they want but only after clearing the MCI screening test. The medium of instruction in Denmark colleges/universities is English.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Denmark</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Denmark</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Denmark for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Denmark</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Denmark </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Denmark 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Denmark 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Denmark Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Denmark </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Denmark </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Denmark </a></li>
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
          <h2 className="service__sub__title">About Denmark</h2>
          <p className="service__info">Denmark is part of Scandinavia and located in northern Europe. It comprises of the Jutland peninsula, the larger islands of Zealand, Funen, and Lolland-Falster. Its capital is Copenhagen which is home to royal palaces. It is bordered to the west by the North Sea, & its islands are located on the sea lane from the Baltic to the main oceans of the world and the trade route from the Nordic countries to Central Europe. It has a temperate climate with mild winters. The temperature in winters is 1.5 °C (34.7 °F) and cool summers with a mean temperature of 17.2 °C (63.0 °F).</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Denmark</h2>
					<p className="service__info">
					<b>MBBS in Denmark for Indian Students</b> is the best option because of the following reasons:
						<ul>
							<li>Denmark MBBS College offers several specialization courses in the medical sector.</li>
							<li>While studying <b>MBBS in Denmark</b>, the Medical University provides several clinical and Post Graduate programs.</li>
							<li>There is no requirement of any entrance tests for taking MBBS admission in Denmark</li>
							<li>Denmark is considered as a safe country for Indian medical students.</li>
							<li>The cost of living in Denmark is economical and the <b>Denmark MBBS College fee</b> is very affordable.</li>
							<li>The hospitals associated with the <b>Denmark MBBS University</b> provide the best quality health care and utilize the latest medical technologies and instruments.</li>
							<li>Denmark Medical Universities/colleges integrate theoretical and practical learning in such a way that students are taught in the most effective way possible.</li>
						</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Denmark for Indian Students 2020
          </h3>
          <p className="service__info">
						All Denmark Medical Universities provide the best quality of MBBS education at an affordable cost. Study MBBS in Denmark is very beneficial for Indian students because of the following reasons:
						<ul>
							<li>No entrance exam for taking <Link to="/mbbs-admission-in-denmark-for-indian-students">MBBS admission in Denmark</Link>.</li>
							<li>The fee of Denmark MBBS College is very reasonable as compared to any other country.</li>
							<li>Each Denmark Medical University is approved by MCI.</li>
							<li>The procedure for getting Admissions in Denmark is very easy.</li>
							<li>The medium of teaching <b>MBBS in Denmark</b> is English.</li>
							<li>Denmark Medical colleges provide hostels to the Indian students for accommodation with Indian food.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Denmark
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Denmark</b> are as follows:
						<ul>
							<li>The students should be at least 17 years of age to take MBBS admission in Denmark.</li>
							<li>The primary subjects of the students should be physics, chemistry, and biology in their higher secondary.</li>
							<li>The students should have an aggregate of 50% marks in science for general category and 40% marks for reserved category.</li>
							<li>The students must not be more than 25 years of age.</li>
							<li>The students must have qualified the NEET exam with the minimum qualifying marks.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Denmark
          </h5>
          <p className="service__info">
					<ul>
						<li>University of Southern Denmark</li>
						<li>Copenhagen University</li>
						<li>Technical University of Denmark.</li>
						<li>Aarhus University.</li>
						<li>VIA University.</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Denmark 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS Admission in Denmark</b> are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to Denmark Medical College.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Denmark 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Denmark</b> will range from DKK 45,000 and DKK 120,000 per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Denmark Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Denmark:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Denmark Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Denmark
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to Denmark Medical Colleges/universities. But Denmark has more benefits as compared to other countries with very fewer cons:<br/><br/>
						There is no requirement of any entrance test, donation or capitation fee for pursuing MBBS admission in Denmark. Study <b>MBBS in Denmark</b> and the cost of living is very reasonable. Most of the students are taking MBBS Admission in Denmark every year. The Indian students will also get to experience the knowledge and the understanding of different cultures and traditions followed by the Denmark population. Many universities in Denmark are loaded with modern equipment in their hospitals for engaging students with the best medical practices followed worldwide.<br/><br/>
						The local language in Denmark is Danish so the students might feel the language as a barrier outside the university campus. But the coaching of <b>MBBS in Denmark</b> is conducted in English. The entire Visa process for Denmark takes more than two months after document submission to the concern embassy. The climate conditions in Denmark often become problematic for some students to adjust well.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Denmark
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>v</b>. They need to pay the fees of <b>MBBS in Denmark</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!		
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Denmark</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Denmark for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Most of the Denmark Medical College provides the best quality of education. The best Denmark colleges for Indian Students are as follows:
										<ul>
											<li>University of Southern Denmark</li>
											<li>Copenhagen University</li>
											<li>Technical University of Denmark.</li>
											<li>Aarhus University.</li>
											<li>VIA University.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Denmark a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Denmark is one of the best options to study MBBS. MBBS in Denmark fee structure is affordable as compared to other countries.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Denmark for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to pursue MBBS in Denmark can easily get Indian food in hostels which makes them comfortable in adjusting to this country. MBBS in Denmark is recognized worldwide as the colleges and universities are acknowledged by MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Denmark at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Yes, a medical student can study MBBS in Denmark at affordable fee structure because it is quite worthy & cost-effective for Indian students to pursue medicine course.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Denmark?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should be at least 17 years of age to take MBBS admission in Denmark.</li>
										<li>The primary subjects of the students should be physics, chemistry, and biology in their higher secondary.</li>
										<li>The students should have an aggregate of 50% marks in science for general category and 40% marks for reserved category.</li>
										<li>The students must not be more than 25 years of age.</li>
										<li>The students must have qualified the NEET exam with the minimum qualifying marks.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Denmark 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Denmark</b> 2020 is 50 percentile.</p>
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
          Apply To MBBS Universities In Denmark
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DenmarkForm />
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

export default MbbsDenmark;