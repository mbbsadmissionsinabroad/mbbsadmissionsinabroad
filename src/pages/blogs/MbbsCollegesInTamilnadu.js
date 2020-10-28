import React from 'react';
import "./Blog.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";

function MbbsCollegesInTamilnadu() {
	const meta = {
    title: "Top 10 Medical Colleges in Tamilnadu for MBBS Admission",
    description: "Top 10 Medical Colleges in Tamilnadu for MBBS Admission. Get to know more about Top University, Rankings, Fee Structure, Admission Procedure, Location, Seat Availability, & Cut-Off for MBBS.",
    canonical: "https://www.mbbsadmissionsinabroad.com/top-10-mbbs-colleges-in-ukraine-for-2020-admission",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Top 10 Medical Colleges in Tamilnadu for MBBS Admission",
      },
    },
	};
	
	return ( 
		<DocumentMeta {...meta}>
			<div>
				<div className="service__bg">
					<h1 className="service__title">Top 10 Medical Colleges in Tamilnadu for MBBS Admission</h1>
				</div>
				<Container>
					<div className="blog__post__img">
					<img src="assets/images/blog-banners/top-10-medical-colleges-in-tamilnadu.png" alt="Top 10 Medical Colleges in Tamilnadu for MBBS Admission"/>
					</div>
					
					<ul className="hyperlink">
						<li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Christian Medical College</a></li>
						<li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Sri Muthukumaran Medical College and Research Institute Chennai</a></li>
						<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> ESI-PGIMSR, ESI Hospital</a></li>
						<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Kanyakumari Government Medical College</a></li>
						<li><a href="#5"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Vinayaka Mission’s Kirupananda Variyar Medical College</a></li>
						<li><a href="#6"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Rajah Muthiah Medical College</a></li>
						<li><a href="#7"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Coimbatore Medical College</a></li>
						<li><a href="#8"><img src="/assets/left-arrow.png" alt="Left Arrow" /> IRT Perundurai Medical College </a></li>
						<li><a href="#9"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Tagore Medical College </a></li>
						<li><a href="#10"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Shri Sathya Sai Medical College and Research Institute</a></li>
						<li><a href="#11"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion </a></li>
					</ul>
					
				</Container>
				<section className="blog__post">
					<Container>
						
						<div id="1">

							<div className="blog__post__col_f__image"> 
								<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (1).png" alt="Tamilnadu College" />
								<h2 className="blog__post__title">Christian Medical College</h2>
							</div>
							
							<p className="blog__post__desc">The <b>Christian Medical College</b> is one of the <b>top medical colleges in Tamil Nadu</b> which was established in 1900. It is a <b>private university</b> situated in Vellore, Tamil Nadu. It is recognized as one of the <Link to="/mbbs-seats-in-india">best medical colleges in India</Link> and strives to train the students in the fields of health sciences, medical and nursing. It provides undergraduate, postgraduate, and specialty courses like a diploma, fellowship, and distance learning courses.</p>

							<h3 className="blog__post__title">Location</h3>
							<p className="blog__post__desc">Christian Medical College is situated at Ida Scudder Road, Vellore, Tamil Nadu.</p>

							<h4 className="blog__post__title">College Ranking in India</h4>

								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Ranking/Rating in</th>
												<th>Rank</th>
												<th>Score</th>
												<th>Rating</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Medical</td>
												<td>1st</td>
												<td>403.21</td>
												<td>AAAAA</td>
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
												<td>N.A</td>
												<td>10</td>
												<td>33</td>
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
											<td>MD Anesthesiology</td>
											<td>19</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>16</td>
										</tr>
										<tr>
											<td>MS Obstetrics and Gynecology</td>
											<td>17</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Admission Procedure</h6>

							<ul className="blog__post__list">
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students need to submit their <Link to={{ pathname:"https://neettestseries.co.in/neet-mock-test-for-free/" }}>NEET test scores</Link> for taking admission the MBBS course.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The students are selected chosen on the basis of a computer-based test and interview for taking admission to B.Sc, BOT, BPT, BPO, and diploma courses.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> GATE scores of the students are needed for M.Tech and M.S applications.</li>
								<li><img src="assets/right-direction.png" alt="Right Direction" /> The computer-based test includes 25 questions from physics, chemistry or mathematics, and 15 from general knowledge.</li>
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
												<td>2.20 Lakh</td>
											</tr>
											<tr>
												<td>MS in General Surgery</td>
												<td>1.78 Lakh</td>
											</tr>
											<tr>
												<td>MD in General Medicine</td>
												<td>1.78 Lakh</td>
											</tr>
											<tr>
												<td>DM in Cardiology</td>
												<td>2.05 Lakh</td>
											</tr>
											<tr>
												<td>B.Sc. in Nursing</td>
												<td>71,790</td>
											</tr>
										</tbody>
									</Table>
								</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Christian Medical College offers a good ratio of well trained and highly educated faculty members equipped with all the modern technology. It also provides various non-technical staff to provide an ambiance of self-learning to the students.</p>

						</div>

					<div id="2">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (2).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Sri Muthukumaran Medical College and Research Institute Chennai</h6>
						</div>
					
						<p className="blog__post__desc">Sri Muthukumaran Medical College and Research Institute Chennai is one of the <Link to="/mbbs-seats-in-india">best medical colleges in Tamil Nadu</Link> which was founded in 2009. It is affiliated to the Dr. MGR Medical University, Chennai & is approved by the <Link to={{ pathname:"https://www.mciindia.org/" }}>MCI (Medical Council of India)</Link>.</p>

						<p className="blog__post__desc">It provides a Bachelor degree course in the field of medicine. It has top-class infrastructure and state of the art modern facilities. The students are educated with the help of the latest technological advancements in Sri Muthukumaran Medical College and Research Institute.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Sri Muthukumaran Medical College and Research Institute is located at Kunrathur Road, Near Mangadu, Chennai, Tamil Nadu, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
						<p className="blog__post__desc">Sri Muthukumaran Medical College and Research Institute have received the M.M Cooper Memorial award for the best paper presented in Annual Conference, in Sep. 2009 at Chettinad Medical College, Chennai.</p>

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
										<td>2943</td>
										<td>2959</td>
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
										<th>Duration</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>100</td>
										<td>5 1/2 year</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have cleared the HSC exam which is conducted by Tamil Nadu State Board or equivalent exam with eligible marks for taking <Link to="/">admission to the MBBS</Link>.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have subjects such as Physics, Chemistry, and Physics in 12th standard.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The admission to the MBBS course in Sri Muthukumaran Medical College and Research Institute is done on the basis of the <Link to={{ pathname:"https://neettestseries.co.in/" }}>NEET-UG entrance exam</Link>.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can apply through online or offline mode of application for admission.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must be 17 years of age as on December 31 of the year of admission.</li>
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
											<td>13.6 lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Sri Muthukumaran Medical College and Research Institute have well-experienced faculty members that educate the students through practical training and skill development. The institute has collaboration with various other hospitals to serve as clinical training centers. These hospitals assist the students to practice skill development and come in terms with the actual hospital environment.</p>

						</div>

						<div id="3">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (3).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">ESI-PGIMSR, ESI Hospital, K.K Nagar, Chennai</h6>
						</div>
					
						<p className="blog__post__desc">ESI-PGIMSR, ESI Hospital is one of the best medical institutes which was established in 2013. It is affiliated to the Dr. MGR medical university, Chennai. The degrees such as MBBS, MD, MS provided by ESI-PGIMSR, ESI Hospital are approved by the MCI. The fee of the MBBS course in this institute is very affordable.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">ESI-PGIMSR, ESI Hospital is located at Ashok pillar road, K.K Nagar, Chennai, Tamil Nadu</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
						<p className="blog__post__desc"><b>Popularity Rank (on the basis of average rank of admitted students)</b> - 	121</p>

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
										<td>MD Obstetrics and Gynecology</td>
										<td>General</td>
										<td>6054</td>
										<td>7679</td>
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
										<td>MD in General Medicine</td>
										<td>2</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can apply through their <Link to={{ pathname:"https://neettestseries.co.in/neet-mock-test-for-free/" }}>NEET UG medical scorecard</Link> for taking admission to UG courses</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can apply to <Link to="/medical-pg-in-germany">PG courses</Link> through their NEET UG medical scorecard.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have graduation & bachelor degree in medicine for taking <Link to="/medical-pg-in-europe-for-indian-students">admission to PG courses</Link></li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have an aggregate of 50% in Physics, chemistry, and Biology.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must be 17 years of age as of the admission year.</li>
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
											<td>1 lac</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>255150</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>255100</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">ESI-PGIMSR, ESI Hospital has dedicated and qualified faculty, research and development, and the cutting edge infrastructure that provides high quality education to the students.</p>

						</div>

						<div id="4">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (4).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Kanyakumari Government Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Kanyakumari Government Medical College is one of the <Link to="/top-10-medical-colleges-in-tamilandu-for-mbbs-admission">leading medical colleges in Tamil Nadu</Link> which was established in 2001-2002. It is well equipped with all modern facilities such as spacious lecture rooms, a well-maintained library with an extensive range of books collection and journals. It has a variety of teaching and learning techniques that are employed to impart knowledge and skills to students in its various departments. The <Link to="/how-to-get-medical-admission-in-indian-government-college">MBBS course offered by the Kanyakumari Government Medical College</Link> is a four and a half year period followed by a one year compulsory rotating residential internship.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Kanyakumari Government Medical College is located in Nagercoil which is 710km from Chennai and 70km from Trivandrum.</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
								<div className="blog__post__table">
									<Table responsive striped bordered hover>
										<thead>
											<tr>
												<th>Ranking/Rating in</th>
												<th>Rating</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Medical</td>
												<td>AAA</td>
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
										<td>4996</td>
										<td>9217</td>
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
										<td>Bachelor of medicine, bachelor of surgery</td>
										<td>100</td>
									</tr>
									<tr>
										<td>DM-Neurology</td>
										<td>3</td>
									</tr>
									<tr>
										<td>MS- Orthopedics</td>
										<td>2</td>
									</tr>
									<tr>
										<td>MS-ENT</td>
										<td>4</td>
									</tr>
									<tr>
										<td>MS-General surgery</td>
										<td>11</td>
									</tr>
									<tr>
										<td>MD-General medicine</td>
										<td>10</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can take admission to the MBBS course on the basis of their marks acquired in the NEET-UG rank held by the National Testing Agency (NTA).</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have an aggregate of 50% in Physics, Chemistry, and Biology.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age as of December 31 for taking admission to MBBS in Kanyakumari Government Medical College.</li>
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
											<td>13600</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>30,000</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Kanyakumari Government Medical College has well-experienced as well as are well qualified that provides high-quality education to the students. They impart knowledge about the subject as well as cultivate in students all other aspects to help them become a complete professional.</p>

						</div>

						<div id="5">

							<div className="blog__post__col_f__image"> 
								<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (5).png" alt="Tamilnadu College" />
								<h6 className="blog__post__title">Vinayaka Mission’s Kirupananda Variyar Medical College</h6>
							</div>
					
							<p className="blog__post__desc">Vinayaka Mission’s Kirupananda Variyar Medical College is one of the top medical colleges in Tamil Nadu which was started in 1995 and became a constituent college of VMRF-DU in 2004. It is affiliated to The Tamil Nadu Dr. MGR Medical University, Tamil Nadu. It provides high-quality medical education and advancement of the medical programs to the students. It has top-class facilities with all innovative and sophisticated state-of-the-art equipment and teaching facilities.</p>

							<h6 className="blog__post__title">Location</h6>
							<p className="blog__post__desc">Vinayaka Mission’s Kirupananda Variyar Medical College is located at Chinna Seeragapadi, Salem, Tamil Nadu, India</p>

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
												<td>31</td>
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
											<th>Opening All India rank</th>
											<th>Closing All India rank</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>66849</td>
											<td>341989</td>
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
											<th>Duration</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>MBBS</td>
											<td>100</td>
											<td>5 1/2 year</td>
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
												<td>20.48 Lakhs</td>
											</tr>
											<tr>
												<td>Diploma</td>
												<td>18.2 Lakhs</td>
											</tr>
											<tr>
												<td>M.D Pharmacology</td>
												<td>23.24 Lakhs</td>
											</tr>
											<tr>
												<td>M.D Biochemistry</td>
												<td>23.24 Lakhs</td>
											</tr>
											<tr>
												<td>M.D</td>
												<td>23.24 Lakhs</td>
											</tr>
											<tr>
												<td>MD-General Medicine</td>
												<td>23.24 Lakhs</td>
											</tr>
										</tbody>
									</Table>
								</div>

								<h6 className="blog__post__title">Faculty</h6>
								<p className="blog__post__desc">Vinayaka Mission’s Kirupananda Variyar Medical College has excellent, highly experienced staff in the medical field that provides top-class education to the students. The students are free to consult any faculty member if they have wedged in the query correlated with the medical subject.</p>

						</div>

						<div id="6">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (6).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Rajah Muthiah Medical College</h6>
						</div>
					
						<p className="blog__post__desc">The Rajah Muthiah Medical College is one of the <b>top medical colleges in Tamil Nadu</b> which was established in 1985. It provides <b><Link to="/">MBBS</Link>, MD, MS, and Diploma courses</b>. It is approved by the MCI (Medical Council of India). The admission to the undergraduate as well as postgraduate courses is on the basis of <Link to={{ pathname: "https://neettestseries.co.in/" }}>NEET</Link>. It also directs students to the curriculum in the first year and familiarizes them with the internship before the course starts.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Rajah Muthiah Medical College is located at Annamalai Nagar, C.Kothangudi, Tamil Nadu. The Chidambaram railway junction is 3 km away from the college. Neyveli Airport and Neyveli bus depot are about 3km from this college.</p>

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
												<td>119</td>
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
										<td>5945</td>
										<td>12618</td>
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
										<td>MS in General Surgery</td>
										<td>18</td>
									</tr>
									<tr>
										<td>MD in General Medicine</td>
										<td>14</td>
									</tr>
									<tr>
										<td>Diploma in Obstetrics and Gynecology</td>
										<td>12</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science with physics, chemistry, and Biology in their 12th standard and should have an aggregate of 50% marks.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age for taking admission to the MBBS course</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks</li>
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
											<td>24.95 Lakh</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>29.40 Lakh</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>29.40 Lakh</td>
										</tr>
										<tr>
											<td>Diploma in Obstetrics and Gynecology</td>
											<td>14.84 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Rajah Muthiah Medical College has the dedicated and expert faculty members that provide quality education to the students and conduct workshops, seminars, and Orientation programs for graduate students and undergraduate students This College also conducts various orientation programs in which students are taught communication and soft skills programs</p>

						</div>

						<div id="7">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (7).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Coimbatore Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Coimbatore Medical College is one of the <b>leading colleges in the Tamil Nadu</b> state of India which was established in 1966. It is accredited from <Link to={{ pathname:"https://www.aicte-india.org/" }}>AICTE</Link> and it is affiliated to Tamil Nadu Dr. M.G.R.Medical University. It provides 19 courses across 3 streams such as <b>Medical, Science, Paramedical</b>, and across 5 degrees such as <b>MBBS, MD, MS (Surgery), MCh, Diploma</b>. It accepts <Link to={{ pathname: "https://neettestseries.co.in/neet-mock-test-for-free/" }}>NEET-UG for admission</Link> into engineering courses</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Coimbatore Medical College is located at Avinashi Road, Coimbatore, Tamil Nadu</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>AAA</td>
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
										<td>1584</td>
										<td>6315</td>
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
										<td>MS in General Surgery</td>
										<td>18</td>
									</tr>
									<tr>
										<td>MD in General Medicine</td>
										<td>19</td>
									</tr>
									<tr>
										<td>Diploma in Obstetrics and Gynecology</td>
										<td>11</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students must have subjects such as Physics, Chemistry, and Physics in 12th standard.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They can take <b>admission to the MBBS course</b> on the basis of the <b>NEET UG entrance</b> exam.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They can apply through online or offline mode of application for taking admission in this college.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must be 17 years of age as on December 31 of the year of admission.</li>
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
											<td>13,330</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>13600</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>13600</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Coimbatore Medical College has expert medical professors that focuses on the updates correlated with the changes in <b>science, technology</b>, and the <b>social surroundings</b> so as they can deliver the best knowledge to the medical students.</p>

						</div>

						<div id="8">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (8).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">IRT Perundurai Medical College</h6>
						</div>
					
						<p className="blog__post__desc">IRT Perundurai Medical College is one of the <b>best medical colleges in Tamil Nadu</b> which was established in 1992. It is built with all kinds of structures according to the requirements of MCI. It provides various facilities to the students such as four <b>lecture halls, library, hostel facilities</b>, and many more. The <b>IRT Government Medical College Hospital in Perundurai</b> is the teaching hospital of this medical college. The hospital is equipped with the latest medical facilities and multi-medication care.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">IRT Government Medical College Hospital is located in Perundurai, Erode District which is about 400 kilometers southwest of the state capital Chennai.</p>

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
											<td>216</td>
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
										<td>8023</td>
										<td>12389</td>
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
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must have subjects such as Physics, Chemistry, and Biology in 12th standard.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The admission to the MBBS course is done on the basis of the NEET UG entrance exam.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students can apply through online or offline mode of application for admission.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> They must be 17 years of age as on December 31 of the year of admission.</li>
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
											<td>17.32 Lakh</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">IRT Perundurai Medical College has a team of experts whose primary focus is to train medical students through a primary healthcare approach with a particular emphasis on health promotion, diagnosis, and disease management.</p>

						</div>

						<div id="9">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (9).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Tagore Medical College</h6>
						</div>
					
						<p className="blog__post__desc">Tagore Medical College is one of a <Link to={{ pathname: "https://www.mbbsadmissionsinabroad.com/top-10-medical-colleges-in-tamilandu-for-mbbs-admission/" }}>great medical college in Tamil Nadu</Link> which was started in 2010. It is recognized by The Tamil Nadu Dr. MGR Medical University Chennai, Tamil Nadu.</p>

						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Tagore Medical College is located at Rathinamangalam, Melakottaiyur, Chennai, Tamil Nadu, India</p>

						<h6 className="blog__post__title">College Ranking in India</h6>
							<div className="blog__post__table">
								<Table responsive striped bordered hover>
									<thead>
										<tr>
											<th>Ranking/Rating in</th>
											<th>Tamil Nadu state Ranking</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Medical</td>
											<td>36</td>
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
										<td>1137</td>
										<td>2814</td>
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
										<td>MS in General Surgery</td>
										<td>5</td>
									</tr>
									<tr>
										<td>MD in General Medicine</td>
										<td>5</td>
									</tr>
									<tr>
										<td>MD in Pathology</td>
										<td>5</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an aggregate of 50% marks in Physics, Chemistry, and Biology.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS course</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks</li>
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
											<td>17.32 Lakh</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>29.40 Lakh</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>29.40 Lakh</td>
										</tr>
										<tr>
											<td>MD in Pathology</td>
											<td>14.84 Lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Tagore Medical College has dedicated and expert professors that use integrated teaching methods in academics for teaching the students. They also conduct several types of structured teaching methodologies like Group Discussions, Demonstrations, Tutorials, Practicals, Seminars.</p>

						</div>

						<div id="10">

						<div className="blog__post__col_f__image"> 
							<img className="img-fluid" src="assets/images/blog-banners/tamilnadu-college-image/tamilnadu-college (10).png" alt="Tamilnadu College" />
							<h6 className="blog__post__title">Shri Sathya Sai Medical College and Research Institute</h6>
						</div>
					
						<p className="blog__post__desc">Shri Sathya Sai Medical College and Research Institute is one of the top medical colleges which was established in 2008. It is spread over 135 Acres. This institute is accredited by MCI. It is equipped with various modern facilities such as <b>library, fully furnished lecture halls, laboratories, a fully-furnished hostel.</b> It provides <b>undergraduates courses, postgraduate courses</b> under the <b>supervision of highly qualified faculty and state-of-art infrastructure</b>.</p>


						<h6 className="blog__post__title">Location</h6>
						<p className="blog__post__desc">Shri Sathya Sai Medical College and Research Institute is located at Tiruporur-Guduvancherry Main Road, Ammapettai, Nellikuppam, Chengalpet Taluk, Kancheepuram District, Tamilnadu, India</p>

						<h6 class	Name="blog__post__title">Cut off for MBBS</h6>

						<div className="blog__post__table">
							<Table responsive striped bordered hover>
								<thead>
									<tr>
										<th>Course</th>
										<th>Rank of Opening All India</th>
										<th>Rank of Closing All India</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>MBBS</td>
										<td>113719</td>
										<td>278906</td>
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
										<td>MS in General Surgery</td>
										<td>10</td>
									</tr>
									<tr>
										<td>MD in General Medicine</td>
										<td>10</td>
									</tr>
									<tr>
										<td>MD in Anesthesiology</td>
										<td>9</td>
									</tr>
								</tbody>
							</Table>
						</div>

						<h6 className="blog__post__title">Admission Procedure</h6>

						<ul className="blog__post__list">
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have science in their 12th standard and should have an <b>aggregate of 50% marks</b> in Physics, Chemistry, and Biology.</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should be at least 17 years of age to take admission to MBBS course</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should also qualify for the NEET exam with passing marks</li>
							<li><img src="assets/right-direction.png" alt="Right Direction" /> The students should have English subject in their higher secondary</li>
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
											<td>18 lakhs</td>
										</tr>
										<tr>
											<td>MS in General Surgery</td>
											<td>40 lakhs</td>
										</tr>
										<tr>
											<td>MD in General Medicine</td>
											<td>40 lakhs</td>
										</tr>
										<tr>
											<td>MD in Pathology</td>
											<td>20 lakhs</td>
										</tr>
									</tbody>
								</Table>
							</div>

							<h6 className="blog__post__title">Faculty</h6>
							<p className="blog__post__desc">Shri Sathya Sai Medical College and Research Institute has highly qualified faculty and working professionals that provide high-quality education to the students. They also organizes guest lectures, seminars, and research activities</p>

						</div>


						<div id="11">
							<h6 className="blog__post__title">Conclusion</h6>
							<p className="blog__post__desc">All the above-mentioned colleges are the <Link to="/top-10-medical-colleges-in-tamilnadu-for-mbbs-admission">top 10 medical colleges in Tamil Nadu for MBBS admission</Link>. Most of these colleges are approved by MCI. They provide high quality of education to the students. If you any query related to these colleges, you can enquire at our email id.</p>
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

export default MbbsCollegesInTamilnadu;