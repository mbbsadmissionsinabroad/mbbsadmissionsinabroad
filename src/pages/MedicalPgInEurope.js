import React from 'react';
import { Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
// import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from '../components/HomeCarousel';
import TimelineForPGEurope from '../components/TimelineForPGEurope';

function MedicalPgInEurope() {
	// const [modalShow, setModalShow] = React.useState(false);

	const meta = {
    title: 'Medical PG in Europe – Medical PG Admission in Europe for Indian Students',
    description: 'Medical PG in Europe. Indian Students Study Medical PG in Europe from Top University. Get to know more about Top University, Fee Structure, No Donation, Infrastructure, Language, & Hostel.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/medical-pg-in-europe-for-indian-students',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Medical PG In Europe'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MEDICAL PG IN EUROPE – MEDICAL PG ADMISSION IN EUROPE FOR INDIAN STUDENTS</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/medical-pg-europe.png"
          alt="Medical PG In Europe"
        />
      </div>
      <Container>
				<div id="index_sec">
          <p className="service__info">
						Europe is one of the best places for international students to pursue PG after MBBS. Indian students can take admission to medical PG after MBBS in Europe at affordable fees with top-class education. Medical PG in Europe is a prestigious degree among other countries because of a massive practical approach.<br/><br/>
						The students will have a successful career after completing PG in Europe. The medium of coaching of <b>medical PG in Europe</b> is English. The total duration of pursuing <b>medical PG in Europe</b> is three to four years as depend upon the specialization.
          </p>
          <ul className="hyperlink">
						<li><a href="#index_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Index </a></li>
						<li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About Europe </a></li>
						<li><a href="#courses_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Courses provided by Europe PG Universities</a></li>
						<li><a href="#info_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Essential information about PG Course in Europe</a></li>
						<li><a href="#eligibility_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for medical PG in Germany</a></li>
            <li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Required Documents for PG in Germany after MBBS</a></li>
            <li><a href="#why_medical_pg"><img src="/assets/icon.png" alt="Left Arrow" /> Why medical PG in Germany?</a></li>
            <li><a href="#benefits_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Benefits of pursuing PG in Germany after MBBS for Indian Students</a></li>
            <li><a href="#pros_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Pros and Cons of Studying PG in Germany after MBBS</a></li>
						<li><a href="#career_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Career Scopes after medical PG in Germany</a></li>
						<li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ about the Medical PG in Germany</a></li>
						<li><a href="#conclusion_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Conclusion</a></li>
						<li><a href="#testimonials"><img src="/assets/icon.png" alt="Left Arrow" /> Testimonials</a></li>
          </ul>
        </div>

        <div id="about_sec">
          <h3 className="service__sub__title">About Europe</h3>
          <p className="service__info">Europe is the second smallest continent in size and the third largest in population. Europe is located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. The European continent includes 50 countries such as <b><Link to="/medical-pg-in-germany">Germany</Link>, Sweden, Netherlands, Denmark, France</b> and of the European countries, 27 nations belong to the European Union which is a political and economic union. The climate in Europe is moderate & suitable for the students coming from the countries. The overall atmosphere in the different seasons is temperate.</p>
        </div>
        <div id="courses_sec">
          <h4 className="service__sub__title">
						Courses provided by Europe PG Universities
					</h4>
					<Table responsive striped bordered hover className="service__table">
					<thead>
						<tr>
							<th colSpan={3}>Courses</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Gynaecology and Obstetrics</td>
							<td>Dermatology</td>
							<td>Physiotherapy</td>
						</tr>
						<tr>
							<td>Child Health</td>
							<td>Clinical Research</td>
							<td>Operation Theatre Technology</td>
						</tr>
						<tr>
							<td>Rural Health Care</td>
							<td>Dermatology, Venereology & Leprosy</td>
							<td>OT Technician</td>
						</tr>
						<tr>
							<td>Community Health Care</td>
							<td>Medical Record Technology</td>
							<td>Cardiac Pulmonary Perfusion</td>
						</tr>
						<tr>
							<td>Orthopedics</td>
							<td>Medical Imaging Technology</td>
							<td>Anesthesiology</td>
						</tr>
						<tr>
							<td>Ophthalmology</td>
							<td>Medical Lab Technology</td>
							<td>Child Health</td>
						</tr>
						<tr>
							<td>Optometry</td>
							<td>Hearing Language and Speech</td>
							<td>Medical Radio-Diagnosis</td>
						</tr>
					</tbody>
				</Table>

				</div>
				
        <div id="info_sec">
          <h5 className="service__sub__title">
						Essential information about PG Course in Europe
          </h5>
          <p className="service__info">
						<ul>
							<li><b>PG after MBBS in Europe</b> starts in the month of October</li>
							<li>PG courses in Europe are divided into winter and summer semesters</li>
							<li>The Indian Students are advised to apply in the Europe Medical College within the time</li>
						</ul>
          </p>
				</div>

        <div id="eligibility_sec">
          <h6 className="service__sub__title">
						Eligibility Criteria for medical PG in Europe
          </h6>
          <p className="service__info">
						Europe is one of the most preferred destinations for Indian students to pursue PG after MBBS in Europe but they need to fulfill some requirements such as:
						<ul>
							<li>The students can take admission <Link to="/medical-pg-in-europe-for-indian-students">MD in Europe after MBBS in India</Link> or cleared MCI screening test</li>
							<li>The students should have excellent command English</li>
							<li>They must have a university degree with more than average results.</li>
						</ul>
          </p>
				</div>
				
        <div id="requirements_sec">
            <h6 className="service__sub__title">Required Documents for PG after MBBS in Europe</h6>
            <p className="service__info">
							The students who want to study <b>MD in Europe after MBBS in India</b> need the following documents:
              <ul>
								<li>Original and photocopies of Passport.</li>
								<li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
								<li>Leaving certificate from the previous studying college.</li>
								<li>A medical checkup certificate is also essential</li>
								<li>Passport size photographs</li>
								<li>Birth certificate and other mandatory certificates must be submitted to the concerned authority.</li>
								<li>A code of conduct certificate must be submitted.</li>
								<li>The students must fill the online admission form with their accurate details</li>
								<li>A bank statement of the guardian should be submitted.</li>
								<li>Offer letter from the Europe PG university</li>
								<li>MBBS course degree certificate</li>
							</ul>
            </p>
          </div>

          <div id="why_medical_pg">
            <h6 className="service__sub__title">Why medical PG in Europe?</h6>
            <p className="service__info">
							There are so many countries that provide PG course but <b>MD in Europe after MBBS in India</b> is beneficial for the students who seeking admission in Europe PG university because of the following reasons:
              <ul>
								<li>It is a golden opportunity for Indian students to pursue <Link to="/medical-pg-in-europe-for-indian-students">PG after MBBS in Europe</Link> at renowned and prestigious universities</li>
								<li>Europe medical universities provide robust, practical knowledge and training to the students</li>
								<li>The ongoing training process in Europe medical universities assists students with a high-quality experience and expertise</li>
								<li>These universities also provide clinical job training at a hospital approved to conduct medical operations</li>
								<li>The degree provided by Europe PG universities is recognized all over the world</li>
								<li>Europe PG universities have the best professors with huge practical knowledge</li>
								<li>The students will have a great successful career in the medical field after pursuing <b>medical PG in Europe</b></li>
							</ul>
            </p>
          </div>

          <div id="benefits_sec">
            <h6 className="service__sub__title">Benefits of pursuing PG after MBBS in Europe for Indian Students</h6>
            <p className="service__info">
						<ul>
							<li>Europe is well known for the best healthcare system which enables the students to have a great opportunity of training in state-of-the-art modern infrastructure</li>
							<li>It has advanced equipment for PG options</li>
							<li><b>Medical PG in Europe</b> provides on-the-job training</li>
							<li>PG universities in Europe provide hostel facilities with Indian food</li>
							<li>The students can roam around the city and discover new places</li>
							<li>They can also practice in Europe as well</li>
						</ul>
            </p>
          </div>

          <div id="pros_sec">
            <h6 className="service__sub__title">Pros and Cons of Studying Medical PG in Europe</h6>
            <p className="service__info">
							The Indian students will get to experience the knowledge and the understanding of different cultures and traditions followed by the Europeans. The medical degrees awarded to students are recognized by WHO and the MCI which enables them to work practically anywhere in the world. Each Europe Medical Universities provide hostels facilities to the Indian students with Indian food.<br/><br/>
							The climate conditions in Europe often become problematic for some students to adjust well. The local language in Europe is European so the 	students might feel the language as a barrier outside the university campus. But the coaching in <b>Europe Medical College</b> or Universities is conducted in English.
            </p>
          </div>

          <div id="career_sec">
            <h6 className="service__sub__title">Career Scopes after medical PG in Europe</h6>
            <p className="service__info">
							There are a lot of career scopes after PG in Europe such as:
              <ul>
								<li>The candidates can be a specialist doctor in any field of their choice</li>
								<li>They can work at any multinational hospitals across the globe.</li>
								<li>They can open up their clinic and start practicing there.</li>
								<li>They can come back to India to practice here and set up a career here.</li>
								<li>They can also set up a career in Europe itself after <b>medical PG in Europe</b></li>
							</ul>
            </p>
					</div>
					
					<div id="1">
						<h6 className="service__sub__title">Integration Training Program for Healthcare Professionals in Sweden</h6>
						<br/>
						<h6 className="service__sub__title">Healthcare Professionals Eligible</h6>
            <p className="service__info">
							The Following Healthcare Professionals are Eligible for this program
              <ul>
								<li>Doctor/Dentist</li>
								<li>Nurses/Midwifery/Nursing Assistant</li>
								<li>Radiology Assistant/ Lab Technician</li>
								<li>Dietician/Nutritionist</li>
								<li>Physiotherapy/Pharmacist</li>
								<li>Physician Assistanct/Surgron Assistant</li>
								<li>Hospitality-tourism-event management</li>
								<li>Mechanial-automotive-mechatronic</li>
								<li>IT-cyber security-technical traininga</li>
							</ul>
            </p>
					</div>
					
					<div id="2">
						<h6 className="service__sub__title">Healthcare Professionals Eligibility criterion</h6>
            <p className="service__info">
							Eligible for the program
              <ul>
								<li>Required Education Qualification for the applied skill</li>
								<li>Valid License/Registration from your country of residence</li>
								<li>Recent Police clearance certificate from your local police station</li>
								<li>Health certificate from your local medical professional </li>
								<li>Swedish Language capability to be learned in Sweden</li>
							</ul>
						</p>
						<p className="service__info"><b>The intensive course lasts 17-20 weeks,</b> depending on the language level required. It provides you with the knowledge and vocobulary needed to communicatewith your future colleagues and patients. Learning a new language may seem challenging, but we are here to support you from day one. Once you learned Swedish, Norwegian or Danish you will have many opportunities.</p>
					</div>
					
					<div id="3">
						<h6 className="service__sub__title">Step-by-Step Process</h6>
            <TimelineForPGEurope />
          </div>
 
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ about the Medical PG in Europe</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Can I practice in India after completion of the PG course?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">Yes, you can practice in India after completion of the PG course if you have cleared the MCI screening test.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">What is the medium of instruction for Medical PG in Europe?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">The medium of instruction for Medical PG in Europe is English.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is Europe good for PG?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Europe is the best destination to take admission to the PG course in European universities as they provide top-class infrastructure and high-quality education.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">Can a medical student study the PG course in Europe at an affordable fee structure?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Europe PG University charges reasonable tuition fees from international students. So, it is quite worthy & cost-effective for Indian students to study the PG course in Europe.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
				</div>
				<div id="conclusion_sec">
					<h6 className="service__sub__title">Conclusion</h6>
					<p className="service__info">Europe is one of the preferred destinations to study PG course at affordable fees in the best universities. The students can choose New-Lyf for getting admission to PG course in Europe as we are a trustworthy education consultant and provide university selection assistance so that you can select the best university. We will make you go through several PG programs available in Europe for the Indian students</p>
				</div>	

				<div id="testimonials">
					<h6 className="service__sub__title">Testimonials</h6>
					<HomeCarousel />
				</div>
      </Container>
		</section>
		</DocumentMeta>
  );
}


export default MedicalPgInEurope;
