import React from 'react';
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function NursingRecruitmentAgencyForAbroad() {
	const meta = {
    title: "How do I choose an Indian Nursing Recruitment Agency for Abroad?",
    description: "New-Lyf an Indian Nursing Recruitment Agency for Abroad. A recruitment agency gives proper guidance through the recruitment process till you get the nursing job at the best place.",
    canonical: "https://www.mbbsadmissionsinabroad.com/how-do-choose-an-indian-nursing-recruitment-agency-for-abroad",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "How do I choose an Indian Nursing Recruitment Agency for Abroad",
      },
    },
	};
	
    return (
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">How do I choose an Indian Nursing Recruitment Agency for Abroad?</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/how-do-i-choose-an-indian-nursing-recruitment-agency-for-abroad.png" alt="How do I choose an Indian Nursing Recruitment Agency for Abroad?"/>
						</div>
						
					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">It is very important to select your job wisely at the beginning itself because whatever you choose for yourself will be defined as your career path. The solution to this problem lies in consulting the best <Link to="/how-do-choose-an-indian-nursing-recruitment-agency-for-abroad">abroad nursing recruitment agency in India</Link>.</p>

							<p className="blog__post__desc">A recruitment agency is the one that gives proper guidance through the recruitment process till you get the nursing job at the best place. Abroad Nursing Job Agency in India has a team of well-qualified professionals that are highly precise in placing their candidates in the best company for them.</p>

							<p className="blog__post__desc">New-Lyf is one of the best <b>abroad nursing recruitment agency in India</b> which is well known for its prompt placement services and delivery of immigration advice regarding several countries. We deliver a multitude of services, placement of Nurses, Training of <b>Nurses, and Immigration advice of Nurses</b>.</p>

							<p className="blog__post__desc">We excel in assisting & guiding nurses at every step of the process such as immigration, recruitment, education, and training. We at abroad nursing job agency in India undergo a rigorous screening & selection procedure and are fully certified with the necessary competencies of registered nurses to practice independently.</p>

							<p className="blog__post__desc">We provide skilled Indian nurses to the <b>US, UK, <Link to="/nursing-jobs-in-canada">Canada</Link>, UAE, <Link to="/nursing-job-in-germany">Germany</Link></b>, and many more countries. We ensure that the nurse met the following criteria in order to work as a Nurse in any country:</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Completed education in the Nursing profession.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Registration as a nurse in the same county where education was completed.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> NMC</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Altranais</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> NCLEX-RN and CGFNS</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> CRNE</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> HAAD</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> ANMC</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Appropriate work permit</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Valid passport</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> Appropriate visa for entry to the Country</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> English in the specified standard such as IELTS/ TOEFL</li>
							</ul>

							<div className="blog__post__aut_box">
								<Row className="no-gutters">
								<Col md={12} lg={2}>
								<img className="blog__post__aut_img" src="assets/DL.png" alt="New-Lyf Logo" />
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

export default NursingRecruitmentAgencyForAbroad;