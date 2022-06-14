import React from 'react';
import { Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Table from 'react-bootstrap/Table'
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";

function NursingJobInGermany() {
	// const [modalShow, setModalShow] = React.useState(false);

	const meta = {
    title: 'Nursing Job in Germany | Paramedical Nursing Jobs in Germany',
    description: 'Nursing Job in Germany. Huge demand for Paramedical & Nursing Jobs in Germany for OTT, MTL, ANM, GNM, RT & Health Insepector. Call Now: 1800 572-3473',
    canonical: 'https://www.mbbsadmissionsinabroad.com/nursing-job-in-germany/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'Nursing Job In Germany'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">NURSING JOB IN GERMANY</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/nursing-job-in-germany.png"
          alt="Nursing Job In Germany"
        />
      </div>
      <Container>
				<div id="index_sec">
          <p className="service__info">
						<b>Nursing Jobs in Germany</b> is a very respectful profession in the medical system. There is a <b>huge demand for Nurses in Germany</b>. This country provides a golden opportunity for those candidates who want to build up their career in the field of nursing.<br/>
						If the candidate opts for <Link to="/nursing-job-in-germany">staff nurse vacancy in Germany</Link>, it is necessary to get knowledge of the <b>German language</b> because their <b>local language is German</b> and they only can speak in this language. Germany is experiencing a substantial nursing shortage.<br/>
						Any healthcare institution will surely employ you if your degree is recognized in Germany and if you are entitled to reside there. But the case depends on:
						<ul>
							<li>Your proficiency in the German language. The minimum requirement for a work permit as a nurse is B2 level</li>
							<li>Your country of origin</li>
							<li>From where you obtained your degree.</li>
						</ul>
          </p>
          <ul className="hyperlink">
						<li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
						<li><a href="#types_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Types of Nursing Jobs in Germany </a></li>
						<li><a href="#apply_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How to apply for a nursing job in Germany?</a></li>
						<li><a href="#getjob_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How to Get a Nursing Job In Germany</a></li>
						<li><a href="#job_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Nursing jobs in Germany for Indian nurses</a></li>
            <li><a href="#vacancy_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Nurses vacancy in Germany</a></li>
            <li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirement of nurse’s vacancy in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</a></li>
            <li><a href="#salary_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Salary for a Nurse in Germany?</a></li>
						<li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> FAQ about the Medical PG in Germany</a></li>
            <li><a href="#testimonials"><img src="/assets/icon.png" alt="Left Arrow" /> Testimonials</a></li>
          </ul>
        </div>

        <div id="types_sec">
          <h3 className="service__sub__title">Types of Nursing Jobs in Germany</h3>
					<p className="service__info">There are various options available in the field of nursing such as:
						<ul>
							<li>Profession</li>
							<li>Staff nurse vacancy in Germany</li>
							<li>Office nurse</li>
							<li>Nurse in hospital</li>
							<li>Geriatric nurse</li>
							<li>Pediatric nurse</li>
							<li>Gynecology nurse</li>
							<li>Dialysis nurse</li>
							<li>Emergency room nurse</li>
							<li>Operating room nurse</li>
							<li>Senior nurse</li>
							<li>Nurse average</li>
							<li>Nursing assistant</li>
							<li>Senior caregiver</li>
							<li>Caregiver assistant</li>
						</ul>
					</p>
        </div>
        <div id="apply_sec">
          <h4 className="service__sub__title">
						If you want to apply for the <Link to="/nursing-job-in-germany">nursing job in Germany</Link>, you need to arrange the below-given documents for the process and every application documents need to be notarized:
					</h4>
					<p className="service__info">
						<ul>
							<li>CV/Resume</li>
							<li>Health Certificate</li>
							<li>Professional passport size photograph</li>
							<li>Work experience certificates (if any)</li>
							<li>Certificate of the registered nurse</li>
							<li>Secondary schooling or equivalent</li>
							<li>Higher Secondary or equivalent</li>
							<li>Professional qualification certificate</li>
							<li>Curricular of the professional qualification</li>
							<li>Consolidated mark sheets from the university or college (if the coursework completed)</li>
							<li>Individual semester wise mark sheets (If available)</li>
							<li>Provisional certificate (If available)</li>
							<li>Photocopy of passport (front and back page)</li>
						</ul>
          </p>

				</div>
				
        <div id="getjob_sec">
          <h5 className="service__sub__title">
						How to Get a Nursing Job In Germany
          </h5>
          <p className="service__info">Germany is experiencing a substantial nursing shortage. Any healthcare institution will surely employ you if your degree is recognized in Germany and if you are entitled to reside there. But the case depends on:
						<ul>
							<li>Your proficiency in the German language. The minimum requirement for a work permit as a nurse is B2 level</li>
							<li>Your country of origin</li>
							<li>From where you obtained your degree.</li>
						</ul>
          </p>
				</div>

        <div id="job_sec">
          <h6 className="service__sub__title">
						Nursing jobs in Germany for Indian nurses
          </h6>
          <p className="service__info">
						There are several routes that you as an Indian nurse can opt for <b>nursing jobs in Germany</b> and start a promising career in Nursing:
						<ul>
							<li>If you choose a <b>German Language student route</b>, you may not be able to work even on part-time jobs specifically if you do not have knowledge of German.</li>
							<li>If you have <b>German B1</b>, you can choose the work permit route. In this route, you will find an employer in <b>Germany Hospitals, Nursing Homes,</b> and many more either directly or through the <b>recruitment directors of the German employers</b>, and secure a <b>work permit as Nursing Assistant.</b></li>
							<li>The most preferable route is to try to arrive in Germany after obtaining <b>German B2 from India itself</b>. In this route, you can start <b>working as a registered nurse</b> as soon as you arrive in Germany. But the <Link to={{ pathname:"https://www.dbfk.de/de/ueber-uns/English.php" }}>Board of Nursing in the German</Link> state you select to work and live decides the eligibility to practice.</li>
						</ul>
          </p>
				</div>
				
        <div id="vacancy_sec">
            <h6 className="service__sub__title">Nurses vacancy in Germany</h6>
            <p className="service__info">
							The nurse profession is a government highly regulated <b>job in Germany</b>. There is lots of <b>nurses vacancy in Germany</b> and it is good to be a <b>nurse in Germany</b> because of the following reasons:
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

          <div id="requirements_pg">
            <h6 className="service__sub__title">Requirement of nurse’s vacancy in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}</h6>
            <p className="service__info">
							The below-listed requirements need to be fulfilled for the nurse’s vacancy in Germany {(new Date().getFullYear())} - {(new Date().getFullYear()) + 1}:
              <ul>
								<li>B2 Level of German language is a must for nursing job as they have to communicate with the German patients.</li>
								<li>Academic documents such as mark-sheets/ transcripts or certificates should also have to be translated in the German language.</li>
								<li>Medical certificate which proves good health.</li>
								<li>PCC (Police Clearance Certificate) needs to check that person is having any case registered or not.</li>
								<li>Germany accepts only those nurses who are already certified by the European Union.</li>
							</ul>
            </p>
          </div>

          <div id="salary_sec">
            <h6 className="service__sub__title">Salary for a Nurse in Germany?</h6>
            <p className="service__info">The salary of trainee <b>nurses in Germany</b> is 1050 – 1300 Euros per month. The salary of a fully qualified nurse is around 2450 Euros. The salary of nurses basically depends on professional experience and language proficiency.</p>
          </div>
 
        <div id="faq_sec">
          <h6 className="service__sub__title">FAQ Nursing Job in Germany</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">How possible it to get a nursing job in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">It is quite easy to get a nursing job in Germany on the basis of the following requirements:
										<ul>
											<li>Your proficiency in the German language. The minimum requirement for a work permit as a nurse is B2 level</li>
											<li>Your country of origin</li>
											<li>From where you obtained your degree.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">What are the job opportunities for Indian nurses in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info"><ul>
									<li>If you choose a German Language student route, you may not be able to work even on part-time jobs specifically if you do not have knowledge of German.</li>
									<li>If you have German B1, you can choose the work permit route. In this route, you will find an employer in Germany Hospitals, Nursing Homes, and many more either directly or through the recruitment directors of the German employers, and secure a work permit as Nursing Assistant.</li>
									<li>The most preferable route is to try to arrive in Germany after obtaining German B2 from India itself. In this route, you can start working as a registered nurse as soon as you arrive in Germany. But the Board of Nursing in the German state you select to work and live decides the eligibility to practice.</li>
									</ul></p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is it good to be a nurse in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Yes, it is good to be a nurse in Germany because of the following reasons:<br/>
										<ul>
											<li>High job satisfaction is driven by flexible working hours and many more.</li>
											<li>Good salaries, indefinite contracts, regulated holiday periods, and a series of additional benefits.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">How can I work as a nurse assistant in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">You can easily work as a nurse assistant in Germany by submitting your diplomas, proof of professional experience, and other relevant documents such as language certificate, the medical certificate to the local health authority of the corresponding federal state.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">What is the requirement of nurses in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
										<ul>
											<li>Proficiency in the German language and the minimum requirement for a work permit as a nurse is B2 level</li>
											<li>Country of origin</li>
											<li>From where you obtained your degree.</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">Is it possible to get a nursing job in Germany with a B1 certificate?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">If you want to work as a nurse in Germany, you need to speak the language. You need to prove that your level of German is sufficient for practicing your selected job.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">How can I work as a nurse assistant in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">You can easily work as a nurse assistant in Germany by submitting your diplomas, proof of professional experience, and other relevant documents such as language certificate, the medical certificate to the local health authority of the corresponding federal state.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">Is it possible to get a nursing job in Germany with 1 year of experience and a B2 certificate?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">Nurses are eligible to work in Germany with their already earned qualifications. You must have a German language certificate of level B1 or B2</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="8">
                <b className="accordion__title">Which level of German language skill do I require to get a job in Germany as a nurse?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
									<p className="service__info">The minimum requirement for a work permit as a nurse is B2 level</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="9">
                <b className="accordion__title">Are there any jobs for a nursing diploma in Germany?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
									<p className="service__info">Germany now permits nurses from several countries to get nursing jobs in Germany. The requirement of about 250000 vacancies that offer a golden opportunity for nursing jobs in Germany for Indian nurses.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
				</div>

				<div id="conclusion_sec">
					<h6 className="service__sub__title">Testimonials</h6></div>

      </Container>
		</section>
		</DocumentMeta>
  );
}


export default NursingJobInGermany;
