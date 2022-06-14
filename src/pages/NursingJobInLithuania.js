import React from 'react';
import { Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from '../components/HomeCarousel';

function NursingJobInLithuania() {
	// const [modalShow, setModalShow] = React.useState(false);

	const meta = {
    title: 'Nursing Jobs in Lithuania | Staff Nursing Vacancy in Lithuania for Indians',
    description: 'Nursing Jobs in Lithuania to candidates that have skills and experience to work in the best hospitals.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/nursing-jobs-in-lithuania',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Nursing Job In Lithuania'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">Nursing Job In Lithuania</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/nursing-jobs-lithuania.png"
          alt="Nursing Job In Lithuania"
        />
      </div>
      <Container>
				<div id="index_sec">
          <p className="service__info">Lithuania is one of the best destinations for international candidates that seek to grow their nursing career. There is huge demand of <Link to="/nursing-jobs-in-lithuania">nursing jobs in Lithuania</Link>. There are few definitive steps and procedures that every nurse need to follow to immigrate to work in Lithuania. It offers <b>nursing jobs in Lithuania</b> to candidates that have skills and experience to work in the best hospitals.</p>
          <ul className="hyperlink">
						<li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
						<li><a href="#types_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Types of Nursing Jobs in Lithuania </a></li>
						<li><a href="#apply_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How to apply for a nursing job in Lithuania?</a></li>
						<li><a href="#vacancy_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Nurses vacancy in Lithuania</a></li>
						<li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirement of nurse’s vacancy in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>		
						<li><a href="#salary_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Salary for a Nurse in Lithuania</a></li>	
						<li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ about the Medical PG in Canada</a></li>
						<li><a href="#testimonials"><img src="/assets/icon.png" alt="Left Arrow" /> Testimonials</a></li>
          </ul>
        </div>

        <div id="types_sec">
          <h3 className="service__sub__title">Types of Nursing Jobs in Lithuania</h3>
					<p className="service__info">There are various nursing opportunities existing throughout the year with number of hospitals in Lithuania:
						<ul>
							<li>General nurse</li>
							<li>Charge nurse</li>
							<li>Nurse consultants</li>
							<li>Private nurse</li>
							<li>Emergency nursing</li>
							<li>Dialysis nursing</li>
							<li>Oncology nursing</li>
							<li>Anesthesia nursing</li>
							<li>Occupational health nursing</li>
							<li>Cardiac care nursing</li>
							<li>Operation Theater Nurse and many more.</li>
						</ul>
					</p>
        </div>
        <div id="apply_sec">
          <h4 className="service__sub__title">
						How to apply for a nursing job in Lithuania?
					</h4>
					<p className="service__info">If the candidates apply for the <b>nursing jobs in Lithuania</b>, they need to arrange the following documents for the process:
						<ul>
							<li>CV/Resume</li>
							<li>Health Certificate</li>
							<li>Professional passport size photograph</li>
							<li>Work experience certificates (if any)</li>
							<li>Lithuanian level IV language certificate</li>
							<li>Certificate of the registered nurse</li>
							<li>Secondary schooling or equivalent</li>
							<li>Higher Secondary or equivalent</li>
							<li>Professional qualification certificate</li>
							<li>Curricular of the professional qualification</li>
							<li>Photocopy of passport (front and back page)</li>
						</ul>
          </p>
				</div>
				
        <div id="vacancy_sec">
            <h5 className="service__sub__title">Nurses vacancy in Lithuania</h5>
            <p className="service__info">Lithuania has lots of nurses vacancy & it provides a golden opportunity for those candidates who want to build up their career in the field of nursing. It provides high job satisfaction which is driven by flexible working hours and good salary package, indefinite contracts, regulated holiday periods and several additional benefits.</p>
        </div>

          <div id="requirements_sec">
            <h6 className="service__sub__title">Requirement of nurse’s vacancy in Lithuania {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</h6>
            <p className="service__info">
							The candidate needs to fulfill the following requirements to apply for <b>nursing jobs in Lithuania:</b>
              <ul>
								<li>The candidate must have at least 2 years of experience of post-qualification work as professional nurse</li>
								<li>The candidate must have a degree in Nursing or diploma/certificate equivalent from recognized college.</li>
								<li>The candidate should possess & maintain a valid nursing license.</li>
								<li>The candidate must have the knowledge of English level III & Lithuanian level IV in reading, writing, & speaking.</li>
							</ul>
            </p>
					</div>
					
					<div id="salary_sec">
            <h6 className="service__sub__title">Salary for a Nurse in Lithuania</h6>
            <p className="service__info">The average of a Nurse in Lithuania is around 2,630 LTL per month. The salaries range from 1,260 LTL to 4,120 LTL per month that includes housing, transport, and other benefits.</p>
          </div>

					<div id="faq_sec">
						<h6 className="service__sub__title">FAQ Nursing Jobs in Lithuania</h6>
						<Accordion defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<b className="accordion__title">How possible it to get a nursing job in Lithuania?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<p className="service__info">
											<ul>
												<li>The candidate must have at least 2 years of experience of post-qualification work as professional nurse</li>
												<li>The candidate must have a degree in Nursing or diploma/certificate equivalent from recognized college.</li>
												<li>The candidate should possess & maintain a valid nursing license.</li>
												<li>The candidate must have the knowledge of English level III & Lithuanian level IV in reading, writing, & speaking.</li>
											</ul>
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<b className="accordion__title">What are the job opportunities for Indian nurses in Lithuania?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<p className="service__info">There is huge demand of <b>nursing jobs in Lithuania</b>. It provides a golden opportunity for those candidates who want to build up their career in the field of nursing.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<b className="accordion__title">Is it good to be a nurse in Lithuania?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<p className="service__info">Yes. Nursing jobs are in high demand in Lithuania if the candidate has the knowledge of English level III & Lithuanian level IV in reading, writing, & speaking.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<b className="accordion__title">How can I work as a nurse assistant in Lithuania?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										<p className="service__info">Indian nurse can easily work as a nurse assistant in Lithuania by submitting her educational degree, work experience and Lithuanian level IV language proficiency certificate.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<b className="accordion__title">Is it possible to get a nursing job in Lithuania without IELTS?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										<p className="service__info">Nurse should speak, read and write Lithuanian as well as English.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<b className="accordion__title">Is it possible to get a nursing job in Lithuania with 1 year of experience?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										<p className="service__info">Nurses are eligible to work in Lithuania with 1 year of experience if they have a proof of Lithuanian language t level IV proficiency certificate.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<b className="accordion__title">Which language skill do I require to get a job in Lithuania as a nurse?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										<p className="service__info">Nurses must have complete knowledge of Lithuanian language level IV so that they can easily communicate with the patients.</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="7">
									<b className="accordion__title">Are there any jobs for a nursing diploma in Lithuania?</b>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
										<p className="service__info">Nurses get a nursing job in Lithuania on the basis of their level of education and work experience, Lithuanian language certificate.</p>
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


export default NursingJobInLithuania;
