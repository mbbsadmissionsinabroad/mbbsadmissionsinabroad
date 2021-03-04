import React from 'react';
import "./Blog.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function MbbsCollegesInDelhi() {
	const meta = {
    title: "Top 10 Medical Colleges in Delhi for 2020 MBBS Admission",
    description: "Top 10 Medical Colleges in Delhi for 2020 MBBS Admission with their complete details such as location, fees structure, admission procedure, and many more.",
    canonical: "https://www.mbbsadmissionsinabroad.com/top-10-medical-colleges-in-delhi-for-2020-admission",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Top 10 Medical Colleges in Delhi for 2020 MBBS Admission",
      },
    },
	};
	
	return ( 
		<DocumentMeta {...meta}>
			<div>
				<div className="service__bg">
					<h1 className="service__title">Top 10 Medical Colleges in Delhi for 2020 MBBS Admission</h1>
				</div>
				<Container>
					<div className="blog__post__img">
					<img src="assets/images/blog-banners/top-10-medical-colleges-in-delhi.png" alt="Top 10 Medical Colleges in Delhi for 2020 MBBS Admission"/>

					<p className="blog__post__desc">Delhi is the heart of India and it has always remained as a hub of education. There are various <b>top-notch medical colleges in Delhi</b> where students aim to take admission to the MBBS course. Every year thousands of students take admission to the <Link to="/top-10-medical-colleges-in-delhi-for-2020-admission">MBBS course in top medical colleges in Delhi</Link> because of high-quality education with top-class facilities.</p>

					<p className="blog__post__desc">Some of the medical colleges conduct entrance exams of their own and others are affiliated to Delhi University. These medical colleges provide a variety of medical courses giving an option for students to choose the stream of their interest. In this article, we provide a list of the <Link to="/top-10-medical-colleges-in-delhi-for-2020-admission">top 10 medical colleges in Delhi</Link> for MBBS admission along with their complete details such as location, fees structure, admission procedure, and many more.</p>

					</div>
					
					<ul className="hyperlink">
						<li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> All India Institute of Medical Science</a></li>
						<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Maulana Azad Medical College</a></li>
						<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Lady Hardinge Medical College</a></li>
						<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> University College of Medical Science</a></li>
						<li><a href="#5"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Vardhman Mahavir Medical College (VMCC)</a></li>
						<li><a href="#6"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Jamia Hamdard</a></li>
						<li><a href="#7"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Vallabhbhai Patel Chest Institute</a></li>
						<li><a href="#8"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Army College of Medical Sciences</a></li>
						<li><a href="#9"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Delhi Pharmaceutical Sciences and Research University</a></li>
						<li><a href="#10"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Dr Baba Saheb Ambedkar Medical College and Hospital</a></li>
						<li><a href="#11"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion </a></li>
					</ul>
					
				</Container>
				<section className="blog__post">
					<Container>
						
						<div id="1">

							<div className="blog__post__col_f__image">
								<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (1).png" alt="Delhi College" />
								<h2 className="blog__post__title">All India Institute of Medical Science</h2>
							</div>
							
							<p className="blog__post__desc">All India Institute of Medical Science institute is one of the <b>top medical colleges in Delhi</b> which was established in 1952. It provides undergraduate and postgraduate courses that include <b>medical and paramedical courses at affordable fees</b>. It has comprehensive <b>facilities in research, teaching, and patient care</b>. The teaching and research are conducted in <b>42 disciplines</b> in the <b>All India Institute of Medical Science institute</b>. It provides all the basic amenities to the students such as Library that has all the recent advances in <b>medical fields, articles, research journals, spacious classrooms with audio-visual facilities, laboratories</b>, and many more.</p>

							<h3 className="blog__post__title">Location</h3>
							<p className="blog__post__desc">All India Institute of Medical Science is located at Ansari Nagar, New Delhi, India.</p>

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
												<td>1st</td>
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
												<th>Rank of Closing Home State</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>MBBS</td>
												<td>General</td>
												<td>1</td>
												<td>53</td>
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
											<td>107</td>
										</tr>
										<tr>
											<td>B.Sc Nursing Hons</td>
											<td>77</td>
										</tr>
										<tr>
											<td>Post Basic B.Sc Nursing</td>
											<td>25</td>
										</tr>
										<tr>
											<td>B.Optom</td>
											<td>19</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They need to qualify AIIMS entrance test.</li>
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
												<td>13,7200</td>
											</tr>
										</tbody>
									</Table>
								</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">All India Institute of Medical Science institute has <b>dedicated</b> and <b>highly experienced faculty members</b>. It provides the superior quality of teaching by the expert professors and clinical facilities during MBBS course to <b>enhance their practical training</b>. They try to put in all their efforts and deliver quality education with ease. Some of the faculty has authored few great medical science books. They use modern technology and are best in presentation skills.</p>

						</div>

					<div id="2">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (2).png" alt="Delhi College" />
							<h6 className="blog__post__title">Maulana Azad Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Maulana Azad Medical College is one of the top <b>medical colleges in New Delhi</b> which was established in 1958. It is also known as <b>MAMC</b>. It is named after a great patriot and educationist <b>Maulana Abul Kalam Azad</b>. The foundation stone was laid by the Home Minister of India, Pandit Govind Ballabh Pant. It has five colleges connected to it such as Lok Nayak Hospital, Govind Ballabh Pant Hospital, Guru Nanak Eye Centre, Sushruta Trauma Centre, and Chacha Nehru Bal Chikitsalaya. It has been <b>ranked as the second-best medical college in India</b>. Every year, <b>approx 250 students take admission</b> in this college through <Link to={{pathname:"https://neettestseries.co.in/"}}>NEET-UG exam</Link>. It provides the degrees of <b>MBBS, MS, MD, MCh, and DM</b>.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Maulana Azad Medical College is located Bahadur Shah Zafar Marg, Maulana Azad Medical College Campus, Balmiki Basti, New Delhi, Delhi</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>	All India Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>2nd</td>
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
										<td>1</td>
										<td>32</td>
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
										<td>250</td>
									</tr>
									<tr>
										<td>MD General Medicine</td>
										<td>22</td>
									</tr>
									<tr>
										<td>MD Anesthesiology</td>
										<td>26</td>
									</tr>
									<tr>
										<td>MD Pediatrics</td>
										<td>23</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
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
											<td>15,4500</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Maulana Azad Medical College has excellent, highly experienced staff in the Medical field and is very cooperative. The students are free to consult any professor if they have wedged in the query correlated with the medical subject.</p>

						</div>

						<div id="3">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (3).png" alt="Delhi College" />
							<h6 className="blog__post__title">Lady Hardinge Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Lady Hardinge Medical College for Women (LHMC) is one of the <b>best medical colleges in New Delhi</b> which was established in 1914. It was named in the memory of <b>Lady Hardinge</b> who laid the foundation stone of the Institute. It provides undergraduate courses such as <b>MBBS</b> and postgraduate courses such as <b>MD, MS, PG Diploma</b>, and super-specialty courses such as <b>DM, M.Ch</b> in several fields. It is <b>affiliated to the University of Delhi</b> and Faculty of Medical Sciences and accredited by the <Link to={{ pathname:"https://nabl-india.org/" }}>NABL (National Accreditation Board for Testing and Calibration Laboratories)</Link>. It provides training to students in its own two hospitals such as Kalawati Saran Child Hospital & Smt. Sucheta Kriplani Hospital.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Lady Hardinge Medical College is located at Connaught Place, New Delhi, Delhi. New Delhi Railway Station is 2 km away and Jhandewalan Metro Station is 2.1 km away and Indira Gandhi International Airport is 18.9 km away from Lady Hardinge Medical College.</p>

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
											<td>8</td>
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
										<td>103</td>
										<td>489</td>
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
										<td>240</td>
									</tr>
									<tr>
										<td>MS General Surgery</td>
										<td>11</td>
									</tr>
									<tr>
										<td>MD Pediatrics</td>
										<td>21</td>
									</tr>
									<tr>
										<td>MD General Medicine</td>
										<td>12</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They need to qualify DUPGMET exam for taking admission to MS and MD courses.</li>
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
											<td>74,500</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Lady Hardinge Medical College has the best and experienced faculty that focuses on developing the practical skill of the student. It provides integral health sciences education and services with an emphasis on primary health care in the <b>complementation of instruction, research, patient, and community health care.</b></p>

						</div>

						<div id="4">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (4).png" alt="Delhi College" />
							<h6 className="blog__post__title">University College of Medical Sciences and Research Institute</h6>
						</div>
					
						<p className="blog__post__desc">University College of Medical Sciences is one of the <b>top medical colleges</b> which was established in 1971. It <b>affiliated to the University of Delhi</b> and associated with <b>Guru Teg Bahadur Hospital</b> that runs several medical and paramedical courses and serves as a teaching hospital. It provides <b>22 courses across five streams</b> inclusive of <b>Paramedical, Dental, Medical, Science</b>, Pharmacy in 5 degrees such as <b>BSc, MBBS, MD, MS (Surgery), and MSc</b>. Every year, more than 100 students take admission to MBBS course in this college. It also provides <b>D.N.B Neurosurgery, B.Sc Radiology, and Pre-Clinical Classes for students</b> of Affiliated Physiotherapy Colleges.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">University College of Medical Sciences is located at Dilshad Garden, Delhi, India</p>

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
												<td>3</td>
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
										<td>179</td>
										<td>179</td>
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
										<td>170</td>
									</tr>
									<tr>
										<td>MD Anesthesiology</td>
										<td>23</td>
									</tr>
									<tr>
										<td>B.Sc Medical Technology Radiography</td>
										<td>17</td>
									</tr>
									<tr>
										<td>MS General Surgery</td>
										<td>16</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> 	The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They need to qualify AIPMT for taking admissions to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> If the students want to take admission to post-graduate courses, they need o qualify DUPGMET and AIPGEE.</li>
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
											<td>47000</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">University College of Medical Science and Research Centre has expert medical professors that follow a practical based education pattern that provides hands-on training to the students. This college is known for its research in the medical field. Every year, more than 100 students take admission to the MBBS course in this college.</p>

						</div>

						<div id="5">

							<div className="blog__post__col_f__image"> 
								<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (5).png" alt="Delhi College" />
								<h6 className="blog__post__title">Vardhman Mahavir Medical College</h6>
							</div>
					
							<p className="blog__post__desc">Vardhman Mahavir Medical College (VMCC) is one of the <b>best medical colleges in Delhi</b>	 which was established in 2001. It is <b>affiliated to Guru Gobind Singh Indraprastha University</b> and has recognized by the <Link to={{ pathname:"https://www.mciindia.org/CMS/" }}>MCI (Medical Council of India)</Link>. It provides MBBS, MS/MD, and Super Speciality Courses. It has over <b>295 doctors</b> as faculties who are experts in their respective fields. It has progressed much in medical research and is a center of projects of <b>ICMR, CSIR, and WHO</b> in some of the departments.</p>

							<h6 className="blog__post__title">Location</h6>
							<p className="blog__post__desc">Vardhman Mahavir Medical College is located at Ansari Nagar, near AIIMS Hospital, New Delhi. New Delhi Railway Station is 10 km away and Indira Gandhi International Airport is 16 km away and S.N. Bus Depot is 2 km away from the college.</p>	
							
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
												<td>17</td>
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
											<td>69</td>
											<td>270</td>
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
											<td>170</td>
										</tr>
										<tr>
											<td>MD Anesthesiology</td>
											<td>65</td>
										</tr>
										<tr>
											<td>B.Sc Nursing</td>
											<td>100</td>
										</tr>
										<tr>
											<td>Diploma in Medical Lab Technician</td>
											<td>33</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>

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
												<td>1.98 lakhs</td>
											</tr>
										</tbody>
									</Table>
								</div>

								<h6 className="blog__post__title">Faculty</h6>
								<p className="blog__post__desc">Vardhman Mahavir Medical College offers a good ratio of well trained and highly educated faculty members equipped with all the modern technology. It also provides many non-technical staff to provide an ambiance of self-learning to the students.</p>

						</div>

						<div id="6">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (6).png" alt="Delhi College" />
							<h6 className="blog__post__title">Jamia Hamdard</h6>
						</div>
					
						<p className="blog__post__desc">Jamia Hamdard is one of the <b>top medical colleges in New Delhi</b> which was established in the year 1989 & was declared as a <Link to="/how-to-get-medical-admission-in-indian-government-college">deemed-to-be University by the Government of India</Link>. It was established by the Hamdard National Foundation (HNF). The campus of Jamia Hamdard spreads over 100 acres of land. It has recognition from the <b>University Grants Commission</b>. It provides undergraduate, postgraduate, integrated, diploma, and doctoral courses in several areas. It has been graded as an ‘A’ grade college by NAAC. It provides top-class infrastructure and facilities such as well-resourced library featuring a rich collection of contemporary books, a Computer center, convention center, fully equipped hospital with all modern <b>diagnostic equipment, canteen, hostel, and sports facilities</b>.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Jamia Hamdard is situated at Mehrauli, Badarpur Road, Block-D, Hamdard Nagar, New Delhi. Saket Metro Station is 5.6 km away, New Delhi Railway Station is 19.1 km away and Indira Gandhi International Airport is 23.9 km away from the college.</p>

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
												<td>22</td>
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
										<th>Rank</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>General</td>
										<td>52182</td>
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
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
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
											<td>33.61 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Jamia Hamdard has the top-class faculty members that impart quality education. They are recognized as one of the centers of higher education and research in <b>Unani Medicine by the Ministry of Health, Govt. of India</b>. They train students with extensive knowledge of the concepts of the <b>Unani System of Medicine</b> along with modern medical subjects such as Physiology, Social and Preventive Medicine, Pharmacology, Pathology, and Forensic Medicine.</p>

						</div>

						<div id="7">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (7).png" alt="Delhi College" />
							<h6 className="blog__post__title">Vallabhbhai Patel Chest Institute</h6>
						</div>
					
						<p className="blog__post__desc">The Vallabhbhai Patel Chest Institute is one of the <b>best colleges in New Delhi</b> which was established in 1949. It is known for post-graduation in the study of chest diseases. It is affiliated to the University of Delhi and is funded entirely by the <b>Ministry of Health and Family Welfare</b>, Government of India. The students can <b>take admissions to MD, MS, and MBBS degree courses</b> through the Faculty of Medical Sciences, the University of Delhi according to the university procedures and regulations. The MBBS degree offered by Vallabhbhai Patel Chest Institute is approved by the MCI.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Vallabhbhai Patel Chest Institute is located at Guru Tegh Bahadur Road, University Enclave, New Delhi, Delhi.</p>

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
										<td>632</td>
										<td>2056</td>
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
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can take admissions to MD, MS, and MBBS degree courses through the Faculty of Medical Sciences, the University of Delhi according to the university procedures and regulations.</li>
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
											<td>35000</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Vallabhbhai Patel Chest Institute is offering high standard education with highly qualified teaching staff. Every year, approx 100 students take admissions to MBBS course in this college.</p>

						</div>

						<div id="8">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (8).png" alt="Delhi College" />
							<h6 className="blog__post__title">Army College of Medical Sciences</h6>
						</div>
					
						<p className="blog__post__desc">Army College of Medical Sciences is one of the best medical colleges in Delhi which was established in 2008. It supported by <b>Army Welfare Education Society</b> and is affiliated with <b>Guru Govind Singh Indraprastha University New Delhi</b>. It is recognized by the MCI (Medical Council of India) and admission to this college is on the basis of entrance test. Every year, more than 100 students apply for the exam which is conducted by Guru Gobind Singh Indraprastha University to take admission to this college.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Army College of Medical Sciences is located near Base Hospital, Brar Square, Delhi Cantonment in New Delhi. Delhi Cantonment Railway Station is approx 4 km away, Indira Gandhi International Airport is approx 15 km away, Supply Bus Depot is approx 3 km away, and Naraina Vihar Metro Station is approx 4 km away from the college.</p>

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
										<th>Rank of Opening All India</th>
										<th>Rank of Closing All India</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>SC- All India</td>
										<td>58525</td>
										<td>84288</td>
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
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They need to qualify for the exam which is conducted by Guru Gobind Singh Indraprastha University to take admission to this college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They need to qualify the NEET exam.</li>
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
											<td>20.21 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Army College of Medical Sciences has qualified staff that provides magnificent study material to the students. Highly professional and advanced technology is used to teach students.</p>

						</div>

						<div id="9">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (9).png" alt="Delhi College" />
							<h6 className="blog__post__title">Delhi Pharmaceutical Sciences and Research University</h6>
						</div>
					
						<p className="blog__post__desc">Delhi Pharmaceutical Sciences and Research University is the <b>first Pharmacy University of India</b> which was established in 2008. It is recognized by <Link to={{ pathname:"https://www.ugc.ac.in/" }}>University Grant Commission (UGC)</Link>. The courses such as D.Pharm, B.Pharm, and M.Pharm (Pharmacology) provided by Delhi Pharmaceutical Sciences and Research University are accredited by <b>National Board of Accreditation (NBA)</b>. Several other courses of the University are approved by the <Link to={{ pathname:"http://www.pci.nic.in/" }}>PCI (Pharmacy Council of India)</Link>, AICTE (All India Council for Technical Education), and <Link to={{ pathname:"http://www.dcptot.com/" }}>DCPOT (Delhi Council for Physiotherapy and Occupational Therapy)</Link>. It imparts a Master’s degree in several specializations such as Pharmacology, Pharmaceutics, and Hospital Pharmacy.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Delhi Institute of Pharmaceutical Sciences and Research is located at Mehrauli-Badarpur Road, Pusp Vihar, Sector-3, New Delhi, India</p>

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
											<td>Medical (Pharmacy)</td>
											<td>9</td>
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
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
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
											<td>48000</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Delhi Institute of Pharmaceutical Science & Research has highly skilled teachers that train the students appropriately. They provide practical exposure to students to achieve the required knowledge, skills to cater to the demand of the health-care industry. The faculty members of Delhi Pharmaceutical Sciences and Research University are selected through <b>Union Public Service Commission (UPSC), Govt. of India.</b></p>

						</div>

						<div id="10">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/delhi-college-image/delhi-college (10).png" alt="Delhi College" />
							<h6 className="blog__post__title">Dr Baba Sahib Ambedkar Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Dr Baba Sahib Ambedkar Medical College (BSAMC) is an academic <b>health sciences center</b> and one of the <b>best medical colleges in Delhi</b> which was established in 2016. It is named after the <b>first Law Minister of Free India</b>, the <b>chief architects of the Indian Constitution</b>, leading activist and social reformer Dr Baba Saheb Ambedkar Medical College by the <b>Government of NCT of Delhi</b>. It offers care for the people of Delhi through imparting competency-based medical education. It contributes towards the national health care delivery system by providing expert medical and efficient services through the associated hospital.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Dr Baba Saheb Ambedkar Medical College and Hospital is located at sector-6, Rohini, Near Rohini West Metro Station, New Delhi, Delhi, India</p>

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
											<td>10</td>
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
										<td>2397</td>
										<td>7480</td>
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
										<td>125</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have an aggregate of 50% in Physics, Chemistry & Biology.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have qualified for the NEET exam.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The age of the student should be between 17 to 25 years for taking admission to the MBBS course in this medical college.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have English as a compulsory subject in class 12th to take admission to the MBBS course.</li>
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
											<td>4.54 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Dr Baba Sahib Ambedkar Medical College and Hospital has qualified professors who know their job well and establishing higher strength in the public health sector. Their main focus is to train students appropriately. This college is committed to intellectual growth through teaching and research, the advancement of knowledge.</p>

						</div>


						<div id="11">
							<h6 className="blog__post__title">Conclusion</h6>
							<p className="blog__post__desc">All the above-mentioned top medical colleges in Delhi provide high-quality education and top-class medical facilities. Every year, several students apply for NEET to get admission in some of the <Link to="/top-10-medical-colleges-in-delhi-for-2020-admission">top 10 medical colleges in Delhi for MBBS admission</Link>. But some colleges have their own criteria for taking admission to MBBS course. If you any query related to these colleges, you can enquire at our email id.</p>
							<p className="blog__post__desc">We wish you Good luck for future studies!!</p>
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

export default MbbsCollegesInDelhi;