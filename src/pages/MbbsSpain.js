import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from "../components/HomeCarousel";

function MbbsSpain() {

  const meta = {
    title: 'MBBS Admission in Spain for Indian Students for 2022 -2023 Year',
    description: 'MBBS Admission in Spain for Indian Students for 2022 -2023 Year. MCI Approved University with a unique learning atmosphere may be found throughout the country. Call Now!',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-admission-in-spain-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'mbbs in Spain, medical in Spain, mci approved Mbbs University in Spain, mbbs admission in Spain, mbbs fees in Spain'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS in Spain for Indian Students</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/MBBS in Spain.png"
          alt="MBBS Admission in Spain for Indian Students"
        />
      </div>
      <Container>
        <div>
					<p className="service__info">MBBS is one of the most renowned degrees among students all around the world. Spain is one such destination that provides students with outstanding medical possibilities. Various <b>internationally recognized and renowned universities with a unique learning atmosphere</b> may be found throughout the country. Despite the <b>abundant opportunities, excellent learning</b>, and remarkable approach, many students aspire to <Link to="/mbbs-admission-in-spain-for-indian-students">study MBBS in Spain</Link>. </p>

          <p className="service__info">Most <Link to="/mci-approved-medical-universities-in-abroad">medical colleges in Spain</Link> provide unique <b>hostel amenities</b> and <b>food for Indian students</b>. They help them to learn and integrate into the <b>diverse Spanish culture</b>. The numerous facilities provided by <b>Spanish universities made Spain a paradise for Indian students</b>. Many <b>universities in Spain offer MBBS courses in English</b>. This enables the students to concentrate more on medical learning than on learning a completely new language. </p><br/>

          <p className="service__info">Moreover, <Link to="/mbbs-admission-in-spain-for-indian-students">Spain MBBS fee structure</Link> is very affordable as compared to other countries. The <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS course in Spain</Link> includes a year of practical training in addition to a <b>complete 5-year program</b>. For many Indian students, <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain</Link> was a top priority because of the <b>large Indian student population, special Indian food, and Indian hostels.</b></p>

          {/* <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Spain</a></li>
            <li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria: MBBS in Spain for Indian students</a></li>
						<li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Spain?</a></li>
						<li><a href="#duration_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Duration of MBBS Course in Spain</a></li>
            <li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Admission Process for MBBS in Spain</a></li>
						<li><a href="#univ_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Medical University in Spain </a></li>
						<li><a href="#univ_fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Manipal Spain MBBS fees </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ's to Study MBBS in Spain </a></li>
          </ul> */}

        </div>

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Eligibility Criteria for studying MBBS in Spain for Indian students</h2>
          <p className="service__info">Every university has its own set of admissions requirements that applicants must meet. So, here are the eligibility criteria for the applicants to study <b>MBBS in Spain:</b></p><br/>

          <p className="service__info">
           <ul>
            <li>The applicant must be at least 18 years of age.</li>
            <li>It is compulsory to <b>qualify for the NEET examination</b> for all applicants.</li>
            <li>Applicants must clear their <b>10+2 examination</b> from a reputed university.</li>
            <li>Some universities ask for <b>IELTS or TOEFL clearance</b> at the time of admission to universities.</li>
          </ul>
          </p>
        </div>

        <Container>
          <Row>
            <Col xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}><img src="https://www.uv.es/recursos/fatwirepub/ccurl/280/919/Cap_EN.png " alt="Spain" style={{ width:'-webkit-fill-available' }} /></Col>
            <Col xs={12} md={7}>
            <p className="service__info"><b>Medical University of Valencia </b></p><br/>
            <p className="service__info">Every institution has a culture based on a set of values ​​that permeate the principles that govern its action. The values of the University of Valencia have been forged throughout its history and have been reflected in the Statutes of the UV.</p>

            <p className="service__info">The explanation of the values ​​of the UV aims to establish a solid frame of reference that directs the behaviors and attitudes of the institution, which influences its decisions and the way in which it carries out its activities, and constitute the axes that articulate the different areas of the University Social Responsibility (RSU) of the University of Valencia.</p>

            <p className="service__info">Thus, the values ​​that permeate the action of the University of Valencia and that serve as a basis for the elaboration of the Strategic Plan 2012-2015 are the following:</p>
            
            <p className="service__info">
            <ul>
              <li>Identity commitment. The University of Valencia is an institution strongly rooted in the territory and linked to the Valencian reality, for this reason it pays special attention to the protection and promotion of its own culture and language, as well as to the study of all cultural manifestations of their territorial and cultural environment nearby.</li>
              <li>Excellence in carrying out all our teaching, research, transfer and cultural dissemination activities. This value is reflected in our commitment to quality, evaluation and continuous improvement.</li>
              <li>Innovation. The University of Valencia realizes its vocation of intellectual leadership from the principles of rationality and universality that are its own, facilitating, stimulating and welcoming intellectual and critical activities in all fields of knowledge and knowledge.</li>
              <li>Social and economic progress , which is reflected in the commitment of the University of Valencia to the intellectual and material development of peoples and the advancement of knowledge.</li>
              <li>Transparency in management and open dialogue with society, which encourages participation, trust and commitment to the institution. Facilitate internal communication and mutual knowledge between the different interest groups that make up the university community to make possible the harmonious development of knowledge for the improvement of people and their coexistence in a plural and democratic society. </li>
              <li>Justice , which takes the form of respect for the equal rights and opportunities of all persons, without any discrimination on the grounds of birth, race, sex, opinion, language, religion or any other personal or social condition or circumstance. At the internal level, the University of Valencia promotes positive reinforcement measures in favor of the equal participation of all members of the institution and in defense of their own language and culture, which constitute the core of their identity. Positive actions are also promoted so that people with disabilities can fully and effectively carry out their university activity.</li>
              <li>Equality. The University of Valencia fulfills its functions and carries out all its activities (teaching, research, cultural and management), under the principle of equal opportunities between women and men, and develops and applies it through the corresponding 'Plan d 'Equality'. </li>
              <li>Solidarity and cooperation with the different interest groups with which the institution interacts in the social, cultural, economic and academic fields. In the academic field, the University of Valencia is committed to creating equal opportunities and conditions for the largest number of people (social dimension of higher education). Likewise, the University of Valencia cooperates with other universities and academic institutions, with special attention to the Valencian universities and those belonging to the Catalan linguistic area, integrated in the network of the current Joan Lluís Vives Institute.</li>
              <li>Sustainability. The University of Valencia is at the service of ecological and environmental protection and promotes and implements active measures for the protection and improvement of the health of members of the university community. The Institution develops this value through the active application of the twenty - five policies that make up the 'Sustainable Campus' program. Education and Research for Sustainability '.</li>
              <li>These values ​​serve to support the focus of the strategy and the key success factors through which the UV seeks to achieve its objectives in the various areas of activity in which it operates.</li>
            </ul>
            </p>

            </Col>
          </Row>
        </Container>

        <div id="eligibility_sec">
          <h2 className="service__sub__title">Admission Procedure to study MBBS in Spain </h2>
					<p className="service__info">Here are the basic admission steps needed to <b>study MBBS in Spain:</b></p> <br/>
          <p className="service__info">
            <ul>
              <li>The applicants need to fill out the application form without making any mistakes.</li>
              <li>They require sending the application form directly to the medical college. If they have filled the form in an offline mode, they still can send it to the college by attaching the required documents with it.</li>
              <li>When the college gets the application form, the medical college sends an offer letter.</li>
              <li>Once get the offer letter, they need to pay the affirmation expenses.</li>
              <li>After getting a printed confirmation receipt, the applicant is directed to apply for a visa at the nearest Embassy with the required documents.</li>
              <li>The applicant will receive his or her visa after the activities are over.</li>
              <li>When the applicant has completed all of the requirements for admission to a medical school in Spain, he or she can book their airplane tickets.</li>
            </ul>
          </p>
        </div>

        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Duration of MBBS in Spain for Indian students</h3>
          <p className="service__info">Every student wishing to pursue an MBBS degree is concerned about how long the course would take. <b>Spain, like most countries, offers a six-year MBBS program.</b> The first five years are focused on academic knowledge, while the sixth year is dedicated to practical training or internship.</p>
        </div>

        <div id="duration_sec">
          <h4 className="service__sub__title">
            Why MBBS in Spain?
          </h4>
          <p className="service__info">Spain is a fantastic place to study medicine. Here is a list of reasons that witness why you should consider pursuing an <b>MBBS in Spain:</b>
          <br/>
          <ul>
            <li><Link to="/mbbs-admission-in-spain-for-indian-students">Spain MBBS fee structure</Link> is very affordable for Indian students.</li>
            <li>For an <b>MBBS degree in Spain</b>, the vast number of medical institutes in Spain offer English-based training.</li>
            <li>The <b>National Medical Committee (NMC)</b> and other notable clinical authorities have endorsed many of Spain's medical universities/colleges.</li>
            <li>The MBBS certification in Spain is available without any entrance tests in Spain's cities.</li>
            <li>The tenure to <Link to="/mbbs-admission-in-spain-for-indian-students">study MBBS in Spain</Link> is a total of 6 years. 5 years are dedicated to theoretical knowledge & 1 year is for practical training. </li>
            <li>Medical colleges in Spain also provide temporary job programs.</li>
            <li>Medical universities/colleges in Spain offer excellent laboratories. The students can explore alternatives in the field of medication.</li>
            <li>Pursuing <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain for Indian students</Link> <b>is safe</b>. The faculty members in the MBBS Universities here are cultivated and experienced. The <Link to="/mci-approved-medical-universities-in-abroad">Medical Council of India</Link> has acknowledged MBBS in Spain.</li>
            <li>In Spain, medical colleges offer three different types of instruction. The medium of instruction is English. Then there's the Spanish medium, which is dependent on each country. The bilingual medium at that point includes both English and the Spanish language.</li>
          </ul>
          </p>
        </div>

        <div id="process_sec">
          <h5 className="service__sub__title">
            About Spain
          </h5>
          <p className="service__info">Spain is situated in southwestern Europe, with a small portion of land in the Mediterranean Sea. With a population of 47.3 million people, Spain is the largest country in Southern Europe and the second-largest in Western Europe. Spain is Europe's sixth most populous country, owing to its high population density. </p> <br />

          <p className="service__info">Spain's capital is Madrid, and the Euro is its currency. Spain's official language is Spanish. Spain's commercial mixed economy is the fourteenth largest in the world and the fourth largest in the European Union, as well as the fourth largest in the Eurozone. Spain's diversified landscape results in a variety of climates, including marine climates, Mediterranean climates, desert climates, continental climates, high mountain climates, and so on. </p> <br />

          <p className="service__info">The weather in Spain during the summer is sunny and mild. In Spain, the winter months are cold, and there is snowfall in the winter. Temperatures on the coast are around 18 degrees Celsius in the winter and 23 degrees Celsius in the Canary Islands.</p>
        </div>

        <div id="univ_sec">
          <h6 className="service__sub__title">
            Valencia Medical University in Spain
          </h6>
          <p className="service__info">The University of Valencia is one of the oldest and most prestigious academic universities in Spain. It was founded in the year 1499. This <Link to="/">Spanish MBBS university</Link>, popularly known as UV, is located in Valencia. A large number of international students are enrolling in the University of Valencia's MBBS program. The <Link to="/mbbs-admission-in-spain-for-indian-students">Valencia Medical University in Spain</Link> currently has around 55 000 students. </p> <br/>

          <p className="service__info">The Degree in Medicine at University of Valencia offers in-depth training that ensures that students attain adequate knowledge about medicine. The eligibility for admission to the <Link to="/mbbs-admission-in-spain-for-indian-students">Valencia Medical University in Spain</Link> is the requirement of TOEFL / NEET. The medium of studying MBBS course in this university is English. <Link to="/mbbs-admission-in-spain-for-indian-students">Valencia Medical University fees</Link> are approx EUR 1,600 to 2,600.</p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Advantages of Studying MBBS in Spain
          </h6>
          <p className="service__info">It is always beneficial to pursue your dream medical career in Spain. The following are some of the most significant advantages of studying <b>MBBS in Spain:</b> </p> <br/>
          <p className="service__info">
            <ul>
              <li>Teachers in MBBS universities in Spain are experienced and successful professionals who provide students with a complete education.</li>
              <li><Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain for Indian students</Link> is regarded as affordable and safe.</li>
              <li>The Medical Council of India honors and recognizes a medical degree earned in any Spanish university.</li>
              <li>For ease of understanding, the <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain</Link> is <b>taught in English</b>.</li>
              <li>Every medical university in the country has state-of-the-art laboratories and research facilities.</li>
            </ul>
          </p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Disadvantages of Studying MBBS in Spain
          </h6>
          <p className="service__info">While the country has a lot to offer medical students from all over the world, it also has certain drawbacks:
          <br/>
          <ul>
            <li>Because Spanish is the official language of the country, students may find it challenging to interact with the people.</li>
            <li>For a few students, living costs in Spain may be extremely high.</li>
            <li>Despite the kind people in the country, there may be a different work culture here.</li>
          </ul>
          </p>
        </div>

        <div id="univ_fees_sec">
          <h6 className="service__sub__title">
            Cost of studying MBBS in Spain
          </h6>
          <p className="service__info">In comparison to many Indian medical institutes and universities, the cost of studying <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain</Link> is lower and reasonable. <b>Spain MBBS fee structure</b> at a college or university might range from $4500 to $7500 USD, depending on the institution or university you choose. The cost of living might range from 180 USD to more than 200 USD, depending on personal preferences. Indian students who are looking to take admission to a reputed MBBS university in Spain can take the guidance of our dedicated abroad consultant. New-Lyf has a dedicated team of qualified MBBS consultant who specializes in providing the best consulting related to <Link to="/mbbs-admission-in-spain-for-indian-students">MBBS in Spain</Link>.</p>
        </div>

        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ's to Study MBBS in Spain</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Can an Indian Student do an MBBS in Spain?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">For Indian students, MBBS courses in Spain are safe and affordable. The professors at the MBBS universities in this country are well-trained and experienced. The Medical Council of India recognizes MBBS in Spain.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">What is the procedure to apply for an MBBS at Spain University?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">
                  <ul>
                    <li>Fill out the application form and submit the required documents.</li>
                    <li>Pay the non-refundable application fees.</li>
                    <li>Wait for the application overview.</li>
                    <li>Eligible candidates will receive a welcoming letter from the college/university.</li>
                    <li>Students need to attest to the certification by paying an essential proportion of instructive costs.</li>
                    <li>They need to apply for an understudy visa and start attending MBBS classes in desired college/university.</li>
                  </ul>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">What is the MBBS fee structure in Spain per year?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info"><b>Spain MBBS fee structure</b> range may vary from 4500 to 7500 USD for one year, depending on the college or university you select.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can I study MBBS in Spain in English?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Many universities in Spain teach the MBBS degree in English. This enables the students to focus on medical studies rather than acquiring a new language.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Is Spain good for International MBBS Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">In comparison to other European countries, Spain has some of the best MBBS programs. All of the country's MBBS programs are internationally recognized and accredited. The country's primary language of instruction is English, which is easily understood by international students.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Can Indian doctors work in Spain?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">To operate as a doctor in Spain, you only need to complete the licensing process. If you are not a citizen of the European Union, you will need to apply for a highly skilled work visa.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">How much are doctors paid in Spain?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">Doctors in Spain earn an average of €97,658 per year and €47 per hour. Doctors make an average salary of €65,849 to €126,146 per year. A Doctorate Degree is, on average, the highest level of schooling for a physician.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">Can an Indian settle in Spain?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">If you want to live, work, or study in Spain, you must meet a set of requirements. The Indian candidate must submit an application for a Spain visa at the Spanish Embassy in New Delhi or Mumbai.</p>
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

export default MbbsSpain;