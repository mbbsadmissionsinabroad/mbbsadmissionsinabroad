import React from 'react';
import "./Blog.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function MbbsCollegesInAndhraPradesh() {
	const meta = {
    title: "Top 10 Medical Colleges in Andhra Pradesh for 2020 MBBS Admission",
    description: "Top 10 Medical Colleges in Andhra Pradesh for 2020 MBBS Admission with their complete details such as location, fees structure, admission procedure, and many more.",
    canonical: "https://www.mbbsadmissionsinabroad.com/top-10-medical-colleges-in-andhra-pradesh-for-2020-admission",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Top 10 Medical Colleges in Andhra Pradesh for 2020 MBBS Admission",
      },
    },
	};
	
	return ( 
		<DocumentMeta {...meta}>
			<div>
				<div className="service__bg">
					<h1 className="service__title">Top 10 Medical Colleges in Andhra Pradesh for 2020 MBBS Admission</h1>
				</div>
				<Container>
					<div className="blog__post__img">
					<img src="assets/images/blog-banners/top-10-medical-colleges-in-andhra-pradesh.png" alt="Top 10 Medical Colleges in Andhra Pradesh for 2020 MBBS Admission"/>

					<p className="blog__post__desc">Andhra Pradesh is one of the most developed as well as well-educated states in India. It has several <b>well-known medical colleges</b> that provide high quality education with the best facilities at an affordable cost. Every year, most of the students give <Link to={{ pathname:"https://neettestseries.co.in/neet-mock-test-for-free/" }}>NEET medical exam</Link> so as to get admission in one of the top 10 medical colleges in Andhra Pradesh to study MBBS course. Here are the <Link to="/top-10-medical-colleges-in-andhra-pradesh-for-2020-admission">top 10 medical colleges in Andhra Pradesh for MBBS admission</Link> with complete information of each college such as <b>college ranking, fees structure, admission procedure, seat availability</b>, and more:</p>

					</div>
					
					<ul className="hyperlink">
						<li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Viswabharathi Medical College</a></li>
						<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> NRI Institute of Medical Sciences</a></li>
						<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> GITAM Institute of Medical Sciences and Research</a></li>
						<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Great Eastern Medical School & Hospital</a></li>
						<li><a href="#5"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Fathima Institute of Medical Sciences</a></li>
						<li><a href="#6"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Rajiv Gandhi Institute of Medical Sciences</a></li>
						<li><a href="#7"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Apollo Institute of Medical Sciences and Research</a></li>
						<li><a href="#8"><img src="/assets/left-arrow.png" alt="Left Arrow" /> ACSR Government Medical College </a></li>
						<li><a href="#9"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Nimra Institute of Medical Sciences</a></li>
						<li><a href="#10"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Gayatri Vidya Parishad Institute of Healthcare & Medical Technology</a></li>
						<li><a href="#11"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion </a></li>
					</ul>
					
				</Container>
				<section className="blog__post">
					<Container>
						
						<div id="1">

							<div className="blog__post__col_f__image">
								<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (1).png" alt="AndhraPradesh College" />
								<h2 className="blog__post__title">Viswabharathi Medical College</h2>
							</div>
							
							<p className="blog__post__desc">Viswabharathi Medical College is one of the <b>best colleges in Andhra Pradesh</b> which was established in 1986 and <b>affiliated to</b> <Link to={{ pathname:"http://ntruhs.ap.nic.in/index.html" }}>NTR University of Health Sciences</Link>, Vijayawada. The degree of MBBS provided by Viswabharathi Medical College is approved by MCI. It runs with the approval of the <Link to={{ pathname:"https://www.mciindia.org/CMS/" }}>Medical Council of India</Link> / <Link to={{ pathname:"http://www.dciindia.gov.in/" }}>Dental Council of India</Link> under the Union Ministry of Health and Family Welfare, Government of India. It offers an MBBS course at affordable fees.</p>

							<h3 className="blog__post__title">Location</h3>
							<p className="blog__post__desc">Viswabharathi Medical College is located at R.T. Nager, Near Penchikalapadu, Kurnool, Andhra Pradesh, India</p>

							<h4 className="blog__post__title">College Ranking in India</h4>

								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Ranking/Rating in</th>
												<th>All India Ranking</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Medical</td>
												<td>121</td>
											</tr>
										</tbody>
									</Table>
								</div>

							<h5 className="blog__post__title">Cut off for MBBS</h5>

							<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Course</th>
												<th>Category</th>
												<th>Rank of Opening Home State</th>
												<th>Rank of Closing Home State Rank</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>MBBS</td>
												<td>General</td>
												<td>19935</td>
												<td>37459</td>
											</tr>
										</tbody>
									</Table>
								</div>
							

							<h6 className="blog__post__title">Seats Availability</h6>

							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Seats</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>150</td>
										</tr>
										<tr>
											<td>MD Anesthesiology</td>
											<td>4</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>5</td>
										</tr>
										<tr>
											<td>MD Biochemistry</td>
											<td>4</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

							<h6 className="blog__post__title">Fees Structure</h6>
								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Courses</th>
												<th>Fees (Annually)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>MBBS</td>
												<td>5.90 Lakhs</td>
											</tr>
										</tbody>
									</Table>
								</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Viswabharathi Medical College has highly qualified faculty and working professionals that provide high-quality education to the students. They also organizes guest lectures, seminars, and research activities</p>

						</div>

					<div id="2">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (2).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">NRI Institute of Medical Sciences</h6>
						</div>
					
						<p className="blog__post__desc">The NRI Institute of Medical Sciences is well-known as NRIIMS Visakhapatnam which was established in 2012. It provides quality medical programs under the supervision of highly qualified faculty and modern infrastructure. Every year, more than <b>150 students take admission</b> to the undergraduate and <b>postgraduate programs</b>. It offers a good proportion of well-trained and highly educated faculty members with all modern technologies. It also offers sufficient non-technical staff to provide a self-learning environment for students. It is committed to enhance the health education and publishing system of the nation.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">NRI Institute of Medical Sciences is located at Sangivalasa, Bheemunipatnam, Visakhapatnam, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Andhra Pradesh Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>19</td>
										</tr>
									</tbody>
								</Table>
							</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>16600</td>
										<td>31153</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
									<tr>
										<td>MD General Medicine</td>
										<td>12</td>
									</tr>
									<tr>
										<td>MD Anesthesia</td>
										<td>6</td>
									</tr>
									<tr>
										<td>MS General Surgery</td>
										<td>6</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>1.15 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">NRI Institute of Medical Sciences has dedicated and expert professors that use integrated teaching methods in academics for teaching the students. They also conduct several types of structured teaching methodologies like <b>Group Discussions, Demonstrations, Tutorials, Practical’s, Seminars.</b></p>

						</div>

						<div id="3">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (3).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">GITAM Institute of Medical Sciences and Research</h6>
						</div>
					
						<p className="blog__post__desc">GITAM (Gandhi Institute of Technology and Management) University is one of the leading <b>colleges in Andhra Pradesh</b> which was established in 2015. It was started by an inspiring group of industrialists and eminent intellectuals with the goal of developing a world-class institution for higher education in several fields of professional education. It was the <b>first institution of higher education and research with Global standards</b> and was accepted as a University of the UGC Act, 1956. It provides <b>MBBS course at reasonable fees.</b></p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">GITAM Institute of Medical Sciences and Research is located Rushikonda, Visakhapatnam, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MD Obstetrics and Gynecology</td>
										<td>General</td>
										<td>33438</td>
										<td>273717</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>84.92 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">GITAM (Gandhi Institute of Technology and Management) University has a team of experts whose <b>primary focus is to train medical students</b> through a primary healthcare approach with a particular emphasis on <b>health promotion, diagnosis, and disease management.</b></p>

						</div>

						<div id="4">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (4).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">Great Eastern Medical School and Hospital</h6>
						</div>
					
						<p className="blog__post__desc">Great Eastern Medical School & Hospital is well-known colleges in Andhra Pradesh which was established in 2010. It is affiliated to <b>Dr. NTR University of Health Sciences</b>, Vijayawada and approved by <b>MCI (Medical Council of India)</b>. It is recognized by the state government. It provides a <b>Bachelor of Medicine and Bachelor of Surgery (MBBS)</b> course of 5½ years duration. It is aimed at imparting quality education in the medical field and producing well-trained health personnel with social values.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Great Eastern Medical School and Hospital is located at Gems Medical College Road, Aditya Educational Society Srikakulam, Ragolu, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Ranking/Rating in</th>
												<th>Andhra Pradesh Ranking</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Medical</td>
												<td>21</td>
											</tr>
										</tbody>
									</Table>
								</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State Rank</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>27133</td>
										<td>34237</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
									<tr>
										<td>B.Sc Nursing</td>
										<td>80</td>
									</tr>
									<tr>
										<td>BPT</td>
										<td>50</td>
									</tr>
									<tr>
										<td>B.Sc Medical Laboratory Technology</td>
										<td>40</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>5.90 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Great Eastern Medical School & Hospital has expert medical professors that focuses on the updates correlated with the changes in science, technology, and the social surroundings so as they can deliver the best knowledge to the medical students.</p>

						</div>

						<div id="5">

							<div className="blog__post__col_f__image"> 
								<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (5).png" alt="AndhraPradesh College" />
								<h6 className="blog__post__title">Fathima Institute of Medical Sciences</h6>
							</div>
					
							<p className="blog__post__desc">Fathima Institute of Medical Sciences is one of the <b>top medical colleges in Andhra Pradesh</b> which was established in 1996. It is accredited from the <b>MCI (Medical Council of India)</b>. It provides courses such as <b>MBBS, MD General Medicine, MD Paediatrics</b>, and many others at affordable fees. Ever year, <b>100 of students take admission to undergraduate</b> as well post graduate courses in this college</p>

							<h6 className="blog__post__title">Location</h6>
							<p className="blog__post__desc">Fathima Institute of Medical Sciences is located at Ramarajupalli, Pulivendula Road, Kadapa, Andhra Pradesh, India</p>				

							<h6 className="blog__post__title">Cut off for MBBS</h6>

							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Course</th>
											<th>Category</th>
											<th>Rank of Opening Home State</th>
											<th>Rank of Closing Home State</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>General</td>
											<td>36438</td>
											<td>80375</td>
										</tr>
									</tbody>
								</Table>
							</div>
						

							<h6 className="blog__post__title">Seats Availability</h6>

							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Seats</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>100</td>
										</tr>
										<tr>
											<td>MD General Medicine</td>
											<td>8</td>
										</tr>
										<tr>
											<td>MD Pediatrics</td>
											<td>4</td>
										</tr>
										<tr>
											<td>MS General Surgery</td>
											<td>4</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

							<h6 className="blog__post__title">Fees Structure</h6>
								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Courses</th>
												<th>Fees (Annually)</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>MBBS</td>
												<td>5.51 Lakhs</td>
											</tr>
										</tbody>
									</Table>
								</div>

								<h6 className="blog__post__title">Faculty</h6>
								<p className="blog__post__desc">Fathima Institute of Medical Sciences has the dedicated and expert faculty members that provide quality education to the students and conduct workshops, seminars, and Orientation programs for graduate students and undergraduate students.</p>

						</div>

						<div id="6">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (6).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">Rajiv Gandhi Institute of Medical Sciences</h6>
						</div>
					
						<p className="blog__post__desc">Rajiv Gandhi Institute of Medical Sciences is one of the <b>best medical colleges in Andhra Pradesh</b> which was established in 2008. It is affiliated to Dr. NTR University of Health Sciences and offers <b>100 MBBS seats annually and it increased to 150 in 2019</b>. The MBBS course provided by <b>Rajiv Gandhi Institute of Medical Sciences</b> is a four and a half year period followed by a one year compulsory rotating residential internship. The students need to get <Link to={{pathname:"https://neettestseries.co.in/neet-mock-test-for-free/"}}>NEET-UG</Link> rank held by the <b>National Testing Agency (NTA)</b> in order to take admission to the <b>MBBS program in this college</b>.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Rajiv Gandhi Institute of Medical Sciences is located at Hudco Colony, Balaga, Srikakulam, Andhra Pradesh, India.</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Ranking/Rating in</th>
												<th>All India Ranking</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Medical</td>
												<td>1st</td>
											</tr>
										</tbody>
									</Table>
								</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State Rank</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>6354</td>
										<td>12281</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Particular</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
									<tr>
										<td>MD Anesthesiology</td>
										<td>4</td>
									</tr>
									<tr>
										<td>MS Orthopedics</td>
										<td>4</td>
									</tr>
									<tr>
										<td>MD Community Medicine</td>
										<td>3</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>46,1200</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Rajiv Gandhi Institute of Medical Sciences has excellent, highly experienced staff in the medical field that provides top-class education to the students. The students are free to consult any faculty member if they have wedged in the query correlated with the medical subject.</p>

						</div>

						<div id="7">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (7).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">Apollo Institute of Medical Sciences and Research</h6>
						</div>
					
						<p className="blog__post__desc">Apollo Institute of Medical Sciences and Research is of the <b>premier colleges in Andhra Pradesh</b> which was established in 2016. It is affiliated to NTR University of Health Sciences, Vijayawada. The <b>degree of MBBS provided by the Apollo Institute of Medical Sciences and Research is approved by the MCI.</b></p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Apollo Institute of Medical Sciences and Research is located at Murukambattu, Chittoor, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Andhra Pradesh Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>25</td>
										</tr>
									</tbody>
								</Table>
							</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>24042</td>
										<td>33927</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>11.55 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Apollo Institute of Medical Sciences and Research has well-experienced as well as are well qualified that provides high-quality education to the students. They impart knowledge about the subject as well as cultivate in students all other aspects to help them become a complete professional.</p>

						</div>

						<div id="8">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (8).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">ACSR Government Medical College</h6>
						</div>
					
						<p className="blog__post__desc">ACSR Government Medical College is one of the most <b>popular medical colleges in Andhra Pradesh</b> and also widely known as <b>Nellore Medical college</b>. It is a Public (Govt.) college which is affiliated to NTRUHS VIJAYAWADA. It was established in the year 2014 and its campus is spread over 68 Acres of land. It is accredited by NAAC and approved by MCI. It provides admission in several courses such as B.Sc Nursing, MBBS. It provides several facilities such as <b>Medical Support Systems, Sports Complex, Library & Information Center, Practical Lab, IT Centers, Auditorium</b> and many more.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">ACSR Government Medical College is located at Dargamitta, SPSR Nellore, Dist Nellore, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>All India Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>178</td>
										</tr>
									</tbody>
								</Table>
							</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening All India</th>
										<th>Rank of Closing All India</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>5037</td>
										<td>11954</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>175</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>49,6100</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">ACSR Government Medical College has dedicated and qualified faculty, research and development, and the cutting edge infrastructure that provides high quality education to the students.</p>

						</div>

						<div id="9">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (9).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">Nimra Institute of Medical Sciences</h6>
						</div>
					
						<p className="blog__post__desc">Nimra Institute of Medical Sciences is one of the <b>top medical colleges in Andhra Pradesh</b> which was established in 2010. It is affiliated with NTR University of Health Sciences, Vijayawada. It aims to impart high quality and excellent medical education to students. It provides an undergraduate course of <b>MBBS with annual intake capacity of 150 seats</b> in graduation on the basis of inter-state merit of the applications on the basis of marks/percentile in the NEET conducted by NTA.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Nimra Institute of Medical Sciences is located at Jupudi Village, Ibrahimpatnam, Vijayawada, Krishna District, Andhra Pradesh, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Andhra Pradesh Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>29</td>
										</tr>
									</tbody>
								</Table>
							</div>

						<h6 className="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State Rank</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>N.A</td>
										<td>39883</td>
										<td>73674</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Total fees</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>11.55 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Nimra Institute of Medical Sciences have well-experienced faculty members that educate the students through practical training and skill development. The institute has collaboration with various other hospitals to serve as clinical training centers.</p>

						</div>

						<div id="10">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/andhra-pradesh-college-image/andhra-college (10).png" alt="AndhraPradesh College" />
							<h6 className="blog__post__title">Gayatri Vidya Parishad Institute of Healthcare & Medical Technology</h6>
						</div>
					
						<p className="blog__post__desc">Gayatri Vidya Parishad Institute of Health Care & Medical Technology is one of the <b>top medical colleges in Andhra Pradesh</b> which was started in 2016. It offers a study in <b>Engineering, Management and Computer Science</b>. The combination of <b>Engineering and Technology, Computer Science, Management, and the Medical Sciences</b> provides a unique setting and opportunity for interdisciplinary research and development for an enthusiast in these areas.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Gayatri Vidya Parishad Institute of Healthcare & Medical Technology is located at 6-25, Maridi Valley, Marikavalasa Village, Madhurawada, Visakhapatnam, Andhra Pradesh, India.</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Andhra Pradesh Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>22</td>
										</tr>
									</tbody>
								</Table>
							</div>

						<h6 class	Name="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Category</th>
										<th>Rank of Opening Home State</th>
										<th>Rank of Closing Home State</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>20976</td>
										<td>35440</td>
									</tr>
								</tbody>
							</Table>
						</div>
					

						<h6 className="blog__post__title">Seats Availability</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Courses</th>
										<th>Seats</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>150</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks to apply for MBBS in this college</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							</ul>

						<h6 className="blog__post__title">Fees Structure</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Courses</th>
											<th>Fees (Annually)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>11 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Gayatri Vidya Parishad Institute of Health Care & Medical Technology offers a good ratio of well trained and highly educated faculty members equipped with all the modern technology. It also provides various non-technical staff to provide an ambiance of self-learning to the students.</p>

						</div>


						<div id="11">
							<h6 className="blog__post__title">Conclusion</h6>
							<p className="blog__post__desc">All the above-mentioned colleges are the <Link to="/top-10-medical-colleges-in-andhra-pradesh-for-2020-admission">top 10 medical colleges in Andhra Pradesh</Link> for MBBS admission. Most of these colleges are approved by MCI. They provide high quality of education to the students. If you any query related to these colleges, you can enquire at our email id.</p>
							<p className="blog__post__desc">We wish you Good luck for future studies!!</p>
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

export default MbbsCollegesInAndhraPradesh;