import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import GeorgiaForm from "../components/ContactForm/GeorgiaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsGeorgia() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS in Georgia - MBBS Admission in Georgia for Indian Students',
    description: 'Study MBBS in Georgia from Top Medical Universities. New-Lyf provides all guidance & assistance to Indian Students for Admission in Georgia Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-georgia/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Georgia'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Georgia</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-georgia.png"
          alt="Study In Georgia"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						Georgia has become popular among students who are pursuing MBBS especially after 2011. The medical universities of Georgia are some of the best options for any student who wants to study MBBS abroad. The admission process for studying in a medical college in Georgia is very easy compared to the usual admission processes. Students are not required to go through any sort of entrance test for the admission, as it is done on the basis of the marks obtained in class 12th. Students can attain scholarships on the basis of their marks in 12th. After graduating from a medical college in Georgia, one can apply for a screening test to get the license to practice. The medical universities and colleges in Georgia provide rich quality education with a very feasible tuition fees as compared to other foreign countries. The medical universities of Georgia have got a worldwide recognition and offer high standard infrastructure and education. The medical universities of Georgia are recognized by MCI and WHO. The students completing their MBBS course from Georgia are eligible to work in any part of the world.
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About MBBS in Georgia</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Georgia?</a></li>
            <li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of MBBS in Georgia for Indian Students 2020</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities for MBBS in Georgia </a></li>
            <li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow"  /> Requirements for MBBS Admission in Georgia 2020-2021 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Georgia Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Georgia </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa procedure for MBBS in Georgia </a></li>
						<li><a href="#mci_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MCI Coaching in Georgia!</a></li>
						<li><a href="#usmle_sec"><img src="/assets/icon.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Georgia </a></li>
						<li><a href="#pg_sec"><img src="/assets/icon.png" alt="Left Arrow" /> PG Options after MBBS in Georgia </a></li>
						<li><a href="#vacations_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Vacations during MBBS in Georgia </a></li>
						<li><a href="#career_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Career Options after Completing MBBS in Georgia </a></li>
						<li><a href="#problems_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents </a></li>
						<li><a href="#reserve_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How reserve your MBBS Seat in Georgia for 2020 Admission </a></li>
						<li><a href="#charges_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Service & Consultancy Charges of New-Lyf </a></li>
						<li><a href="#New-Lyf_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Services by New-Lyf for Abroad Education </a></li>
						<li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Our Process of conducting Student Counseling </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Georgia FAQ </a></li>
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
          <h2 className="service__sub__title">About Georgia</h2>
          <p className="service__info">
						Georgia is a country located at the Caucasus region of Eastern Europe and West Asia. The country shares its borders with Russia, Turkey, Armenia and Azerbaijan. The capital of Georgia is Tbilisi. Tbilisi is well-known for its architecture and cobblestoned streets. Majority area of the country is covered with mountains. The eastern part of Georgia experiences hot summers and cold winters while the climate in the western part of the country is influenced by elevation of the land.
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why MBBS Study in Georgia</h2>
          <p className="service__info">
						MBBS admission to a medical college in Georgia is hassle-free as there is no entrance examination. The MBBS colleges and universities in Georgia are accredited internationally by the acclaimed medical councils like WHO, MCI, FAIMER and UNESCO. The medical colleges and universities in Georgia do not accept donation. The tuition fee remains within the budget. One can easily attain a scholarship based on the merit score. Georgia provides high quality education along with good accommodation and facilities. The course duration in Georgia is 5 +1 year of internship for which one can get 4000 USD to 5500 USD per annum. A medical degree from Georgia prepares one for appearing the United States licensing exam. One can also practice in India after doing MBBS in Georgia. The classes are in the ratio 20:1 which very healthy ratio for a scholastic development of the student. The medium of instruction in medical colleges in Georgia is English, unlike the other countries abroad who insist on learning the mother tongue of the country. Also the weather conditions in Georgia are highly adaptable to Indians students in comparison to other countries with harsh climatic conditions. The students get discounts on travel within Georgia. The students acquire a lot of exposure and also get to participate in international conferences and seminars which are assets to the education provided. Georgia is safe and provides a healthy atmosphere enriching the education of the students.
          </p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
            Benefits of Studying MBBS in Georgia for Indian Students 2020
          </h3>
          <p className="service__info">
						The benefits of doing MBBS in Georgia are as follows:
						<ul>
							<li>MBBS from medical colleges and universities in Georgia are accredited by international bodies like WHO, MCI, FAIMER and UNESCO.</li>
							<li>Students pursuing their MBBS in Georgia get internships at some of the top multinational companies within the country itself.</li>
							<li>No entrance test is required for admission which makes the admission process very easier.</li>
							<li>The tuition fee is at an affordable rate in Georgia. There is no donation to be given to the MBBS colleges in Georgia. Also, the student can enroll for a scholarship based on his/her merit score.</li>
							<li>The medium of instruction is English in al the MBBS colleges.</li>
							<li>There are hostels providing Indian food for Indian students. The quality of the accommodation provided and its facilities are exemplary.</li>
							<li>The hospitals are well equipped with great infrastructure, laboratories, and technology.</li>
							<li>The career opportunities are tremendous for MBBS graduate from Georgia.</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h4 className="service__sub__title">
            Top Universities for MBBS Study in Georgia
          </h4>
          <p className="service__info">
						<ul>
							<li>“AIETI” Medical School</li>
							<li>Akaki Tsereteli State University</li>
							<li>Batumi Shota Rustaveli State University</li>
							<li>David Agmashenebeli University of Georgia</li>
							<li>David Tvildiani Medical University</li>
							<li>East Europeon University, Georgia</li>
							<li>European University</li>
							<li>Euroregioinal Teaching University LLC, Georgia</li>
							<li>Georgian American University, Georgia</li>
							<li>Georgian National University, Georgia</li>
							<li>High Medical School “Ayeti”</li>
							<li>Ivane Javakhishvili Tbilisi State University</li>
							<li>Kutaisi Medical Institute “Kutaisi”</li>
							<li>LLC Caucasus International University, Tbilisi, Georgia</li>
							<li>LTD Caucasus University, Tibilisi, Georgia</li>
							<li>New Vision University, Georgia</li>
							<li>Petre Shotadze Tbilisi Medical Academy</li>
							<li>Tbilisi Medical University “Hippocrates”</li>
							<li>Tbilisi Open Teaching University, Georgia</li>
							<li>Tbilisi Public University “Metekhi”</li>
							<li>Grigol Robakidze University,Tbilisi</li>
							<li>Tbilisi State Medical University</li>
							<li>Teaching University Geomedi, Georgia</li>
							<li>University of Georgia</li>
							<li>BAU International University, Batumi</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h5 className="service__sub__title">
            Requirements for MBBS Admission in Georgia 2020-2021
          </h5>
          <p className="service__info">
						The necessary documents for attaining admission in Georgia are the following:
            	<ul>
								<li>A birth certificate as an age proof s mandatory.</li>
								<li>10th and 12th class mark sheets.</li>
								<li>Passport size photo.</li>
								<li>Valid passport with 18 months of validity.</li>
								<li>Student VISA is mandatory.</li>
								<li>A no objection certificate.</li>
								<li>Report of HIV test.</li>
								<li>Banks statements are required for the submission.</li>
								<li>Posses the MBBS fees of Georgia 2020-21.</li>
								<li>Medical certificates for fitness proofs.</li>
								<li>Invitation letter from concerned university.</li>
								<li>Approved documents from the Ministry External Affairs.</li>
								<li>Criminal verification certificate.</li>
								<li>Health insurance certificate.</li>
								<li>Travel insurance certificate.</li>
							</ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Georgia Advice for Indian Students
          </h6>
          <p className="service__info">
						The following are the advices for the Indian students in Georgia:
            <ul>
							<li>Students must have a glimpse of the syllabus pattern of MBBS in Georgia as it is a slightly different from the syllabus followed by other countries.</li>
							<li>Students should be well-informed about the university or college that s/he has applied for an admission.</li>
							<li>One should always be cautious of his/her surroundings.</li>
							<li>Avoid company of dangerous people.</li>
							<li>Do not stay outside late in the night.</li>
							<li>Do not travel to places not sure of.</li>
						</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pro & Cons of Studying MBBS in Georgia
          </h6>
          <p className="service__info">
						Some of the challenges faced are the cold climatic condition of Georgia and the homesickness faced by the Indian students. The medical universities in Georgia are top notch. But, the private MBBS colleges in Georgia do not provide premium education yet the fee is easily affordable. Language barrier and the new culture can also be a significant challenge.<br/><br/>
						The pros are the low cost of education along with scholarship provided by the Georgian government, good accommodation and canteen facilities. The Georgian medical universities are accredited by the medical councils all over the world. It is also easy to apply and enroll. And the job opportunities are massive for a medical student graduated from a Georgian medical college.
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa procedure for MBBS in Georgia
          </h6>
          <p className="service__info">
						The candidates have to fill-in the online application form correctly provided in the websites of the respective MBBS colleges and universities. Then you need to submit all the required documents. The candidates will then get the invitation letter from the respective university. It is at this step that the candidate has to pay the admission fee. Then the student can apply for the visa. And once the visa is in hand one can book the tickets to Georgia!
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Georgia!</h6>
          <p className="service__info">
						MCI Screening Test is a licensing exam which is conducted by the National Board of Examination (NBE) that enables the candidates to practice in India after completing <b>v</b>. The students that wish to study PG medical courses in India need to qualify National Exit Test (NEXT) exam and also offer license to practice their medical career in India.
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
						USMLE (United States Medical Licensing Examination) Coaching in Georgia
          </h6>
          <p className="service__info">
						USMLE is the 3-step medical licensing exam that enables the MBBS graduates to pursue medicine abroad. The exam is conducted by the NBME (National Board of Medical Examiners) & the FSMB (Federation of State Medical Board) in following three steps:
							<ul>
								<li>USMLE is the computer-based exam with the time of 8 hours. The students need to attempt having 280 multiple-choice questions. The exam pattern includes basic principle of science, anatomy, pathology, microbiology, physiology, pharmacology, immunology.</li>
								<li>It evaluates knowledge of medicine and understanding of clinical science and clinical skills which provides provision for patient-care operation.</li>
								<li>USMLE is the computer-based examination with 500 multiple choice questions which evaluates the ability of the MBBS students to assess physical exam information, selection of initial therapies, order diagnostic tests and management of patients.</li>
							</ul>
          </p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
						PG Options after MBBS in Georgia
          </h6>
          <p className="service__info">
						The MBBS graduates from Georgian Universities can have the following PG options:
            	<ul>
								<li>The students can practice in USA after qualifying of USMLE</li>
								<li>They can practice in UK after qualifying PLAB</li>
								<li>They can practice in India after qualifying the MCI screening test</li>
								<li>They can practice in other countries too.</li>
							</ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
						Vacations during MBBS in Georgia
          </h6>
          <p className="service__info">
						<ul>
							<li>The students can get winter vacations in January for 15 days.</li>
							<li>They can also get summer vacations in July and August for two months.</li>
						</ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career Options after Completing MBBS in Georgia
          </h6>
          <p className="service__info">
						There are various career options after completing MBBS in Georgia such as:
            	<ul>
								<li>The students can pursue PG course in any country such as Germany.</li>
								<li>They can opt for hospital management course.</li>
								<li>They can set up their own clinic in India but after qualifying MCI screening test.</li>
							</ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
						Students face huge problems due to the Fraud Agents
          </h6>
          <p className="service__info">
						The students do not have to pay MBBS 6-year fees together in any government medical university in Georgia. If any agent asks for the whole 6-year fees, it’s their own scheme. If the students pay whole fees and got MBBS Admission in Georgia where they taught MBBS in Georgia then they cannot change the university.<br/><br/>
						As there is no requirement to pay any donation fee or capitation fee for taking MBBS Admission in Georgia, so the students must aware of not paying any donation fees to any agent.<br/><br/>
						It is recommended to students to qualify MCI screening test coaching (online) in India only before going Georgia for pursuing MBBS. They do not have to trust any false promises of any agent. Because the MCI screening test coaching is not provided in most of the Georgia medical universities.<br/><br/>
						Therefore, the student should consult New-Lyf for any information regarding MBBS Admission in Georgia. We provide transparent information to the students so that they fulfill their wish to pursue MBBS in Georgia in the English-taught universities with reasonable and accurate fees.
          </p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
						How reserve your MBBS Seat in Georgia for 2020 Admission
          </h6>
          <p className="service__info">
						Taking admission to the best Georgia medical universities is very simple and students need to follow the below steps:
            	<ul>
								<li>The students are required to fill the online application form along with the required documents.</li>
								<li>Once the university receives your application form, it issues an offer letter.</li>
								<li>The students then need to deposit the University fees.</li>
								<li>They receive an accreditation letter from the Ministry of Education and Science of Georgia after 30 days when a ministry order is received by the university and it issues an invitation letter to the students.</li>
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
						New-Lyf is one of the best overseas education consultants in India. We have already placed hundreds of Indian students in Georgia for pursuing MBBS course in the top medical universities that taught MBBS course in English language.<br/><br/>
						We provide proper guidance to the students regarding the top universities, it’s fees structure, and many more things so that the students can have brighter career opportunities. Our aim is to place Indian students to the MCI approved Georgia medical universities with reasonable fees and top-class facilities.<br/><br/>			
						It is recommended to students not to take admission in free medical colleges in Georgia because they lack quality education and infrastructure. But we place the students only at the best medical universities/colleges in Georgia.
          </p>
        </div>
        <div id="New-Lyf_sec">
          <h6 className="service__sub__title">
						Services by New-Lyf for Abroad Education
          </h6>
					<p className="service__info">
						Applying <b>MBBS in Georgia</b> from New-Lyf, the students have the following benefits:
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
            It is advisable to students to attend our counseling regarding <b>MBBS in Georgia</b> to clear their doubts:
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
          <h6 className="service__sub__title">MBBS in Georgia FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Georgia good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">Yes, doing MBBS in Georgia is an excellent option for an Indian student. The education is low of cost and feasible. They also provide scholarships, good accommodation and canteen facilities to the students. The Georgian medical universities are accredited by the top medical councils like WHO, FAIMER, MCI and UNESCO. It is also easy to apply and enroll. And there are myriad job opportunities for a medical student graduated from a medical college in Georgia.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">How much does MBBS cost in Georgia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">The tuition fee varies from 3300 USD to 6000 USD per annum.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is NEET required for MBBS in Georgia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Yes, NEET qualification is required for an Indian student enrolling for MBBS in Georgia.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">How many years in MBBS in Georgia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">The course duration is 6 years i.e. 5 years+1 year of internship.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Which is the best MBBS College in Georgia for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
										<ul>
											<li>Georgian American University</li>
											<li>University of Georgia</li>
											<li>East European University (EEU)</li>
											<li>European University (Formerly: European Teaching University)</li>
											<li>Tbilisi Medical Academy</li>
											<li>Geomedi Medical University</li>
											<li>Batumi Shota Rustaveli State University</li>
											<li>“AIETI” Medical School</li>
											<li>Akaki Tsereteli State University</li>
											<li>David Agmashenebeli University of Georgia</li>
											<li>David Tvildiani Medical University</li>
											<li>New Vision University, Georgia</li>
											<li>Tbilisi Medical Teaching University “Hippocrates”</li>
											<li>Caucasus International University</li>
											<li>Tbilisi State Medical University</li>
											<li>Teaching University Geomedi, Georgia</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What are the career options for an Indian student doing an MBBS in Georgia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">After the students have completed their MBBS course in Georgia they can practice in Georgia itself. They can join the private or government sector for a job. They can also complete their PG in USA or Germany. Another option is the student returning to India and practicing in India. Even the students can prepare for the United States licensing exam.</p>
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
          Apply To MBBS Universities In Georgia
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GeorgiaForm />
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

export default MbbsGeorgia;