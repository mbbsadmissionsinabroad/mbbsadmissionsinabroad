import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function FiveAdviceMbbsInPhilippines() {
	const meta = {
    title: "5 Advices That You Must Listen Before Studying MBBS in Philippines",
    description: "5 Advices That You Must Listen Before Studying MBBS in Philippines. About Course Fee, University Accreditation, Safety, Eligibility Criteria & Scope of MBBS.",
    canonical: "https://www.mbbsadmissionsinabroad.com/5-advices-that-you-must-listen-before-studying-mbbs-in-philippines",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "5 Advices That You Must Listen Before Studying MBBS in Philippines",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">5 Advices That You Must Listen Before Studying MBBS in Philippines</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/5-advice-that-you-must-listen.png" alt="5 Advices That You Must Listen Before Studying MBBS in Philippines"/>
						</div>
						
						{/*<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why MBBS Cost is Low </a></li>
							<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> List all the (English Medium) MBBS Colleges with Fee Structure </a></li>
							<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Suitable for whom: </a></li>
							<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion </a></li>
						</ul> */}
						
					</Container>
					<section className="blog__post">
						<Container>

						<p className="blog__post__desc">Here are the five advises that you must listen before studying MBBS in Philippines</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> It is necessary to know about the course fee and number of Indian students pursuing MBBS in that university</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must check if the university is accredited by MCI, WHO and other renowned institutions</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> They have to check the safety of the place</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> They must know the MCI/FMGE passing percentage of Philippines universities</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> They must know the scope after completion of MBBS course in the Philippines</li>
								</ul>

							</div>

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

export default FiveAdviceMbbsInPhilippines;