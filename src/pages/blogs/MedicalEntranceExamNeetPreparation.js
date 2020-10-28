import React from 'react';
import "./Blog.css";
import { Container, Row, Col, Table, Accordion, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function MedicalEntranceExamNeetPreparation() {
	const meta = {
    title: "Medical Entrance Exam NEET 2020 Preparation for Indian Students",
    description: "Medical Entrance Exam NEET 2020 Preparation so as the candidates can know how to prepare for NEET 2020 in the best possible way in order to score high ranks.",
    canonical: "https://www.mbbsadmissionsinabroad.com/medical-entrance-exam-neet-2020-preparation",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Medical Entrance Exam NEET 2020 Preparation",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">Medical Entrance Exam NEET 2020 Preparation</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/medical-entrance-exam-neet-2020-preparation.png" alt="Medical Entrance Exam NEET 2020 Preparation"/>
						</div>
						
						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> NEET 2020 Exam Date</a></li>
              <li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> NEET Eligibility Criteria</a></li>
              <li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> NEET 2020 Syllabus</a></li>
							<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> NEET Exam Pattern</a></li>
							<li><a href="#5"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Preparation Tips for NEET 2020</a></li>
							<li><a href="#6"><img src="/assets/left-arrow.png" alt="Left Arrow" /> About NEET Test Series Event</a></li>
							<li><a href="#7"><img src="/assets/left-arrow.png" alt="Left Arrow" /> FAQ</a></li>
						</ul>
						
					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">The candidates can easily get <b>MBBS admission</b> in the medical and dental colleges by qualifying NEET. Destinex helps the candidates in the preparations for NEET so as the candidates can know how to <Link to={{pathname: "https://neettestseries.co.in/"}}>prepare for NEET 2020</Link> in the best possible way in order to score high ranks.</p>

							<p className="blog__post__desc">This article helps the candidates with quintessential <Link to={{pathname: "https://neettestseries.co.in/"}}>preparation tips to crack NEET 2020 exam with high ranks</Link> and guide them to strategize the study schedule, manage time, clear doubts to qualify the entrance examination.</p>
							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">NEET 2020 Exam Date</h2>

								<p className="blog__post__desc">NEET is going to be conducted on July 26, 2020, in the offline mode in several exam cities located across the country.</p>

							</div>
							
							<div id="2">
								<h3 className="blog__post__title">NEET Eligibility Criteria</h3>
								
								<p className="blog__post__desc"><b>2020 NEET eligibility criteria</b> are as given below:</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should completed 12th or equivalent from a recognized institute.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> In the general category, the candidates should have an aggregate of 50%.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidates of the SC/ST category must have an aggregate of 40% & the OBC category should have at least 45%.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> To appear for the NEET examination, the candidates should be at least 17 years of age.</li>
								</ul>

								<p className="blog__post__desc"><b>NEET 2020 Instructions</b></p>
								
								<ol>
									<li>The candidates must not carry:
										<ul>
											<li>textual material (printed or written)</li>
											<li>bits of papers</li>
											<li>Geometry/Pencil Box</li>
											<li>Plastic Pouch, Calculator</li>
											<li>Pen, Scale, Writing Pad, & Eraser</li>
											<li>Pen Drives</li>
											<li>Calculator, Log Table</li>
											<li>Electronic Pen/Scanner, & many more.</li>
										</ul>
									</li>
									<li>The candidates must not carry communication devices like Mobile Phone, Bluetooth, Earphones, Microphone, Pager, Health Band, etc.</li>
									<li>The candidates must not carry other items like Wallet, Goggles, Handbags, Belt, Cap Watch/Wrist Watch, Bracelet, Camera, etc.</li>
									<li>The candidates must not carry any eatable item opened or packed, water bottle, tea, coffee, cold drinks, etc.</li>
									<li>The candidates who are suffering from diabetes can carry eatables like sugar tablets/fruits (banana/apple/orange) and transparent water bottle with prior intimation. But they will not be allowed to carry packed foods like chocolate, sandwich, and others.</li>
								</ol>

							</div>

							<div id="3">
								<h4 className="blog__post__title">NEET 2020 Syllabus</h4>
								<p className="blog__post__desc"><b>NEET 2020 Syllabus</b> for UG courses is a common syllabus prescribed by MCI (Medical Council of India). The candidates can prepare for the NEET exam from the syllabus of Class 11th & 12th topics studied in each subject. NEET (UG) includes topics from Physics, Chemistry & Biology subjects. Some of the topics from each subject are as follows:</p>

								<ol>
									<li><b>Physics:</b> It includes Laws of Motion, Electrostatic, Electromagnetic Waves, Electronic Devices, Behaviour of Perfect Gas and Kinetic Theory, Properties of Bulk Matter, Dual Nature of Matter and Radiation, & many more.</li>
									<li><b>Chemistry:</b> It includes some basic concept of chemistry, Equilibrium, Hydrogen, Electro Chemistry, Surface Chemistry, Electrochemistry, Alcohols, Phenols and Ethers, p-Block Elements, & many more.</li>
									<li><b>Biology:</b> It includes Human Physiology, Plant Physiology, Reproduction, Ecology & Environment, Cell Structure and Function, Diversity in Living World, Biology and Human Welfare, & many more.</li>
								</ol>
								
							</div>

							<div id="4">
								<h5 className="blog__post__title">NEET Exam Pattern</h5>
								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The NEET exam will be conducted in a Pen and Paper Based format. The candidates will need to mark their responses in the OMR answer sheet provided during the exam using a ballpoint pen.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> NEET exam duration is three hours</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> NEET 2020 question booklet will have 180 multiple choice questions from all three subjects. Physics and Chemistry will account for 45 questions each and Biology will account for 90 questions.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> All questions will be the multiple-choice type with 4 options and only 1 correct choice.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The NEET 2020 question paper will be conducted in English, Hindi, Assamese, Bengali, Gujarati, Marathi, Tamil, Telugu, Oriya, Kannada, and Urdu.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Each question in the NEET 2020 question paper will carry 4 marks. Correct answers will carry 4 marks and incorrect answers will result in a deduction of 1 mark. No marks will be given or deducted for unmarked questions.</li>
								</ul>

								<p className="blog__post__desc">The distribution of questions and marks in each section of NEET 2020 is given below:</p>

								<div className="blog__post__table">
									<Table striped bordered hover>
										<thead>
											<tr>
												<th>Subject</th>
												<th>Total Questions</th>
												<th>Total Marks</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Physics</td>
												<td>45</td>
												<td>180</td>
											</tr>
											<tr>
												<td>Chemistry</td>
												<td>45</td>
												<td>180</td>
											</tr>
											<tr>
												<td>Biology</td>
												<td>90</td>
												<td>360</td>
											</tr>
											<tr>
												<td>Total</td>
												<td>180</td>
												<td>720</td>
											</tr>
										</tbody>
									</Table>
								</div>

							</div>

							<div id="5">
								<h6 className="blog__post__title">Preparation Tips for NEET 2020</h6>
								<p className="blog__post__desc">The candidates can follow the given below NEET preparation tips to enhance their exam preparation and qualify the test with high ranks:</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should make a study time table and follow that timetable strictly.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should check NEET 2020 syllabus & NEET exam pattern before starting the exam preparation.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should practice from previous year question paper and sample papers.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should take care of their health while preparing for the NEET exams.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should focus on weaker topics first and keep practicing.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidate should practice online mock tests.</li>
								</ul>

							</div>

							<div id="6">
								<h6 className="blog__post__title">About NEET Test Series Event</h6>
								<p className="blog__post__desc">Destinex is going to hold a seminar from 10 June to 15 June where students can participate from different parts of India. Do not miss this golden opportunity to interact with our expert counselors and attain the appropriate advice on a medical career. Experts will discuss the exam pattern, marking scheme, and type of questions that may appear so that the students can score 600+ in the NEET 2020 examination. Get the expert’s guidance for <b>MBBS Admission</b> in the best medical colleges.</p>

								<p className="blog__post__desc"><b>Benefits of NEET Webinar to Students</b></p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Strengthen their weak topics:</b> The students can strengthen their weak topics and improve their problem-solving skills</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Expert guidance:</b> The students can utilize the extra guidance sessions where they can clear all their doubts related to any particular topic.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Tips to solve MCQs:</b> The experts will guide some tips, shortcuts, and techniques needed to resolve the questions in a given time duration to score high marks.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Best MBBS colleges:</b> The experts will guide the students about the MBBS admission in the best medical colleges.</li>
								</ul>

								<p className="blog__post__desc">The candidates must practice more and more questions topic wise, sub-topic wise to enhance their problem-solving skills. They must get printed books and study materials including question papers, sample papers, notes, and expert’s guidance for better NEET exam preparation in order to achieve high ranks.</p>

							</div>

							<div id="7">
								<h6 className="blog__post__title">FAQ</h6>
								<Accordion defaultActiveKey="0">
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											<b className="accordion__title">Will NEET 2020 be Difficult?</b>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
											<Card.Body>
												<p className="service__info">If the candidates have prepared well for the NEET exam then it will be easier. They have to prepare well in all three subjects i.e physics, biology, and chemistry.</p>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="1">
											<b className="accordion__title">Is there any Change in NEET 2020 Exam?</b>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="1">
											<Card.Body>
												<p className="service__info">Yes, there are some changes in the application fee & form filing procedure. The candidates can check this from the application form section.</p>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="2">
											<b className="accordion__title">Will NEET 2020 be online?</b>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="2">
											<Card.Body>
												<p className="service__info">No, NEET 2020 exam will be conducted in offline mode.</p>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="3">
											<b className="accordion__title">What is the Best Test Series for NEET 2020?</b>
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="3">
											<Card.Body>
												<p className="service__info">The best test series for NEET 2020 is <Link to={{ pathname:"https://neettestseries.co.in/" }}>NEET Test Series</Link> because it provides free NEET mock tests formulated by subject matter experts and are compiled after the analysis of previous year trends.</p>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>

							<div className="blog__post__aut_box">
								<Row className="no-gutters">
								<Col md={12} lg={2}>
								<img className="blog__post__aut_img" src="assets/DL.png" alt="Destinex Logo" />
								</Col>
								<Col md={12} lg={10}>
								<p className="blog__post__aut_info">Dr Vinit Kumar is a Educational Consultant for India & Abroad with more than 18 Years of Experience. He has an extensive background guiding & assisting medical students to find the best university as per their budget. ✔3500+ Students ✔15 Countries ✔MBBS, MBA, PG, UG ✔100% Commitment ✔Education Loan ✔Job Placements</p>							
								</Col>
								</Row>
								
							</div>
						</Container>
					</section>
				</div>
			</DocumentMeta>
    )
}

export default MedicalEntranceExamNeetPreparation;
