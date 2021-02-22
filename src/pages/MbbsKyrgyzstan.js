import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import KyrgyzstanForm from "../components/ContactForm/KyrgyzstanForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsKyrgyzstan() {
	const [modalShow, setModalShow] = React.useState(false);
	
	const meta = {
    title: 'MBBS in Kyrgyzstan - MBBS Admission in Kyrgyzstan for Indian Students',
    description: 'Study MBBS in Kyrgyzstan from Top Medical Universities. New-Lyf provides all guidance & assistance to Indian Students for Admission in Kyrgyzstan Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-kyrgyzstan/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Kyrgyzstan'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Kyrgyzstan</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-kyrgyzstan.png"
          alt="Study In Kyrgyzstan"
        />
      </div>
      <Container>
        <div>
					<p className="service__info">
						<h2 className="service__sub__title">Introduction for MBBS in Kyrgyzstan</h2>
						Kyrgyzstan is among the best options for pursuing MBBS abroad for the Indian students at a very low cost. The country has top medical universities and colleges that provide MBBS, MD and other medical degrees. Numerous students from India and other countries internationally apply to the medical universities in Kyrgyzstan to pursue their medical degree. Kyrgyzstan provides quality education and facilities to the MBBS students in their medicals universities and colleges. The medical universities of Kyrgyzstan are accredited by the international medical councils; WHO, MCI, PLAB, FAIMER and UNESCO.<br/>
						The duration of the complete MBBS course in Kyrgyzstan is 6 years, that is, 5 years+1 year internship at affiliated hospitals. One of the main reason international students are interested in pursuing MBBS in Kyrgyzstan is primarily because of the fact that most of the universities provide real life case studies and clinical knowledge during their entire course of the education. High quality of education along with the low cost of tuition fee is another reason for choosing the top medical universities in Kyrgyzstan for MBBS. The MBBS graduates from medical universities in Kyrgyzstan are now working in different parts of the world. Studying MBBS in Kyrgyzstan will provide myriad opportunities to the Indian Students across the world.
          </p>
          <ul className="hyperlink">
            <li>
              <img src="/assets/icon.png" alt="Left Arrow" /> Index
            </li>
            <li>
              <a href="#about_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> About Kyrgyzstan
              </a>
            </li>
            <li>
              <a href="#why_mbbs_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS Study in Kyrgyzstan
              </a>
            </li>
            <li>
              <a href="#benefits_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Benefits of MBBS in Kyrgyzstan for Indian Students 2020
              </a>
            </li>
            <li>
              <a href="#university_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Top Universities for MBBS in Kyrgyzstan
              </a>
            </li>
            <li>
              <a href="#requirements_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Kyrgyzstan 2020-2021
              </a>
            </li>
            <li>
              <a href="#advice_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Kyrgyzstan Advice for Indian students
              </a>
            </li>
            <li>
              <a href="#pros_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Pro & Cons of Studying MBBS in Kyrgyzstan
              </a>
            </li>
            <li>
              <a href="#visa_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Kyrgyzstan
              </a>
            </li>
            <li>
              <a href="#faq_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Armenia FAQ
              </a>
            </li>
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
          <h2 className="service__sub__title">About Kyrgyzstan</h2>
          <p className="service__info">
						Kyrgyzstan was formally known as the Kyrgyz Republic, located in Central Asia. Kyrgyzstan is a scenic country known for its natural beauty and varied traditions. The Kyrgyz Republic is a landlocked country, surrounded by mountains sharing its borders with Kazakhstan, Uzbekistan, Tajikistan, and China. The capital of Kyrgyzstan is Bishkek which is the largest city of in the country. Bishkek covers a total area of 49 square miles with an estimated population of around 1,250,000. The climatic conditions of Kyrgyzstan are similar to that of the colder regions up north of India.</p>
        </div>
        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Why MBBS Study in Kyrgyzstan</h3>
          <p className="service__info">
						Kyrgyzstan provides a very feasible tuition fees and the accommodation and cost of living are a lot lesser than that of India. The medical colleges in Kyrgyzstan are furnished with all the amenities that required for betterment for the students. The medical colleges are well equipped with modern infrastructure and latest technology. The quality of education provided in the medical universities of Kyrgyzstan can be compared to that of countries like USA, UK and other European countries. The students are aided to learn through practical training and experiments. Students are also required to go on clinical rounds that help them in gaining better experience in their fields of study. The top medical universities and colleges in Kyrgyzstan are recognized by MCI, WHO, FAIMER, WDOMS and UNESCO. The medium of instruction for MBBS in the universities in Kyrgyzstan is English, which is a very important aspect, as many countries have their mother tongue as medium of instruction. Medical universities in Kyrgyzstan also provide MCI coaching.
          </p>
        </div>
        <div id="benefits_sec">
          <h4 className="service__sub__title">
						Benefits of MBBS in Kyrgyzstan for Indian Students 2020
          </h4>
					<p className="service__info">
						The benefits of pursuing MBBS in the medical colleges and universities of Kyrgyzstan are as follows:
						<ul>
							<li>The student-teacher ratio is the most favorable, as it will provide each and every student with the attention required from the faculty to mold them into the best doctors.</li>
							<li>Students are not required to qualify any entrance examination for admission in best medical universities of Kyrgyzstan.</li>
							<li>The cost of tuition fees and hostel accommodation is very low as compared to other countries on the continent. In fact, Kyrgyzstan provides the best medical cost with the lowest fee structure in the whole of Asia.</li>
							<li>The students get a lot of opportunities to participate in international conferences and seminars, which gives an opportunity to the students to interact with other international students.</li>
							<li>There are many extra-curricular activities in the medical campuses that will help in developing the skills of the students.</li>
							<li>The admission processes in the medical universities of Kyrgyzstan are hassle-free and easy.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities for MBBS in Kyrgyzstan
          </h5>
          <p className="service__info">
						<ul>
							<li>Asian Medical Institute</li>
							<li>I.K.AKHUNBAEV KYRGYZ STATE MEDICAL ACADEMY</li>
							<li>International University of Kyrgyzstan, International School of Medicine, Bishkek</li>
							<li>Jalal-Abad State University, Jalal-Abad</li>
							<li>Kyrgyz Russian Slavic University</li>
							<li>Kyrgyz State Medical Academy</li>
							<li>Osh State University, Medical Faculty</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
            Requirements for MBBS Admission in Kyrgyzstan 2020-2021
          </h6>
          <p className="service__info">
						The following are the requirements for MBBS admission in Kyrgyzstan:
							<ul>
								<li>A birth certificate as an age proof s mandatory.</li>
								<li>10th and 12th class mark sheets.</li>
								<li>Passport size photo.</li>
								<li>Valid passport with 18 months of validity.</li>
								<li>Student VISA is mandatory.</li>
								<li>A no objection certificate.</li>
								<li>Report of HIV test.</li>
								<li>Banks statements are required for the submission.</li>
								<li>Posses the MBBS fees of Kyrgyzstan 2020-21.</li>
								<li>Medical certificates for fitness proofs.</li>
								<li>Invitation letter from concerned university.</li>
								<li>Approved documents from the Ministry External Affairs.</li>
								<li>Criminal verification certificate.</li>
								<li>Health insurance certificate.</li>
								<li>Travel insurance certificate.</li>
							</ul>
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa Procedure for MBBS in Kyrgyzstan
          </h6>
          <p className="service__info">The candidates have to fill-in the online application form correctly provided in the websites of the respective MBBS colleges and universities. Then you need to submit all the required documents. The candidates will then get the invitation letter from the respective university. It is at this step that the candidate has to pay the admission fee. Then the student can apply for the visa. And once the visa is in hand one can book the tickets to Kyrgyzstan!</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Kyrgyzstan Advice for Indian students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Kyrgyzstan:
							<ul>
								<li>Students should be well-informed about the university or college that s/he has applied for an admission.</li>
								<li>The candidate also must be sure to choose the college that is under their economical standards.</li>
								<li>One should always be cautious of his/her surroundings.</li>
								<li>Avoid company of dangerous people.</li>
								<li>Do not stay outside late in the night.</li>
								<li>Do not travel to places not sure of.</li>
							</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pro & Cons of Studying MBBS in Kyrgyzstan
          </h6>
          <p className="service__info">Some of the challenges faced are the cold climatic condition of Kyrgyzstan but, the central heating systems built in the infrastructures in Kyrgyzstan are very helpful. The easy curriculum and extra-curricular activities might tend to make the student lose interest in his/her studies. The language barrier and the new culture can also be a significant challenge.
					The pros are the low cost of education along with scholarship provided by the Kyrgyzstani government, good accommodation and canteen facilities. The Kyrgyzstan medical universities are accredited by the medical councils all over the world. It is also easy to apply and enroll. And the job opportunities are massive for a medical student graduated from a Kyrgyzstan medical college.</p>
        </div>

        {/* POP UP Btn */}

        <Button className="popup__btn" onClick={() => setModalShow(true)}>
          Click Here To Apply
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {/* POP UP Btn Ends */}

        <div id="faq_sec">
          <h6 className="service__sub__title">MBBS in Kyrgyzstan FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Kyrgyzstan good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="service__info">
										Yes, doing MBBS in Kyrgyzstan is an excellent option for an Indian student. The education is very low of cost and feasible. They also provide scholarships, good accommodation and canteen facilities to the students. The Kyrgyzstan medical universities are accredited by the top medical councils like WHO, FAIMER, MCI and UNESCO. It is also easy to apply and enroll. And there are myriad job opportunities for a medical student graduated from a medical college in Kyrgyzstan’
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">
									How much does cost MBBS in Kyrgyzstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="service__info">
										The tuition fee varies from 3300 USD to 6000 USD per annum with very less accommodation fees.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">
									Is NEET required for MBBS in Kyrgyzstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="service__info">
										Yes, NEET qualification is required for an Indian student enrolling for MBBS in Kyrgyzstan.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">
									How many years in MBBS in Kyrgyzstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p className="service__info">
										The course duration is 6 years i.e. 5 years+1 year of internship.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">
									Which is the best MBBS College in Kyrgyzstan for Indian Students?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="service__info">
										<ul>
											<li>Osh State University</li>
											<li>Jalalabad State Medical University</li>
											<li>Kyrgyz State Medical Academy</li>
											<li>Asian Medical Institute</li>
											<li>International School of Medicine</li>
										</ul>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">
									What are the career options for an Indian student doing an MBBS in Kyrgyzstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="service__info">After the students have completed their MBBS course in Kyrgyzstan they can practice in Kyrgyzstan itself. They can join the private or government sector for a job. Another option is the student returning to India and practicing in India.</p>
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
          Apply To MBBS Universities In Kyrgyzstan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <KyrgyzstanForm/>
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

export default MbbsKyrgyzstan;