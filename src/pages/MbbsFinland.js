import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import FinlandForm from "../components/ContactForm/FinlandForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsFinland() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Finland from MCI Approved Universities',
    description: 'MBBS Admission in Finland from MCI Approved Universities. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-Finland-from-mci-approved-university',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Finland'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Finland</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-finland.png"
          alt="Study In Finland"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						<b>MBBS in Finland</b> is one of the best destinations to study a course of medicine for Indian students. It enables the students to have brighter career growth after <Link to="/mbbs-admission-in-finland-from-mci-approved-universities">Study MBBS in Finland</Link>. It provides the magnificent theoretical as well as practical education which empowers the candidates to become successful practitioners.
						<b>MBBS in Finland fees</b> would range anywhere between <b>6000 Euros to 18000 Euros</b>. The MBBS course from Finland is globally recognized including the MCI (Medical Council of India). Most of the people in Finland speak in Finnish language but the medium of instruction is English in Finland colleges/universities.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> About Finland</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why Study MBBS in Finland</a></li>
						<li><a href="#benefits_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of Studying MBBS in Finland for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Finland</a></li>
            <li><a href="#university_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Top Universities to Study MBBS in Finland </a></li>
						<li><a href="#requirements_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirements for MBBS Admission in Finland 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS Fees in Finland 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Finland Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Pros & Cons for MBBS in Finland </a></li>
            <li><a href="#visa_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Visa Procedure for MBBS in Finland </a></li>
            <li><a href="#faq_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> FAQ's to Study MBBS in Finland </a></li>
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
          <h2 className="service__sub__title">About Finland</h2>
          <p className="service__info">Finland is one of the most northern and geographically remote countries in the world. The neighboring countries of Finland are <Link to="/mbbs-in-russia">Russia</Link>, Norway, Sweden, and Estonia. The weather in Finland is quite diverse and the summer offers great weather in Finland.</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Finland</h2>
					<p className="service__info">
					<b>MBBS in Finland for Indian Students</b> is the best option because of the following reasons:
					<ul>
						<li>Travel to the Finland is much easier and even economical than traveling to other countries.</li>
						<li>A medical program provided by the Finland to their students is recognized worldwide.</li>
						<li>The medium of instruction is English in Finland colleges and universities.</li>
						<li>Most of the Finland colleges and universities are approved by MCI (Medical Council of India).</li>
						<li>The students who have passed <b>MBBS from the Finland</b> can also practice in India.</li>
						<li>Advanced teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
						<li>The students can also have the option to start working on preparation for the <b>United States Medical Licensing Examination (USMLE)</b> to study Post Graduate Degrees.</li>
						<li>Finland is extremely safe for Indian students and the environment is also safe.</li>
						<li>There is no donation or capitation fee required in Finland colleges and universities.</li>
						<li>Finland MBBS colleges provide the best education at affordable rates.</li>
						<li>The cost of living is quite favorable for Indian students as there are excellent boarding and lodging provided by the university with the availability of Indian food for the students.</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Finland for Indian Students 2020
          </h3>
          <p className="service__info">
						Finland is the best place for Indian students to study MBBS because of the following reasons:
						<ul>
							<li>It is easy to get <Link to="/mbbs-admission-in-finland-from-mci-approved-universities">MBBS Admission in Finland</Link> because of the simple procedure for Indian students.</li>
							<li>After completing <b>MBBS in Finland</b>, students will get the best placement in the renowned college of India.</li>
							<li>Finland is safe for Indian students and they get everything for their survival.</li>
							<li>The students can fulfill their dream of studying <b>MBBS in Finland</b> with the minimum expense.</li>
							<li>The local language of Finland is Finnish but the whole MBBS course is conducted in the English language.</li>
							<li>Modern teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
							<li>There is no requirement of any entrance exam, and donation, & capitation fees to take MBBS admission in Finland.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Finland
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Finland</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to <b>Finland Medical College</b>/ Universities.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Finland</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Finland
          </h5>
          <p className="service__info">
					<ul>
						<li>University of Helsinki</li>
						<li>Aalto University</li>
						<li>Tampere University</li>
						<li>University of Oulu</li>
						<li>University of Turku</li>
						<li>University of Eastern Finland</li>
						<li>LUT University</li>
						<li>University of Jyväskylä</li>
						<li>Abo Akademi University</li>
						<li>Lappeenranta University of Technology</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Finland 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <Link to="/mbbs-admission-in-finland-from-mci-approved-univeristy">MBBS Admission in Finland</Link> are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to Finland Medical College.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Finland 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Finland</b> will range from 6000 Euros to 18000 Euros per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Finland Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Finland:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Finland Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Finland
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to Finland Medical Colleges/universities. But Finland has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people of Finland. The medical degrees awarded to students are recognized by WHO and MCI which enables them to work practically anywhere in the world. MCI approved Finland Medical Universities provide hostels to the Indian students for accommodation with Indian food.<br/><br/>
						The climate conditions in Finland often become problematic for some students to adjust well. The local language in Finland is Finnish so the students might feel the language as a barrier outside the university campus. But the coaching in Finland Medical College or Universities is conducted in English.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Finland
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Finland</b>. They need to pay the <b>MBBS in Finland fees</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Finland</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best option to study MBBS in Finland for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Most of the Finland Medical College provides the best quality of education. The best Finland Medical College for Indian Students is as follows:
										<ol>
											<li>University of Helsinki</li>
											<li>Aalto University</li>
											<li>Tampere University</li>
											<li>University of Oulu</li>
											<li>University of Turku</li>
										</ol>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Finland a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info"><b>MBBS in Finland</b> is an extremely valued medical degree with the best medical universities. It provides more diversity and an excellent opportunity for Indian students.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Finland for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">The students who pursue <b>MBBS in Finland</b> can easily get Indian food in hostels which makes them comfortable in adjusting to this country. <b>MBBS in Finland</b> is recognized worldwide as the Finland Medical Colleges are acknowledged by WHO and MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Finland at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Finland Medical College charges reasonable tuition fees from international students. So, it is quite worthy & cost-effective for Indian students to study <b>MBBS in Finland</b>.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Finland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to Finland Medical College/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for MBBS in Finland.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Finland 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an MBBS in Finland 2020 is 50 percentile.</p>
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
          Apply To MBBS Universities In Finland
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FinlandForm />
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

export default MbbsFinland;