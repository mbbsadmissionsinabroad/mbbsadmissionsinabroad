import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from "../components/HomeCarousel";

function MbbsRomania() {

  const meta = {
    title: 'MBBS Admission in Romania for Indian Students for 2022 -2023 Year',
    description: 'MBBS Admission in Romania for Indian Students for 2022 -2023 Year. MCI Approved University with five years and is followed by a year of internship. Call Now!',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-romania-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'mbbs in Romania, medical in Romania, mci approved Mbbs University in Romania, mbbs admission in Romania, mbbs fees in Romania'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Romania for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/MBBS in Romania.png"
          alt="MBBS Admission in Romania for Indian Students"
        />
      </div>
      <Container>
        <div>
					<p className="service__info"><Link to="/mbbs-admission-in-romania-for-indian-students">MBBS in Romania</Link> has become a very popular and well-known option among Indian students due to the high quality of education provided by <Link to="/">Romanian MBBS Universities</Link> and the low tuition fees. Romania is one of Europe's most populous countries. It is located in Europe's south-eastern region and is a popular destination for MBBS and other courses. Bucharest, Romania's capital is also famous for its natural beauty. In the last ten years, Romania has made significant progress as a European country. </p>

          <p className="service__info">It is now one of the most developed and modernized countries in the world, with a diverse culture. The climate and style of living are both excellent. The low cost of living has become one of the factors attracting thousands of Indian students seeking <Link to="/mbbs-admission-in-romania-for-indian-students">MBBS admission in Romania</Link> MCI-approved universities. Students in Romania can easily study medicine in English at their top and reputable medical institutions, giving them a better understanding of the principles and a greater grasp of the subject. <Link to="/mbbs-admission-in-romania-for-indian-students">MBBS in Romania for Indian students fees</Link> costs as little as INR 3, 90,000. </p><br/>

          {/* <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Romania</a></li>
            <li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria: MBBS in Romania for Indian students</a></li>
						<li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Romania?</a></li>
						<li><a href="#duration_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Duration of MBBS Course in Romania</a></li>
            <li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Admission Process for MBBS in Romania</a></li>
						<li><a href="#univ_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Medical University in Romania </a></li>
						<li><a href="#univ_fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Romania MBBS fees </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Romania </a></li>
          </ul> */}

        </div>

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Eligibility Criteria </h2>
          <p className="service__info">The MBBS program lasts six years in total, including five years of classroom instruction and one year of intense internship. <Link to="/mci-approved-medical-universities-in-abroad">MCI certified universities</Link> exist in Romania, and their eligibility criteria are as follows:</p><br/>

          <p className="service__info">
            <ul>
              <li>The candidate must be at least 17 years’ old and under 25 years old on December 31st of the admission year.</li>
              <li>The candidate must have completed his 10+2 with Physics, Chemistry, and, of course, Biology from a nationally recognized board.</li>
              <li>Because English is the medium of instruction, she or he must have passed English as a subject in 10+2.</li>
              <li>The candidate must have a 55 percent aggregate in 10+2.</li>
              <li>The candidate must have passed the NEET test with a score of 130-150.</li>
            </ul>
          </p>
        </div>

        {/* <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://manipal.edu/content/dam/manipal/mu/mcops-manipal/Images_new/mahe-header-color-final.png.transform/manipal-edu-transform-width-height-305px/image.png" alt="Romania" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>Melaka Manipal Medical College </b></p><br/>
            <p className="service__info">MMMC is the single largest contributor of doctors to the Romanian healthcare system. Since its inception in 1997, the college has steadfastly adhered to its commitment to improve the healthcare system in Romania by providing access to a range of medical courses delivered by Manipal Academy of Higher Education.</p>

            <p className="service__info">Nestled within the tranquil surroundings of Bukit Baru, Melaka, the 22-acre MMMC campus is ideally situated close to town, and is a shining example of a modern campus that balances excellent academic facilities with recreational avenues for students and staff. The campus has world-class facilities sharing space with a football field, a fully equipped sports hall and gymnasium, swimming pool and also a zen room for relaxation and recharging.</p>
            </Col>
          </Row>
        </Container> */}

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Duration of MBBS Course in Romania</h2>
					<p className="service__info">MBBS in Romania for Indian students lasts five years and is followed by a year of internship. MBBS degrees earned at Romanian universities are recognized in India. Graduate intern sessions are held in reputable government hospitals.</p>
        </div>

        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Required Documents for MBBS admission in Romania </h3>
          <p className="service__info">
            <ul>
              <li><b>MBBS admission in Romania</b> medical colleges requires the submission of all needed documentation.</li>
              <li>The students must submit a scanned copy of their 10th grade report card.</li>
              <li>They must send a scanned copy of their 12th grade mark sheet.</li>
              <li>They must submit all scanned copies of your 10th and 12th grade certificates.</li>
              <li>The scanned documentation of the school leaving certificate must be submitted.</li>
              <li>They must send scanned copies of their passport's first and last pages.</li>
              <li>A scanned copy of the birth certificate is required.</li>
              <li>As proof of physical fitness, the students must provide a medical certificate.</li>
              <li>Passport-sized photographs are required.</li>
            </ul>
          </p>
        </div>

        <div id="duration_sec">
          <h4 className="service__sub__title">
            Why MBBS in Romania?
          </h4>
          <p className="service__info">Here are the reasons for pursuing <b>MBBS in Romania:</b>
          <br/>
          <ul>
            <li>The language barrier is not an issue for pursuing <Link to="/mbbs-admission-in-romania-for-indian-students">MBBS in Romania for Indian students</Link> because the course is <b>taught in English.</b></li>
            <li>Medical faculty members at Romanian institutions have <b>decades of teaching experience</b> and <b>are experts in their fields.</b></li>
            <li>Medical universities in Romania have a variety of accreditations and recognitions to their name, indicating that their <b>students will have global job opportunities</b> in the future.</li>
            <li>The educational standards in Romania's MBBS training programs are excellent. These <b>universities have a track record of generating world-class doctors.</b></li>
            <li>Universities have well-built laboratories with all of the necessary equipment. It includes a <b>UV Spectrophotometer, a microscope with a camera, CT scan devices, and radiology tools</b>, etc.</li>
            <li><b>Romania MBBS fees</b> are affordable for Indian students.</li>
            <li>Cost is not a significant issue because <b>living expenses are generally lower</b>. Hostel services are also <b>reasonably priced and given by universities</b> with a wide range of amenities.</li>
            <li>Another advantage of studying in Romania is the variety of courses available. Students can <b>study general medicine, dentistry, pharmacy, and nursing,</b> among other disciplines.</li>
            <li>Internships are available in <b>multispecialty government hospitals</b> with a global reputation. Graduates gain <b>advanced clinical practice experience.</b></li>
          </ul>
          </p>
        </div>

        <div id="process_sec">
          <h5 className="service__sub__title">
            Intake of MBBS Course in Romania
          </h5>
          <p className="service__info">The study intake of <Link to="/mbbs-admission-in-romania-for-indian-students">MBBS in Romania</Link> typically begins in mid-August. For MBBS applicants, June and July are the best months to apply. In <b>MBBS Abroad Romania</b>, there are only a few hundred MBBS seats left. The students must apply as soon as possible because seats are given out on a first-come, first-served basis.</p>
        </div>

        <div id="univ_sec">
          <h6 className="service__sub__title">
            Worldwide Recognition of Romanian Universities
          </h6>
          <p className="service__info">Here are the names of medical committees that have acclaimed the medical degrees in Romania:</p> <br/>

          <p className="service__info">
            <ul>
              <li>National Medical Commission (NMC)</li>
              <li>World Health Organization (WHO)</li>
              <li>British Medical Council (BMC)</li>
              <li>Medical Council of European Countries (MCEC)</li>
              <li>United States Medical Licensing Examination (USMLE)</li>
            </ul>
          </p> <br/>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            About Romania
          </h6>
          <p className="service__info">On the Asian and American continents, Romania is known as a peaceful country. This European country boasts a high educational standard as well as other cultural and social characteristics. Romania has a fantastic historical constitution that displays the personalities of its population. The country's gorgeous streets and accommodations offer a wonderful way of life. From north to west, Romania is surrounded by mountains. Romania's economy is a mix of individual liberty and centralized economic planning. Students who have studied here have had a wonderful time.</p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Pros of studying MBBS in Romania for Indian students
          </h6>
          <p className="service__info">
            <ul>
              <li>The students will get a high-quality medical education.</li>
              <li>The Romanian universities use modern technology for their medical practices.</li>
              <li><b>MBBS in Romania for Indian student’s fees</b> is lower in comparison with other universities.</li>
              <li>The students need to spend at least amount for their living and food expenses.</li>
              <li>There are various top-class universities in Romania for making a medical career for the students.</li>
              <li>The process of <Link to="/mbbs-admission-in-romania-for-indian-students">MBBS admission in Romania</Link> is very simplified in the Universities in Romania.</li>
              <li>The Indian students will have a healthy and safe environment to study.</li>
              <li>The Indian students will not face any language barriers as the medium of instruction is English.</li>
              <li>They will be taught the Romanian language along with their medicine courses.</li>
              <li>The worldwide recognition assists the students to get global exposure. The degrees from the universities of Romania will be accepted worldwide.</li>
              <li>The stunning beauty of Romania never makes the students feel homesick.</li>
              <li>They will also get the chance to work during their studies.</li>
            </ul>
          </p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Cons of studying MBBS in Romania for Indian students
          </h6>
          <p className="service__info">It is important to know about the disadvantages also before planning for pursuing <b>MBBS in Romania for Indian students:</b></p> <br/>

          <p className="service__info">
            <ul>
              <li>Only a small percentage of students pass the NMC screening test for medical studies in Romania.</li>
              <li>There is no provision for getting a coaching guide to pass the FMGE exam.</li>
              <li>After your MBBS studies, you may find it challenging to master Romanian languages.</li>
              <li>In Romania, the visa application process is lengthy, taking more than two months.</li>
              <li>It may be difficult for Indian students to adjust to the temperature because it is really cold here.</li>
              <li>If you want to work part-time to supplement your income, it may interfere with your education.</li>
            </ul>
          </p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Vacations during MBBS in Romania
          </h6>
          <p className="service__info">According to the rules of the Romanian Government, the students will be given the following holidays:</p> <br/>

          <p className="service__info">
            <ul>
              <li>In most cases, the students will be able to take a summer vacation in June.</li>
              <li>Romanian universities have approved winter vacations.</li>
              <li>Winter break usually lasts from December to January.</li>
              <li>They will be offered spring vacation during April.</li>
            </ul>
          </p>
        </div>

        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Romania</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is Romania good for MBBS?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">The MBBS program in Romania is very popular among Indian students. Pursuing an MBBS degree in Romania is one of the best and most cost-effective options available.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">Can I Study MBBS in English in Romania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">English is the language of teaching for Indian MBBS students in Romania.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">How much does it cost to study MBBS in Romania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">MBBS in Romania is a very affordable program offered to Indian students. In Romania, the annual tuition fee for MBBS is as little as INR 3, 90,000.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Is Romania MBBS valid in India?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Every Romanian MBBS degree is accredited by local and international organizations and authorities all over the world. This enables the graduates of any Romanian university to practice medicine anywhere in the world.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Can Indian doctors work in Romania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">Physicians from third countries are only allowed to practice medicine in Romania if they are married to a Romanian/EU citizen or have a long-term residence permit in Romania/another EU nation.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">How much are doctors paid in Romania?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">In Romania, a Medical Doctor earns an average of RON 229,937 per year and RON 111 per hour. A Medical Doctor's average pay ranges from RON 155,988 to RON 298,821. A Medical Doctor's highest level of study is typically a Doctorate Degree.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">Can an Indian settle in Romania? </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">If you are a non-European Union citizen planning to stay in Romania for more than 90 days consecutively, or if you wish to conduct business or work, you must apply for a residence permit.</p>
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

export default MbbsRomania;