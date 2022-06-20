import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from "../components/HomeCarousel";

function MbbsUzbekistan() {

  const meta = {
    title: 'MBBS Admission in Uzbekistan for Indian Students for 2022 -2023 Year',
    description: ' MBBS Admission in Uzbekistan for Indian Students for 2022 -2023 Year. MCI Approved University offer an affordable 6-year MBBS course in English medium. Call Now!',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-uzbekistan-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'mbbs in Uzbekistan, medical in Uzbekistan, mci approved Mbbs University in Uzbekistan, mbbs admission in Uzbekistan, mbbs fees in Uzbekistan'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Uzbekistan for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/MBBS in Uzbekistan.png"
          alt="MBBS Admission in Uzbekistan for Indian Students"
        />
      </div>
      <Container>
        <div>
					<p className="service__info">In recent years, there has been a huge inclination of students to pursue MBBS abroad. <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">MBBS in Uzbekistan</Link> is a great choice for Indian students interested in studying medicine abroad. Medical universities in Uzbekistan offer a <b>higher level of study in areas such as territorial pathology, diagnostics, patient care, and healthcare practice</b>, & much more. Every year, a large number of Indian students <Link to="/mbbs-admission-in-Uzbekistan-for-indian-students">study MBBS in Uzbekistan</Link>. In one of the few countries in the world, the <b>Uzbek government offers MBBS at a low cost</b>. Uzbek MBBS graduates are eligible to practice medicine anywhere around the globe. Its doctors are likewise well-known around the world.</p>

          <p className="service__info"><Link to="/mci-approved-medical-universities-in-abroad">MCI-approved medical colleges in Uzbekistan</Link> offer an <b>affordable 6-year MBBS course in English medium</b>. The total duration of medical study in Uzbekistan is 5 years. Students can participate in a year-long internship at a reputable medical facility. For Indian students, <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">Uzbekistan MBBS fees</Link> <b>are approx INR 14 to 15 lacs</b>. This figure comprises tuition fees as well as living expenses at the university, housing fees, and library fees. Universities here have a high degree of qualified teaching faculty, each of whom is an expert in their field. </p><br/>

          <p className="service__info">The educational standard is comparable to that of developed nations such as the <b>United States, the United Kingdom, Canada,</b> and others. Medical students who complete their <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">MBBS in Uzbekistan</Link> are entitled to take the <b>Medical Licensing Examination</b> and acquire a certificate that allows them to work anywhere in the world. Students are allowed to study through hands-on training. They are encouraged to participate in clinical rounds at the university's connected hospitals in order to get valuable medical experience and become good doctors.</p>

          {/* <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Uzbekistan</a></li>
            <li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria: MBBS in Uzbekistan for Indian students</a></li>
						<li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Uzbekistan?</a></li>
						<li><a href="#duration_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Duration of MBBS Course in Uzbekistan</a></li>
            <li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Admission Process for MBBS in Uzbekistan</a></li>
						<li><a href="#univ_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Medical University in Uzbekistan </a></li>
						<li><a href="#univ_fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Uzbekistan MBBS fees </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Uzbekistan </a></li>
          </ul> */}

        </div>

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Eligibility Criteria for MBBS in Uzbekistan</h2>
          <p className="service__info">To <b>study MBBS in Uzbekistan</b>, the students need to fulfill the following eligibility criteria:</p><br/>

          <p className="service__info">
            <ul>
              <li>The students must complete the 10+2 examination with a percentage of 50% for General category students.</li>
              <li>They should be 17 years as of 31St December of the year of the admission process.</li>
              <li>They should have Physics, Chemistry & Biology. They also must have English as a mandatory subject during the course of study.</li>
              <li>They must have cleared the NEET examinations.</li>
            </ul>
          </p>
        </div>

        <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://www.fmiph.uz/wp-content/uploads/elementor/thumbs/IMG_20210930_224206_099-Copy-peat5eg3fsfu4r3w1lun386xyzyoi3bpc0kudmx95w.jpg" alt="Uzbekistan" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>Fergana Medical Institute of Public Health</b></p><br/>
            <p className="service__info">Fergana Medical Institute of Public Health was established in 1991 and is situated in Fergana city, Uzbekistan under the Fergana State University. At present, it has an affiliation with various medical institutes in Uzbekistan and provides higher medical education in the category of General medicine, Medical and pedagogical, Medical and preventive case, Higher medical care, and many more.</p>

            <p className="service__info">Fergana Medical Institute has accreditation with WHO and MCI/NMC which is why its degree is valid and globally recognized. Its authentic, reliable education quality and method of teaching focused on theoretical as well as practical knowledge.</p>

            <p className="service__info">Fergana institute is one of the best medical institutes having 147 professors and around 19 departments on campus. It provides opportunities to the students for research and to become a specialist in their chosen stream or subject. It provides a world-class study environment for the students with all facilities required to become successful doctors.</p>

            <p className="service__info">The duration of the medical course at Fargana Institute is 5 years which also includes internships in the affiliated hospitals. It will give theoretical as well as practical exposure to the students and an opportunity to learn from senior or experienced doctors.</p>
            </Col>
          </Row>
        </Container>

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Admission Process to Pursue MBBS in Uzbekistan for Indian Students</h2>
					<p className="service__info">Here are the basic admission steps needed to <b>study MBBS in Uzbekistan:</b></p> <br/>
          <p className="service__info">
            <ul>
              <li>The students need to select from one of Uzbekistan's high-ranked universities to study their medicine study.</li>
              <li>They need to submit a detailed online application form to that university by logging into their respective website.</li>
              <li>Then pay the required fees when they get the approval letter from the respective university.</li>
              <li>They need to apply for a student visa to study and stay in Uzbekistan.</li>
              <li>They need to arrange for flight tickets after getting your visa from the Uzbek authorities.</li>
              <li>They must check all the essential documents you require to carry during your study of medicine in <Link to="/">MCI-approved medical colleges in Uzbekistan</Link>.</li>
              <li>When they are done with all the formalities, they are ready to fly to Uzbekistan and complete their MBBS degree in this wonderful country.</li>
            </ul>
          </p>
        </div>

        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Duration of MBBS Course in Uzbekistan</h3>
          <p className="service__info"> In Uzbekistan, the MBBS program lasts five years. The duration of the MBBS courses is explained in detail below: <br/>
            <ul>
              <li>In Uzbekistan, MBBS takes 5 years to complete. Each medical student is expected to complete a one-year internship program.</li>
              <li>The courses are delivered in English.</li>
              <li>Students are required to participate in an advanced training program provided by the university during their academics.</li>
            </ul>
          </p>
        </div>

        <div id="duration_sec">
          <h4 className="service__sub__title">
            Why MBBS in Uzbekistan?
          </h4>
          <p className="service__info">Here are the reasons to consider pursuing <b>MBBS in Uzbekistan: </b>
          <br/>
            <ul>
              <li><b>Worldwide Renowned Degrees: WDOMS, FAIMER, ECFMG,</b> and the <b>Medical Councils of major nations</b> such as the United States, the <b>United Kingdom, the Middle East, Australia, India, and Canada</b> have all certified Uzbekistan's medical universities.</li>
              <li><b>Reasonable Education:</b> Uzbekistan has various medical universities that have been recognized by international organizations such as <b>WDOMS</b> and <b>MCI (NMC)</b>. <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">MBBS in Uzbekistan fees</Link> is very low as compared to other countries.</li>
              <li><b>Top-Class Educational Practices:</b> Uzbekistan's educational techniques are of <b>the highest quality and follow modern practices</b>. This involves having the right number of students in the classroom to meet their individual learning needs.</li>
              <li><b>Expense Factor:</b> Uzbekistan is the finest option for anyone looking for a <b>low-cost MBBS abroad</b> option. The overall <b>tuition charge is affordable</b>, and the <b>cost of living in the country is quite low.</b></li>
              <li><b>English as a Medium of Instruction:</b> The medical universities in Uzbekistan follow an entirely <b>English-based curriculum</b>. So the students will not have to worry about learning a new language in order to complete their MBBS.</li>
              <li><b>Technically-enhanced learning:</b> Uzbekistan's medical universities provide some of the most <b>cutting-edge instructional technology</b>. Students can keep their education up to date by doing so.</li>
              <li><b>State-of-art infrastructure:</b> Medical universities in Uzbekistan are completely <b>equipped with current technology, technological developments, laboratories, and libraries</b>. These are utilized to train and educate medical students so that they can one day become great doctors.</li>
              <li><b>No Donation required:</b> To get admission to the top <b>MCI-approved medical colleges in Uzbekistan</b>, the students do not need to pay any additional fees or donations.</li>
          </ul>
          </p>
        </div>

        <div id="process_sec">
          <h5 className="service__sub__title">
          About Uzbekistan
          </h5>
          <p className="service__info">Uzbekistan is a Central Asian country bordered in the southwest by the Amu Darya and the northeast by the Syr Darya. Kazakhstan to the northwest, Tajikistan to the east, Afghanistan to the south, and Kyrgyzstan to the north bordered the country. Tashkent is Uzbekistan's capital city. Uzbekistan has a continental climate, with hot summers and freezing winters. The average summer temperature is around 40°C, while the average winter temperature is around -2°C. The temperatures are as low as -40°C possible. </p>
        </div>

        <div id="univ_sec">
          <h6 className="service__sub__title">
            Benefits of MBBS in Uzbekistan for Indian Students
          </h6>
          <p className="service__info">
          <ul>
            <li>Medical students studying <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">MBBS in Uzbekistan</Link> have a plethora of opportunities to enroll in student exchange programs at various medical universities and get a dual degree.</li>
            <li>The MBBS degree earned in Uzbekistan is recognized in India and around the world.</li>
            <li>Medical courses are taught in English at universities. Moreover, it is also the language of communication within and around the universities.</li>
            <li>Uzbekistan is a well-known option to <Link to="/mbbs-admission-in-uzbekistan-for-indian-students">study MBBS in Uzbekistan</Link>.</li>
            <li>Medical universities in Uzbekistan adopt systematic and pragmatic approaches in their MBBS programs.</li>
            <li>Medical students pursuing an MBBS in Uzbekistan receive a high-quality, modern, and internationally recognized medical education.</li>
            <li>Uzbekistan is a culturally varied country that is also one of the safest places to study medicine abroad.</li>
            <li>MCI, FAIMER, ECFMG, MCC, and other international organizations have recognized Uzbekistan's top medical universities.</li>
          </ul>
          </p> <br/>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Pros & Cons of Studying MBBS in Uzbekistan
          </h6>
          <p className="service__info">Here are the pros of pursuing medicine in Uzbekistan:</p> <br/>
          <p className="service__info">
            <ul>
              <li>Uzbekistan offers the highest educational standards and a low cost of medical education.</li>
              <li>Many government-funded medical universities exist in Uzbekistan, and many of these medical universities are accredited by MCI and WHO.	</li>
              <li>The language of instruction in Uzbekistan's medical universities is English. This makes studying in Uzbekistan's medical universities quite convenient for Indian students.	</li>
              <li>Uzbekistan has excellent infrastructure, and the country's overall atmosphere is excellent.	</li>
              <li>The MBBS course in Uzbekistan places a greater emphasis on practical parts of education.</li>
              <li>Uzbekistan's general cost of living is likewise quite inexpensive.</li>
              <li>Traveling to Uzbekistan is not difficult because there are numerous direct flights from India.</li>
            </ul>
          </p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Here are the cons of pursuing medicine in Uzbekistan:
          </h6>
          <p className="service__info">
            <ul>
              <li>In Uzbekistan, Indian students may experience homesickness.</li>
              <li>Indian students may find it difficult to make friends with the locals. This is primarily due to the language barrier that Indian students in Uzbekistan will experience.</li>
            </ul>
          </p>
        </div>

        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Uzbekistan</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is Uzbekistan good for MBBS?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">Uzbekistan has great medical education. It complies with the international instruction standard. Uzbekistan's MBBS program is one of the most prestigious options for Indian students who are interested in practicing medicine abroad.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">How long is MBBS in Uzbekistan?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">In Uzbekistan's medical universities, the MBBS degree takes a total of 5 years to finish.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">What is the MBBS fee structure in Uzbekistan per year?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">For Indian students, <b>MBBS in Uzbekistan fees</b> is approx INR 14 to 15 lacs. This figure comprises tuition fees as well as living expenses at the university, housing fees, and library fees. Universities here have a high degree of qualified teaching faculty, each of whom is an expert in their field.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">MCI recognized Medical universities in Uzbekistan</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Here are <b>MCI-approved medical colleges in Uzbekistan:</b></p> <br/>
                  <p className="service__info">
                  <ol>
                    <li>Andijan State Medical Institute</li>
                    <li>Bukhara State Medical Institute</li>
                    <li>Tashkent Medical Academy</li>
                    <li>Samarkand State Medical Institute</li>
                  </ol>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Can I Study MBBS in Uzbekistan in English?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">The language of instruction in Uzbekistan's medical universities is English. This makes studying in Uzbekistan's medical universities quite convenient for Indian students.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Is Uzbekistan good for International MBBS Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">Uzbekistan's MBBS program is one of the most prestigious options for Indian students interested in practicing medicine abroad. Uzbekistan is one of the few countries that offer MBBS at a low cost. Graduates of Uzbekistan's MBBS program are eligible to practice medicine anywhere around the globe. Doctors from Uzbekistan are very well-known around the world. Studying in Uzbekistan's medical colleges provides a higher level of training in regional pathology, diagnostics, and medical care, among other things.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">Can Indian doctors work in Uzbekistan?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">The Republic of India and the Republic of Uzbekistan have a strong international relationship. The majority of Uzbek citizens have faith in Indian doctors and healthcare.</p>
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

export default MbbsUzbekistan;