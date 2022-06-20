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

          <div>
            <h6 className="service__sub__title">Nursing Jobs in Germany for Indians</h6>
            <p className="service__info">Germany is one of the <b>top destinations for Indians particularly nurses</b> because the country has a <b>high demand for nurses</b>. Thousands of <b>nurses choose Germany</b> as a work destination every year. For Indian nurses, there is an <b>infinite supply of nursing opportunities in Germany</b>. The majority of people are attracted to <Link to="/nursing-job-in-germany">nursing jobs in Germany</Link> because of the <b>high pay, job growth, and job security.</b></p>
          </div>

          <div>
            <h6 className="service__sub__title">Rising Demand for Nursing Jobs in Germany!</h6>
            <p className="service__info">In recent years, the demand for <Link to="/nursing-job-in-germany">nursing jobs in Germany</Link> has increased, providing more options for Indian nurses to advance their careers and work abroad. Because of <b>Germany's excellent living conditions, a large proportion of the population is in good health, and life expectancy has increased dramatically.</b> </p>

            <p className="service__info">However, it has resulted in an aging society in Germany, resulting in a decrease in the number of young workers. As a result, several <b>German hospitals, nursing homes,</b> and other <b>healthcare institutions</b> have begun the process of <Link to="/nursing-jobs-in-germany-for-indian-nurses">Germany nurses recruitment</Link> from other countries to fulfil their expanding demand. </p>

            <p className="service__info">So, if you are seeking a nursing career that pays well while also allowing you to work in one of the <b>world's greatest healthcare systems</b>, grab the opportunity! The increased demand for <Link to="/staff-nursing-jobs-in-germany-without-ielts">nursing jobs in Germany English speaking</Link> has created new prospects for Indian nurses to work in Germany.</p>
          </div>

          <div>
            <h6 className="service__sub__title">Why is Germany a Great Destination for Nursing Jobs?</h6>
            <p className="service__info">Nursing is a <b>highly respected and sought-after profession in Germany</b>. To meet the ever-increasing demand of the medical business, <b>Germany urgently needs certified and skilled nurses</b>. If foreign nurses are not allowed to enter, the gap between nurses and patients might expand by 84 percent, according to the <b>RWI Research Survey</b>. As a result of this scenario, there is a huge demand for <Link to="/nursing-job-in-germany">nursing jobs in Germany for Indian nurses</Link> to work in its hospitals and medical institutions. <b>Around 200,000 nurses are needed in Germany each year</b>.</p>
          </div>

          <div>
            <h6 className="service__sub__title">Work as a Registered Nurse: Eligibility Criteria</h6>
            <p className="service__info">
            <ul>
              <li>Obtain a Bachelor's Degree in Nursing, a General Nursing Midwifery Certificate, or a Master's Degree in Nursing after completing the program. </li>
              <li>B2 level German language certificate from GOETHE/TELC/OSD</li>
            </ul>
            </p>
          </div>

          <div>
            <h6 className="service__sub__title">Nursing Duties</h6>
            <p className="service__info">Nurses will help doctors and patients in a variety of ways. Patients' care, independent observation, counselling, and assistance and care for patients, in-patients, and out-patients are all tasks of the nurse. Nurses may also carry out medical directives and aid with medical operations, depending on their unique area of specialization and qualifications. They are also an experienced source of information for patients' families as nurses. Here are the primary duties of nurses in Germany:
            <br/>
            <ul>
              <li>Patient Care </li>
              <li>Pediatric Nursing</li>
              <li>Elderly Care</li>
            </ul>
            </p>
          </div>

          <div>
            <h6 className="service__sub__title">Requirement for the German Language</h6>
            <p className="service__info">There is a high number of <Link to="/how-do-choose-an-indian-nursing-recruitment-agency-for-abroad">Germany nurse vacancy</Link> available. In order to work as a nurse in Germany, Indian nurses must be able to communicate in German. With over half of the population conversing only in German, all hospitals make it a point to ensure that their personnel knows the language effectively to allow a smooth interaction with the patient. </p>

            <p className="service__info"><b>If you want to work as a nurse in Germany</b>, you should start taking language classes well before the registration deadline. For <b>Indian nurses to work as registered nurses in Germany</b>, they must have a <b>B2 level certificate in German from GOETHE/TELC/OSD.</b></p>
          </div>

          <div>
            <h6 className="service__sub__title">Perks of Nursing Jobs in Germany for Indian Nurses</h6>
            <p className="service__info">Here are the advantages of <b>nursing jobs in Germany for Indian nurses:</b></p>

            <p className="service__info">
            <ul>
              <li><b>Job Demand and Growth:</b> Health professions have shown significant growth when compared to other fields. Some of the reasons for this include <b>rising chronic disease rates, an aging population, and increased demand for healthcare services.</b> </li>

              <li><b>Job Security:</b> If you work as a <b>nurse in Germany</b>, you do not have to worry about anything because the <b>country has a work council that protects the company's employees</b>. As a result, nurse positions in Germany are completely secure.</li>
              
              <li><b>Bring your family with you to Germany:</b> After establishing down, you may choose to <b>bring your family to Germany as well</b>. It could take 3 to 4 months. Your <b>spouse can work as well, and your children can enjoy a free world-class education or attend international schools where English is taught</b>. As a result of this possibility, Germany is one of the most preferred destinations for foreign-trained nurses.</li>
              
              <li><b>Permanent Residency:</b> Another significant <b>advantage of working as a nurse in Germany</b> is the ability to travel. After five years, or earlier, you will be granted permanent residency. Non-EU nationals who have lived in Germany for more than five years will be granted a residence permit. Another criterion is that you show your ability to communicate in German. Your spouse and child will be granted temporary residency permits if you obtain a residence permit.</li>
              
              <li><b>Unlimited Job contract:</b> Another <b>benefit of nursing jobs in Germany for Indian nurses</b> is the <b>ability to work for an indefinite period</b>. By mutual consent and with the acceptance of both parties, the contract can be ended or switched at any moment.</li>
            </ul>
            </p>
          </div>

          <div>
            <h6 className="service__sub__title">How Can New-Lyf assist you?</h6>
            <p className="service__info">
            <ul>
              <li>Online and Offline German Language Classes are available.</li>
              <li>Assist you with the nursing registration process in Germany.</li>
              <li>Assist you with document translations into German.</li>
              <li>Set up an interview with a German employer.</li>
              <li>Assist you in obtaining a job contract.</li>
              <li>Assist you with your visa application</li>
              <li>In Germany, our German Representative will assist you with post-landing services.</li>
              <li>Assist you with the relocation of your family to Germany.</li>
            </ul>
            </p>
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
