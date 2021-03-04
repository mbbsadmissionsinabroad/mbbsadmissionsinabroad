import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function TenSecretsAboutMbbsInRussia() {
	const meta = {
    title: "10 Secrets about MBBS in Russia That Nobody Will Tell You",
    description: "10 Secrets about MBBS in Russia That Nobody Will Tell You. About Course Fee, University Accreditation, Safety, Eligibility Criteria, Workshops, Cultural, Personal Attention, Tourism.",
    canonical: "https://www.mbbsadmissionsinabroad.com/10-secrets-about-mbbs-in-russia-that-nobody-will-tell-you",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "10 Secrets about MBBS in Russia That Nobody Will Tell You",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">10 Secrets about MBBS in Russia That Nobody Will Tell You</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/admission-in-russia-at-low-cost.png" alt="10 Secrets about MBBS in Russia That Nobody Will Tell You"/>
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

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Russian medical universities focus more on practical teaching:</b> Russian medical universities focus on practical approaches more. The course of MBBS is a mixture of theory and practical.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Low cost of living:</b> The cost of living in Russia is very reasonable. The lifestyle is quite good in Europe which is also a great reason for Indian students to pursue MBBS. As there is a high quality of living but the expenses to maintain this living style are affordable.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Russian universities have expert faculties:</b> The faculties of Russian universities are highly educated and have excellent in-depth knowledge over the subject matter. The top 10 medical colleges in Russia comprises of all the faculty members that have great experience in the field.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>No requirement for any donation fee and entrance exam:</b> The students do not need to pay any donation fee or capitation fee. They also do not need to give any entrance exam for taking admission to Russian medical universities/colleges.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Russia has common cultural aspects with India:</b> Indian students can comfortably adjust in Russia because both countries have a significant amount of cultural exchange. Pursuing in the Russian medical colleges can prove to be a great decision for Indian students.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Get the best facilities:</b> Russian medical colleges equipped with the latest equipment and technology that provide the students to get a high-quality medical education.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Earn a recognized degree:</b> The students that earned the MBBS degree from Russia is recognized worldwide because it is approved by UNESCO, WHO, and the European Council of Medicine.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>MCI and USMLE training:</b> Russian medical colleges also provide MCI and USMLE training to the students pursuing MBBS in Russia so that they can practice medicine in India and the USA respectively.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Obtain personal attention:</b> The batch size in Russian medical colleges is quite small that enables the students to get clear their doubts with professors easily.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>Enjoy Russia:</b> While studying MBBS in Russia, the students would get a chance to experience the culture of Russians. The can explore Russia and enjoy in Russia.</li>
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

export default TenSecretsAboutMbbsInRussia;