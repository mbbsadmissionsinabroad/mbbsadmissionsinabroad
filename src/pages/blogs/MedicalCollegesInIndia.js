import React from 'react';
import "./Blog.css";
import { Container, Row, Col, Table } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function MedicalCollegesInIndia() {

	const meta = {
    title: "MBBS Seats in India - List of Medical Seats & PG Medical Seats of India",
    description: "MBBS Seats in India. List of Medical Seats & PG Medical Seats of India. Entrance examinations are conducted at the central level and at the university level for the allocation of MBBS seats.",
    canonical: "https://www.mbbsadmissionsinabroad.com/mbbs-seats-in-india",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "MBBS Seats In India",
      },
    },
	};
	
    return (
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">MBBS Seats in India</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/list-of-medical-colleges-in-india.png" alt="MBBS Seats in India"/>
						</div>

						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Cut-off percentage for MBBS seats in India</a></li>
              <li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Eligibility to get MBBS seat in India</a></li>
              <li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Entrance examinations to get MBBS seats in India</a></li>
              <li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Total number of MBBS seats in India state-wise</a></li>
            </ul>

					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">Most of the medical candidates in India look for government MBBS seats by scoring high in NEET exams. MBBS seats in India are limited & the competition is vast. NEET entrance exam is compulsory for the candidates who want to pursue medical studies under the MBBS course. NEET is conducted for MBBS seats in India by the central board of secondary education annually. There is no other national level entrance exam other than NEET for total MBBS seats in India.</p>
							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">Cut-off percentage for MBBS seats in India</h2>
								<p className="blog__post__desc">The cut-off marks for MBBS seats in India for the general category is 50% and for SC/ST/OBC categories, it is 40%. There is vast competition for the MBBS entrance examination due to the number of seats for colleges in India that provide the MBBS course is very low and the number of candidates is high. It is necessary for the students to score high ranks in order to get admission in top MBBS colleges in India.</p>
							</div>
							
							<div id="2">
								<h3 className="blog__post__title">Eligibility to get MBBS seat in India</h3>
								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidates who have passed 12 exams with physics, chemistry, and biology are eligible to get a seat into the MBBS course.</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidates must clear the All India Entrance Exam (NEET).</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The candidates should have completed 17 years as on 31st December of the year of admission.</li>
								</ul>
							</div>
							

							<div id="3">
								<h4 className="blog__post__title">Entrance examinations to get MBBS seats in India</h4>
								<p className="blog__post__desc">Entrance examinations are conducted at the central level and at the university level for the allocation of MBBS seats.</p>							

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>AIIMS:</b> All India institute of medical science entrance examination</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> <b>AIPMT:</b> All India – Pre-Medical / Pre-Dental Entrance Exam (AIPMT) / National Entrance & Eligibility Test (NEET)</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> 15% of the total seats in all medical & dental colleges in India are reserved for candidates who top the NEET examination.</li>
								</ul>
								
								<p className="blog__post__desc"><b>State-level entrance exams</b></p>
								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> All state governments are expected to fill their 85% quota of their medical seats on the basis of the NEET score.</li>
								</ul>
								
								<img className="img-fluid rounded mx-auto d-block" src="assets/images/blog-banners/list-of-medical-colleges-in-india (2).png" alt="" /> 
							</div>

							<div id="4">
								<h5 className="blog__post__title">Total number of MBBS seats in India state-wise</h5>
								<p className="blog__post__desc">The following information about the tenure of the MBBS course helps the students to plan study MBBS abroad:</p>
								<div className="blog__post__table">
									<Table striped bordered hover>
										<thead>
											<tr>
												<th>State/UT</th>
												<th>Number of Medical Colleges</th>
												<th>No. stand alone PG institutes</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Andaman & Nicobar</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Andhra Pradesh</td>
												<td>31</td>
												<td>1</td>
											</tr>
											<tr>
												<td>Arunachal Pradesh</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Assam</td>
												<td>7</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Bihar</td>
												<td>16</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Chandigarh</td>
												<td>1</td>
												<td>1</td>
											</tr>
											<tr>
												<td>Chattisgarh</td>
												<td>10</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Dadra &Nagar Haveli</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Daman and Diu</td>
												<td>0</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Delhi</td>
												<td>10</td>
												<td>11</td>
											</tr>
											<tr>
												<td>Goa</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Gujarat</td>
												<td>29</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Haryana</td>
												<td>12</td>
												<td>1</td>
											</tr>
											<tr>
												<td>Himachal Pradesh</td>
												<td>7</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Jammu & Kashmir</td>
												<td>8</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Jharkhand</td>
												<td>7</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Karnataka</td>
												<td>60</td>
												<td>9</td>
											</tr>
											<tr>
												<td>Kerala</td>
												<td>32</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Ladakh</td>
												<td>0</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Lakshadweep</td>
												<td>0</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Madhya Pradesh</td>
												<td>22</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Maharashtra</td>
												<td>56</td>
												<td>11</td>
											</tr>
											<tr>
												<td>Manipur</td>
												<td>2</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Meghalaya</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Mizoram</td>
												<td>1</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Nagaland</td>
												<td>0</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Orissa</td>
												<td>12</td>
												<td>1</td>
											</tr>
											<tr>
												<td>Pondicherry</td>
												<td>9</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Punjab</td>
												<td>10</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Rajasthan</td>
												<td>23</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Tamil Nadu</td>
												<td>50</td>
												<td>5</td>
											</tr>
											<tr>
												<td>Telangana</td>
												<td>33</td>
												<td>1</td>
											</tr>
											<tr>
												<td>Tripura</td>
												<td>2</td>
												<td>0</td>
											</tr>
											<tr>
												<td>Uttar Pradesh</td>
												<td>55</td>
												<td>2</td>
											</tr>
											<tr>
												<td>Uttarakhand</td>
												<td>6</td>
												<td>0</td>
											</tr>
											<tr>
												<td>West Bengal</td>
												<td>25</td>
												<td>8	</td>
											</tr>
										</tbody>
									</Table>
								</div>
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

export default MedicalCollegesInIndia;
