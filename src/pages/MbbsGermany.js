import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import GermanyForm from "../components/ContactForm/GermanyForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsGermany() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Germany for Indian Students at MCI Approved Universities',
    description: 'MBBS Admission in Germany for Indian Students at MCI Approved Universities. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-germany-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS Admission in Germany for Indian Students'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Germany</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-germany.png"
          alt="Study In Germany"
        />
      </div>
      <Container>
        <div>
          <p className="service__info"><Link to="/mbbs-admission-in-germany-for-indian-students">Study MBBS in Germany</Link> is the best option as it provides a higher quality of education at an affordable price. Germany medical college has well equipped medical facilities that help the students to enhance their professional skills. <Link to="/mbbs-admission-in-germany-for-indian-students">Germany Medical universities</Link> are among the best in the world and recognized by the world’s major organizations such as WHO and MCI. <br/> <Link to="/mbbs-admission-in-germany-for-indian-students">MBBS Admission in Germany</Link> offers a great opportunity for Indian students to excel in medicine. It provides the magnificent theoretical as well as practical education which empowers the candidates to become successful practitioners. The admission procedure in <Link to="/mbbs-admission-in-germany-for-indian-students">Germany medical college /universities</Link> is quite easy and simple. </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Germany</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Germany</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Germany for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Germany for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Germany </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Germany Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Germany </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Germany </a></li>
						<li><a href="#mci_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MCI Coaching in Germany!</a></li>
						<li><a href="#usmle_sec"><img src="/assets/icon.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Germany </a></li>
						<li><a href="#pg_sec"><img src="/assets/icon.png" alt="Left Arrow" /> PG Options after MBBS in Germany </a></li>
						<li><a href="#vacations_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Vacations during MBBS in Germany </a></li>
						<li><a href="#career_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Career Options after Completing MBBS in Germany </a></li>
						<li><a href="#problems_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents </a></li>
						<li><a href="#reserve_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How reserve your MBBS Seat in Germany for {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} Admission </a></li>
						<li><a href="#charges_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Service & Consultancy Charges of New-Lyf </a></li>
						<li><a href="#New-Lyf_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Services by New-Lyf for Abroad Education </a></li>
						<li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Our Process of conducting Student Counseling </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Germany </a></li>
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
          <h2 className="service__sub__title">About Germany</h2>
          <p className="service__info">
						Germany is a well versed & economically developed country which is officially known as the <Link to="https://en.wikipedia.org/wiki/Germany" target="_blank">Federal Republic of Germany</Link>. It shares its borders with other countries such as <b>Denmark, Poland, Austria, Czech Republic,</b> and many more. Germany has a very diverse & temperate climate season in the world & suitable for the students coming from the countries.
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Germany</h2>
          <p className="service__info">
						<b>MBBS in Germany for Indian Students</b> is the best destination because of the following reasons:
							<ul>
								<li>The <b>medical education system in German</b> is considered one of the finest in the world.</li>
								<li>Each <b>Germany medical college</b> are mostly acknowledged and <Link to={{ pathname: "https://www.mciindia.org/CMS/information-desk/for-students-to-study-in-abroad" }} target="_blank">recognized by the Medical Council of India (MCI)</Link></li>
								<li>Germany is one of the leading countries that specialize in highly advanced medical care.</li>
								<li>After completing the MBBS Admission in Germany, an Indian student becomes eligible for a permanent residence certificate.</li>
								<li>The hospitals associated with the <b>Germany medical college</b> provide the best quality health care and utilize the latest medical technologies and instruments.</li>
								<li>There is no requirement of any entrance exam is required to take admission in Germany medical universities/colleges.</li>
								<li>Every Germany medical university/colleges provide quality private & government hospitals for internships.</li>
								<li><b>MBBS in Germany fees</b> is very affordable and the cost of living is also reasonable.</li>
								<li><b>Germany medical college</b> integrates theoretical and practical learning in such a way that students are taught in the most effective way possible.</li>
								<li>The medium of instruction in <b>Germany Medical College / Universities </b> is English and Germany.</li>
							</ul>
          </p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Germany for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h3>
          <p className="service__info">
						Germany is the best place for Indian students to study MBBS because of the following benefits:
							<ul>
								<li>There is no requirement for any entrance exam or donation to take admission in <b>Germany Medical College</b>.</li>
								<li>Top medical colleges or universities in Germany are recognized by <b>MCI and WHO</b></li>
								<li>The <b>cost of living is very affordable</b> during medicine course in Germany.</li>
								<li>The students will get a scholarship after clearing the scholarship exam.</li>
								<li><b>MBBS in Germany</b> is recognized across the globe.</li>
								<li>The students do not need to pay any capitation fee.</li>
								<li>The mode of <b>instruction is English</b> in Germany.</li>
								<li>The students get the opportunity to practice medicine under the guidance of renowned doctors.</li>
								<li>The tuition fee in <b>Germany medical college</b> is quite low and affordable.</li>
							</ul>
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
						Eligibility Criteria for MBBS in Germany
          </h4>
          <p className="service__info">
						The eligibility criteria of the students who want to pursue <b>MBBS in Germany</b> are as follows:
						<ul>
							<li>The students should have science in their 12th standard and should have an aggregate of 70% marks in physics, chemistry, and Biology.</li>
							<li>The students should be at least 17 years of age to take admission to <b>Germany Medical College/ Universities</b>.</li>
							<li>The students should also qualify for the <Link to={{ pathname:"https://neettestseries.co.in/free-mock-up-test/" }} target="_blank">NEET exam</Link> with passing marks to apply for <b>MBBS in Germany</b>.</li>
							<li>The students should have English subject in their higher secondary.</li>
							<li>The students must not be more than 25 years of age.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities to Study MBBS in Germany
          </h5>
          <p className="service__info">
						<ul>
							<li>Humboldt University</li>
							<li>Philipps University</li>
							<li>University Heidelburg</li>
							<li>Lubeck University</li>
							<li>Rwth Aachen University</li>
							<li>Magdeburg University</li>
							<li>Munster University</li>
							<li>Wurzburg University</li>
							<li>Tubingen University</li>
							<li>Freiburg University</li>
							<li>Witten/Hercke University</li>
							<li>Albert Ludwing’s Universitat Freiburg</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h6>
          <p className="service__info">
						The necessary documents for taking <b>MBBS Admission in Germany</b> are the following:
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
							<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the fees to Germany Medical College.</li>
							<li>A medical checkup certificate is also essential</li>
						</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">
						MBBS Fees in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h6>
          <p className="service__info">The <b>fees structure for the Indian students studying MBBS in Germany</b> will range from 10 to 20 lakhs per year.</p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Germany Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students that take <b>MBBS admission in Germany:</b>
            <ul>
							<li>The students should always be cautious of their surroundings.</li>
							<li>The Indian Students are advised to apply in the Germany Medical College within the time</li>
							<li>They must avoid the company of dangerous people.</li>
							<li>They should not stay outside late in the night.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pros and Cons of Studying MBBS in Germany
          </h6>
					<p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek admission to <b>Germany Medical College</b>. But Germany has more benefits as compared to other countries with very fewer cons:<br/><br/>

						The MBBS degree that students obtain from <b>Germany medical college</b> is globally renowned and holds great worth. The Indian students that take admission in best colleges/universities in Germany are recognized by the MCI (medical council of India). The students become eligible for working in government hospitals after completing <b>MBBS in Germany</b>.<br/><br/>

						The climate conditions in Germany is cold most of the time most of the time that might be hard for students to adapt. The local language in Germany is German so the students might feel the language as a barrier outside the university campus. But the coaching in <b>Germany Medical College</b> is conducted in English.
					</p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						VISA Procedure for MBBS in Germany
          </h6>
          <p className="service__info">
						The students need to fill up the online application form with the right details all the required documents. The students then will receive offer letter from the university that they have applied to study <b>MBBS in Germany</b>. They need to pay the <b>MBBS Fees in Germany</b> and then they have to apply for the visa and once they receive the student VISA card, they can book the tickets!
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Germany!</h6>
          <p className="service__info">
						It is necessary that the students must take MCI coaching in Germany that enables them to practice medicine in India. NBE conducts MCI Screening Test which is a licensing exam to practice in India after completing <b>MBBS in Germany</b>. But the students that wish to pursue postgraduate medical courses in India need to qualify National Exit Test (NEXT) exam and also offer license to practice their medical career in India.
          </p>
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
						USMLE (United States Medical Licensing Examination) Coaching in Germany
          </h6>
          <p className="service__info">
						USMLE is the United States Medical Licensing Examination conducted for MBBS graduates that wish to start their medical careers in the USA. USMLE is classified into 3 steps as below:
						<ul>
							<li>USMLE is a one-day test that includes multiple-choice questions. Most of the students prefer to give at the end of the second year of their MBBS course. It focuses on the knowledge of basic sciences such as anatomy, biochemistry, behavioral sciences, pathology, pharmacology, immunology, physiology, and microbiology.</li>
							<li>It is a two day test that will be given by the MBBS students in the fourth year of their MBBS course. This exam is further classified into two stages such as- CK (Clinical Knowledge) and CS (Clinical Skills).</li>
							<li>It is also a two-day test that students generally prefer to five once they complete the first-year residency. Day 1 Test of Step 3 is known as the Foundation of Independent Practice (FIP) which is an MCQ format test. Day 2 Test is known as Advanced Clinical Medicine (ACM) in which students need to attempt about 180 MCQs and 13 computer-based case simulations.</li>
						</ul>
          </p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
						PG Options after MBBS in Germany
          </h6>
          <p className="service__info">
						Germany medical universities provide several types of medical courses to the students. The following are the PG Options after <b>MBBS in Germany:</b>
						<ul>
							<li>The students can opt for MD in Germany</li>
							<li>They can do medical specialization</li>
							<li>They have to study only for 6 years for MD courses in Germany</li>
							<li>They do not have to spend much amount for post-graduation courses from Germany.</li>
						</ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
						Vacations during MBBS in Germany
          </h6>
					<p className="service__info">
						Germany medical universities provide vacations to students who are pursuing <b>MBBS in Germany</b> such as:
						<ul>
							<li>The students will get summer vacations in between July to August</li>
							<li>They will get winter vacations in between February to March</li>
							<li>They will also get Christmas holidays</li>
						</ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career Options after Completing MBBS in Germany
          </h6>
          <p className="service__info">
						Following are the career options after completing <b>MBBS in Germany:</b>
						<ul>
							<li>The students can opt for the PG course.</li>
							<li>They can join medical research works in Germany.</li>
							<li>Some German universities offer the opportunity to the MBBS graduates to practice in private hospitals</li>
							<li>After the completion of the <b>MBBS in Germany</b>, The students can also work in various countries at a high salary package.</li>
						</ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
						Students face huge problems due to the Fraud Agents
          </h6>
          <p className="service__info">
						The students do not have to pay MBBS 6-year fees together in any government medical university in Germany. If any agent asks for the whole 6-year fees, it’s their own scheme. If the students pay whole fees and got <b>MBBS Admission in Germany</b> where they taught <b>MBBS in Germany</b> then they cannot change the university.<br/><br/>

						As there is no requirement to pay any donation fee or capitation fee for taking <b>MBBS Admission in Germany</b>, so the students must aware of not paying any donation fees to any agent.<br/><br/>

						It is recommended to students to qualify MCI screening test coaching (online) in India only before going Germany for pursuing MBBS. They do not have to trust any false promises of any agent. Because the MCI screening test coaching is not provided in most of the Germany medical universities.<br/><br/>

						Therefore, the student should consult New-Lyf for any information regarding <b>MBBS Admission in Germany</b>. We provide transparent information to the students so that they fulfill their wish to pursue <b>MBBS in Germany</b> in the English-taught universities with reasonable and accurate fees.
          </p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
						How to reserve your MBBS Seat in Germany for {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} Admission
          </h6>
          <p className="service__info">
						Germany is the best place that has the best institutes of medicine in the world. The admission procedure for <b>MBBS in Germany</b> is quite hard compared to other countries. Germany provides free education that is extremely challenging for international students to get an MBBS seat with the top German medical universities. The following is the eligibility criteria to get admission with best Germany medical universities:
						<ul>
							<li>The students must have 90% marks in 12th standard</li>
							<li>They must have cleared the 1st year of graduation with over 58%.</li>
							<li>Proof of certificate of clearing DSH (Deutsche Sprachprüfung für den Hochschulzugang) exam.</li>
							<li>Marks of TOEFL and IELTS are compulsory.</li>
						</ul>
          </p>
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
						New-Lyf is one of the best overseas education consultants in India. We have already placed hundreds of Indian students in Germany for pursuing MBBS course in the top medical universities that taught MBBS course in English language.<br/><br/>

						We provide proper guidance to the students regarding the top universities, it’s fees structure, and many more things so that the students can have brighter career opportunities. Our aim is to place Indian students to the MCI approved Germany medical universities with reasonable fees and top-class facilities.<br/><br/>

						It is recommended to students not to take admission in free medical colleges in Germany because they lack quality education and infrastructure. But we place the students only at the best medical universities/colleges in Germany.
          </p>
        </div>
        <div id="New-Lyf_sec">
          <h6 className="service__sub__title">
						Services by New-Lyf for Abroad Education
          </h6>
					<p className="service__info">
						Applying <b>MBBS in Germany</b> from New-Lyf, the students have the following benefits:
            	<ul>
								<li>MCI screening test coaching online</li>
								<li>Accurate and transparent counseling for MBBS in many countries</li>
								<li>Admission in top medical universities approved by MCI</li>
								<li>Perfect visa application documents without any rejection</li>
								<li>Safe travel services provided to students going abroad to pursue MBBS</li>
								<li>Support for accommodation at the campus</li>
							</ul>
          </p>
        </div>
        <div id="process_sec">
          <h6 className="service__sub__title">
            Our Process of conducting Student Counseling
          </h6>
          <p className="service__info">
            It is advisable to students to attend our counseling regarding <b>MBBS in Germany</b> to clear their doubts:
            <ul>
              <li>
                <b>Online Counseling</b>
                <br /> We provide complete information about the MBBS abroad,
                selection of the best university, advantages & disadvantages of
                pursuing MBBS in different countries, and clear each doubt of
                the students so that they can study MBBS and fulfill their
                wish.The students can get online counseling session from the CEO
                of New-Lyf and can clear their doubts.
              </li>
              <li>
                <b>Tele-Counseling</b>
                <br /> New-Lyf has a team of expert counselors that provide
                accurate information from MBBS to PG courses to the students.
                The students can interact with any of the expert counselor
                through phone call, SMS, Whatsapp, Email, and more and get
                resolved their queries regarding MBBS in abroad.
              </li>
              <li>
                <b>Personal Counseling</b>
                <br /> The students do not need to travel to our head office
                only as they can also visit our office in Bangalore, Kochi,
                Chennai, Hyderabad, Bihar, Lucknow & Mumbai.
              </li>
            </ul>
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Germany</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Which university are the best options to study MBBS in Germany for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">
									<ul>
										<li>Heidelberg University</li>
										<li>Lubeck University</li>
										<li>Rwth Aachen University</li>
										<li>Magdeburg University</li>
										<li>Munster University</li>
									</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Is an MBBS in Germany a Good Option?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">Yes, pursuing MBBS in Germany is definitely a good option truly because it is well known for its quality and reasonable medical education.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How it is beneficial to study MBBS in Germany for Indian students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Medical students coming from India to pursue <b>MBBS in Germany</b> can easily get Indian food in hostels which makes them comfortable in adjusting to this country. <b>MBBS in Germany</b> is recognized worldwide as the <b>Germany Medical College</b> are acknowledged by WHO and MCI.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study MBBS in Germany at affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info"><b>Germany Medical College</b> charges affordable tuition fees from international students. So, it is quite worthy & cost-effective for Indian students to study <b>MBBS in Germany</b>.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What are the admission requirements for an MBBS in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
										<ul>
											<li>The students should have science in their 12th standard and should have an aggregate of 70% marks in physics, chemistry, and Biology.</li>
											<li>The students should be at least 17 years of age to take admission to Germany Medical College/ Universities.</li>
											<li>The students should also qualify for the NEET exam with passing marks to apply for MBBS in Germany.</li>
											<li>The students should have English subject in their higher secondary.</li>
											<li>The students must not be more than 25 years of age.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What is the NEET minimum marks to join an MBBS in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">The NEET minimum marks to join an MBBS in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} is 50 percentile.</p>
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
          Apply To MBBS Universities In Germany
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GermanyForm/>
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

export default MbbsGermany;