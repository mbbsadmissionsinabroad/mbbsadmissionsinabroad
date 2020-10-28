import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from "../components/HomeCarousel";
import BangladeshForm from "../components/ContactForm/BangladeshForm";

function MbbsBangladesh() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Bangladesh for Indian Students at MCI Approved University',
    description: 'MBBS Admission in Bangladesh for Indian Students at MCI Approved University. Free Counseling, Top University, Low Tuition Fee, No Donation, All Document Support.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-bangladesh-for-indian-students/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Bangladesh'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Bangladesh</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-in-bangladesh.png"
          alt="Study In Bangladesh"
        />
      </div>
      <Container>
        <div>
					<p className="service__info">
						<b>MBBS in Bangladesh</b> is a good choice for to study for Indians. Medical Course is costliest course in the whole world wide, and it is really hard for middle class people to pursue the course. But <Link to="/mbbs-admission-in-bangladesh-for-indian-students">MBBS in Bangladesh</Link> offers you with low-cost for Indian Citizens. Students have to clear the criteria given by the Bangladesh government for an <Link to="/mbbs-admission-in-bangladesh-for-indian-students">admission of MBBS in Bangladesh</Link> and according to that they can choose the best university to pursue MBBS. MBBS in Bangladesh opportunity is going to increase in future.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> About Bangladesh</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why Study MBBS in Bangladesh</a></li>
						<li><a href="#benefits_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of Studying MBBS in Bangladesh for Indian Students 2020</a></li>
            <li><a href="#university_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Top University for MBBS in Bangladesh </a></li>
						<li><a href="#requirements_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirements for MBBS Admission in Bangladesh </a></li>
						<li><a href="#visa_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Visa Procedure for MBBS in Bangladesh </a></li>
            <li><a href="#advice_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Advice/Procedure to Study MBBS in Bangladesh </a></li>
            <li><a href="#mci_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MCI coaching in Bangladesh </a></li>
            <li><a href="#usmle_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Bangladesh </a></li>
            <li><a href="#career_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Career options after completing MBBS in Bangladesh </a></li>
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
          <h2 className="service__sub__title">About Bangladesh</h2>
          <p className="service__info">Bangladesh is originated in the east of India and it is a south Asian country. The country with greenery and backwaters. The know largest river in the world The Ganges, The Brahmaputra, and the Meghna rivers flow through Bangladesh and it is largest delta in the world. The Sundarbans which is largest forest in the southern coast of Bangladesh and the home of Royal Tigers is shared by India too.<br/> The geography is shared between three regions. The air temperature has been recorded 0 degree Celsius. Bangladesh is warm and humid during monsoon and the rain is expected by October.</p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why MBBS in Bangladesh </h2>
					<p className="service__info">
					<b>MBBS in Bangladesh for Indian Students</b> is the best option because of the following reasons:
						<ul>
							<li>Some of the top <Link to="/mbbs-admission-in-bangladesh-for-indian-students">MBBS college in Bangladesh</Link>, 25% of seats have been reserved for Indian Students and yea there quite few chances for Indians to pursue MBBS in Bangladesh. </li>
							<li>Students does not have to pay their fee for their course if they belong to SAARC Nation, so that they can pay their fee to stay. </li>
							<li>MBBS in Bangladesh is fully done in English, so that they no need to learn the local language.</li>
							<li>Some of the top University are recognized by WHO, so that it has a global impact on it.</li>
							<li>Fees are affordable to Study MBBS in Bangladesh.</li>
						</ul>
					</p>
        </div>
        <div id="university_sec">
          <h3 className="service__sub__title">
						Top University for MBBS in Bangladesh
          </h3>
          <p className="service__info">
						<ul>
							<li>University of Dhaka</li>
							<li>Rajshahi University</li>
							<li>University of Chittagong</li>
							<li>Shahjalal  University of Science and Technology</li>
							<li>Bangladesh University of Professional</li>
							<li>University of Science and Technology, Chittagong</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h4 className="service__sub__title">
						Requirements for MBBS Admission in Bangladesh
          </h4>
          <p className="service__info">
						The Indian students has to take up some of the criteria to take up admission of MBBS in Bangladesh:
						<ul>
							<li>The students results must be 60% in 12th(PCMB)</li>
							<li>Students must have clear their NEET exam with good marks</li>
							<li>The students must not have gap of 2 years after completing 12th</li>
							<li>There should be Minimum aggregate GPA in SSC and HSC according to the government of Bangladesh</li>
						</ul>
          </p>
        </div>
        <div id="visa_sec">
          <h5 className="service__sub__title">
						Visa Procedure for MBBS in Bangladesh
          </h5>
          <p className="service__info">Visa Procedure one of the important step to any common people, and especially study visa is very important people who wants to study abroad. To <Link to="/mbbs-admission-in-bangladesh-for-indian-students">Study MBBS in Bangladesh</Link>, here is a Visa procedure to apply: 
					<ul>
						<li>Students must visit High Commission of Bangladesh which is located in New Delhi, Kolkata, Agartala, Mumbai, Guwahati, and Bangalore</li>
						<li>After the Visa is approved you can visit any university and explore MBBS in Bangladesh at affordable cost/fee.</li>
					</ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						Advice/Procedure to Study MBBS in Bangladesh
          </h6>
          <p className="service__info">
						<ul>
							<li><b>Application Form:</b> Fill the form through online source by contacting the staff</li>
							<li><b>Letter of Admission:</b>  Submit the copy of your passport and necessary documents and you will receive a admission letter within 10 days</li>
							<li><b>Ministry and Visa Approval:</b> After receiving a letter from university visit the Embassy of Bangladesh in New Delhi for your Visa approval and you may receive it within a month.</li>
						</ul>
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">
						MCI coaching in Bangladesh
          </h6>
					<p className="service__info">
						<ul>
							<li>Every students who has to pursue medical degree abroad has to clear MCI screening test in India.</li>
							<li>History of MCI screening test results in Bangladesh is really good.</li>
							<li>Bangladesh holds the first place in MCI screening results followed by countries like Georgia, Philippines, and other country.</li>
							<li>The MCI passing should be 30% to complete MBBS admission in Bangladesh.</li>
						</ul>
					</p>
        </div>
        <div id="usmle_sec">
          <h6 className="service__sub__title">
						USMLE (United States Medical Licensing Examination) Coaching in Bangladesh
          </h6>
          <p className="service__info">USMLE is a three step test to get medical license in United States of America. In Bangladesh they help candidates prepare for the test which is mandatory for this position. This exam purpose is to get a license to work or to get a holding degree to work in USE.</p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career options after completing MBBS in Bangladesh
          </h6>
					<p className="service__info">After completing the study of MBBS in Bangladesh, students have to clear MCI screening test in a particular country where they have to choose their career option. The options are as below:
						<ul>
							<li>They get chance to practice as a surgeon in the Hospital</li>
							<li>They can join some health organization for their career practice</li>
							<li>They get a chance to work as a Private Surgeon.</li>
							<li>Bangladesh government does not provide PG, So they can either pursue their PG in some other country.</li>
						</ul>
					</p>
        </div>
        {/*<div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Bangladesh</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university is the best options to study MBBS in Bangladesh for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
										Almost every <b>Bangladesh Medical College</b> provides the best quality of education. The best <b>Bangladesh Medical College</b> for Indian Students is as follows:
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
                <b className="accordion__title">Is an MBBS in Bangladesh a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Studying <b>MBBS in Bangladesh</b> is one of the good options because Bangladesh is well known for its quality and affordable medical education and Bangladesh has one of the best Medical colleges.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Bangladesh for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Indian Medical students can easily pursue <b>MBBS in Bangladesh</b> as they can get hostels accommodation with Indian food which makes them comfortable in adjusting to this beautiful country. <b>MBBS in Bangladesh</b> is recognized worldwide as the each <b>Bangladesh Medical College</b> is acknowledged by the MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Bangladesh at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The tuition fee in <b>Bangladesh Medical College</b> is reasonable so, it is quite worthy & cost-effective for Indian students to study MBBS in Bangladesh.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Bangladesh?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
										<li>The students should be at least 17 years of age to take admission to <b>Bangladesh Medical College</b>/ Universities.</li>
										<li>The students should also qualify for the NEET exam with passing marks to apply for <b>MBBS in Bangladesh</b>.</li>
										<li>The students should have English subject in their higher secondary.</li>
										<li>The students must not be more than 25 years of age.</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Bangladesh 2020?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an <b>MBBS in Bangladesh</b> 2020 is 50 percentile.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
          </Accordion>
				</div> */}
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
          Apply To MBBS Universities In Bangladesh
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BangladeshForm />
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

export default MbbsBangladesh;