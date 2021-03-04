import React from 'react';
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function WhyMbbsCheapInRussia() {
	const meta = {
    title: "Why is MBBS cheap in Russia? Every Indian Student Must Know!",
    description: "Why is MBBS cheap in Russia? Find the list of Russian medical universities provide MBBS course at a very affordable fee",
    canonical: "https://www.mbbsadmissionsinabroad.com/why-is-mbbs-cheap-in-russia",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Why is MBBS cheap in Russia?",
      },
    },
	};
	
    return ( 
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">Why is MBBS cheap in Russia?</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/admission-in-russia-at-low-cost.png" alt="Why is MBBS cheap in Russia?"/>
						</div>
						
						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why MBBS Cost is Low </a></li>
							<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> List all the (English Medium) MBBS Colleges with Fee Structure </a></li>
							<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Suitable for whom: </a></li>
							<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion </a></li>
						</ul>
						
					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">Russia is one of the best places to pursue MBBS course. Russian medical universities provide <Link to="/fee-of-mbbs-in-russia-from-mci-approved-universities-for-2020-admission">MBBS in Russia at Low Fee</Link> and the best facilities for all the medical students. The students who want to study medicine in Russia and also have 50% marks can apply for the Scholarship. Russian medical universities provide MBBS course at a very affordable fee.</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">Why MBBS Cost is Low</h2>
								<p className="blog__post__desc">The students can study <Link to="/top-russian-medical-universities-for-indian-students">low cost MBBS in Russia</Link> in top Russian medical colleges. The fees of Medical college in Russia is anywhere around 4000 US Dollars per year only. The cost of living in Russia for MBBS students is also reasonable. Here are the reasons for pursuing <b>MBBS in Russia at low fee:</b></p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> There is no requirement to pay any donation or capitation fee for taking admission to Russia for studying medicine.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The tuition fee for MBBS in Russia is subsidized by the Russian Education Ministry which makes it reasonable to pursue MBBS in Russia for Indian students.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Medical colleges/universities in Russia are approved by the MCI and WHO and the degree has worldwide recognition.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Russian medical colleges/universities have advanced laboratories, well-developed medical faculty, and top-class infrastructure.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> MBBS graduates from Russia can also practice in India after qualifying MCI screening test.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The admission to Russian medical universities is very easy and convenient.</li>
								</ul>

							</div>
							
							<div id="2">
								<h3 className="blog__post__title">List all the (English Medium) MBBS Colleges with Fee Structure</h3>
								<p className="blog__post__desc">There are some MBBS colleges in Russia that follow the method of teaching in only English language. Here is the list of the English-medium MBBS colleges with fee structure:</p>

								<div className="blog__post__table">
									<Table striped bordered hover>
										<thead>
											<tr>
												<th>MBBS colleges</th>
												<th>Tuition Fee in USD</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Volgograd State Medical University</td>
												<td>6000</td>
											</tr>
											<tr>
												<td>Dagestan State Medical University</td>
												<td>3000</td>
											</tr>
											<tr>
												<td>Kazan State Medical University</td>
												<td>7000</td>
											</tr>
											<tr>
												<td>Crimean Federal University</td>
												<td>4250</td>
											</tr>
											<tr>
												<td>People’s Friendship University of Russia</td>
												<td>7000</td>
											</tr>
										</tbody>
									</Table>
								</div>

							</div>

							<div id="3">
								<h3 className="blog__post__title">Suitable for whom:</h3>

								<p className="blog__post__desc">Russia is the most preferred destination for all aspiring medical students because of top-class medical education with state-of-art infrastructure. It is suitable for every aspiring medical student that wants to pursue <b>low-cost MBBS in Russia</b> such as:</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The students who scored low NEET score can take admission in top Russian medical colleges as there is no requirement of any entrance exam.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The students who want to become Doctor but budget is low can take direct admission to <Link to="/mbbs-in-russia">MBBS in Russia at a low fee</Link> and fulfill their dream.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The students who want to explore other nation education system can definitely study MBBS in Russia.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The students who attended NEET couple years but couldn’t score to get MBBS Seat in India can easily get admission to Russian medical colleges/universities at a very affordable fee.</li>
								</ul>

							</div>

							<div id="4">
								<h3 className="blog__post__title">Conclusion</h3>

								<p className="blog__post__desc">Russia is a developed country in the world. Most of the Indian students prefer to pursue MBBS in Russia because of the low-cost MBBS Fees and reasonable living costs. The top medical colleges of Russia also provide an MBBS course in the English language. After completing MBBS from Russia, the candidates can go for a PG courses. Traveling to Russia to study MBBS is always an exciting experience.</p>

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

export default WhyMbbsCheapInRussia;