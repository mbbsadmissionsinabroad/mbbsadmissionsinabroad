import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function SevenThingsAboutMbbsInUkraine() {
	const meta = {
    title: "7 Things You Most Likely Didn't Know About MBBS in Ukraine",
    description: "7 Things You Most Likely Didn't Know About MBBS in Ukraine. About Course Fee, University Accreditation, Safety, Eligibility Criteria, Workshops & Scope of MBBS.",
    canonical: "https://www.mbbsadmissionsinabroad.com/7-things-you-most-likely-didnt-know-about-mbbs-in-ukraine",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "7 Things You Most Likely Didn't Know About MBBS in Ukraine",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">7 Things You Most Likely Didn't Know About MBBS in Ukraine</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/7-things-you-most-likely-didnt-know.png" alt="7 Things You Most Likely Didn't Know About MBBS in Ukraine"/>
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

						<p className="blog__post__desc">Ukraine is primarily famous among international students who want to pursue MBBS abroad. It comprises various government-funded medical colleges that provide MBBS at a low-cost budget. The students who complete their <Link to="/top-10-mbbs-colleges-in-ukraine-for-2020-admission">MBBS from a Ukrainian medical university</Link> can apply for work anywhere in the world. Here are seven things you most likely didn’t know about MBBS in Ukraine:</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>High Standards Of Medical Education:</b> MBBS in Ukraine is considered one of the best in the world by the cost & quality ratio. Top-class facilities and high-quality medical education provide the right setting for students to qualify as accomplished doctors.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Low-Cost Tuition Fees:</b> The tuition fee of Ukraine medical colleges/universities is very affordable. That’s the main reason more than 8000 students take admission to Ukraine for studying MBBS every year.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Extracurricular Activities And Sports:</b> Keeping students active and challenged is an important part of Ukrainian medical education. Each Ukraine medical college introduces extracurricular activities in their curriculum for all students.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Workshops And International Conferences:</b> Ukraine medical college encourages the students to participate in the workshops and international conferences that make it easier for students to understand, contribute to, and implement the latest technology in medicine.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Medical Degrees Are Recognized The World Over:</b> The medical degree obtained from Ukraine medical colleges/universities are recognized by the MCI, WHO, EU, UNICEF.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Financial Aid Also Provides To Medical Students:</b> UMEC (Ukrainian medical study center) provides financial help to the top students pursuing in Ukraine. UMEC offers to its outstanding students an annual scholarship package from the second year of the MBBS course. This scholarship obtained by the students is 1000 USD or basically 20% of their tuition fees.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Ukraine Has Mildly Friendly Weather:</b> Ukraine is a cold place. January is the coldest month in Ukraine with subzero temperatures that can cause frostbites and 290 sunny days with rain and warmth in between.</li>
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

export default SevenThingsAboutMbbsInUkraine;