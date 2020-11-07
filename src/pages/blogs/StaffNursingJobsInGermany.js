import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function StaffNursingJobsInGermany() {
	const meta = {
    title: "Staff Nursing Jobs in Germany without IELTS",
    description: "Staff Nursing Jobs in Germany without IELTS",
    canonical: "https://www.mbbsadmissionsinabroad.com/staff-nursing-jobs-in-germany-without-ielts",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Staff Nursing Jobs in Germany without IELTS",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">Staff Nursing Jobs in Germany without IELTS</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/staff-nursing-jobs-in-germany.png" alt="Staff Nursing Jobs in Germany without IELTS"/>
						</div>
						
						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirement of Staff Nurse Jobs in Germany </a></li>
							<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Nursing Jobs in Germany without IELTS </a></li>
						</ul>
						
					</Container>
					<section className="blog__post">
						<Container>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">Requirement of Staff Nurse Jobs in Germany</h2>
								<p className="blog__post__desc">The below-listed requirements need to be fulfilled for the vacancy of <b>Staff Nurse Jobs in Germany:</b></p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> B2 Level of German language is a must for nursing job as they have to communicate with the German patients.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Academic documents such as mark-sheets/ transcripts or certificates should also have to be translated in the German language.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Medical certificate which proves good health.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> PCC (Police Clearance Certificate) needs to check that person is having any case registered or not.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Germany accepts only those nurses who are already certified by the European Union.</li>
								</ul>

							</div>
							
							<div id="2">
								<h3 className="blog__post__title">Nursing Jobs in Germany without IELTS</h3>
								<p className="blog__post__desc">Germany provides <Link to="/staff-nursing-jobs-in-germany-without-ielts">Nursing Jobs in Germany without IELTS</Link>. Germany offers nursing jobs to the candidates that have skills and experience to work in hospitals. It has definitive steps, rules, and procedures that every nurse has to follow to immigrate to work and live in Germany.</p>

								<p className="blog__post__desc">It is necessary that nurses need to check the requirements for professional designations such as Registered Practical Nurses, Registered Nurses, and Nurse Practitioners before applying for <Link to="/nursing-job-in-germany">Staff Nurse Jobs in Germany</Link>.</p>

								<p className="blog__post__desc">The <b>Staff Nurse Jobs in Germany</b> require to practice in the country’s NHS for the duration of a year. This assists them to qualify for registering as Registered Nurses without taking the IELTS. Nurses must check for the pre-approved program that can result in successful Registered Nurses registration without other conditions. It has the following benefits:</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The nurses (GNM) can gain B.Sc. Degree</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> There is no requirement for IELTS.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Nurses can do a part-time job for a certain period of time per week.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Nurses can get hired in the NHS hospital in Germany.</li>
								</ul>

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

export default StaffNursingJobsInGermany;