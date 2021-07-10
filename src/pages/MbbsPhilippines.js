import React from "react";
import { Container, Row, Col, Accordion, Card, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import PhilippinesForm from "../components/ContactForm/PhilippinesForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsPhilippines() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Philippines MCI Approved Colleges for Indian Students',
    description: 'MBBS Admission in Philippines. New-Lyf provides all guidance & assistance to Indian Students for Admission in Philippines MCI Approved Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-philippines/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Philippines'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS In Philippines</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-philippines.png"
          alt="Study In Philippines"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
						<b>MBBS in Philippines</b> is the best considerable destination to study a course of medicine for Indian students. It enables the students to have brighter career growth after <b>Study MBBS in Philippines</b>. It provides the magnificent theoretical as well as practical education which empowers the candidates to become successful practitioners.<br/><br/>
						The Philippines provides the American system of medical education and the Primary Medical qualification. The MBBS course offered to students in the Philippines is known as the MD program (Doctor of Medicine). <b>Philippines MBBS College</b> fees would range anywhere between 12 to 25 lacs.<br/><br/>
						About 8000 foreign students are taking <Link to="/mbbs-in-philippines"><b>MBBS Admission in Philippines</b></Link> every year. The MMBS course from Philippines is globally recognized including the <Link to={{ pathname: "https://www.mciindia.org/CMS/" }} target="_blank">Medical Council of India</Link>. The best part is that almost everyone speaks English in the Philippines which is an added advantage to students who want to fulfill their dream to pursue <b>MBBS in Philippines</b>.

          </p>
          <ul className="hyperlink">
            <li><img src="/assets/icon.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/icon.png" alt="Left Arrow" /> About the Philippines</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Philippines?</a></li>
            <li><a href="#university_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Top Universities for MBBS in Philippines </a></li>
            <li><a href="#fees_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Fee Structure MBBS in Philippines </a></li>
            <li><a href="#requirements_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Requirements For MBBS Admission In Philippines 2021 - 2022 </a></li>
            <li><a href="#advice_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Philippines Advice for Indian Students </a></li>
            <li><a href="#visa_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in Philippines </a></li>
						<li><a href="#mci_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MCI Coaching in Philippines!</a></li>
						<li><a href="#usmle_sec"><img src="/assets/icon.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Philippines </a></li>
						<li><a href="#pg_sec"><img src="/assets/icon.png" alt="Left Arrow" /> PG Options after MBBS in Philippines </a></li>
						<li><a href="#vacations_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Vacations during MBBS in Philippines </a></li>
						<li><a href="#career_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Career Options after Completing MBBS in Philippines </a></li>
						<li><a href="#problems_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents </a></li>
						<li><a href="#reserve_sec"><img src="/assets/icon.png" alt="Left Arrow" /> How reserve your MBBS Seat in Philippines for 2021 - 2022 Admission </a></li>
						<li><a href="#charges_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Service & Consultancy Charges of New-Lyf </a></li>
						<li><a href="#New-Lyf_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Services by New-Lyf for Abroad Education </a></li>
						<li><a href="#process_sec"><img src="/assets/icon.png" alt="Left Arrow" /> Our Process of conducting Student Counseling </a></li>
            <li><a href="#faq_sec"><img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Philippines FAQ </a></li>
          </ul>

          {/* POP UP Btn */}

          <Button className="popup__btn" onClick={() => setModalShow(true)}>
            Click Here To Apply
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          {/* POP UP Btn Ends */}
        </div>

        <div id="about_sec">
          <h2 className="service__sub__title">About the Philippines</h2>
          <p className="service__info">
						The Philippines is also called the Republic of the Philippines which is located in the Western Pacific Ocean. It was a colony of the USA for around 50 years and thus this country follows the American system of education.<br/>
						Almost every in this country communicates in the English language so there is no need to learn an additional language. The tropical climate in the Philippines is usually hot & humid. The temperatures generally vary from 21 °C (70 °F) to 32 °C (90 °F) with January being the coolest and May being the warmest months of the year.
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why MBBS Study in Philippines</h2>
					<p className="service__info">Most Indian students wish to pursue MBBS abroad but a few students can fulfill their dream into reality. The Philippines offers a golden opportunity to these students to attain their aim. The <Link to="/" exact>Indian students can choose the Philippines for pursuing MBBS</Link> without any further thinking because of the following reasons:
						<ul>
							<li>Travel to the Philippines is much easier and even economical than traveling to other countries.</li>
							<li>A medical program provided by the Philippines to their students is recognized worldwide.</li>
							<li>English is spoken in the Philippines so there would not be any problem while interacting with others. The language of coaching is also English.</li>
							<li>MCI (Medical Council of India) approves medical colleges as well as universities and follows the US education system.</li>
							<li>The students who have passed MBBS from the Philippines can also practice in India.</li>
							<li>A unified problem-based learning approach offers better exposure to future medical practitioners.</li>
							<li>Advanced teaching techniques with outstanding facilities equipped with the well-established infrastructure</li>
							<li>The students can also have the option to start working on preparation for the United States Medical Licensing Examination (USMLE) to study Post Graduate Degrees.</li>
							<li>The Philippines is extremely safe for Indian students and the environment is also safe.</li>
							<li>There is no donation or capitation fee required in these universities.</li>
							<li>Philippines MBBS College provides the best education at affordable rates.</li>
							<li>The cost of living is quite favorable for Indian students as there are excellent boarding and lodging provided by the university with the availability of Indian food for the students.</li>
							<li>It utilizes up-to-date machinery in their laboratories</li>
							<li>The colleges allow the students to practically diagnose the patients which enhances their confidence & provides better practical knowledge.</li>
						</ul>
					</p>
        </div>
        <div id="university_sec">
          <h3 className="service__sub__title">
						Top Universities for MBBS in Philippines
          </h3>
          <p className="service__info">
            Some of the top universities in Philippines are as follows:
            	<ul>
								<li>Ago Medical and Educational Center Bicol Christian College of Medicine</li>
								<li>AMA School of Medicine</li>
								<li>Angeles University Foundation</li>
								<li>Ateneo de Zamboanga University</li>
								<li>Baguio Central University</li>
								<li>BICOL CHRISTIAN COLLEGE OF MEDICINE</li>
								<li>Cagayan State University Tuguegarao (Carig)</li>
								<li>Cebu Doctors University College of Medicine</li>
								<li>Cebu Institute of Medicine</li>
								<li>Central Philippine University</li>
								<li>Davao Medical School Foundation</li>
								<li>De La Salie University Health Sciences Campus</li>
								<li>Dona Remedos Trinidad Medical Foundation</li>
								<li>Emilo Aguinaldo College, Manila</li>
								<li>Far Eastern University Dr. Nicanor Reyes Medical Foundation</li>
								<li>FEU Dr. Nicanor Reyes Medical Foundation</li>
								<li>Iloilo Doctors College of Medicine</li>
								<li>Lyceum Northwestern University</li>
								<li>Manila Central University</li>
								<li>Our Lady of Fatima University (Fatima Medical Science Foundation) Valenzuela</li>
								<li>Pamantasan ng Lungsod ng Maynila</li>
								<li>Saint Louis University</li>
								<li>San Beda College</li>
								<li>Silliman University</li>
								<li>Southwestern University Matias H. Aznar Memorial College of Medicine</li>
								<li>Southwestern University, Urgello, Cebu City, Philippines</li>
								<li>St. Lukes College of Medicine William H. Quasha Memorial</li>
								<li>St. Paul University,Philippines</li>
								<li>University of Northern Philippines</li>
								<li>University of Perpetual Help (Dr. Jose G. Tamayo Medical University)</li>
								<li>University of Perpetual Help Rizal</li>
								<li>University of Saint La Salle</li>
								<li>University of Santo Tomas</li>
								<li>University of the East Ramon Magsaysay Memorial Medical Center</li>
								<li>University of the Philippines Manila</li>
								<li>UV Gullas College of Medicine</li>
								<li>Virgen Milagrosa University Foundation</li>
								<li>West Visayas State University</li>
								<li>Xavier University</li>
								<li>Zamboanga Medical School Foundation</li>
							</ul>
          </p>
        </div>
        <div id="fees_sec">
          <h4 className="service__sub__title">
						Fee Structure For MBBS Admission In Philippines 2021 - 2022
          </h4>
          <p className="service__col__title">Bicol Christian College of Medicine</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>4,65,000</td>
                  <td>1.4</td>
                  <td>6,00,000</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>4,65,000</td>
                  <td>1.4</td>
                  <td>6,00,000</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>1,90,000</td>
                  <td>1.4</td>
                  <td>2,47,000</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>1,90,000</td>
                  <td>1.4</td>
                  <td>2,47,000</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>1,90,000</td>
                  <td>1.4</td>
                  <td>2,47,000</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>1,90,000</td>
                  <td>1.4</td>
                  <td>2,47,000</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>12,25,000</td>
                  <td>1.4</td>
                  <td>15,88,000</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Exchange Rate :1 PHP=1.4 INR</b>.<br/>
            ( Fees are denominated in pesos and may subject to change with change in exchange rate)</p>

            <p className="service__info"><b>IMPORTANT:</b><br/> Tuition fees are to be paid directly to the University
            accounts and not collected by any agent.</p>
            <br/>

            <p className="service__info"><b>Other Fees:</b>
              <ul>
                <li><b>Food & Accommodation :</b> PHP 10,000/-</li>
                <li><b>Air Ticket & Visa Processing :</b> INR 1,50,000/-</li>
              </ul>
            </p>

            <p className="service__info">(Admission Registration, Acceptance Letter from University, DFA Authentication, MEA Attestation, Oppostal Authentication, 9A Visa stamping one way air ticket to Manila, Airport pick-up and transfer included).</p>

            <p className="service__info"><b>NOTE:</b>
              <ul>
                <li>Tution fees, food & accommodation should be paid in Philippines PESO.</li>
                <li>PHP to INR conversion are approximately rates 1.40</li>
                <li>Miscellaneous Expenses are not included in monthly food & accommodation fees.</li>
                <li>Hostel fees is to be paid on a yearly or half yearly basis.</li>
                <li>Students who are majors should apply for student visa coversion and student below 18 years should apply for SSP upon arrival in Philippines</li>
                <li>Students most pay GST other charges.</li>
              </ul>
            </p>

            <p className="service__col__title">AMA Scholl of Medicine</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>3,00,000</td>
                  <td>1.4</td>
                  <td>4,20,000</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>2,00,000</td>
                  <td>1.4</td>
                  <td>2,80,000</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>2,50,000</td>
                  <td>1.4</td>
                  <td>3,50,000</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>2,50,000</td>
                  <td>1.4</td>
                  <td>3,50,000</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>1,50,000</td>
                  <td>1.4</td>
                  <td>2,10,000</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>1,00,000</td>
                  <td>1.4</td>
                  <td>1,40,000</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>12,50,000</td>
                  <td>1.4</td>
                  <td>17,50,000</td>
                </tr>
              </tbody>
            </Table>

            <p className="service__info"><b>Exchange Rate :1 PHP=1.4 INR</b>.<br/>( Fees are denominated in pesos
              and may subject to change with change in exchange rate)</p>
            <br/>

            <p className="service__info"><b>Other Fees:</b>
              <ul>
                <li><b>Visa Processing & Documentation (In India) :</b> 50,000 INR</li>
                <li><b>Visa Conversion, Medical and Quarantine (In Philippines) :</b> 700 $ (50,000 INR)</li>
                <li><b>Food and Accommodation : </b> 10,000 Pesos (14,000 INR)</li>
              </ul>
            </p>
            <br/>

            <p className="service__col__title">Davao Medical School Foundation</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>5,64,168</td>
                  <td>1.4</td>
                  <td>8,50,000</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>5,64,168</td>
                  <td>1.4</td>
                  <td>8,50,000</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>2,47,758</td>
                  <td>1.4</td>
                  <td>3,73,324</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>2,47,758</td>
                  <td>1.4</td>
                  <td>3,73,324</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>2,47,758</td>
                  <td>1.4</td>
                  <td>3,73,324</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>2,47,758</td>
                  <td>1.4</td>
                  <td>3,73,324</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>15,55,200</td>
                  <td>1.4</td>
                  <td>23,43,296</td>
                </tr>
              </tbody>
            </Table>

            <p className="service__info"><b>Exchange Rate :1 PHP=1.4 INR</b>.<br/>( Fees are denominated in pesos
              and may subject to change with change in exchange rate)</p>
            <br/>

            <p className="service__info"><b>Other Expenses:</b>
              <ul>
                <li><b>Processing Fee :</b> Rs.1,50,000/-</li>
                <li><b>Hostel : </b> 12,500 Pesos Per Month (Rs.18,835/- INR)</li>
              </ul>
            </p>
            <br/>

            <p className="service__col__title">Manila Central University</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>2,46,736</td>
                  <td>1.4</td>
                  <td>3,45,430</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>2,37,977</td>
                  <td>1.4</td>
                  <td>3,33,168</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>2,62,266</td>
                  <td>1.4</td>
                  <td>3,67,172</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>2,86,623</td>
                  <td>1.4</td>
                  <td>4,01,272</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>10,33,602</td>
                  <td>1.4</td>
                  <td>14,47,042</td>
                </tr>
              </tbody>
            </Table><br/>

            <p className="service__col__title">Emilio Aguinaldo College</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>1,26,769</td>
                  <td>1.4</td>
                  <td>1,77,476</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>93,231</td>
                  <td>1.4</td>
                  <td>1,30,523</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>2,86,651 + $500</td>
                  <td>1.4</td>
                  <td>4,01,311 + $500</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>3,09,513 + $500</td>
                  <td>1.4</td>
                  <td>4,33,318 + $500</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>2,83,073 + $500</td>
                  <td>1.4</td>
                  <td>3,96,302 + $500</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>3,12,578 + $500</td>
                  <td>1.4</td>
                  <td>4,37,609 + $500</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>14,11,815 + $2000</td>
                  <td>1.4</td>
                  <td>19,76,539 + $2000</td>
                </tr>
              </tbody>
            </Table><br/>

            <p className="service__col__title">Our Lady of Fatima University</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in $</th>
                  <th>Exchange Rate</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>$8,000</td>
                  <td>70</td>
                  <td>5,60,000</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>$4,000</td>
                  <td>70</td>
                  <td>2,80,000</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>$6,400</td>
                  <td>70</td>
                  <td>4,48,000</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>$6,400</td>
                  <td>70</td>
                  <td>4,48,000</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>$6,400</td>
                  <td>70</td>
                  <td>4,48,000</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>$6,400</td>
                  <td>70</td>
                  <td>4,48,000</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>$6,400</td>
                  <td>70</td>
                  <td>4,48,000</td>
                </tr>
              </tbody>
            </Table>

            <p className="service__info"><b>Exchange Rate :1 PHP=1.4 INR</b>.<br/>( Fees are denominated in pesos and may subject to change with change in exchange rate)</p>
            <br/>

            <p className="service__info"><b>Important</b>.<br/>Tuition fees are to be paid directly to the University accounts and not collected by any agent.</p>
            <br/>

            <p className="service__info"><b>Other Expenses:</b>
              <ul>
                <li><b>Visa Renewal :</b> 300$ per year</li>
                <li><b>Admission and Visa processing : </b> $500 + $3000 = $3,500</li>
                <li><b>Total : </b> $3,500 + $630 (18%GST) = $4,130</li>
              </ul>
            </p>
            <br/>

            <p className="service__info"><b>Application Fee : </b> $500</p><br/>

            <p className="service__info">$3000 - Visa & Documentation processing in India includes (MEA Attestation, Red Ribbon & Visa fees), Airport Pick up in the Philippines, Medical checkup upon arrival in the Philippines, student visa conversion in manila, ACR Card, One year health & Accident Insurance, First year Study Materials/ Hand Out Notes, NMAT Books, Uniforms, Local Sim Card with 1 GB Internet, Assistance in opening bank Account, NBI Registration and local tours including one time flight ticket from (IND to MNL).</p><br/>

            <p className="service__info"><b>Living Expenses:</b>
              <ol>
                <li>Hostel fees for 12 Months USD $1,500 two student Sharing basis (Payable 1 year in advance)</li>
                <li>Indian Canteen is available $70 Per Month (Optional)</li>
              </ol>
            </p>
            <br/>

            <p className="service__info"><b>Other Information:</b>
              <ol>
                <li>Total Initial payment for two year will be = 2,46,736 PHP (Tuition fees) + $3,500(Admission and Visa Processing)</li>
                <li>There will be no increase in fees during the duration of course .</li>
                <li>Service fee 75,000PHP + 9,000PHP(12%VAT)=84,000PHP.</li>
              </ol>
            </p>
            <br/>

            <p className="service__col__title">University of Northern Philippines</p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Tuition Fee in Peso</th>
                  <th>One Time Processing Fee</th>
                  <th>Tuition Fee in INR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BS 1 YR</td>
                  <td>325046</td>
                  <td>N/A</td>
                  <td>5,00,000</td>
                </tr>
                <tr>
                  <td>BS 2 YR</td>
                  <td>90000</td>
                  <td>N/A</td>
                  <td>1,38,445</td>
                </tr>
                <tr>
                  <td>MD 1 YR</td>
                  <td>130000</td>
                  <td>N/A</td>
                  <td>2,00,000</td>
                </tr>
                <tr>
                  <td>MD 2 YR</td>
                  <td>130000</td>
                  <td>N/A</td>
                  <td>2,00,000</td>
                </tr>
                <tr>
                  <td>MD 3 YR</td>
                  <td>130000</td>
                  <td>N/A</td>
                  <td>2,00,000</td>
                </tr>
                <tr>
                  <td>MD 4 YR</td>
                  <td>130000</td>
                  <td>N/A</td>
                  <td>2,00,000</td>
                </tr>
                <tr>
                  <td>Total Fees</td>
                  <td>935046</td>
                  <td>N/A</td>
                  <td>14,38,324</td>
                </tr>
              </tbody>
            </Table>

        </div>
        <div id="requirements_sec">
          <h5 className="service__sub__title">
						Requirements For MBBS Admission In Philippines 2021 - 2022
          </h5>
          <p className="service__info">
						The Indian students should fulfill some essential requirements for taking MBBS Admission in the Philippines and these are as follows:
            	<ul>
								<li>The students should have science in their 12th standard and should have an aggregate of 50% marks in physics, chemistry, and mathematics.</li>
								<li>The students should be at least 17 years of age to take MBBS admission in the Philippines.</li>
								<li>The students should also qualify for the NEFT exam with passing marks.</li>
								<li>The students should have English subject in their higher secondary.</li>
								<li>The students must not be more than 25 years of age.</li>
							</ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
						MBBS in Philippines Advice for Indian Students
          </h6>
          <p className="service__info">
						Following is the important information for Indian students in the process of the study MBBS in Philippines:
            	<ul>
								<li><b>Application form:</b> The students should apply for the degree in June.</li>
								<li><b>Letter of admission:</b> Many students get admission letters within two weeks of application.</li>
								<li><b>Ministry and Visa approval:</b> Usually, it takes about two months for a tourist visa to be converted into a Student Visa.</li>
								<li><b>Beginning of course:</b> The approximate starting date of the course in Philippines Medical University in September or October</li>
							</ul>
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
						Visa Procedure for MBBS in Philippines
          </h6>
          <p className="service__info">
						The Philippines government provides student visas for students who complete the age of 18 years. If the student is of 17 years of age, they can get a tourist visa or a Special Study Permit (SSP) and the validation of the SSP is 6 months. Once they complete the age of 18 years, the tourist visa will be converted into a student visa. The students have the general requirements to get the student visa of the Philippines such as:
							<ul>
								<li>The students must have an original passport with 6 months validity beyond the intended period of stay in the Philippines.</li>
								<li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
								<li>Leaving certificate from the previous studying college.</li>
								<li>A medical checkup certificate is also important</li>
								<li>Passport size photographs</li>
								<li>Birth certificate and other mandatory certificates must be submitted to the concerned authority.</li>
								<li>The students must clear the National Medical Admission Test.</li>
								<li>The students must fill the online admission form with their accurate details</li>
								<li>MBBS in Philippines for Indian students will get an offer letter from the university.</li>
								<li>A bank statement of the guardian should be submitted which should include the fee structure of the 1st year of the education.</li>
								<li>A code of conduct certificate must be submitted.</li>
							</ul>
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Philippines!</h6>
          <p className="service__info">
						Philippines provide MCI Coaching to the MBBS students from the 1st year in the Philippines medical universities. They provide in-depth knowledge regarding the MCI exam to the students so that they can score good ranks.<br/>
						National Board of Examination (NBE) conducts MCI Screening Test which is a licensing exam to practice in India after completing <b>MBBS in Philippines</b>. But the students that wish to pursue postgraduate medical courses in India need to qualify <b>National Exit Test (NEXT)</b> exam and also offer license to practice their medical career in India.
          </p>
        </div>

        {/* POP UP Btn */}

        <Button className="popup__btn" onClick={() => setModalShow(true)}>
          Click Here To Apply
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {/* POP UP Btn Ends */}

        <div id="usmle_sec">
          <h6 className="service__sub__title">
						USMLE (United States Medical Licensing Examination) Coaching in Philippines
          </h6>
          <p className="service__info">
						USMLE is a screening test that enables the students to pursue their career in the USA after completing <b>MBBS in Philippines</b>. USMLE is the United States Medical Licensing Examination conducted for MBBS graduates that wish to start their medical careers in the USA. USMLE is classified into 3 steps as below:
						<ol>
							<li>USMLE is a one-day test that includes multiple-choice questions. Most of the students prefer to give at the end of the second year of their MBBS course. It focuses on the knowledge of basic sciences such as <b>anatomy, biochemistry, behavioral sciences, pathology, pharmacology, immunology, physiology, and microbiology.</b></li>
							<li>It is a two day test that will be given by the MBBS students in the fourth year of their MBBS course. This exam is further classified into two stages such as- <b>CK (Clinical Knowledge) and CS (Clinical Skills).</b></li>
							<li>It is also a two-day test that students generally prefer to five once they complete the first-year residency. Day 1 Test of Step 3 is known as the Foundation of Independent Practice (FIP) which is an MCQ format test. Day 2 Test is known as Advanced Clinical Medicine (ACM) in which students need to attempt about 180 MCQ’s and 13 computer-based case simulations.</li>
						</ol>
          </p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
            PG Options after MBBS in Philippines
          </h6>
          <p className="service__info">
						There are several PG courses provided by Philippines Universities such as:
            	<ul>
								<li>The students can select to pursue courses in several disciplines</li>
								<li>They are only need to fetch documents relating to their graduation to take admission in PG courses.</li>
							</ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
            Vacations during MBBS in Philippines
          </h6>
          <p className="service__info">
						Philippines medical universities provide two vacations in a year to medical students such as:
            <ul>
							<li>The students get summer as well as winter vacations</li>
							<li>Indian students can also come back in India during the vacations</li>
							<li>Indian students can work an internship during their vacations in India</li>
							<li>The students are also given National holidays</li>
						</ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
						Career Options after Completing MBBS in Philippines
          </h6>
          <p className="service__info">
						The students can choose from the following career options after completing the <b>MBBS in Philippines:</b>
            <ul>
							<li>After completing <b>MBBS in Philippines</b>, the students can have adequate employment opportunities in Philippines as well in other countries too.</li>
							<li>They can enroll for the PG course or hospital management course.</li>
							<li>They can go for clinical research jobs or begin for clinical practice.</li>
							<li>They can come back to India and start working as a practitioner after qualifying for the MCI screening test.</li>
						</ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
            Students face huge problems due to the Fraud Agents
          </h6>
          <p className="service__info">
						The students do not have to pay MBBS 6-year fees together in any government medical university in Philippines. If any agent asks for the whole 6-year fees, it’s their own scheme. If the students pay whole fees and got <b>MBBS Admission in Philippines</b> where they taught <b>MBBS in Philippines</b> then they cannot change the university.<br/><br/>
						As there is no requirement to pay any donation fee or capitation fee for taking <b>MBBS Admission in Philippines</b>, so the students must aware of not paying any donation fees to any agent.<br/><br/>
						It is recommended to students to qualify MCI screening test coaching (online) in India only before going Philippines for pursuing MBBS. They do not have to trust any false promises of any agent. Because the MCI screening test coaching is not provided in most of the Philippines medical universities.<br/><br/>
						Therefore, the student should consult New-Lyf for any information regarding <b>MBBS Admission in Philippines</b>. We provide transparent information to the students so that they fulfill their wish to pursue <b>MBBS in Philippines</b> in the English-taught universities with reasonable and accurate fees.
          </p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
						How reserve your MBBS Seat in Philippines for 2021 - 2022 Admission
          </h6>
          <p className="service__info">
						New-Lyf help the students at each step in order to reserve the MBBS Seat in the Philippines for 2021 - 2022 Admission
            <ul>
							<li>The students need to fill the application form of their selected university or college.</li>
							<li>Submit all vital documents.</li>
							<li>Collect the admission letter from the university/College.</li>
							<li>After the confirmation of <b>MBBS Admission in Philippines</b>, they can start the immigration process.</li>
							<li>It is necessary to check, evaluate, and verify each and every document before applying for a visa.</li>
						</ul>
          </p>
        </div>

        {/* POP UP Btn */}

        <Button className="popup__btn" onClick={() => setModalShow(true)}>
          Click Here To Apply
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        {/* POP UP Btn Ends */}

        <div id="charges_sec">
          <h6 className="service__sub__title">
            Service & Consultancy Charges of New-Lyf
          </h6>
					<p className="service__info">
						New-Lyf is one of the best overseas education consultants in India. We have already placed hundreds of Indian students in Philippines for pursuing MBBS course in the top medical universities that taught MBBS course in English language.<br/><br/>
						We provide proper guidance to the students regarding the top universities, it’s fees structure, and many more things so that the students can have brighter career opportunities. Our aim is to place Indian students to the MCI approved Philippines medical universities with reasonable fees and top-class facilities.<br/><br/>
						It is recommended to students not to take admission in free medical colleges in Philippines because they lack quality education and infrastructure. But we place the students only at the best medical universities/colleges in Philippines.
					</p>
        </div>
        <div id="New-Lyf_sec">
          <h6 className="service__sub__title">
						Applying <b>MBBS in Philippines</b> from New-Lyf, the students have the following benefits:
          </h6>
          <p className="service__info">
						<ul>
							<li>MCI screening test coaching online</li>
							<li>Accurate and transparent counseling for MBBS in many countries</li>
							<li>Admission in top medical universities approved by MCI</li>
							<li>Perfect visa application documents without any rejection</li>
							<li>Safe travel services provided to students going abroad to pursue MBBS</li>
							<li>Support for accommodation at the campus</li>
						</ul>
          </p>
        </div>
        <div id="process_sec">
          <h6 className="service__sub__title">
						Our Process of conducting Student Counseling
          </h6>
          <p className="service__info">
						It is advisable to students to attend our counseling regarding MBBS in Philippines to clear their doubts:
            <ul>
              <li>
                <b>Online Counseling</b>
                <br /> We provide complete information about the MBBS abroad,
                selection of the best university, advantages & disadvantages of
                pursuing MBBS in different countries, and clear each doubt of
                the students so that they can study MBBS and fulfill their
                wish.The students can get online counseling session from the CEO
                of New-Lyf and can clear their doubts.
              </li>
              <li>
                <b>Tele-Counseling</b>
                <br /> New-Lyf has a team of expert counselors that provide
                accurate information from MBBS to PG courses to the students.
                The students can interact with any of the expert counselor
                through phone call, SMS, Whatsapp, Email, and more and get
                resolved their queries regarding MBBS in abroad.
              </li>
              <li>
                <b>Personal Counseling</b>
                <br /> The students do not need to travel to our head office
                only as they can also visit our office in Bangalore, Kochi,
                Chennai, Hyderabad, Bihar, Lucknow & Mumbai.
              </li>
            </ul>
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">MBBS in Philippines FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Philippines good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">It’s a great option to opt for pursuing MBBS in Philippines</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">How much is the cost for MBBS in Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">It is very affordable to Study MBBS in Philippines as its cost between 12 to 25 lacs.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is NEET required for MBBS in Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">It is compulsory for Indian students to clear the NEET exam to pursue MBBS in Philippines.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">How many years in MBBS in Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">MBBS duration is 6 years.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Which is the best MBBS College in Philippines for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">Almost every college provides the best education to Indian students. The best MBBS Colleges in Philippines for Indian Students include AMA School of Medicine, University of Perpetual Help System, Our Lady of Fatima University, and Angeles University Foundation.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What are the career options for an Indian student doing an MBBS in Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">Medical Degrees get from Philippines Medical Colleges or Universities have worldwide recognition. After completion of MBBS in Philippines, the further scope includes doing PG in another country or practice as a Doctor in India as well as in another foreign country after clear the National Exit Exam.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
						<Card>
              <Accordion.Toggle as={Card.Header} eventKey="6">
                <b className="accordion__title">Why is NMAT required in Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
									<p className="service__info">NMAT is required in Philippines for the entrance to any medical college in Philippines It also improves the quality of medical education in Philippines.</p>
                </Card.Body>
              </Accordion.Collapse>
						</Card>
						<Card>
              <Accordion.Toggle as={Card.Header} eventKey="7">
                <b className="accordion__title">What is the passing score for NMAT Philippines?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
									<p className="service__info">The passing score for NMAT Philippines is 40 percentile.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
				</div>
				<div id="testimonials">
          <h2 className="service__sub__title">Testimonials</h2>
          <HomeCarousel />
				</div>
				<div id="university__videos">
					<h2 className="service__sub__title">Philippines University Videos</h2>
					<Row>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/An3zv3pQfRY' frameborder='0' allowfullscreen title="Philippines College Video 1" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/aqlBG3vrt8g' frameborder='0' allowfullscreen title="Philippines College Video 2" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/yQW1p_rNGWA' frameborder='0' allowfullscreen title="Philippines College Video 3" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/HjciMcEGvF0' frameborder='0' allowfullscreen title="Philippines College Video 4" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/1yQ1GlkW-YQ' frameborder='0' allowfullscreen title="Philippines College Video 5" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/NcS2uZzeLYw' frameborder='0' allowfullscreen title="Philippines College Video 6" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/VqPIYFof5g0' frameborder='0' allowfullscreen title="Philippines College Video 7" /></div></Col>
						
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed/aSpTyZv1nuw' frameborder='0' allowfullscreen title="Philippines College Video 8" /></div></Col>
						
					</Row>
				</div>
      </Container>
    </section>
    </DocumentMeta>
  );
}

/* POP UP Section Begins */

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Apply To MBBS Universities In Philippines
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PhilippinesForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="popup__btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

/* PopUp Section Ends */

export default MbbsPhilippines;