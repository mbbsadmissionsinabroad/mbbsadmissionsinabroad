import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import ArmeniaForm from "../components/ContactForm/ArmeniaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsArmenia() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Armenia for Indian Students at MCI Approved University',
    description: 'Study MBBS in Armenia from Top Medical Universities. Destinex provides all guidance & assistance to Indian Students for Admission in Armeniana Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-armenia/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Armenia'
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS In Armenia</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-armenia.png"
          alt="Study In Armenia"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
					Nowadays, most students prefer Armenia as a popular destination for studying MBBS in Armenia. It is truly a rewarding investment of time, finance and career opportunities to study MBBS in Armenia universities.<br/>
					Armenia has one of the best Medical Universities and well known for quality and affordable medical education. Almost every Armenia Medical University is recognized by the world’s major organizations such as WHO, MCI, and UNESCO. It is a golden opportunity for students to study MBBS in Armenia at affordable prices.<br/>
					Armenia provides an MBBS degree program as MD which is equivalent to MBBS in India. An Armenia MBBS college fee is amounting to 15 to 20 lakhs for the entire course and the admission procedure in Armenian colleges/universities is quite easy and simple.
          </p>
          <ul className="hyperlink">
            <li>
              <img src="/assets/left-arrow.png" alt="Left Arrow" /> Index
            </li>
            <li>
              <a href="#about_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> About MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#why_mbbs_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Why MBBS in Armenia?
              </a>
            </li>
            <li>
              <a href="#benefits_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#university_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Armenia Top
                Universities
              </a>
            </li>
            <li>
              <a href="#requirements_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirements for MBBS Admission in Armenia 2020-2021
              </a>
            </li>
            <li>
              <a href="#visa_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Visa Procedure for MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#advice_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Armenia Advice for Indian Students
              </a>
            </li>
            <li>
              <a href="#pros_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Pro & Cons of Studying MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#mci_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> MCI Coaching in Armenia!
              </a>
            </li>
            <li>
              <a href="#usmle_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Armenia
              </a>
            </li>
            <li>
              <a href="#pg_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> PG Options after MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#vacations_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Vacations during MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#career_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Career Options after Completing MBBS in Armenia
              </a>
            </li>
            <li>
              <a href="#problems_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents
              </a>
            </li>
            <li>
              <a href="#reserve_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How reserve your MBBS Seat in Armenia for 2020 Admission
              </a>
            </li>
            <li>
              <a href="#charges_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Service & Consultancy Charges of Destinex
              </a>
            </li>
            <li>
              <a href="#destinex_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Services by Destinex for Abroad Education
              </a>
            </li>
            <li>
              <a href="#process_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Our Process of conducting Student Counseling
              </a>
            </li>
            <li>
              <a href="#faq_sec">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Armenia FAQ
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
          <h2 className="service__sub__title">About Armenia</h2>
          <p className="service__info">
					Armenia is a former Soviet republic in the mountainous Caucasus area amongst Asia and Europe. Armenia shares a boundary with 4 nations and those are Turkey, Azerbaijan, Georgia, and Iran. The climate in Armenia is continental with a huge difference between the seasons. The temperature is between -12 and -15C (5-10F) in winter and +25C (77F) in summer. It has some beautiful centuries-old churches.
					</p>
					<img src="/assets/images/banner-advertisement.png" alt="Banner Ad" />
        </div>
        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Why MBBS Study in Armenia</h3>
          <p className="service__info">
						The students who wish to study MBBS abroad can take admission in Armenia Universities/colleges. There are various reasons for opting Armenia MBBS Colleges such as:
						<ul>
							<li>Armenia MBBS College offers several specialization courses in the medical sector.</li>
							<li>The students who are studying medicine in Armenia are eligible to attend internships from the second year onwards.</li>
							<li>While studying MBBS in Armenia, the Medical University provides several clinical and Post Graduate programs.</li>
							<li>There is no requirement of any entrance tests for taking MBBS admission in Armenia</li>
							<li>Armenia is considered as a safe country for Indian medical students.</li>
							<li>The Armenia Medical Universities are mostly acknowledged and recognized by the Medical Council of India (MCI)</li>
							<li>The cost of living in Armenia is economical and the Armenia MBBS College fee is very affordable.</li>
							<li>The hospitals associated with the Armenia MBBS University provide the best quality health care and utilize the latest medical technologies and instruments.</li>
							<li>Armenia Medical University integrates theoretical and practical learning in such a way that students are taught in the most effective way possible.</li>
						</ul>
          </p>
        </div>
        <div id="benefits_sec">
          <h4 className="service__sub__title">
						Benefits of study MBBS in Armenia for Indian Students 2020
          </h4>
          <p className="service__info">
						All Armenia Medical Universities provide the best quality of MBBS education at an affordable cost. Study MBBS in Armenia is very beneficial for Indian students because of the following reasons:
							<ul>
								<li>No entrance exam for taking MBBS admission in Armenia.</li>
								<li>The fee of Armenia MBBS College is very reasonable as compared to any other country.</li>
								<li>Students are eligible for Internships from the second year itself.</li>
								<li>Each Armenia Medical University is approved by MCI.</li>
								<li>The procedure for getting Admissions in Armenia is very easy.</li>
								<li>The medium of teaching MBBS in Armenia is English.</li>
							</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities for MBBS in Armenia
          </h5>
          <p className="service__info">
            Some of the top universities in Russia are as follows:
            	<ul>
								<li>St Theresas Medical University, Armenia</li>
								<li>University of Traditional Medicine Study, Armenia</li>
								<li>Haybusak University of Yerevan, Armenia</li>
								<li>Yerevan State Medical University, Armenia</li>
								<li>Armenina Medical Institute, Armenia</li>
							</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
						Requirements for MBBS Admission in Armenia 2020-2021
          </h6>
          <p className="service__info">
						The Indian students should fulfill some essential requirements for taking MBBS Admission in Armenia and these are as follows:
            	<ul>
								<li>The students should be at least 17 years of age to take MBBS admission in Armenia.</li>
								<li>The primary subjects of the students should be physics, chemistry, and biology in their higher secondary.</li>
								<li>The students should have an aggregate of 50% marks in science for general category and 40% marks for reserved category.</li>
								<li>The students must not be more than 25 years of age.</li>
								<li>The students must have qualified the NEET exam with the minimum qualifying marks.</li>
							</ul>
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa Procedure for MBBS in Armenia
          </h6>
          <p className="service__info">
						There are some general requirements to get the student visa of Armenia such as:
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
								<li>The bank copy of guardians must be submitted which indicates that they have sufficient funds to pay the Armenia MBBS College fees</li>
								<li>A medical checkup certificate is also essential</li>
							</ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Armenia Advice for Indian Students
          </h6>
          <p className="service__info">
						The essential information for Indian students in the process of the study MBBS in Armenia:
            <ul>
							<li>MBBS admission in Armenia happens generally in July or August</li>
							<li>The Indian Students are advised to apply in the Armenia Medical College within the time</li>
							<li>Armenia Medical University sends the admission letter after half a month of time</li>
							<li>VISA approval takes around 2 months to get sanctioned.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pro & Cons of Studying MBBS in Armenia
          </h6>
          <p className="service__info">
						Every country has its pros and cons that can benefit as well as effect Indian students who seek MBBS in Armenia. But Armenia has more benefits as compared to other countries with very fewer cons.
						<ul>
							<li><b>Pros of Studying MBBS in Armenia</b>
								<ul>
									<li>There is no requirement to pay a donation or capitation fee for pursuing MBBS admission in Armenia.</li>
									<li>Study MBBS in Armenia and the cost of living is very reasonable.</li>
									<li>Armenia Medical University has a very low tuition fee structure that ranges between 3 – 5 lakhs per year.</li>
									<li>There is no need of entrance test for pursuing MBBS in Armenia</li>
									<li>The Indian students who want to continue their practice in India after completing their course can get the coaching required to clear the MCI screening test. They do not have to pay anything extra to get the coaching for MCI screening test and take up the classes along with their course curriculum only.</li>
									<li>More than 2000 students are taking MBBS Admission in Armenia every year. The Indian students will also get to experience the knowledge and the understanding of different cultures and traditions followed by the Armenia population.</li>
									<li>The top medical universities in Armenia are recognized and approved by the Medical Council of India (MCI) which is an added benefit for all the Indian students.</li>
									<li>Many universities in Armenia are loaded with modern equipment in their hospitals for engaging students with the best medical practices followed worldwide.</li>
									<li>The medical degrees awarded to students are recognized by WHO, UNESCO, and the MCI. It provides a great benefit to them to work practically anywhere in the world.</li>
									<li>Once the students complete the first year of MBBS in Armenia, they are offered internships to be pursued in the hospitals affiliated with that Armenia medical college.</li>
									<li>Each MCI approved Armenia Medical University provides hostels to the Indian students for accommodation with Indian food.</li>
								</ul>
							</li>
							<li><b>Cons of Studying MBBS in Armenia</b>
									<ul>
										<li>The local language in Armenia is Armenian so the students might feel the language as a barrier outside the university campus. But the coaching of MBBS in Armenia is conducted in English.</li>
										<li>The entire Visa process for Armenia takes more than two months after document submission to the concern embassy.</li>
										<li>The students must be careful while choosing the right education consultancy.</li>
										<li>The climate conditions in Armenia often become problematic for some students to adjust well.</li>
									</ul>
							</li>
						</ul>
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Armenia!</h6>
          <p className="service__info">
						MBBS students can start MCI Coaching in Armenia medical universities from the 1st year of their MBBS course. The students get top-class medical faculties that offer in-depth knowledge regarding the MCI exam.<br/>
						National Board of Examination (NBE) conducts MCI Screening Test which is a licensing exam to practice in India after completing <b>MBBS in Armenia</b>. But the students that wish to pursue postgraduate medical courses in India need to qualify National Exit Test (NEXT) exam and also offer license to practice their medical career in India.
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
						USMLE (United States Medical Licensing Examination) Coaching in Armenia
          </h6>
          <p className="service__info">
						USMLE coaching enables medical students to practice medicine in the USA.<br/>USMLE exam include an in-depth assessment of MBBS students regarding their skills, values, and attitudes in real-life practices during patient-centered scenarios. After clearing this exam, the students get a license to practice medicine in the USA.<br/>USMLE is classified into 3 steps as below:<br/>
							<ol>
								<li>USMLE is a one-day test that includes multiple-choice questions. Most of the students prefer to give at the end of the second year of their MBBS course. It focuses on the knowledge of basic sciences such as anatomy, biochemistry, behavioral sciences, pathology, pharmacology, immunology, physiology, and microbiology.</li>
								<li>It is a two day test that will be given by the MBBS students in the fourth year of their MBBS course. This exam is further classified into two stages such as- CK (Clinical Knowledge) and CS (Clinical Skills).
									<ul>
										<li>In CK exam, the students find multiple choice questions on clinical sciences like surgery, pediatrics, obstetrics & gynecology, and internal medicine.</li>
										<li>In CS exam, the students need to examine and diagnose the patients and they need to travel to one of the five testing centers across the country for step 2 CS medical.</li>
									</ul>
								</li>
								<li>It is also a two-day test that students generally prefer to five once they complete the first-year residency. Day 1 Test of Step 3 is known as the Foundation of Independent Practice (FIP) which is an MCQ format test. Day 2 Test is known as Advanced Clinical Medicine (ACM) in which students need to attempt about 180 MCQs and 13 computer-based case simulations.</li>
							</ol>
          </p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
						PG Options after MBBS in Armenia
          </h6>
          <p className="service__info">
						Following are the PG options after <b>MBBS in Armenia:</b>
            <ul>
							<li>After completing MBBS from Armenia medical universities, the students can opt from a variety of options to pursue their PG courses.</li>
							<li>They can choose Indian medical colleges for PG courses but after qualifying the MCI screening test.</li>
							<li>They can also choose abroad medical colleges for PG courses but they need to qualify the respective screening tests of that country.</li>
						</ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
						Vacations during MBBS in Armenia
          </h6>
          <p className="service__info">
						The students studying MBBS in Armenia can have two vacations between semesters in a year such as:
            <ul>
              <li>
								The students can take their summer vacation in the middle of May or June.
              </li>
              <li>
								They take their winter vacation that starts between Decembers to January.
              </li>
            </ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career Options after Completing MBBS in Armenia
          </h6>
          <p className="service__info">
						After completing <b>MBBS in Armenia</b> , the Students have a very bright career ahead because the MBBS degree is globally recognized and has global importance. The students have the following career options after completing <b>MBBS in Armenia</b>:
            <ul>
              <li>
								The students can settle in Armenia after getting an MBBS degree from Armenia medical university.
              </li>
              <li>
								They can either practice in Armenia or can opt for PG in medicine.
              </li>
              <li>
								Indian students can come back to India to practice medicine but they need to qualify the EXIT exam and fulfill the eligibility criteria for the same.
              </li>
              <li>
								They can also go for hospital management courses. Hospital management is a fast-growing career nowadays and has a good scope.
              </li>
              <li>
								MBBS graduates can opt for USMLE exam conducted in the USA
							</li>
							<li>
								After complete <b>MBBS in Armenia</b>, they can also opt for MD in Germany.
              </li>
            </ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
						Students face huge problems due to the Fraud Agents
          </h6>
          <p className="service__info">
						The students do not have to pay MBBS 6-year fees together in any government medical university in Armenia. If any agent asks for the whole 6-year fees, it’s their own scheme. If the students pay whole fees and got <b>MBBS Admission in Armenia</b> where they taught <b>MBBS in Armenia</b> then they cannot change the university.<br/><br/>
						As there is no requirement to pay any donation fee or capitation fee for taking <b>MBBS Admission in Armenia</b>, so the students must aware of not paying any donation fees to any agent.<br/><br/>
						It is recommended to students to qualify MCI screening test coaching (online) in India only before going Armenia for pursuing MBBS. They do not have to trust any false promises of any agent. Because the MCI screening test coaching is not provided in most of the Armenia medical universities.<br/><br/>
						Therefore, the student should consult Destinex for any information regarding <b>MBBS Admission in Armenia</b>. We provide transparent information to the students so that they fulfill their wish to pursue <b>MBBS in Armenia</b> in the English-taught universities with reasonable and accurate fees.
          </p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
						How reserve your MBBS Seat in Armenia for 2020 Admission
          </h6>
          <p className="service__info">
						The admission process for applying for the MBBS in any Armenia medical university is very simple and easy to follow such as:
            <ul>
              <li>
								The students need to fill the application form correctly without any mistakes.
              </li>
              <li>
								They should send the filled application form to the respective university directly. If the students have filled the form offline then they can send it to the respective university with all the necessary documents required.
              </li>
              <li>
								When the university gets the application form, the student receives an offer letter or acceptance letter from that university.
              </li>
              <li>
								Once the admission is confirmed, the students need to pay the admission fee.
              </li>
              <li>
								When the students get printed admission receipt, they should apply for the visa through the Armenian embassy along with necessary documents.
              </li>
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
						Service & Consultancy Charges of Destinex
          </h6>
          <p className="service__info">
						Destinex is one of the best overseas education consultants in India. We have already placed hundreds of Indian students in Armenia for pursuing MBBS course in the top medical universities that taught MBBS course in English language.<br/><br/>
						We provide proper guidance to the students regarding the top universities, it’s fees structure, and many more things so that the students can have brighter career opportunities. Our aim is to place Indian students to the MCI approved Armenia medical universities with reasonable fees and top-class facilities.<br/><br/>
						It is recommended to students not to take admission in free medical colleges in Armenia because they lack quality education and infrastructure. But we place the students only at the best medical universities/colleges in Armenia.
          </p>
        </div>
        <div id="destinex_sec">
          <h6 className="service__sub__title">
						Services by Destinex for Abroad Education
          </h6>
					<p className="service__info">
						Applying <b>MBBS in Armenia</b> from Destinex, the students have the following benefits:
            <ul>
              <li>MCI screening test coaching online</li>
              <li>
                Accurate and transparent counseling for MBBS in many countries
              </li>
              <li>Admission in top medical universities approved by MCI</li>
              <li>Perfect visa application documents without any rejection</li>
              <li>
                Safe travel services provided to students going abroad to pursue
                MBBS
              </li>
              <li>Support for accommodation at the campus</li>
            </ul>
          </p>
        </div>
        <div id="process_sec">
          <h6 className="service__sub__title">
						Our Process of conducting Student Counseling
          </h6>
          <p className="service__info">
						It is advisable to students to attend our counseling regarding <b>MBBS in Armenia</b> to clear their doubts:	
            <ul>
              <li>
                <b>Online Counseling</b>
                <br /> We provide complete information about the MBBS abroad,
                selection of the best university, advantages & disadvantages of
                pursuing MBBS in different countries, and clear each doubt of
                the students so that they can study MBBS and fulfill their
                wish.The students can get online counseling session from the CEO
                of Destinex and can clear their doubts.
              </li>
              <li>
                <b>Tele-Counseling</b>
                <br /> Destinex has a team of expert counselors that provide
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
          <h6 className="service__sub__title">MBBS in Russia FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Armenia good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="service__info">
										Armenia is considered as a safe nation for Indian students to pursue MBBS in Armenia.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">How much does cost MBBS in Armenia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="service__info">
										It is very affordable to Study MBBS in Armenia as its cost between 15 to 20 lakhs.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is NEET required for MBBS in Armenia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="service__info">
										Yes, NEET is required for MBBS in Armenia with a minimum of 60% marks.	
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">How many years in MBBS in Armenia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p className="service__info">
										MBBS in Armenia is a 6-year MBBS course. The internship period of one year is included in this 6 year of MBBS course.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">
									Which is the best MBBS College in Armenia for Indian Students?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="service__info">Almost every MBBS College in Armenia provides the best quality education. The best MBBS College in Armenia for Indian Students is Yerevan Haybusak University.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">
									What are the career options for an Indian student doing an MBBS in Armenia?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="service__info">
										The students who complete MBBS in Armenia have many career opportunities such as:
										<ul>
											<li>Medical practice in Armenia</li>
											<li>Eligible for internship from the second year itself</li>
											<li>Opt for a postgraduate course in medicine.</li>
											<li>MBBS graduates can do licensing exam conducted in the USA which is USMLE (the United States Medical Licensing Examination)</li>
										</ul>
                  </p>
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
          Apply To MBBS Universities In Armenia
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ArmeniaForm/>
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

export default MbbsArmenia;
