import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function WhatIsPgMedicalCourse() {
	const meta = {
    title: "What is PG Medical Course? Medical PG in India Vs Abroad",
    description: "What is PG Medical Course? Find the different procedures for pursuing PG in India or abroad. They can opt to study MCI recognized PG course",
    canonical: "https://www.mbbsadmissionsinabroad.com/what-is-pg-medical-course",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "What is PG Medical Course?",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">What is PG Medical Course?</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/what-is-pg-medical-course.png" alt="What is PG Medical Course?"/>
						</div>
						
						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Medical PG in India </a></li>
							<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Medical PG in Karnataka </a></li>
							<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Medical PG in Abroad </a></li>
						</ul>
						
					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">After completing the MBBS, the medical graduates can pursue <Link to="/what-is-pg-medical-course">PG Medical Course</Link>. They can opt to study MCI recognized PG course for completing further medical studies which suits their ability. There are different procedures for pursuing PG in India or abroad. The MBBS graduates can pursue PG Medical Course in several medical subjects that lead to the degree of MD (Doctor of Medicine), MS (Master of Surgery), and more.</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">Medical PG in India</h2>
								<p className="blog__post__desc">The candidates that take admission to PG courses in most of the colleges in India need to qualify the National Eligibility cum Entrance Test (NEET-PG). Once they clear the NEET PG exam, they have the following PG Medical Course s to opt for:</p>

								<p className="blog__post__desc"><b>M.D. (Doctor of Medicine):</b></p>

								<p className="blog__post__desc">It is a 3 years PG course degree in medicine. The candidates who hold the MBBS degree in their under graduation are eligible to apply for the PG course. The candidates can opt for a Doctor of Medicine or MD degree for specialization in post-graduation that wants to excel in the field of medicine. After successful completion of this medical PG course, candidates will be eligible to work as a physician.</p>

								<p className="blog__post__desc"><b>M.S. (Master of Surgery):</b></p>

								<p className="blog__post__desc">It is also 3 years PG course that leads to a postgraduate degree in medical surgery. The candidates who hold the MBBS degree in their under graduation are eligible to apply for the PG course. The candidates who want to have more theoretical and research knowledge as well as practical and clinical skills regarding the surgery can opt for a Master of Surgery by pursuing a PG course. After successful completion of this PG course, the candidates will be eligible to work as Surgeon.</p>

								<p className="blog__post__desc"><b>Postgraduate Diploma (PG Diploma):</b></p>

								<p className="blog__post__desc">It is a diploma program in medicine which is provided by several medical colleges across India. The candidates who hold the MBBS degree in their under graduation are eligible to apply for the PG course. The duration of this PG course varies from 2 to 3 years.</p>

							</div>
							
							<div id="2">
								<h3 className="blog__post__title">Medical PG in Karnataka</h3>
								<p className="blog__post__desc"><b>KEA (Karnataka Examination Authority)</b> conducts admission to <b>medical PG in Karnataka. Medical PG in Karnataka</b> will be granted on the basis of scores acquired in NEET PG by the candidates. The candidates must secure at least a qualifying percentile as specified by the <b>NBE (National Board of Examinations)</b>. It is important for the candidates to go through the eligibility conditions before applying for admission to medical PG in Karnataka. Some of the basic Medical PG in Karnataka eligibility conditions are as given below:</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidates must have completed MBBS/BDS from any college recognized by the MCI (Medical Council of India) or DCI (Dental Council of India).</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The graduates who will be completing or have completed the rotator internship on or before March 31, 2020, can take admission to the Medical PG course.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have got the registration certificate from MCI/State Medical Council or DCI/State Dental Council (SDC).</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> It is a must to secure the NEET PG cutoff qualifying percentile to qualify the entrance examination.</li>
								</ul>

							</div>

							<div id="3">
								<h3 className="blog__post__title">Medical PG in Abroad</h3>

								<p className="blog__post__desc">The PG course offers an opportunity for the MBBS graduates to opt for a specialized understanding of their specialized area or profession. It also helps them to gain a higher level of skills needed in the field of medicine. After completing the MBBS course successfully from the different MCI approved medical universities/colleges, the medical graduates have a rewarding career ahead. Indian medical graduates can opt for medical PG in abroad such as <Link to="/medical-pg-in-germany">medical PG in Germany</Link>, Russia, Ukraine, and more. Each country has different eligibility criteria, specialization areas, course duration, and process for admission to their medical PG courses.</p>

								<p className="blog__post__desc">The candidates can also go for masters in hospital administration which has a great scope in the developing medical sector along with several other specializations. After the successful completion of the PG course including MD or MS, the candidates can find lots of opportunities abroad as well as in India. Pursuing Medical PG in Germany will make the candidates’ career go much high. However, Russia, Ukraine also provides PG courses but comparative Germany costs less expensive.</p>

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

export default WhatIsPgMedicalCourse;