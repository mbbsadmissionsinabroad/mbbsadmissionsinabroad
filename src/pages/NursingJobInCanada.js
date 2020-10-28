import React from 'react';
import { Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from '../components/HomeCarousel';

function NursingJobInCanada() {
	// const [modalShow, setModalShow] = React.useState(false);

	const meta = {
    title: 'Nursing Jobs in Canada – List of Nursing Vacancies in Canada for 2020',
    description: 'Nursing Jobs in Canada. Find the list of Nursing Vacancies in Canada for 2020 for Staff Nurses, Nurse Practitioners, Registered Nurses, Critical Care Nursing Staffs, & more.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/nursing-jobs-in-canada',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Nursing Job In Canada'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">NURSING JOB IN Canada</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/nursing-jobs-in-canada.png"
          alt="Nursing Job In Canada"
        />
      </div>
      <Container>
				<div id="index_sec">
          <p className="service__info">Canada is one of the best destinations for international candidates that seek to grow their nursing career in Canada. <Link to="/nursing-job-in-canada">Nursing jobs in Canada</Link> are in huge demand. The qualified nurses are eligible for full Permanent Residency in under the Federal Skilled Worker Immigration Program on a Federal as well as on Provincial Nomination basis.</p>
          <ul className="hyperlink">
						<li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
						<li><a href="#types_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Types of Nursing Jobs in Canada </a></li>
						<li><a href="#apply_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> How to apply for a nursing job in Canada?</a></li>
						<li><a href="#vacancy_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Nursing Vacancies in Canada without IELTS</a></li>
						<li><a href="#benefits_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of nursing jobs in Canada for Indian nurses</a></li>			
						<li><a href="#faq_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> FAQ about the Medical PG in Canada</a></li>
						<li><a href="#conclusion"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion</a></li>
						<li><a href="#testimonials"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Testimonials</a></li>
          </ul>
        </div>

        <div id="types_sec">
          <h3 className="service__sub__title">Types of Nursing Jobs in Canada</h3>
					<p className="service__info">There are various options available in the field of nursing such as:
						<ul>
							<li>Registered Practical Nurses (RPNs)</li>
							<li>Registered Nurses (RNs)</li>
							<li>Nurse Practitioners</li>
							<li>Nursing Specialization
								<ol>
									<li>Cardiovascular Nursing</li>
									<li>Community Health Nursing</li>
									<li>Critical Care Nursing</li>
									<li>Critical Care Pediatric Nursing</li>
									<li>Emergency Nursing</li>
									<li>Gastroenterology Nursing</li>
									<li>Medical-Surgical Nursing</li>
									<li>Nephrology Nursing</li>
									<li>Neuroscience Nursing</li>
									<li>Occupational Health Nursing</li>
									<li>Oncology Nursing</li>
									<li>Orthopaedic Nursing</li>
								</ol>
							</li>
						</ul>
					</p>
        </div>
        <div id="apply_sec">
          <h4 className="service__sub__title">
						How to Apply for Nursing Jobs in Canada?
					</h4>
					<p className="service__info">The candidates must hold a General Certificate of Registration to practice nursing as a Registered Nurse or Registered Practical Nurse in Canada. The following registration requirements are necessary to become eligible for nursing jobs in Canada for Indian nurses:
						<ul>
							<li>Proof of authorization to work in Canada</li>
							<li>The completion of a nursing program that is equivalent to a four-year bachelor’s degree in nursing or practical nursing diploma.</li>
							<li>Nursing practice in the category for which the candidates are applying within three years prior to issuance of the Certificate of Registration.</li>
							<li>The completion of the NCLEX-RN for those applying for Registered Nurse, or the CPNRE (Canadian Practical Nurse Registration Exam) for those applying for Registered Practical Nurse.</li>
							<li>Proof of language proficiency in English or French.</li>
						</ul>
          </p>
				</div>
				
        <div id="vacancy_sec">
            <h5 className="service__sub__title">Nursing Vacancies in Canada without IELTS</h5>
            <p className="service__info">
							Canada provides nursing vacancies in Canada without IELTS. Canada offers <b>nursing jobs in Canada</b> to candidates that have skills and experience to work in hospitals. It has definitive steps, rules, and procedures that every nurse has to follow to immigrate to work and live in Canada.<br/><br/>
							It is necessary that nurses need to check the requirements for professional designations such as Registered Practical Nurses, Registered Nurses, 	and Nurse Practitioners before applying for <b>nursing jobs in Canada</b>.<br/><br/>
							Canada provides nursing jobs in Canada for Indian nurses to practice in the country’s NHS for the duration of a year. This assists them to qualify for registering as Registered Nurses without taking the IELTS. Nurses must check for the pre-approved program that can result in successful Registered Nurses registration without other conditions. It has the following benefits:
							<ul>
								<li>The nurses (GNM) can gain B.Sc. Degree</li>
								<li>There is no requirement for IELTS.</li>
								<li>Nurses can do a part-time job for a certain period of time per week.</li>
								<li>Nurses can get hired in the NHS hospital in Canada</li>
							</ul>
            </p>
          </div>

          <div id="benefits_sec">
            <h6 className="service__sub__title">Benefits of nursing jobs in Canada for Indian nurses</h6>
            <p className="service__info">
							Canada has become one of the top destinations to move to as an immigrant and work as a nurse because of the following reasons:
              <ul>
								<li>Public healthcare is provided to all Canadian citizens and permanent residents and their family members.</li>
								<li>Canada is also considered to be one of the safest places globally.</li>
								<li>There are currently thousands of nursing jobs in Canada for Indian nurses.</li>
								<li>The average salary of Registered Nurse in Canada is $79,906 per year</li>
							</ul>
            </p>
          </div>

					<div id="faq_sec">
						<h6 className="service__sub__title">FAQ Nursing Jobs in Canada</h6>
						<Accordion defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<b className="accordion__title">How do I get a nursing job in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<p className="service__info">
											<ul>
												<li>Proof of authorization to work in Canada</li>
												<li>The completion of a nursing program that is equivalent to a four-year bachelor’s degree in nursing or practical nursing diploma.</li>
												<li>Nursing practice in the category for which the candidates are applying within three years prior to issuance of the Certificate of Registration.</li>
												<li>The completion of the NCLEX-RN for those applying for Registered Nurse, or the CPNRE (Canadian Practical Nurse Registration Exam) for those applying for Registered Practical Nurse.</li>
												<li>Proof of language proficiency in English or French.</li>
											</ul>
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<b className="accordion__title">What are the Opportunities for nurses in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<p className="service__info">There is a huge demand for nurses in Canada. Canada offers several opportunities for nurses. Nurses are very well paid in Canada.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<b className="accordion__title">Is it hard to get a nursing job in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<p className="service__info">Nurses get a nursing job in Canada depending on their level of education and experience.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<b className="accordion__title">How easy is it to get a nursing job after PR in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										<p className="service__info">The nurses must qualify for Registration with one of the 10 Provincial Registering Nursing Associations. Each province has its own Registration. The nurses cannot work as an RN without being qualified.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<b className="accordion__title">What are the requirements of staff nurse jobs in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										<p className="service__info">
											<ul>
												<li>Proof of authorization to work in Canada</li>
												<li>The completion of a nursing program that is equivalent to a four-year bachelor’s degree in nursing or practical nursing diploma.</li>
												<li>Nursing practice in the category for which the candidates are applying within three years prior to issuance of the Certificate of Registration.</li>
												<li>The completion of the NCLEX-RN for those applying for Registered Nurse, or the CPNRE (Canadian Practical Nurse Registration Exam) for those applying for Registered Practical Nurse.</li>
												<li>Proof of language proficiency in English or French.</li>
											</ul>
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<b className="accordion__title">Is it possible to get male nurse jobs in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										<p className="service__info">Yes, a male nurse also gets nursing jobs in Canada depending on the level of education and experience.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<b className="accordion__title">How can an Indian nurse work in Canada?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										<p className="service__info">The candidates need to clear NCLEX exam for working as a nurse in Canada.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</div>

					<div id="conclusion">
						<h6 className="service__sub__title">Conclusion</h6>
						<p className="service__info">Canada provides a golden opportunity for those candidates who want to build up their career in the field of nursing. There are lots of <Link to="/nursing-jobs-in-canada">nurse’s vacancies in Canada</Link> and it is good to be a nurse in Canada because of the high job satisfaction is driven by flexible working hours and Good salaries, indefinite contracts, regulated holiday periods and a series of additional benefits.</p>
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


export default NursingJobInCanada;
