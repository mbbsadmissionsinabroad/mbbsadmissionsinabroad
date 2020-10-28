import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import PolandForm from "../components/ContactForm/PolandForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsPoland() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Poland for Indian Students at MCI Approved College',
    description: 'MBBS Admission in Poland for Indian Students at MCI Approved College. Poland is one of the best destinations to pursue MBBS because of the high-quality medical education & low-cost fees structure.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-poland-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Poland for Indian Students'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS Admission in Poland for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-poland.png"
          alt="Study In Poland"
        />
      </div>
      <Container>
        <div>
          <ul className="hyperlink">
            <li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> About Poland</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why Study MBBS in Poland</a></li>
						<li><a href="#benefits_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of Studying MBBS in Poland for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Poland</a></li>
            <li><a href="#university_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Top Universities to Study MBBS in Poland </a></li>
						<li><a href="#requirements_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirements for MBBS Admission in Poland 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS Fees in Poland 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Poland Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Pros & Cons for MBBS in Poland </a></li>
            <li><a href="#visa_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Visa Procedure for MBBS in Poland </a></li>
            <li><a href="#faq_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> FAQ's to Study MBBS in Poland </a></li>
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
          <h2 className="service__sub__title">About Poland</h2>
          <p className="service__info">
						Poland is one of the best destinations to pursue MBBS because of the high-quality medical education & low-cost fees structure. Poland universities/colleges provide world-class infrastructure and a high standard of teaching to medical students. Poland follows the pattern & syllabus of MBBS as same as several other countries in Europe. The duration of <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland</Link> is 6 years including 1 year of compulsory internship. Poland universities/colleges are recognized by the MCI. The process of <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS admission in Poland</Link> is very smooth and easy that enables the students to apply directly to the selected top medical universities or colleges without any hassle.
					</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Poland</h2>
					<p className="service__info">
					<b>MBBS in Poland</b> is the best option because of the following reasons:
					<ul>
						<li>There is no requirement for any entrance exam to take <b>MBBS admission in Poland</b>.</li>
						<li>Poland colleges/universities facilitate students with a high-quality medical education system.</li>
						<li>Poland colleges/universities provide 1 year of internship with the best government as well as private hospitals.</li>
						<li>The medium of instruction in all the Poland medical colleges is English.</li>
						<li>The medical universities in Poland are recognized and approved by WHO & MCI & Poland medical degree is a globally recognized degree.</li>
						<li>After completing <b>MBBS in Poland</b>, this country provides a blue card work permit to students so that they can get a job and settle down as well in this country.</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Poland for Indian Students 2020
          </h3>
          <p className="service__info">
						Poland is one of the best places for Indian students to pursue MBBS because of the following benefits:
						<ul>
							<li>During <b>MBBS in Poland</b>, the students also get coaching for FMGE / MCI Screening Test including mock tests.</li>
							<li>There is no requirement to pay any donation fee or capitation fee to take <b>MBBS admission in Poland</b>.</li>
							<li>The best Poland medical colleges/universities are among world-ranked universities.</li>
							<li>Poland medical colleges/universities have affordable tuition fees structure.</li>
							<li>The process of <b>MBBS admission in Poland</b> is very simple & easy as it does not require any entrance exam.</li>
							<li>After <b>MBBS in Poland</b>, the students will get a globally recognized medical degree.</li>
							<li>Poland universities also provide MBBS scholarships to deserving students.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Poland
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Poland</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take MBBS admission in Poland.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for MBBS in Poland.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Poland
          </h5>
          <p className="service__info">
					<ol>
						<li>Collegium Medicum Jagiellonian University</li>
						<li>Poznan University of Medical Sciences</li>
						<li>Medical University of Gdansk</li>
						<li>Medical University of Lublin</li>
						<li>Medical University of Wroclaw</li>
						<li>Nicolaus Copernicus University</li>
						<li>Medical University of Silesia</li>
						<li>University of Warmia and Mazury</li>
						<li>Warsaw Medical Academy</li>
						<li>Medical University of Lodz</li>
					</ol>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Poland 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS admission in Poland</b> are the following:
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
						MBBS Fees in Poland 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Poland</b> is very affordable that costs $ 7200 per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Poland Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Poland:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the <b>Poland Medical College</b> within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Poland
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to <b>Poland Medical College</b> but Poland has more benefits as compared to other countries with very fewer cons:<br/><br/>
						The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the people living in Poland. The medical degrees awarded to students are recognized by the MCI which enables them to work practically anywhere in the world. Indian students get the hostel accommodation at affordable fees with Indian food.<br/><br/>
						The climate conditions in Poland often become problematic for some students to adjust well. The local language in Poland is Polish so the students might feel the language as a barrier outside the university campus. But the medium of coaching in Poland medical colleges/universities is English.
					
					
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Poland
          </h6>
          <p className="service__info">The students need to fill up the online application form with the right details all the required documents. The students then will receive an offer letter from the university that they have applied to study <b>MBBS in Poland</b>. They need to pay the fees for taking <b>MBBS admission in Poland</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!</p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Poland</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">How Safe is Poland as a country?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">As a country, Poland is very safe. It is one of the safest countries in Europe with a low crime rate. Therefore, one can go to travel in Poland without much tension in the mind. Women and children are very safe in the country and Poland is a part of the European Union.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Poland a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Yes, it is definitely a good option as the infrastructure is good and the fees is affordable</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Poland for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">It is beneficial for Indian students to study MBBS in Poland as the accommodation is good, kitchen facilities are there and the standard of education is also very good with affordable fees structure.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a student study MBBS at affordable fees structure in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The fees structure for MBBS is quite affordable with 9000 to 13000 USD per year depending on the university.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">The admission requirement is passing 10+2 with Physics, Chemistry and Biology with 60% marks.<br/> The students should be at least 17 years old to take admission in Polish Medical Colleges<br/> The student should have studied English as a subject at the 10+2 level</p>
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
                <b className="accordion__title">Is NEET required for studying MBBS in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">The NEET score does not have a major impact in the admission decision in the medical colleges in Poland. However, it is advised that the student should have the passing score of NEET before applying to any good medical college in Poland.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">Is learning Polish compulsory?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">Although, the classes are held in English, it is advised to learn Polish as it is the local language of the country.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                <b className="accordion__title">Which is the best College to study MBBS in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
									<p className="service__info">The best college to study MBBS is university of Gdansk</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                <b className="accordion__title">What is the job prospect of doing MBBS from Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
									<p className="service__info">After doing MBBS from Poland, one can practice in the country of Poland. The quality of medical education is quite high and the infrastructure at the hospital is also good. There are also large opportunities of doing post graduation in the country.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="10">
                <b className="accordion__title">How can Destinex education help you to study MBBS in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
									<p className="service__info">Destinex education can help you to choose the right medical college for you. It can also help you to choose the right accommodation. Apart from that, it can also help you with your future career decisions. Lastly, it can help you with your visa processing.</p>
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
          Apply To MBBS Universities In Poland
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PolandForm />
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

export default MbbsPoland;