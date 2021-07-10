import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import SwedenForm from "../components/ContactForm/SwedenForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsSweden() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Sweden for Indian Students from MCI Approved University',
    description: 'MBBS Admission in Sweden for Indian Students from MCI Approved University. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-sweden-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Sweden'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Sweden</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-sweden.png"
          alt="Study In Sweden"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						Sweden is a country famous for affordable and quality medical education. Pursuing <Link to="/mbbs-admission-in-sweden-for-indian-students">MBBS in Sweden</Link> universities/colleges is truly a rewarding investment of time, finance and career acquisition. Sweden is well known for the best medical universities. <b>MBBS in Sweden</b> has obtained an 	incredible position in the world because of high educational standards with modern teaching techniques and well-established infrastructure.
						MBBS graduates can do a licensing exam conducted in the USA which is <b>USMLE (the United States Medical Licensing Examination)</b> and easily get admission into residency program/postgraduate training in the United States. The local language in Sweden is Swedish but the medium of instruction in <b>Sweden universities/colleges is English</b>.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Sweden</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Sweden</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Sweden for Indian Students 2021 - 2022</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Sweden</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Sweden </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Sweden 2021 - 2022 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Sweden 2021 - 2022 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Sweden Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Sweden </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Sweden </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Sweden </a></li>
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
          <h2 className="service__sub__title">About Sweden</h2>
          <p className="service__info">Sweden is a country situated in <Link to="/mbbs-admission-in-europe-from-mci-approved-university">Northern Europe</Link> on the Scandinavian Peninsula which has total population of 9.9 million people. It is bordered by Norway, <Link to="/mbbs-admission-in-finland-from-mci-approved-universities">Finland</Link>, the Baltic Sea, and the Gulf of Bothnia. It has thousands of lakes, streams, mountains & rolling hills. The climate in <Link to={{ pathname: "https://en.wikipedia.org/wiki/Sweden" }}>Sweden</Link> is temperate & suitable for the students coming from different countries. The winter season is severe with temperatures going below -30°C and the summer temperature is +20°C.</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Sweden</h2>
					<p className="service__info">
					<b>MBBS in Sweden for Indian Students</b> is the best option because of the following reasons:
					<ul>
							<li>Sweden is a preferred destination for medical studies due to easy admission procedure and no entrance test at the majority of Sweden medical universities/colleges.</li>
							<li>Sweden has a US-based syllabus in the MBBS course and the medium of coaching is English.</li>
							<li>MBBS in Sweden fee structure is affordable as compared to Indian Medical Colleges.</li>
							<li>Advanced teaching techniques and scientific approaches with outstanding facilities equipped with the well-established infrastructure</li>
							<li>The MBBS degree acquired from any medical colleges in Sweden is valid and these degrees are approved by the Medical Council of India.</li>
							<li>The students can easily get a job in India and even around the world after completing <b>MBBS in Sweden</b> from any medical college.</li>
							<li>The classrooms of Sweden MBBS colleges are practically oriented which increases the interests of the students in the subject.</li>
						</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Sweden for Indian Students 2021 - 2022
          </h3>
          <p className="service__info">
						Sweden is one of the best places for Indian students to study MBBS because of the following benefits:
						<ul>
							<li>There is no requirement to appear for the entrance test in Sweden Medical Universities/colleges.</li>
							<li>Sweden Medical Universities/colleges are recognized by the MCI.</li>
							<li>There is no requirement to pay the capitalization fee in Sweden Medical Universities/colleges.</li>
							<li>The students who <b>study MBBS in Sweden</b> would have a wide exposure to clinical practice.</li>
							<li>The cost of living and the tuition fee of Sweden MBBS Colleges is quite low and affordable for Indian students.</li>
							<li>The MBBS colleges in Sweden follow the medium of the English language.</li>
							<li>Excellent hostel accommodations provided by the university.</li>
							<li>The MBBS degree provided by Sweden MBBS colleges is renowned globally and has great value.</li>
							<li>The students have the opportunity to work in government hospitals after completing their course of <b>MBBS in Sweden</b>.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Sweden
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to study <b>MBBS in Sweden</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to <b>Sweden Medical College</b>/ Universities.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Sweden</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Sweden
          </h5>
          <p className="service__info">
					<ul>
						<li>Karolinska Institute</li>
						<li>Uppsala University</li>
						<li>Stockholm University</li>
						<li>University of Gothenburg</li>
						<li>KTH Royal Institute of Technology</li>
						<li>Chalmers University of Technology</li>
						<li>Swedish University of Agricultural Sciences</li>
						<li>Örebro University</li>
						<li>Linköping University</li>
						<li>Karlstad University</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Sweden 2021 - 2022
          </h6>
          <p className="service__info">
							The necessary documents for taking admission to <b>MBBS in Sweden</b> are the following:
							<ul>
								<li>The students should have aggregate 50% marks in physics, chemistry, and biology in the 12th standard.</li>
								<li>The students should have English subject in their higher secondary.</li>
								<li>The students should be at least 17 years of age on or before 31st December of the admission year.</li>
								<li>The students need to qualify for the NEET entrance examination conducted by the (NTA) National Testing Agency.</li>
								<li>The students must not be more than 25 years of age.</li>
							</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Sweden 2021 - 2022
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Sweden</b> will anywhere around 9,200 USD per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Sweden Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Sweden:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Sweden Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Sweden
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to Sweden Medical Colleges/universities. But Sweden has more benefits as compared to other countries with very fewer cons:<br/><br/>

						There is no requirement of any entrance test, capitalization fee, and donation to <b>study MBBS in Sweden</b>. There are huge range of opportunities and great exposure to clinical practice because of highly equipped multi-profile hospitals. The tuition fee is quite low and affordable in Sweden Medical University. The cost of living in Sweden for Indian students is quite low too. The coaching of <b>MBBS in Sweden</b> is conducted in the English language.<br/><br/>
						
						The students must be careful while choosing the right education consultancy. The climate conditions in Sweden often become problematic for some students to adjust well.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Sweden
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Sweden</b>. They need to pay the <b>MBBS in Sweden fee</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Sweden</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Sweden for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Most of the Sweden Medical College provides the best quality of education. The best Sweden Medical College for Indian Students are as follows:
										<ul>
											<li>Karolinska Institute</li>
											<li>Uppsala University</li>
											<li>Stockholm University</li>
											<li>University of Gothenburg</li>
											<li>KTH Royal Institute of Technology</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Sweden a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Sweden is one of the best options to study MBBS. <b>MBBS in Sweden fee structure</b> is affordable as compared to other countries.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Sweden for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to <b>study MBBS in Sweden</b> can easily get Indian food in hostels which makes them comfortable in adjusting to this country. <b>MBBS in Sweden</b> is recognized worldwide as the colleges and universities are acknowledged by MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Sweden at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Yes, a medical student can study <b>MBBS in Sweden</b> at affordable fee structure because it is quite worthy & cost-effective for Indian students to pursue medicine course.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Sweden?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to Sweden Medical College/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Sweden</b>.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Sweden 2021 - 2022?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Sweden</b> 2021 - 2022 is 50 percentile.</p>
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
          Apply To MBBS Universities In Sweden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SwedenForm />
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

export default MbbsSweden;