import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import KazakhstanForm from "../components/ContactForm/KazakhstanForm";
import HomeCarousel from "../components/HomeCarousel";
import { Link } from "react-router-dom";

function MbbsKazakhstan() {
	const [modalShow, setModalShow] = React.useState(false);
	
	const meta = {
    title: 'MBBS in Kazakhstan - MBBS Admission in Kazakhstan for Indian Students',
    description: 'Study MBBS in Kazakhstan from Top Medical Universities. New-Lyf provides all guidance & assistance to Indian Students for Admission in Kazakhstan Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-kazakhstan/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Kazakhstan'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS In Kazakhstan</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-kazakhstan.png"
          alt="Study In Kazakhstan"
        />
      </div>
      <Container>
        <div>
          <p className="service__info"><Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link> is a very popular course for medical students because all <Link to="/mbbs-in-kazakhstan">top medical colleges in Kazakhstan</Link> are accredited by the Medical Council of India (MCI), World Health Organization (WHO), UNESCO, and FAIMER. This country holds a unique position among the best-rated countries to <Link to="/mbbs-in-kazakhstan">study MBBS in Kazakhstan</Link>. <br/> The degree from Kazakhstan is globally recognized and highly valued which enables the students to get a practice license in India after clearing the FMGE/MCI exam. <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link> offers a great opportunity for Indian students to excel in medicine. <br/> The official language in Kazakhstan is Kazak and Russia but the whole course is conducted in English medium. More than 60,000 medical students take <Link to="/mbbs-in-kazakhstan">MBBS Admission in Kazakhstan</Link> annually. All universities of Kazakhstan provide an affordable and economical course of MBBS. The <Link to="/mbbs-in-kazakhstan">fee of Kazakhstan medical universities</Link> is amounting to 10-20 lakhs. </p>
          <ul className="hyperlink">
            <li>
              <img src="/assets/icon.png" alt="Left Arrow" /> Index
            </li>
            <li>
              <a href="#about_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> About Kazakhstan
              </a>
            </li>
            <li>
              <a href="#why_mbbs_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS Study in Kazakhstan
              </a>
            </li>
            <li>
              <a href="#benefits_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Benefits of MBBS in Kazakhstan for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
              </a>
            </li>
            <li>
              <a href="#university_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Top Universities for MBBS in Kazakhstan
              </a>
            </li>
            <li>
              <a href="#requirements_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS Admission in Kazakhstan {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
              </a>
            </li>
            <li>
              <a href="#advice_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Kazakhstan Advice for Indian students
              </a>
            </li>
            <li>
              <a href="#pros_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Pro & Cons of Studying MBBS in Kazakhstan
              </a>
            </li>
            <li>
              <a href="#visa_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Kazakhstan
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
          <h2 className="service__sub__title">About Kazakhstan</h2>
          <p className="service__info">
						Kazakhstan is one of the most advanced and developed countries in the central Asia region. It is the 9th largest country in the world and the capital city is Astana. Kazakhstan is famous for its lush landscapes, rustic village sceneries, green valleys, sparkling lakes, and advanced cities such as Almaty and Astana.<br/><br/>
						It is one of the most traveled tourist destinations in Central Asia and the people in Kazakh are known for their hospitality. The climate in Kazakhstan is extremely continental and very dry. It has cold winters and very hot summers and the hottest month is July. The average temperature in summer is more than 30 degrees Celsius (86 °F) and the average temperature in winter is -20 °C (-4.0 °F).</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://www.uibims.com/assets/images/other/logo.png" alt="uibims" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>International Medical School</b></p><br/>
            <p className="service__info">The International Medical School (IMS), embraces the principle that mirrors the values of the medical profession. IMS is providing “Smart Medicine” program, which is General Medicine- 5 years MD Course in English Medium. This Course is equivalent to M.B.B.S. program in India.<br/> “Smart Medicine” is advanced Medical Degree Program, which will be focused more on Practical Skills & will provide the knowledge in Latest Medical Technologies. <br/> The goal of this program is to generate world class medical doctors, who will be more competent & highly trained. The IMS uses the latest equipment that has all the necessary certificates and licenses. The university consists of high qualified teachers who have specialists in higher professional education and high qualifications. It has developed technical mastery as well as qualities important to tomorrow's physicians: compassion, communication and thoughtful leadership. IMS provides advance knowledge that Develop the skills, in building a new medical education with state-of-the- art medical training tools, simulation suites and interactive small-group rooms that encourage active learning. <br /> The educational leadership of IMS constantly struggles for excellence and incorporates changes in medical knowledge and practice, and treats all members of the learning community with esteem.</p>
            </Col>
          </Row>
        </Container>
        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Why MBBS Study in Kazakhstan</h3>
          <p className="service__info">
						There are so many countries that provide MBBS course but <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link> is beneficial for the students who seeking admission in Kazakhstan medical universities because of the following reasons:
            	<ul>
								<li>The capitation fee is not charged from the students to take <Link to="/mbbs-in-kazakhstan">MBBS Admission in Kazakhstan</Link>.</li>
								<li>Kazakhstan is considered to be one of the safest countries for MBBS in Kazakhstan.</li>
								<li>Each Kazakhstan Medical University is recognized by the world’s major organizations such as WHO, MCI, UNESCO, FAIMER.</li>
								<li>Kazakhstan MBBS College provides world-class standards of living which makes MBBS in Kazakhstan effortless.</li>
								<li>The living expense during the MBBS course is quite affordable.</li>
								<li>Kazakhstan Medical Universities adopt a credit hour system approach which is useful for the students while seeking <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link>.</li>
								<li>The students can work practically in clinics which are associated by the <Link to="/mbbs-in-kazakhstan">Kazakhstan Medical universities</Link>.</li>
								<li>The students are eligible for MCI conducted screening tests after completing MBBS in Kazakhstan.</li>
								<li>The Indian students can get a student visa easily for studying MBBS in Kazakhstan</li>
								<li>The fee in Kazakhstan MBBS Colleges is quite affordable. The fees is five times lesser than the Indian universities or any other foreign university offering MBBS course.</li>
							</ul>
          </p>
        </div>
        <div id="benefits_sec">
          <h4 className="service__sub__title">
						Benefits of MBBS in Kazakhstan for Indian Students {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h4>
          <p className="service__info">
						<ul>
							<li>It is easy to get MBBS Admission in Kazakhstan because of the simple procedure for Indian students.</li>
							<li>After completing MBBS in Kazakhstan, students will get the best placement in the renowned college of India.</li>
							<li>Kazakhstan Medical University also provides scholarships to distinction students and to the students who clear the entrance exams with good scores.</li>
							<li>The country is safe for Indian students and they get everything for their survival.</li>
							<li>The students can fulfill their dream of studying MBBS in Kazakhstan with the minimum expense.</li>
							<li>The local language of Kazakhstan is Kazakh and Russian but the whole MBBS course is conducted in the English language.</li>
							<li>Modern teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
						</ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
						Top Universities for MBBS in Kazakhstan
          </h5>
          <p className="service__info">
						<ul>
							<li>Al-Farabi Kazakh National University, Almaty</li>
							<li>Asfendiyarov Kazakh National Medical University, Almaty</li>
							<li>JSC Astana Medical University, Astana, Kazakhstan</li>
							<li>JSC South Kazakhstan Medical Academy</li>
							<li>Karaganda State Medical University, Karagandy</li>
							<li>Kazakh Medical University of Continuing Education, Almaty</li>
							<li>Kazakhstan-Russian Medical University, Almaty</li>
							<li>Kokshetau State University named after Shokan Ualikhanov, Kokshetau</li>
							<li>M. Kozybayev North Kazakhstan State University, Petropavl</li>
							<li>Semey State Medical University, Semey</li>
							<li>University of International Business, Almaty, Kazakhstan</li>
							<li>West Kazakhstan Marat Ospanov State Medical University, Aktobe</li>
						</ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
            Requirements for MBBS Admission in Kazakhstan {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}
          </h6>
          <p className="service__info">
						Indian students need to fulfill some requirements to study MBBS in Kazakhstan such as:
            	<ul>
								<li>The students should have aggregate 50% marks in physics, chemistry, and biology in the 12th standard.</li>
								<li>The students should have English subject in their higher secondary.</li>
								<li>The students should be at least 17 years of age on or before 31st December of the admission year.</li>
								<li>The students need to qualify for the NEET entrance examination.</li>
								<li>The students must not be more than 25 years of age.</li>
							</ul>
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa Procedure for MBBS in Kazakhstan
          </h6>
          <p className="service__info">
						The students who want to study MBBS in Kazakhstan need a student visa. Therefore, the required documents for getting the Kazakhstan Student’s Visa are as follows:
            	<ul>
								<li>Original and photocopies of Passport.</li>
								<li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
								<li>Leaving certificate from the previous studying college.</li>
								<li>A medical checkup certificate is also essential</li>
								<li>Passport size photographs</li>
								<li>Birth certificate must be submitted to the concerned authority.</li>
								<li>The students must clear the National Medical Admission Test.</li>
								<li>A code of conduct certificate must be submitted.</li>
								<li>The students must fill the online admission form with their accurate details</li>
								<li>Copy of financials that shows sufficient funds to pay the Kazakhstan MBBS College fees</li>
							</ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Kazakhstan Advice for Indian students
          </h6>
          <p className="service__info">
						Following is important information for Indian students:
            	<ul>
								<li>It is always better to carry the enrolment credentials and student visa when you step out of the university campus.</li>
								<li>The students can apply for MBBS in Kazakhstan between July and August.</li>
								<li>The students will receive an admission letter from the Kazakhstan medical university within 2 to 4 weeks after the submission of a complete application form.</li>
								<li>Ministry usually takes approx 2 months to issue a student visa.</li>
							</ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
						Pro & Cons of Studying MBBS in Kazakhstan
          </h6>
          <p className="service__info">
						MBBS in Kazakhstan has become quite famous among Indian students who plan to pursue MBBS abroad. Here are various merits to study MBBS in Kazakhstan with fewer demerits:
            <ul>
              <li>
                <b>Pro of studying in Kazakhstan</b>
                <ul>
									<li>Kazakhstan Medical University provides both theoretical and practical skills to the students.</li>
									<li>The students have a great chance to get valuable guidance from renowned teaching staff and faculty members.</li>
									<li>The tuition fees and living expenses is much affordable for Indian medical students with high standards of living.</li>
									<li>The MBBS degree that Indian students receive from Kazakhstan colleges has worldwide recognition.</li>
									<li>Excellent weather conditions</li>
									<li>Indian students can easily get Indian foods and cuisines.</li>
									<li>More than 60,000 students take MBBS Admission in Kazakhstan per year.</li>
								</ul>
              </li>
              <li>
                <b>Cons of studying in Kazakhstan</b>
                <ul>
									<li>The local language in Kazakhstan is Kazakh and Russia so the students might feel the language as a barrier outside the university campus but the classes are conducted in English medium.</li>
									<li>The students must be careful while choosing the right education consultancy.</li>
									<li>The students need to put extra effort into learning the Kazakh Language after the class.</li>
								</ul>
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS in Kazakhstan for Indian Students
          </h6>
          <p className="service__info">Studying <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link> is one of the best options for the Indian students who desire to study MBBS from abroad as the duration of <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan is only 5 years</Link>. It directly saves 1 year of medical students and that year would be helpful for the students to seek an internship or jobs during that time. Apart from this, there are various reasons to study <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan for Indian students</Link>. Kazakhstan is safe for Indian students and they get everything for their survival while pursuing an MBBS course.</p> <br/>

          <p className="service__info"><Link to="/mbbs-in-kazakhstan">MBBS admission in Kazakhstan medical college</Link> has become a new venue for Indian students as the republic of Kazakhstan blooming in the field of medical institutions. Furthermore, Kazakhstan's climatic conditions are favorable. There are approx 5000 Indian understudies who are considering <Link to="/mbbs-in-kazakhstan">study MBBS in Kazakhstan</Link> from <Link to="/mci-approved-medical-universities-in-abroad">MCI approved medical universities</Link>. <Link to="/mbbs-in-kazakhstan">Kazakhstan MBBS fees</Link> in top universities/colleges are quite affordable. The fees are five times lesser than the Indian universities or any other foreign university offering an MBBS program.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Specialization by Kazakh Medical Universities
          </h6>
          <p className="service__info">
          <ul>
            <li>MBBS Kazakhstan applicants can choose from a variety of medical courses.</li>
            <li>Candidates are given the option of doing an internship in one of the government hospitals.</li>
            <li>You would be able to take 5 years of MBBS education.</li>
            <li>There is the possibility of obtaining MD course facilities for a period of five years.</li>
            <li>Candidates can enroll in a 5-year dentistry program.</li>
            <li>Kazakhstan's medical universities provide four-year pharmacy programs.</li>
          </ul>
          </p> <br/>
        </div>

        <div>
          <h6 className="service__sub__title">
            Duration of MBBS in Kazakhstan
          </h6>
          <p className="service__info">In Kazakhstan, the time needed to obtain an MBBS degree:</p> <br/>
          <p className="service__info">In Kazakhstani universities, the <b>MBBS program takes six years to finish</b>. The internship period at the end of the previous semester is set aside for one year. The living expenses & <Link to="/mbbs-in-kazakhstan">Kazakhstan MBBS fees for Indian students</Link> are very reasonable with high standards of living.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Medium of Teaching in Kazakhstan
          </h6>
          <p className="service__info">
          <ul>
            <li>The students can <Link to="/mbbs-in-kazakhstan">study MBBS in Kazakhstan in English</Link> as it is the medium of instruction in <Link to="/mbbs-in-kazakhstan">top Kazakhstan medical universities/colleges.</Link></li>
            <li>Local languages are also taught to the students.</li>
            <li>It assists students in communicating with locals throughout their internship.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS Education System in Kazakhstan
          </h6>
          <p className="service__info">
          <ul>
            <li>Studying <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link> has a distinct educational structure that sets it apart from other countries.</li>
            <li>Kazakhstan's medical college adheres to the tertiary education system.</li>
            <li>Universities have advanced research laboratories where medical students can receive excellent training.</li>
            <li>Kazakhstan's universities use the grading scale system. <Link to="/mbbs-in-kazakhstan">Kazakhstan MBBS fees</Link> in the <b>medical universities are amounting to 10 to 20 lakhs.</b></li>
            <li>Furthermore, Kazakhstan's universities use the European Credit Transfer and Accumulation System.</li>
            <li>In <b>MBBS from Kazakhstan</b>, the faculties follow the <b>European Commission's standards and regulations.</b></li>
            <li>In this country, there are four levels of tertiary education.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Scholarships for Studying MBBS in Kazakhstan
          </h6>
          <p className="service__info">The majority of this country's colleges provide candidates the <b>opportunity to apply for scholarships</b>. Candidates from developing nations will be able to apply for a variety of <b>foreign scholarships</b>. The candidates will also be eligible for <b>scholarships from the Kazakhstani government</b>. Furthermore, outstanding students are offered scholarship opportunities for studying <b>MBBS in Kazakhstan</b>.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS Intake in Kazakhstan
          </h6>
          <p className="service__info">Various universities in Kazakhstan have different admissions intakes. In general, most universities in Kazakhstan closed their MBBS admissions procedure by the 15th of July. As a result, it is preferable for <b>MBBS applicants to apply for admission in June 2022</b>. MBBS classes often begin in <b>2022 August or September in Kazakhstan's medical universities/colleges</b>.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
          MBBS in Kazakhstan - Is it Safe for Indian Students?
          </h6>
          <p className="service__info">Kazakhstan is one of the safest nations to study <b>MBBS in Kazakhstan for Indian students:</b></p>
          <br/>
          <p className="service__info">
          <ul>
            <li>In a survey conducted by the Kazakhstan government, India ranked among the top 50 nations that send a significant number of students to Kazakhstan for pursuing an MBBS in Kazakhstan.</li>
            <li>The Indian students who are now pursuing an MBBS course in Kazakhstan are provided with the necessary security and safety by their government.</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            PG Options after MBBS in Kazakhstan
          </h6>
          <p className="service__info">Students are allowed to work as MDs in Kazakhstan for five years. As a result, they will have numerous chances to pursue higher education here. The cost of a post-graduate course is also very low. They can even pursue a Ph.D. degree. The cost of the postgraduate course is merely 13, 49, 000 lacs for the candidates.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Career Scope after MBBS in Kazakhstan
          </h6>
          <p className="service__info">Medical students are provided with a wide range of job options. Medical applicants can seek jobs in hospitals after completing the <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan</Link>. The student can also apply for higher education. If they wish, they can join any hospital for work. </p>
          <br/>
          <p className="service__info">After completing the degree, several medical institutions offer job placement. You can study for a Ph.D. at one of the country's universities. Indian students can practice medicine in their home country. To begin a career in India, you must pass the <b>NEXT examination with good grades.</b></p>
        </div>

        <div>
          <h6 className="service__sub__title">
            MBBS Syllabus in Kazakhstan
          </h6>
          <p className="service__info">The MBBS courses have a syllabus that is <b>fairly similar to the Indian MBBS curriculum</b>. Indian students are <b>given excellent opportunities to get extensive information in the field of medicine</b>. Candidates are educated about the human body's complexity as well as medical difficulties. Candidates must visit various <b>government and private hospitals for medical practice</b> after completing the second year. Candidates have the opportunity to <b>practice under the supervision of senior doctors</b> after completing the sixth semester.</p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Recognition of Kazakhstan Medical Universities
          </h6>
          <p className="service__info">NMC recognizes all medical institutions in Kazakhstan that offer MBBS programs.</p>
          <p className="service__info">
          <ul>
            <li>National Medical Commission (NMC)</li>
            <li>World Health Organization (WHO)</li>
            <li>United Nations Educational Scientific and Cultural Organization (UNESCO)</li>
            <li>United States Medical Licensing Examination (USMLE)</li>
            <li>FAIMER (The Foundation for Advancement of International Medical Education and Research)</li>
            <li>Ministry of Education and Science</li>
            <li>General Medical Council (GMC)</li>
            <li>International Medical Education Directory (IMED)</li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Vacations during MBBS in Kazakhstan
          </h6>
          <p className="service__info">According to the rules of the Kazakhstan Government, here are the vacations gave to the candidates:</p>
          <p className="service__info">
          <ul>
            <li>During the winter season, the candidates will have a long vacation.</li>
            <li>The summer holidays are given in the Universities pursuing <Link to="/mbbs-in-kazakhstan">MBBS in Kazakhstan for Indian students.</Link></li>
            <li>They will also get the public holidays.</li>
            <li>The students will have a day off for Halloween.</li>
            <li>In Kazakhstan, <b>medical universities offer international fair vacations.</b></li>
            <li>Aside from that, <b>Kazakhstani institutions provide applicants with any national holidays.</b></li>
          </ul>
          </p>
        </div>

        <div>
          <h6 className="service__sub__title">
            Accommodation Facilities in Kazakhstan
          </h6>
          <p className="service__info">The students who <b>study MBBS in Kazakhstan</b> can have the standard hostel accommodation services available such as:</p>
          <p className="service__info">
          <ul>
            <li>International students are housed in six to seven hostels at each medical university.</li>
            <li>Hostels provide housing, meals, and laundry services.</li>
            <li>International students usually pick university hostels that are close to the institution because they are less expensive and save traveling time.</li>
            <li>The students' rooms include a bed, mattress, blanket, and bed sheet, as well as built-in furnishings.</li>
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

        <div id="faq_sec">
          <h6 className="service__sub__title">MBBS in Kazakhstan FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Kazakhstan good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="service__info">
										MBBS in Kazakhstan is an extremely valued medical degree with the best medical universities. It provides more diversity and an excellent opportunity for Indian students.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">
									How much does cost MBBS in Kazakhstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="service__info">
										The fee of the medical universities in Kazakhstan is amounting to 10-20 lakhs.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">
									Is NEET required for MBBS in Kazakhstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="service__info">
										Yes, NEET is compulsory for Indian Students.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">
									How many years in MBBS in Kazakhstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p className="service__info">
										The duration of MBBS in Kazakhstan is 6 years.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">
									Which is the best MBBS College in Kazakhstan for Indian Students?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="service__info">
										Some of the best MBBS Colleges in Kazakhstan for Indian Students are South Kazakhstan medical college, Al-Farabi Kazakh National University, Astana medical college.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">
									What are the career options for an Indian student doing an MBBS in Kazakhstan?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="service__info">
										The career options for an Indian student doing an MBBS in Kazakhstan are:
                    <ul>
											<li>Medical Degrees get from Kazakhstan MBBS Colleges or Universities have worldwide recognition.</li>
											<li>Practice as a doctor in your own country after completing the legal procedure.</li>
											<li>Appointed as a medical counselor, educator, medical professor, medical consultant, and many more.</li>
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
          Apply To MBBS Universities In Kazakhstan
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <KazakhstanForm/>
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

export default MbbsKazakhstan;