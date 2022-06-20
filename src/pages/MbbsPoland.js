import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap";
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
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Poland</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why Study MBBS in Poland</a></li>
						<li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of Studying MBBS in Poland for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for MBBS in Poland</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities to Study MBBS in Poland </a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Poland {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
						<li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS Fees in Poland {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1} </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Poland Advice for Indian Students </a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in Poland </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Poland </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Poland </a></li>
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
          <p className="service__info">Poland is one of the best destinations to pursue MBBS because of the high-quality medical education & low-cost fees structure. <Link to="/mbbs-admission-in-poland-for-indian-students">Poland universities/colleges</Link> provide world-class infrastructure and a high standard of teaching to medical students. Poland follows the pattern & syllabus of MBBS as same as several other countries in Europe. The duration of <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland</Link> is 6 years including 1 year of compulsory internship. Poland universities/colleges are recognized by the MCI. The process of <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS admission in Poland</Link> is very smooth and easy that enables the students to apply directly to the selected top medical universities or colleges without any hassle.</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://www.umk.pl/grafika/logo-umk.png" alt="Poland" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>Nicolaus Copernicus University </b></p><br/>
            <p className="service__info">The Nicolaus Copernicus University in Toruń (NCU) was founded in 1945. It is one of the largest universities in Poland, currently comprising 16 faculties (including 3 medical faculties at Collegium Medicum UMK in Bydgoszcz). It provides graduate and postgraduate courses for 18 331 students, offering education in over 100 fields of study and 55 postgraduate courses. The university employs 4453 staff on both Toruń and Bydgoszcz campuses, over half of whom are academic teachers. NCU alumni now number around 200 000.</p><br/>
            <p className="service__info">NCU has state-of-the-art research infrastructure including the National Laboratory of Atomic, Molecular and Optical Physics (FAMO), the Center for Quantum Optics and the Interdisciplinary Center for Modern Technologies to name but a few, as well as modern teaching facilities comprising, among others, Collegium Humanisticum and the brand new University Sports Centre. The Centre for Astronomy in Piwnice near Toruń houses a unique 32-meter radio telescope. Spitsbergen (in the Arctic Sea) is home to NCU Polar Station. The university has also organized the Polish Historical Mission at the University of Würzburg. NCU researchers can boast a number of spectacular successes which include, among others, the design and construction of an Optical Coherence Tomography instrument, an ultra-modern device for medical eye examinations.</p><br/>
            <p className="service__info">NCU took part in the competition of the Ministry of Science and Higher Education "Excellence Initiative - Research University" and - as one of 10 Polish universities - has obtained the status of a research university. The objective of the "Excellence Initiative ¬ Research University" programme is to select and support the best Polish universities, which will be able to successfully compete with foreign institutions in the coming years. Research universities will receive a 10% higher subsidy in the years 2020-2026 for activities improving the quality of research and education. The programme is one of the most important measures undertaken as part of the reform of higher education and science in Poland.</p><br/>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://www.umb.edu.pl/photo/image/logo_uczelni/logo-i-orzel.png?2017" alt="Poland" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>Medical University of Białystok </b></p><br/>
            <p className="service__info">The Medical University of Bialystok is a modern, rapidly growing public university, with a mission to provide the best possible education for professional, responsible, leading-edge medical staff; to carry out scientific research at the most advanced level worldwide; to implement innovative solutions in cooperation with medical service providers; and to respond to social needs.</p><br/>
            <p className="service__info">Our University is continuously investing in the professional growth of our research and teaching staff. Researchers travel worldwide with numerous scholarships, internships, programs and study visits to the best research and teaching centres. The group of international researchers working in partnership with our University is larger every year. They represent global research and development centres famous for their proactive growth. Their activity contributes to the academic achievements of the University staff.</p><br/>
            <p className="service__info">129 full professors and 159 associate professors in a group of nearly 900 academic teachers represent one of the highest proportions of all universities in Poland. Staff employed at the Medical University of Bialystok are experts in their respective fields of science, members of science committees, journal editors, with many of them holding the positions of national and regional consultants. The School’s dynamic and creative staff are also a huge asset for the process of obtaining external funding from science and EU funds, and in the commercialization of research.</p><br/>
            <p className="service__info">The Medical University of Bialystok is a precursor and leader of pioneering work on artificial intelligence in medicine, and a contributor to large-scale research on genomics, proteomics, metabolomics, radiomics and bioinformatics. The first Centre for Artificial Intelligence in Medicine in this part of Europe was opened at MUB. Its role is to collect and analyse complex, superior data sets concerning patients suffering from lifestyle diseases. The University is running a population-based study, singular in this part of Europe, covering 10,000 inhabitants of Bialystok (the Bialystok Plus Study).</p>
            </Col>
          </Row>
        </Container>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why Study MBBS in Poland</h2>
					<p className="service__info">
					<b>MBBS in Poland</b> is the best option because of the following reasons:
					<ul>
						<li>There is no requirement for any entrance exam to take <Link to="/">MBBS admission in Poland</Link>.</li>
						<li>Poland colleges/universities facilitate students with a high-quality medical education system.</li>
						<li>Poland colleges/universities provide 1 year of internship with the best government as well as private hospitals.</li>
						<li>The medium of instruction in all the <Link to="/mbbs-admission-in-poland-for-indian-students">Poland medical colleges is English</Link>.</li>
						<li>The <Link to="/katowice-medical-university-poland">medical universities in Poland</Link> are recognized and approved by WHO & MCI & Poland medical degree is a globally recognized degree.</li>
						<li>After completing <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland</Link>, this country provides a blue card work permit to students so that they can get a job and settle down as well in this country.</li>
					</ul>
					</p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
						Benefits of Studying MBBS in Poland for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
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
						Requirements for MBBS Admission in Poland {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
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
						MBBS Fees in Poland {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
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

        <div>
          <h6 className="service__sub__title">
            MBBS in Poland for Indian Students
          </h6>
          <p className="service__info">Poland emerges as one of the most desirable destinations for Indian students. It offers a fascinating adventure of discovering Europe coupled with higher-quality education. <Link to="/mbbs-admission-in-poland-for-indian-students">Medical universities in Poland</Link> are well-known for providing an inclusive learning atmosphere, as well as modern and innovative equipment and exceptional infrastructure. For many Indian students, <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland</Link> is "The Dream." Poland is also a member of the EU, allowing graduates to continue their education in other European countries. Over 46,000 medical students have traveled to <Link to="/mbbs-admission-in-poland-for-indian-students">Poland to complete MBBS courses.</Link> </p>
          <p className="service__info">Poland, like many other European countries, follows the MBBS format and syllabus. In Poland, MBBS education lasts six years and includes a one-year mandatory internship. Many Indian students prefer the MBBS program in Poland. In terms of human development, the country is among the best in the world. <Link to="/mbbs-admission-in-poland-for-indian-students">Poland MBBS fees</Link> are also affordable for Indian students. Poland's universities have world-class infrastructure and a high teaching standard. Acclaimed academicians and professors teach the MBBS program.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Duration of Studying MBBS in Poland
          </h6>
          <p className="service__info">
          <ul>
            <li>Medical universities in Poland provide <b>six-year programs</b> in a variety of specializations.</li>
            <li><b>Medical, nursing, pharmacy,</b> and <b>dentistry</b> studies are available to students.</li>
            <li>The courses available to students are determined by the University of their Choice.</li>
            <li>Every university in <b>Poland includes one year of mandatory internship</b> as part of the 6-year program.</li>
            <li><b>Students from India can select universities in Poland</b> that have been approved by the NMC.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Medium of Studies
          </h6>
          <p className="service__info">
          <ul>
            <li>Poland's MBBS universities provide top-notch education to both domestic and Indian students.</li>
            <li><Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland for Indian students</Link> is taught in <b>English medium</b>. </li>
            <li>The faculty comprises teachers and academicians with great experience in teaching students</li>
            <li>The majority of the MBBS universities in Poland have international collaborations. Therefore, the <b>students can secure jobs</b> and <b>internships in other nations</b>.</li>
            <li>University professors employ a variety of instructional techniques.</li>
            <li><b>Student-centered learning, active learning, virtual classrooms,</b> and other approaches are also available.</li>
            <li>The <Link to="/katowice-medical-university-poland">MBBS universities in Poland</Link> also involve teaching in small groups and demonstrations in practical classes.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Intakes in Poland
          </h6>
          <p className="service__info">The two main intakes in Poland are the summer intake and winter intake. Winter intake begins in <b>September or October</b>. It goes on <b>until February or March in Poland</b>. The students who wish to get <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS admission in Poland</Link> to the top medical Poland universities must begin their process of application by July as the academic sessions start in September. The students must also ensure to start the MBBS admission process as soon as they get the NEET score.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Possibilities for Indian students after MBBS in Poland
          </h6>
          <p className="service__info">
          <ul>
            <li>Indian students who have completed a <Link to="/mbbs-admission-in-poland-for-indian-students">6-year MBBS program in Poland</Link> have a wide range of alternatives.</li>
            <li>After completing the <Link to="/">MBBS in Poland</Link>, you will be eligible to apply for PLAB (Professional and Linguistic Assessment Board) assessment and the <Link to="/usmle-united-states-medical-licensing-examination">USMLE (The United States Medical Licensing Examination)</Link> to continue further medical study any other country.</li>
            <li>After completing their degree, students can practice medicine and settle in Poland.</li>
            <li>Students might also relocate to any other European country to practice or further their education.</li>
            <li>Candidates who intend to return to India must pass the MCI screening test before practicing medicine or continuing their education in India.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Poland MBBS Education System
          </h6>
          <p className="service__info">
          <ul>
            <li>Getting an <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS in Poland</Link> is the same as getting an MBBS in any other European country.</li>
            <li>In Poland, the educational system is comparable to that of India.</li>
            <li><Link to="/mbbs-admission-in-poland-for-indian-students">Poland MBBS fees</Link> are affordable, yet the quality of the education is not compromised.</li>
            <li>The MBBS Poland program lasts for six years. It also involves a year of practical training in the college's teaching hospitals.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Scholarships for Studying MBBS in Poland
          </h6>
          <p className="service__info">Poland MBBS universities provide scholarships to International students. The students must visit the official website of the college to get complete information.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS Syllabus in Poland
          </h6>
          <p className="service__info">
          <ul>
            <li>Colleges in Poland, like other MBBS institutions in Europe, offer a six-year program in a variety of subjects.</li>
            <li>The curriculum is classified into 2 parts i.e. the first three years and the last three years.</li>
            <li>The first three years are focused on improving basic medical and anatomy knowledge.</li>
            <li>In the last three years, students have taken on a variety of additional disciplines and gained practical expertise in them.</li>
            <li>The MBBS students also receive internships and career opportunities abroad.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS in Poland for Indian students
          </h6>
          <p className="service__info">
          <ul>
            <li>In Polish universities, Indian students benefit from high-quality education and world-class faculty.</li>
            <li>Students who would not secure admission to Indian Universities can apply for MBBS courses in Poland.</li>
            <li>Colleges for MBBS Poland have a high intake of Indian students. Every year, the majority of international students take <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS admission in Poland</Link>.</li>
            <li>The students are exposed to European living standards. </li>
            <li>Students from Polish universities are eligible to practice medicine and other specialties in several countries throughout the world. </li>
            <li>After graduating from Polish universities, Indian students can easily pass the NMC screening test. </li>
            <li>IELTS/ TOEFL exams are not required for Indian candidates applying to <b>MBBS in Poland</b></li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Recognition of Poland Medical Universities
          </h6>
          <p className="service__info">
          <ul>
            <li>The best medical institutes and councils in the world acknowledge Polish medical universities.</li>
            <li>The National Medical Commission has acknowledged the top ten medical colleges in Poland.</li>
            <li>World Health Organizations have also recognized the best medical institutes in Poland for Indian students.</li>
            <li>These universities have collaborations with universities all across the world.</li>
            <li>These universities are also recognized by Poland's Ministry of Education.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Nicolaus Medical University in Poland
          </h6>
          <p className="service__info"><Link to="/mbbs-admission-in-poland-for-indian-students">Nicolaus Medical University in Poland</Link> was founded in 1945 and is now one of Poland's largest higher education institutions. With a world rating of 954 and a country rank of 10, it is the most popular option for medical aspirants who wish to study MBBS from abroad. It is one of the first universities in northern Poland. To take <Link to="/">MBBS admission in Poland</Link> in this university, the students must have 75% in PCB & clear the NEET exam. </p>

          <p className="service__info">The medium of instruction at <b>Nicolaus Medical University in Poland</b> is English. So, the students can concentrate more on studying MBBS courses rather than learning a new language to pursue MBBS in Poland. <b>Nicolaus Medical University fees</b> range approx 35000 USD (Rs.2450000).</p>
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
                <b className="accordion__title">How can New-Lyf education help you to study MBBS in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
									<p className="service__info">New-Lyf education can help you to choose the right medical college for you. It can also help you to choose the right accommodation. Apart from that, it can also help you with your future career decisions. Lastly, it can help you with your visa processing.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="11">
                <b className="accordion__title">Is Poland good for MBBS?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="11">
                <Card.Body>
									<p className="service__info">Because of the great quality of medical education, inexpensive tuition costs, and rapid growth rate, Poland is one of the top choices for Indian students studying MBBS overseas.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="12">
                <b className="accordion__title">Does Poland teach MBBS in English?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="12">
                <Card.Body>
									<p className="service__info">The universities offer MBBS program to domestic and international students. Students from all around the world come to Poland to study MBBS. This course is conducted entirely in English.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="13">
                <b className="accordion__title">Is MBBS in Poland cheap?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="13">
                <Card.Body>
									<p className="service__info"><b>Poland MBBS fees</b> at the top Graded Universities are around Rs. 25, 50,000.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="14">
                <b className="accordion__title">Can Indian doctors work in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
									<p className="service__info">Poland's health minister has invited foreign doctors to come to Poland. Now, they can take benefit from a new system that makes it easier for them to work here.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="15">
                <b className="accordion__title">How hard is medicine in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="15">
                <Card.Body>
									<p className="service__info">It’s not so difficult to study medicine in Poland as the whole MBBS course is taught in English. But outside the universities, language is a barrier for Indian students.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="16">
                <b className="accordion__title">Is an entrance mandatory for doing an MBBS in Poland? </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="16">
                <Card.Body>
									<p className="service__info">Yes, the students need to clear the NEET examination to get <Link to="/mbbs-admission-in-poland-for-indian-students">MBBS admission in Poland</Link>.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="17">
                <b className="accordion__title">How much are doctors paid in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="17">
                <Card.Body>
									<p className="service__info">In Poland, a Medical Doctor earns an average of PLN 244,838 per year and PLN 118 per hour. A Medical Doctor's average pay ranges from PLN 165,434 to PLN 316,917. A Medical Doctor's highest level of study is typically a Doctorate Degree.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="18">
                <b className="accordion__title">Can an Indian settle in Poland?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="18">
                <Card.Body>
									<p className="service__info">Even though the Indian population in Poland is small (about 3000 people), the majority of Indians who live there are very comfortable. Poland is an excellent place to live, with a high standard of living and a reasonable average income. When compared to India, Poland has a very good educational and medical system.</p>
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