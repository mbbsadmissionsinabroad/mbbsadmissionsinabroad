import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import NepalForm from "../components/ContactForm/NepalForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsNepal() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Nepal for Indian Students at Low Cost',
    description: 'MBBS Admission in Nepal for Indian Students at Low Cost. The mode of instruction is English and there is no need to study any foreign language',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-nepal-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Nepal'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS Admission in Nepal</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-in-nepal.png"
          alt="Study In Nepal"
        />
      </div>
      <Container>
        <div>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Nepal</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Nepal</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Nepal </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Nepal 2020-2021 </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Nepal </a></li>
						<li><a href="#mci_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MCI Coaching in Nepal!</a></li>
						<li><a href="#usmle_sec"><img src="/assets/icon.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Nepal </a></li>
						<li><a href="#pg_sec"><img src="/assets/icon.png" alt="Left Arrow" /> PG Options after MBBS in Nepal </a></li>
						<li><a href="#vacations_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Vacations during MBBS in Nepal </a></li>
						<li><a href="#career_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Career Options after Completing MBBS in Nepal </a></li>
						<li><a href="#problems_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents </a></li>
						<li><a href="#reserve_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How reserve your MBBS Seat in Nepal for 2020 Admission </a></li>
						<li><a href="#charges_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Service & Consultancy Charges of New-Lyf </a></li>
						<li><a href="#New-Lyf_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Services by New-Lyf for Abroad Education </a></li>
						<li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Our Process of conducting Student Counseling </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Nepal FAQ</a></li>
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
          <h2 className="service__sub__title">About Nepal</h2>
          <p className="service__info">Nepal is a beautiful country with its capital located in Kathmandu. Nepal is a neighboring country of India and that is why it can be considered as one of the student destinations for studying MBBS. <Link to="/mbbs-admission-in-nepal-for-indian-students">MBBS in Nepal</Link> can be a good option to study because the fees are comparable to that of India and on average varies between 45-60 lakhs over a period of 5 years. Students are encouraged to study MBBS in Nepal because it is not far away from India and the quality of education is also good.</p>
        </div>
        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Why Study MBBS in Nepal</h3>
          <p className="service__info">
						Study Mbbs in Nepal because
							<ul>
								<li>The mode of instruction is English and there is no need to study any foreign language</li>
								<li>English and Hindi are both spoken in Nepal and there will not be any language barrier</li>
								<li>Medical Council of India recognizes students who have studied MBBS in Nepal</li>
								<li>The quality of medical education in Nepal is good and can be compared to Indian standards</li>
								<li>Post completion of the degree, Indians can practice in both Nepal and India</li>
								<li>Students are given training to finish the Indian requirements to practice in India</li>
								<li>MCI screening test after the completion of the degree can be passed easily</li>
								<li>Lodging and food is not at all expensive and can be easily accessed by the students</li>
								<li>Nepal is a safe country and the people are peace loving</li>
							</ul>
          </p>
        </div>
        <div id="university_sec">
          <h4 className="service__sub__title">
						Top Colleges for MBBS Admission in Nepal which are recognized by MCI
          </h4>
          <p className="service__info">
					<ul>
						<li>Kathmandu University School of Medical Sciences (KUSMS)</li>
						<li>B.P. Koirala Institute of Health Sciences (BPKIHS), Nepal</li>
						<li>Institute of Medicine (IOM) in Maharajgunj</li>
						<li>Patan Academy of Health Sciences</li>
						<li>Manipal College of Medical Sciences, Pokhara</li>
					</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h5 className="service__sub__title">
						Requirements for MBBS Admission in Nepal 2020-2021
          </h5>
          <p className="service__info">The students should study physics, chemistry and biology and should secure 50% of marks in the 10+2 level education in India. For the processing of admission, 10th Standard marks card and 12th Standard marks card and certificate are required. Some universities may conduct an entrance examination for <Link to="/mbbs-admission-in-nepal-for-indian-students">MBBS admission in Nepal</Link></p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa Procedure for studying MBBS in Nepal
          </h6>
          <p className="service__info">
						There is no visa required for studying MBBS in Nepal
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Nepal!</h6>
          <p className="service__info">Colleges recognized by MCI may not require MCI screening test. However, there are some colleges which may require MCI screening test. These colleges definitely provide preparation for the tests. There are institutes like B.P. Koirala Institute of Health Sciences which are so good that the students do not require any separate coaching for MCI screening test. Moreover, for the convenience of the students, there are coaching centre like Bhatia’s coaching centre in Kathmandu and also another coaching centre at Dharan. The best option is to <Link to="/mbbs-admission-in-nepal-for-indian-students">study MBBS in Nepal</Link> and gets coaching online for the MCI screening test.</p>
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

        <div id="usmle_sec">
          <h6 className="service__sub__title">
						USMLE (United States Medical Licensing Examination) Coaching in Nepal
          </h6>
          <p className="service__info">USMLE based teaching is also done in the top colleges in Nepal. There are different phases of the test. Some part of the test includes testing the student’s knowledge of basic biochemistry, microbiology, anatomy, forensic medicine, and community medicine. There are also other parts of the test which include testing of knowledge on surgery, gynaecology, internal medicine etc. Students have to visit one testing centre to write an examination on clinical skills that they have developed during their study. Students are advised to study MBBS in Nepal as they can get training on USMLE from the beginning of the MBBS course in Nepal.</p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
						P.G options after studying MBBS in Nepal
          </h6>
          <p className="service__info">
						Nepal medical universities provide several types of medical courses to the students. The following are the PG Options after <b>MBBS in Nepal:</b>
						<ul>
							<li>Students can do P.G from both India and Nepal</li>
							<li>Students can practice in both India and Nepal</li>
							<li>But for studying masters degree in medicine and surgery in India, one has to compulsorily clear the MCI screening test</li>
							<li>Also after finishing of studying MBBS in Nepal, if one intends to do practice in India, he or she has to undergo MCI screening test.</li>
						</ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
						Vacations during MBBS in Nepal
          </h6>
					<p className="service__info">
						<ul>
							<li>Students can work in Nepal</li>
							<li>They can easily come back to India during the vacations</li>
						</ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career Options after Completing MBBS in Nepal
          </h6>
          <p className="service__info">
					<ul>
						<li>Students can enter the clinical research industry</li>
						<li>They can practice in Nepal and India</li>
						<li>They can work in healthcare organization</li>
						<li>Clinical research industry is booming nowadays, and there are lot of need of doctors from the pharmacology or medicine background who can work as drug safety physician and pharmacology specialist. Therefore, as a doctor from Nepal one can clear the MCI screening test and join the multinational companies as safety physician.</li>
						<li>There are also healthcare organizations, which needs lot of doctors for community health practice. Doctors after completing their studies can join these organizations to earn a good package and also to do social service.</li>
						<li>New-Lyf education service not only helps in MBBS admission in Nepal but also helps in the development of a successful career for the students</li>
					</ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
						Students face huge problems due to fraud agents
          </h6>
          <p className="service__info">There are many fraud agents who falsely admit students to universities and colleges in Nepal to collect money. The MBBS admission in Nepal should be done in a transparent way. For MBBS admission in Nepal, it is important to take MCI screening test preparation from the date of joining. There are many medical colleges in Nepal who do not give coaching for MCI screening test. Therefore, for transparent MBBS admission in Nepal, one should visit the New-Lyf Education Service. New-Lyf education does not take any capitation or donation fees and shows the student the right path to the process of MBBS admission in Nepal.</p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
						How to reserve your MBBS Seat in Nepal for 2020 Admission
          </h6>
          <p className="service__info">Once you provide all the vital documents related to your study seat can be reserved in medical colleges in Nepal. New-Lyf can help you to study MBBS in Nepal by not paying any capitation donation fees. Also for MBBS admission in Nepal there is no need of any English Proficiency test like IELTS or TOEFL. New-Lyf education will show you the sure path to success for MBBS admission in Nepal.</p>
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

        <div id="charges_sec">
          <h6 className="service__sub__title">
						Service & Consultancy Charges of New-Lyf
          </h6>
					<p className="service__info">
						<ol>
							<li>New-Lyf is a world class service provider in education</li>
							<li>New-Lyf provides transparent admission guidelines to MBBS in many countries</li>
							<li>New-Lyf also helps in MCI screening test procedure</li>
							<li>New-Lyf is the ultimate guide to get admission in good medical colleges in Nepal</li>
							<li>To Study MBBS in Nepal New-Lyf will show you the right path</li>
						</ol>
					</p>
        </div>
        <div id="process_sec">
          <h6 className="service__sub__title">
						Process of conducting student counseling
          </h6>
          <p className="service__info">
						<ul>
							<li>New-Lyf provides online counseling for the students who wish to know about the courses. The students can speak with the New-Lyf CEO over the online platform regarding MBBS admission in Nepal and can prepare to Study MBBS in Nepal.</li>
							<li>New-Lyf can also provide counseling over the phone to the students</li>
							<li>It also provides in person counseling. Students do not have to travel a large distance as there are centres all over the country for the purpose of easy consultation. Study MBBS in Nepal without any problem and get the right kind of guidance from New-Lyf.</li>
						</ul>
					</p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">MBBS in Nepal FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is the quality of education good in Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">In the top colleges, the quality of education is really good.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is NEET required?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">NEET is not required</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">What is the duration of the course?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Same like India, it is 5 years duration course including internship</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">What is the best Medical College in Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The best medical colleges in Nepal are Kathmandu University School of Medical Sciences (KUSMS), B.P. Koirala Institute of Health Sciences (BPKIHS), Nepal</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Is NMAT required to study in Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">NMAT is not required to study in Nepal</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What about the teaching facilities in Universities and Medical Colleges in Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">If you study MBBS in Nepal, there are many highly qualified teachers, you will find in the medical colleges. Among the teachers, one can also observe a certain percentage of Indian doctors and professors.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">What about the job options after completing MBBS from Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">There are plenty of job options after you finish studying MBBS from Nepal. The key areas are clinical research organizations, healthcare organizations, NGOs, government medical officer etc. Therefore, think about the immense job prospects and prepare yourself for MBBS admission in Nepal.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">What about the infrastructure facilities in medical colleges in Nepal?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">If you study MBBS in Nepal, you will find that there are several colleges like B.P. Koirala Institute of Health Sciences, where the infrastructural facilities are very good. Sometimes, the education curriculum follows the Indian pattern of medical education and has acceptance at a global level. Therefore, without any doubt in your mind consult New-Lyf Education and prepare for MBBS admission in Nepal.</p>
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
          Apply To MBBS Universities In Nepal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NepalForm />
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

export default MbbsNepal;