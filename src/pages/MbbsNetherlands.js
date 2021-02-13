import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import NetherlandsForm from "../components/ContactForm/NetherlandsForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsNetherlands() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Netherlands for Indian Students from Top University',
    description: 'MBBS Admission in Netherlands for Indian Students from MCI Approved University. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-netherlands-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Netherlands'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Netherlands</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-netherlands.png"
          alt="Study In Netherlands"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						The Netherlands is a great destination for international students looking for quality education at low tuition fees and affordable living costs. Pursuing <Link to="/mbbs-admission-in-netherlands-for-indian-students">MBBS in Netherlands</Link> is a golden opportunity for Indian students because of world-class faculty and exposure to foreign academics. <b>MBBS in Netherlands</b> is conducted in English and Dutch.<br/><br/>
						It consists of some of the top-ranked Medical colleges and Universities that provide the guarantee admission and quality education with complete transparency. Netherlands has always been a cost-effective and convenient place for pursuing MBBS. MBBS in Netherlands fees would range anywhere around 10,000 Euros per year.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Netherlands</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Netherlands</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Netherlands for Indian Students 2020</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Netherlands</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Netherlands </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Netherlands 2020-2021 </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Netherlands 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Netherlands Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Netherlands </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Netherlands </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Netherlands </a></li>
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
          <h2 className="service__sub__title">About Netherlands</h2>
          <p className="service__info">The Netherlands is part of mainland <Link to="/mbbs-admission-in-europe-for-indian-students/">Europe</Link> and also known as Holland. It was the first non-native English speaking country to provide courses taught in English to international students. It has a typical maritime climate with mild winters & cool summer. It has changeable weather conditions throughout the year with few extremes. Most people enjoy visiting this diverse country because of its natural beauty, amazing climate, art museums, and much more.</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Netherlands</h2>
					<p className="service__info">
					<b>MBBS in Netherlands for Indian Students</b> is the best option because of the following reasons:
					<ul>
						<li>MCI (Medical Council of India) approved medical universities/colleges in Netherlands.</li>
						<li>The procedure of taking <b>admission to <Link to="/mbbs-admission-in-netherlands-for-indian-students">MBBS in Netherlands</Link></b> is very simple and smooth.</li>
						<li>Travel to Netherlands is much easier than traveling to other countries.</li>
						<li>There are separate classes for Indian students in English who seek <b>MBBS in Netherlands</b>.</li>
						<li>Modern teaching methods such as a digital class with outstanding facilities equipped with world-class infrastructure.</li>
						<li>More than 1500 Indian students are already studying in top Netherlands Universities.</li>
						<li>No requirement for donation or capitation fees to <Link to="/mbbs-admission-in-netherlands-for-indian-students">study MBBS in Netherlands</Link></li>
						<li>The cost of living is economical with high quality of life.</li>
						<li>Netherlands is highly safe and secure for Indian students and the environment is also safe.</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Netherlands for Indian Students 2020
          </h3>
          <p className="service__info">
						There are several benefits for studying MBBS in Netherlands which are as follows:
						<ul>
							<li>Netherlands medical universities/colleges are listed with MCI with world-class infrastructure and faculty.</li>
							<li><b>MBBS in Netherlands fees</b> is affordable and cost of living is also reasonable.</li>
							<li>A medical program provided by Netherlands to its students is a globally recognized degree.</li>
							<li>Pursuing <b>MBBS in Netherlands</b> gives exposure to students because highly advanced medical hospitals associated with Netherlands medical universities that provide practical knowledge.</li>
							<li>The separate batches are conducted in English for Indian students.</li>
							<li>Netherlands medical universities/colleges offer multiple job opportunities.</li>
						</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Netherlands
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Netherlands</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to <b>Netherlands Medical College</b>/ Universities.</li>
							<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Netherlands</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Netherlands
          </h5>
          <p className="service__info">
					<ul>
						<li>Avalon University School of Medicine</li>
						<li>New York Medical University</li>
						<li>St. Martinus University</li>
						<li>Xavier University</li>
						<li>University of Amsterdam</li>
						<li>Utretch University</li>
						<li>Wageningen University & Research</li>
						<li>Erasmus University Rotterdam</li>
						<li>University of Groningen</li>
						<li>Maastricht University</li>
						<li>Leiden University</li>
						<li>Radboud University</li>
						<li>University of Twente</li>
						<li>Delft University of Technology</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Netherlands 2020-2021
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS Admission in Netherlands</b> are the following:
						<ul>
							<li>Original Passport and its photocopies.</li>
							<li>Original and one photocopy of mark sheets of both 10th & 12th standard</li>
							<li>Migration Certificate from the previous studying college.</li>
							<li>Eligibility Certificate issued by Medical must be submitted</li>
							<li>Birth certificate must be submitted to the concerned authority.</li>
							<li>NEET scorecard of the student.</li>
							<li>Evidence of enrollment in Netherlands medical university.</li>
							<li>Copy of financials that shows sufficient funds to pay the Netherlands MBBS College fees</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Netherlands 2020-2021
          </h6>
          <p className="service__info">The fees structure for the Indian students studying <b>MBBS in Netherlands</b> will anywhere around 9,200 USD per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Netherlands Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Netherlands:
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Netherlands Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Netherlands
          </h6>
					<p className="service__info">
					Every country has its pros and cons that can benefit as well as effect Indian students who seek <b>admission to MBBS in Netherlands</b>. But Netherlands has more benefits as compared to other countries with very fewer cons:
					<ul>
						<li><b>Pros of studying MBBS in Netherlands:</b>
							<ul>
								<li>MBBS in Netherlands fees is low.</li>
								<li>The transportation cost of pursuing MBBS in Netherlands is very comforting.</li>
								<li>There is no requirement to pay a donation or capitation fee for pursuing MBBS in Netherlands.</li>
								<li>Pursuing MBBS in Netherlands and the cost of living can be easily affordable.</li>
							</ul>
						</li>
						<li><b>Cons of studying MBBS in Netherlands:</b>
							<ul>
								<li>The local language in Netherlands is Dutch so the students might feel the language as a barrier outside the university campus. But the separate classes are conducted in English medium for Indian students.</li>
								<li>The students must be careful while choosing the right education consultancy.</li>
							</ul>
						</li>
					</ul>
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Netherlands
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Netherlands</b>. They need to pay the <b>MBBS in Netherlands fees</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Netherlands</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Netherland for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Most of the Netherland Medical College provides the best quality of education. The best Netherland Medical College for Indian Students is as follows:
										<ul>
											<li>University of Amsterdam</li>
											<li>Utretch University</li>
											<li>Wageningen University & Research</li>
											<li>Erasmus University Rotterdam</li>
											<li>University of Groningen</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Netherlands a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Netherland is one of the best options to study MBBS. MBBS in Netherland has an affordable fee structure. <b>MBBS in Netherlands fees</b> for Indian students is very less as compared to other countries.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Netherland for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to pursue <b>MBBS in Netherland</b> can easily get Indian food in hostels which makes them comfortable in adjusting to this country. <b>MBBS in Netherland</b> is recognized worldwide as the Colleges and universities are acknowledged by MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Netherland at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Yes, a medical student can study <b>MBBS in Netherland</b> at affordable fee structure because it is quite worthy & cost-effective for Indian students to study <b>MBBS in Netherland</b></p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Netherland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to Netherlands Medical College/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for MBBS in Netherlands.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Netherland 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Netherlands</b> 2020 is 50 percentile.</p>
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
          Apply To MBBS Universities In Netherlands
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NetherlandsForm />
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

export default MbbsNetherlands;