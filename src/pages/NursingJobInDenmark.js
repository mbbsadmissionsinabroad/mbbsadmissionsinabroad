import React from 'react';
import { Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from '../components/HomeCarousel';

function NursingJobInDenmark() {
	// const [modalShow, setModalShow] = React.useState(false);

	const meta = {
    title: 'Nursing Jobs in Denmark | Staff Nursing Jobs in Denmark for Indians',
    description: 'Nursing Jobs in Denmark. Denmark provides a great opportunity to nurses who are looking to work for a completely state funded healthcare system.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/nursing-jobs-in-denmark',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Nursing Job In Denmark'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">Nursing Job In Denmark</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/nursing-jobs-denmark.png"
          alt="Nursing Job In Denmark"
        />
      </div>
      <Container>
				<div id="index_sec">
          <p className="service__info">Denmark provides a great opportunity for nurses who are looking to work for a completely state-funded healthcare system. Denmark is one of the leading healthcare providers & one of Europe’s top countries for healthcare provision. It has a well-organized system and nurses benefit from exceptionally modern work environments. The nurses who are applying for <Link to="/nursing-jobs-in-denmark">nursing jobs in Denmark</Link> must have good Danish language proficiency.</p>
          <ul className="hyperlink">
						<li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
						<li><a href="#types_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Types of Nursing Jobs in Denmark </a></li>
						<li><a href="#apply_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> How to apply for a nursing job in Denmark?</a></li>
						<li><a href="#getjob_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> How to Get a Nursing Job in Denmark</a></li>
						<li><a href="#vacancy_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Nurses vacancy in Denmark</a></li>
						<li><a href="#requirements_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirement of nurse’s vacancy in Denmark 2020</a></li>		
						<li><a href="#salary_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Salary for a Nurse in Denmark</a></li>	
						<li><a href="#faq_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> FAQ Nursing Job in Denmark</a></li>
						<li><a href="#testimonials"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Testimonials</a></li>
          </ul>
        </div>

        <div id="types_sec">
          <h2 className="service__sub__title">Types of Nursing Jobs in Denmark</h2>
					<p className="service__info">There are several options available in the field of nursing in Denmark such as:
						<ol>
							<li>Nurse Practitioners</li>
							<li>Cardiovascular Nursing</li>
							<li>Staff nurse</li>
							<li>Community Health Nursing</li>
							<li>Critical Care Nursing</li>
							<li>Critical Care Pediatric Nursing</li>
							<li>Emergency Nursing</li>
							<li>Gastroenterology Nursing</li>
							<li>Medical-Surgical Nursing</li>
							<li>Neuroscience Nursing</li>
							<li>Oncology Nursing</li>
							<li>Orthopaedic Nursing</li>
						</ol>
					</p>
        </div>
        <div id="apply_sec">
          <h3 className="service__sub__title">
						How to apply for a nursing job in Denmark?
					</h3>
					<p className="service__info">If the nurse applies for the nursing jobs in Denmark, she needs to arrange the following documents:
						<ul>
							<li>CV/Resume</li>
							<li>Health Certificate</li>
							<li>Professional passport size photograph</li>
							<li>Work experience certificates (if any)</li>
							<li>Danish language certificate</li>
							<li>Certificate of the registered nurse</li>
							<li>Secondary schooling or equivalent</li>
							<li>Higher Secondary or equivalent</li>
							<li>Professional qualification certificate</li>
							<li>Curricular of the professional qualification</li>
							<li>Consolidated mark sheets from the university or college (if the coursework completed)</li>
							<li>Provisional certificate (If available)</li>
							<li>Photocopy of passport (front and back page)</li>
						</ul>
          </p>
				</div>
				
				<div id="getjob_sec">
          <h4 className="service__sub__title">How to Get a Nursing Job in Denmark</h4>
					<p className="service__info">The candidate needs to qualify the following criteria to get <b>nursing jobs in Denmark:</b>
						<ul>
							<li>Nurses need a Danish nursing registration before they can work as a nurse in Denmark.</li>
							<li>It is only The Danish Patient Safety Authority that has permission to issue these authorizations in Denmark.</li>
							<li>The application for authorization must take place through The Danish Patient Safety Authority.</li>
						</ul>
					</p>
        </div>

        <div id="vacancy_sec">
          <h5 className="service__sub__title">Nurses vacancy in Denmark</h5>
          <p className="service__info">There is a huge demand for nurses in Denmark. There are several opportunities for the candidates to apply for a <Link to="/nursing-jobs-in-denmark">staff nursing job in Denmark</Link>. Nurses are very well paid in Denmark.</p>
        </div>

          <div id="requirements_sec">
            <h6 className="service__sub__title">Requirement of nurse’s vacancy in Denmark 2020</h6>
            <p className="service__info">
							The candidate needs to fulfill the following requirements to apply for <b>nursing jobs in Denmark:</b>
              <ul>
								<li>The completion of a nursing program that is equivalent to a four-year bachelor’s degree in nursing or practical nursing diploma.</li>
								<li>Proof of language proficiency in English & Danish</li>
								<li>Proof of authorization to work in Denmark</li>
							</ul>
            </p>
					</div>
					
					<div id="salary_sec">
            <h6 className="service__sub__title">Salary for a Nurse in Denmark</h6>
            <p className="service__info">A nurse in Denmark earns around <b>31,800 DKK per month</b>. The average monthly salaries of nurses in Denmark range from <b>16,200 DKK to 49,000 DKK</b> including housing, transport, and other benefits. The salaries of Nurse vary on the basis of experience & skills.</p>
          </div>

					<div id="faq_sec">
						<h6 className="service__sub__title">FAQ Nursing Job in Denmark</h6>
						<Accordion defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<b className="accordion__title">How possible it to get a nursing job in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<p className="service__info">
											<ul>
												<li>Nurses need a Danish nursing registration before they can work as a nurse in Denmark.</li>
												<li>It is only The Danish Patient Safety Authority that has permission to issue these authorizations in Denmark.</li>
												<li>The application for authorization must take place through The Danish Patient Safety Authority.</li>
											</ul>
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<b className="accordion__title">What are the job opportunities for Indian nurses in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<p className="service__info">There is a huge demand for nurses in Denmark. There are several opportunities for the candidates to apply for nursing jobs in Denmark. Nurses get high salaries in Denmark.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<b className="accordion__title">Is it good to be a nurse in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<p className="service__info">Yes. Nursing is one of those careers that are in high demand in Denmark. Obtain a job as a staff nurse in Denmark won’t be a problem as long as you get the degree and learn Danish.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<b className="accordion__title">How can I work as a nurse assistant in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										<p className="service__info">Indian nurse can easily work as a nurse assistant in Denmark by submitting her educational degree, and Danish language certificate.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<b className="accordion__title">What is the requirement of nurses in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										<p className="service__info">The candidate needs to provide the documents get a nursing job in Denmark such as:
											<ul>
												<li>The completion of a nursing program that is equivalent to a four-year bachelor’s degree in nursing or practical nursing diploma.</li>
												<li>Proof of language proficiency in English & Danish</li>
												<li>Proof of authorization to work in Denmark</li>
											</ul>
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<b className="accordion__title">Is it possible to get a nursing job in Denmark without IELTS?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										<p className="service__info">Nurse should speak, read and write English well.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<b className="accordion__title">Is it possible to get a nursing job in Denmark with 1 year of experience?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										<p className="service__info">Nurses are eligible to work in Denmark with 1 year of experience if they have a proof of Danish language certificate.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="7">
									<b className="accordion__title">Which language skill do I require to get a job in Denmark as a nurse?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
										<p className="service__info">Nurses must have complete knowledge of Danish language so that they easily communicate with the patients.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="8">
									<b className="accordion__title">Are there any jobs for a nursing diploma in Denmark?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="8">
									<Card.Body>
										<p className="service__info">Nurses get a nursing job in Denmark depending on their level of education and experience, Danish language certificate.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
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


export default NursingJobInDenmark;