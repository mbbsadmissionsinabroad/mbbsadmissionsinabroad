import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from "react-document-meta";
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import UkraineForm from "../components/ContactForm/UkraineForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsUkraine() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title:
      "MBBS Admission in Ukraine for Indian Students at MCI Approved University",
    description:
      "Study MBBS in Ukraine from Top Medical Universities. New-Lyf provides all guidance & assistance to Indian Students for Admission in Ukraine Medical College.",
    canonical: "https://www.mbbsadmissionsinabroad.com/mbbs-in-ukraine/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "MBBS in Ukraine",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <section>
        <div className="service__bg">
          <h1 className="service__title">MBBS In Ukraine</h1>
        </div>
        <div>
          <img
            className="service__image"
            src="/assets/images/service-image/study-mbbs-in-ukraine.png"
            alt="Study In Ukraine"
          />
        </div>
        <Container>
          <div id="index_sec">
            <h2 className="service__sub__title">
              Introduction For MBBS In Ukraine
            </h2>
            <p className="service__info">
              Ukraine is the largest region in Europe. At the current time,
              Ukraine has a top-rated position in Europe for getting the most
              significant quantity of postgraduates in areas of medication. If
              you are planning to study MBBS in Ukraine, it’s a good though.
              Please go through the articles given below to throw further light
              on this topic.
            </p>
            <ul className="hyperlink">
              <li>
                <a href="#index_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Index
                </a>
              </li>
              <li>
                <a href="#why_mbbs_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS
                  in Ukraine?
                </a>
              </li>
              <li>
                <a href="#benefits_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Benefits
                  of MBBS in Ukraine
                </a>
              </li>
              <li>
                <a href="#eligibility_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in
                  Ukrain Eligibility
                </a>
              </li>
              <li>
                <a href="#university_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Top
                  University of MBBS in Ukraine
                </a>
              </li>
              <li>
                <a href="#requirements_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS in Ukraine
                </a>
                <ul className="college__name">
                  <li>
                    <a href="#bogomolets_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Bogomolets National Medical University
                    </a>
                  </li>
                  <li>
                    <a href="#odessa_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Odessa National Medical University, Odessa
                    </a>
                  </li>
                  <li>
                    <a href="#blaksea_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Blaksea State Medical University, Mykolaiv
                    </a>
                  </li>
                  <li>
                    <a href="#donetsk_univ_mariupol">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Donetsk National Medical University, Mariupol
                    </a>
                  </li>
                  <li>
                    <a href="#donetsk_univ_kirovograd">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Donetsk National Medical University, Kirovograd
                    </a>
                  </li>
                  <li>
                    <a href="#donetsk_univ_chemigiv">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Donetsk National Medical University, Chemigiv
                    </a>
                  </li>
                  <li>
                    <a href="#vinnytsia_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Vinnytsia National Medical University, Vinnytsia
                    </a>
                  </li>
                  <li>
                    <a href="#ivano_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Ivano-frankvisk National Medical University,
                      Ivano-frankvisk
                    </a>
                  </li>
                  <li>
                    <a href="#sumy_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Sumy State Medical University, Sumy
                    </a>
                  </li>
                  <li>
                    <a href="#zaporozhye_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Zaporozhye State Medical University, Zaporozhye
                    </a>
                  </li>
                  <li>
                    <a href="#kyiv_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Kyiv Medical University Of UAFM, Kyiv
                    </a>
                  </li>
                  <li>
                    <a href="#uzhgorod_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Uzhgorod State Medical University, Uzhgorod
                    </a>
                  </li>
                  <li>
                    <a href="#poltava_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Poltava State Medical University, Poltava
                    </a>
                  </li>
                  <li>
                    <a href="#ternopil_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Ternopil State Medical University, Ternopil
                    </a>
                  </li>
                  <li>
                    <a href="#lviv_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Lviv National Medical University, Lviv
                    </a>
                  </li>
                  <li>
                    <a href="#bukovinian_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Bukovinian State Medical University, Chernovtsy
                    </a>
                  </li>
                  <li>
                    <a href="#kharkov_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Kharkov National Medial University, Kharkov
                    </a>
                  </li>
                  <li>
                    <a href="#karazin_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> V.N. Karazin Medical University, Kharkov
                    </a>
                  </li>
                  <li>
                    <a href="#dnipropetrovsk_univ">
                      <img src="/assets/icon.png" alt="Left Arrow" /> Dnipropetrovsk State Medical University, Dnipropetrovsk
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#visa_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure For MBBS In Ukraine
                </a>
              </li>
              <li>
                <a href="#advantage_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS
                  Ukraine – Advantages For An Indian Student
                </a>
              </li>
              <li>
                <a href="#pros_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> The
                  Following Are The Pros Or Advantages For Mbbs Graduates Of
                  Ukraine
                </a>
              </li>
              <li>
                <a href="#disadvantage_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> The
                  Following Are The Cons Or Disadvantages For Mbbs Graduates Of
                  Ukraine:
                </a>
              </li>
              <li>
                <a href="#usmle_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> USMLE
                  (United States Medical Licensing Examination) Coaching in
                  Ukraine
                </a>
              </li>
              <li>
                <a href="#pg_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> PG
                  Options after MBBS in Ukraine
                </a>
              </li>
              <li>
                <a href="#vacations_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Vacations during MBBS in Ukraine
                </a>
              </li>
              <li>
                <a href="#career_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Career
                  Options after Completing MBBS in Ukraine
                </a>
              </li>
              <li>
                <a href="#problems_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Students
                  face huge problems due to the Fraud Agents
                </a>
              </li>
              <li>
                <a href="#reserve_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> How
                  reserve your MBBS Seat in Ukraine for 2021 - 2022 Admission
                </a>
              </li>
              <li>
                <a href="#charges_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Service
                  & Consultancy Charges of New-Lyf
                </a>
              </li>
              <li>
                <a href="#New-Lyf_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Services
                  by New-Lyf for Abroad Education
                </a>
              </li>
              <li>
                <a href="#process_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Our
                  Process of conducting Student Counseling
                </a>
              </li>
              <li>
                <a href="#faq_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in
                  Ukraine FAQ
                </a>
              </li>
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

          <div id="why_mbbs_sec">
            <h3 className="service__sub__title">Why MBBS Study in Ukraine</h3>
            <p className="service__info">
              At present, Ukraine is ranked at the fourth position in Europe for
              having the largest number of postgraduates in the fields of
              medicine. Ukraine has a number of Top Government Medical
              Universities offering MBBS, MD and other degrees in medicine to
              the local students as well as international students across the
              world.
            </p>
          </div>
          <div id="benefits_sec">
            <h4 className="service__sub__title">
              Benefits of Studying MBBS in Ukraine for Indian Students 2021 - 2022
            </h4>
            <p className="service__info">
              The plus points or benefits for students studying
              <b>MBBS in Ukraine</b>
              <br />
              <br /> The world ranking of the universities in Ukraine for the
              <b>MBBS course is almost high in every field</b>. <br />
              <br /> Given below are some of the benefits of studying
              <b>MBBS course in Ukraine</b>. <br />
              <br />
              <ul>
                <li>
                  No donation or capitation fees required at the time of
                  admission process.
                </li>
                <li>World class Medical infrastructure</li>
                <li>Low cost of Medical education</li>
                <li>
                  Almost all of the medical colleges in Ukraine have global
                  recognition (MCI, WHO & UNESCO)
                </li>
                <li>Vast innovative and bilingual educational system.</li>
                <li>Lots of scope for research and development.</li>
                <li>
                  The global recognition given to any MBBS graduate from Ukraine
                  and the extent of their employment is vast.
                </li>
                <li>Live teaching facilities across all classes of MBBS.</li>
                <li>
                  Innumerable number of opportunities readily available in
                  international exchange programs and other projects related to
                  medicine.
                </li>
                <li>
                  One of the topmost high quality educational infrastructures in
                  all the Medical colleges of Ukraine.
                </li>
                <li>
                  The candidate is presented as European Union standard while
                  studying in Ukraine.
                </li>
                <li>
                  IELTS & TOEFL background is not a must or a compulsion for
                  MBBS study in Ukraine.
                </li>
              </ul>
            </p>
          </div>
          <div id="eligibility_sec">
            <h5 className="service__sub__title">
              Eligibility Criteria for MBBS in Ukraine
            </h5>
            <p className="service__info">
              The eligibility criteria of the students who want to study MBBS in
              Russia are as follows:
              <ol>
                <li>
                  <b>Age:</b>
                  <br />
                  An aspirant for eligibility for MBBS in Ukraine need to be
                  above the age of 17 years and below the age of 25 years on
                  31st December of the year in which he or she wishes to seek
                  admission.
                </li>

                <li>
                  <b>NEET Score:</b>
                  <br />
                  For Indian students, the eligibility for MBBS in Ukraine
                  includes qualifying the NEET exam and possessing a valid NEET
                  score. Although, it might sound upright, the rest of the
                  eligibility criteria are quite lenient and relaxed for the
                  candidates.
                </li>

                <li>
                  <b>Entrance Exam:</b>
                  <br />
                  For Indian students, the eligibility for MBBS in Ukraine
                  includes qualifying the NEET exam and possessing a valid NEET
                  score. Although, it might sound upright, the rest of the
                  eligibility criteria are quite lenient and relaxed for the
                  candidates.
                </li>

                <li>
                  <b>Subjects And Marks In Higher Secondary Examination:</b>
                  <br />
                  As an aspirant, you need to have physics, chemistry and
                  Biology as the subjects in 10+2 or equivalent and he or she
                  must have secured a minimum of 50% in these three subjects
                  from a recognized board/institution.
                </li>

                <li>
                  <b>Eligibility Certificate:</b>
                  <br />
                  In order to join as an undergraduate medical course in a
                  foreign medical institution, a candidate must possess an
                  eligibility Certificate issued by the Medical Council of India
                  (MCI), New Delhi. For obtaining this, he has to fulfill the
                  criterion mentioned in the previous point. (i.e.; a minimum
                  score of 50% marks in Physics, Chemistry and Biology in the
                  intermediate examination or equivalent).
                </li>

                <li>
                  <b>IELTS and/or TOEFL:</b>
                  <br />
                  As far as the test of the skills of the aspirant in English
                  language goes, IELTS and TOEFL are the benchmark examinations
                  that students need to qualify in order to be eligible for
                  pursuing any course in a foreign country, but none of the
                  medical university or institution in Ukraine requires an
                  aspirant to clear either of these exams.
                </li>
              </ol>
            </p>
          </div>
          <div id="university_sec">
            <h6 className="service__sub__title">
              Top Universities for MBBS Study in Ukraine
            </h6>
            <p className="service__info">
              Some of the top universities in Ukraine are as follows:
              <ul>
                <li>Bogomolets National Medical University, Kyiv</li>
                <li>Odessa National Medical University, Odessa</li>
                <li>Blaksea State Medical University, Mykolaiv</li>
                <li>Donetsk National Medical University, Mariupol</li>
                <li>Donetsk National Medical University, Kirovograd</li>
                <li>Donetsk National Medical University, Chemigiv</li>
                <li>Vinnytsia National Medical University, Vinnytsia</li>
                <li>
                  Ivano-Frankvisk National Medical University, Ivano-Frankvisk
                </li>
                <li>Sumy State Medical University, Sumy</li>
                <li>Zaporozhye State Medical University, Zaporozhye</li>
                <li>Kyiv Medical University of UAFM, Kyiv</li>
                <li>Uzhgorod State Medical University, Uzhgorod</li>
                <li>Poltava State Medical University, Poltava</li>
                <li>Ternopil State Medical University, Ternopil</li>
                <li>Lviv National Medical University, Lviv</li>
                <li>Bukovinian State Medical University, Chernovtsy</li>
                <li>Kharkov National Medial University, Kharkov</li>
                <li>V. N. Karazin Medical University, Kharkov</li>
                <li>Dnipropetrovsk State Medical University, Dnipropetrovsk</li>
              </ul>
            </p>
          </div>
          <div id="requirements_sec">
            <h6 className="service__sub__title">
              Requirements for MBBS Admission in Ukraine 2021 - 2022
            </h6>
            <p className="service__info">
              <ul>
                <li>10th level Marks Sheet.</li>
                <li>10 + 2 level Marks Sheet.</li>
                <li>Original passport (Minimum 2 year’s validity)</li>
                <li>
                  Invitation letter issued by the Ministry of Education,
                  Ukraine.
                </li>
                <li>Birth Certificate.</li>
                <li>Medical Certificate and HIV Certificate.</li>
                <li>
                  Students bank statement (with minimum of Rupees 4,00,000 as
                  bank balance).
                </li>
                <li>Parents bank statement (Minimum 6 months)</li>
                <li>School/College leaving/transfer certificate.</li>
                <li>Identical photographs (50 mm x 50 mm) – 10 no’s</li>
                <li>Affidavit certificate.</li>
                <li>
                  Gap certificate for those students who had passed 12th level
                  in earlier years.
                </li>
              </ul>
            </p>
          </div>

          {/* College Info Table Begins */}

          <div id="bogomolets_univ">
            <h6 className="service__sub__title">
              1. Bogomolets National Medical University
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1841</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Bogomolets National Medical University
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>2000$</td>
                  <td>7500$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Notes:</b>
              <ul>
                <li>The hostels are fully furnished and renovated with a 100% guarantee of accommodation.</li>
                <li>All Hostel Accommodation is on Sharing Basis i.e 3-4 students per room</li>
                <li>It’s Mandatory to live in Hostel for the first year. </li>
                <li>The mess is 1200$ Per Year </li>
                <li>Tuition fees can be paid semester wise. Rest need to pay full.</li>
              </ul> 
            </p>
            <p className="service__info"><b>Package is not including:</b>
              <ul>
                <li>*- medical insurance 24500 uah as per 2019 batch= approx. 900 - 1000$- this is for all 6 years payable at once.</li>
                <li>May increase or decrease as it depends on $ rate</li>
              </ul>
            </p>
            <p className="service__info"><b>Package is including:</b><br />Includes Admission Letter from University, Invitation Letter, free sim card, swift transfer, immigration letters, and Airport pick up, Local support, City Orientation and all related consultancy related to student’s admission procedures. </p>
          </div>

          <div id="odessa_univ">
            <h6 className="service__sub__title">
              2. Odessa National Medical University, Odessa
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1900</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Odessa National Medical University
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="blaksea_univ">
            <h6 className="service__sub__title">
              3. Blaksea State Medical University, Mykolaiv
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1996</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Blaksea State Medical University, Mykolaiv
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3700$</td>
                  <td>1000$</td>
                  <td>4700$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="donetsk_univ_mariupol">
            <h6 className="service__sub__title">
              4. Donetsk National Medical University, Mariupol
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1930</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Donetsk National Medical University, Mariupol
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>5300$</td>
                  <td>1000$</td>
                  <td>6300$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="donetsk_univ_mariupol">
            <h6 className="service__sub__title">
              5. Donetsk National Medical University, Kirovograd
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1930</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Donetsk National Medical University, Kirovograd
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4350$</td>
                  <td>1000$</td>
                  <td>5350$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="donetsk_univ_chemigiv">
            <h6 className="service__sub__title">
              6. Donetsk National Medical University, Chemigiv
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1930</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Donetsk National Medical University, Chemigiv
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4350$</td>
                  <td>1000$</td>
                  <td>5350$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3200$</td>
                  <td>1000$</td>
                  <td>4200$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="vinnytsia_univ">
            <h6 className="service__sub__title">
              7. Vinnytsia National Medical University, Vinnytsia
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1921</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Vinnytsia National Medical University, Vinnytsia
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>5000$</td>
                  <td>1000$</td>
                  <td>6000$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="ivano_univ">
            <h6 className="service__sub__title">
              8. Ivano-frankvisk National Medical University, Ivano-frankvisk
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1945</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Ivano-frankvisk National Medical University,
              Ivano-frankvisk
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>5200$</td>
                  <td>1000$</td>
                  <td>6200$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="sumy_univ">
            <h6 className="service__sub__title">
              9. Sumy State Medical University, Sumy
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1948</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Sumy State Medical University, Sumy
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Medical Insurance (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>1500$</td>
                  <td>6750$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>N/A</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>N/A</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>N/A</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>N/A</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4300$</td>
                  <td>150$</td>
                  <td>750$</td>
                  <td>N/A</td>
                  <td>5200$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is including</b><br/>
              <ul>
                <li><b>*One time charges</b> – University Registration charges, invitation letter, admission charges, visa confirmation immigration clearance. <b>(Payable only in first year)</b></li>
                <li><b>Translations of documents, Notary expenses, Temporary resident permit expenses</b></li>
                <li>It’s compulsory to live in hostel for first year.</li>
              </ul>
            </p>
          </div>

          <div id="zaporozhye_univ">
            <h6 className="service__sub__title">
              10. Zaporozhye State Medical University, Zaporozhye
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1903</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Zaporozhye State Medical University, Zaporozhye
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>7500$</td>
                  <td>1000$</td>
                  <td>8500$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4300$</td>
                  <td>1000$</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4300$</td>
                  <td>1000$</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4300$</td>
                  <td>1000$</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4300$</td>
                  <td>1000$</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4300$</td>
                  <td>1000$</td>
                  <td>5300$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="kyiv_univ">
            <h6 className="service__sub__title">
              11. Kyiv Medical University Of UAFM, Kyiv
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1992</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Kyiv Medical University Of UAFM, Kyiv
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>5200$</td>
                  <td>1000$</td>
                  <td>6200$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3500$</td>
                  <td>1000$</td>
                  <td>4500$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3500$</td>
                  <td>1000$</td>
                  <td>4500$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3500$</td>
                  <td>1000$</td>
                  <td>4500$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3500$</td>
                  <td>1000$</td>
                  <td>4500$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3500$</td>
                  <td>1000$</td>
                  <td>4500$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="uzhgorod_univ">
            <h6 className="service__sub__title">
              12. Uzhgorod State Medical University, Uzhgorod
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1945</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Uzhgorod State Medical University, Uzhgorod
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Medical Insurance (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>1600$</td>
                  <td>6450$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>4850$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>4850$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>4850$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>4850$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3800$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>4850$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is Includes:</b><br/>
              <ul>
                <li>Translations of documents, Notary expenses, Temporary resident permit expenses</li>
                <li><b>*One time charges</b> – University Registration charges, invitation letter, admission charges, visa confirmation immigration clearance.<b> (Payable only in first year)</b></li>
                <li><b>It’s compulsory to live in hostel for first year.</b></li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Not Includes:</b><br/>
              <ul>
                <li>Mess service – 1200$</li>
              </ul>
            </p>

            <h6 className="service__col__title">
              Post Graduation (PG) Courses
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>MBBS (MD) Course (In USD $)</th>
                  <th>Health Insurance (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1<sup>st</sup> - 3<sup>rd</sup> Year</td>
                  <td>4000$</td>
                  <td>200$</td>
                  <td>850$</td>
                  <td>1250$</td>
                  <td>6250$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is Includes:</b><br/>
              <ul>
                <li><b>*One time charges</b> Translations of documents, Notary expenses, Temporary resident permit expenses</li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Not Includes:</b><br/>
              <ul>
                <li>Degree confirmation NASTRIFICATION  (recognition of degree or school certificate from the foreign country ) from ministry of education-1500 $ (if the student finished the bachelor’s degree outside from the Ukraine, ).</li>
              </ul>
            </p>
          </div>

          <div id="poltava_univ">
            <h6 className="service__sub__title">
              13. Poltava State Medical University, Poltava
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1921</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Poltava State Medical University, Poltava
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4000$</td>
                  <td>500$</td>
                  <td>1200$</td>
                  <td>5700$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4000$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4500$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4800$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4800$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4800$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>5300$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4800$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>5300$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Notes:</b>
              <ul>
                <li>ALL HOSTEL ACCOMODATION IS ON SHARING BASIS i.e 3-4 students per room</li>
                <li>* SEATS IN ALL HOSTELS ARE LIMITED AND ARE ON FIRST COME FIRST SERVE BASIS</li>
                <li><b>It’s Mandatory to live in Hostel for first year. </b></li>
                <li><b>Tuition fees can be paid semester wise rest full payment </b></li>
              </ul>                 
            </p>
            <p className="service__info"><b>Package is not including:</b>
              <ul>
                <li>*- medical insurance 10000 uah as per 2019 batch= approx. 450$- this is for all 6 years payable at once + 6 year residence permit </li>
                <li>May increase or decrease as it depends on $ rate</li>
                <li>Mess charges 1200 USD (not mandatory).</li>
              </ul>                 
            </p>
            <p className="service__info"><b>Package is including:</b><br/>Includes Admission Letter from University, Invitation Letter, free sim card, swift transfer, immigration letters, and Airport pick up, Local support, City Orientation and all related consultancy related to student’s admission procedures. </p>
          </div>

          <div id="ternopil_univ">
            <h6 className="service__sub__title">
              14. Ternopil State Medical University, Ternopil
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1957</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Ternopil State Medical University, Ternopil
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Health Insurance (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>3800$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>1900$</td>
                  <td>6700$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4420$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>5420$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4420$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>5420$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4520$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>5520$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4620$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>5620$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4620$</td>
                  <td>150$</td>
                  <td>850$</td>
                  <td>N/A</td>
                  <td>5620$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is Including</b><br/>
              <ul>
                <li><b>*One time charges</b> – University Registration charges, invitation letter, admission charges, visa confirmation immigration clearance. <b>(Payable only in first year)</b></li>
                <li>Translations of documents, Notary expenses, Temporary resident permit expenses</li>
                <li>It’s compulsory to live in hostel for first year.</li>
              </ul>
            </p>
          </div>

          <div id="lviv_univ">
            <h6 className="service__sub__title">
              15. Lviv National Medical University, Lviv
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1934</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Lviv National Medical University, Lviv
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>1800$</td>
                  <td>7500$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>N/A</td>
                  <td>5700$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>N/A</td>
                  <td>5700$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>N/A</td>
                  <td>5700$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>N/A</td>
                  <td>5700$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4900$</td>
                  <td>800$</td>
                  <td>N/A</td>
                  <td>5700$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is Include</b><br/>
              <ul>
                <li>University Registration charges, admission charges, and visa confirmation immigration clearance. (Payable only in first year)</li>
                <li>Logistic service </li>
                <li>Translations documents for admission </li>
                <li>Residence permit FOR 6 YEARS</li>
                <li>Nostrification </li>
                <li>Medical Check-up (Covid –19, Malaria, Hepatitis Viral Markers, Meningitis, Typhoid, VDRL, HIV etc)</li>
                <li><b>It’s compulsory to live in hostel for first year.</b></li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Not Include</b><br/>
              <ul>
                <li>Medical insurance 19500 uah as per 2019 batch = approx. 700$- this is for all 6 years payable at once </li>
                <li><b>Mess is compulsory in first year – 1200$</b></li>
              </ul>
            </p>
          </div>

          <div id="bukovinian_univ">
            <h6 className="service__sub__title">
              16. Bukovinian State Medical University, Chernovtsy
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1934</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Bukovinian State Medical University, Chernovtsy
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>2300$</td>
                  <td>6700$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4400$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4400$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4400$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4400$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>3900$</td>
                  <td>500$</td>
                  <td>N/A</td>
                  <td>4400$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Package is Include:</b>
              <ul>
                <li>University Registration charges, admission charges, and visa confirmation immigration clearance. 
                (Payable only in first year)</li>
                <li>Logistic service </li>
                <li>Translations documents for admission </li>
                <li>Residence permit FOR 6 YEARS</li>
                <li>Nostrification </li>
                <li>Medical Check-up (Covid –19, Malaria, Hepatitis Viral Markers, Meningitis, Typhoid, VDRL, HIV etc)</li>
                <li><b>Tuition fees can be paid semester wise. Rest need to pay full.</b></li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Not Include:</b>
              <ul>
                <li>Medical insurance 11000 uah as per 2019 batch = approx. 400$- this is for all 6 years payable at once </li>
                <li><b>Mess is compulsory in first year – 1200$</b></li>
              </ul>
            </p>
          </div>

          <div id="kharkov_univ">
            <h6 className="service__sub__title">
              17. Kharkov National Medial University, Kharkov
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1968</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Kharkov National Medial University, Kharkov
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>8400$</td>
                  <td>1000$</td>
                  <td>9400$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4800$</td>
                  <td>1000$</td>
                  <td>5800$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4800$</td>
                  <td>1000$</td>
                  <td>5800$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4800$</td>
                  <td>1000$</td>
                  <td>5800$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4800$</td>
                  <td>1000$</td>
                  <td>5800$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4800$</td>
                  <td>1000$</td>
                  <td>5800$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          <div id="karazin_univ">
            <h6 className="service__sub__title">
              18. V. N. Karazin Medical University, Kharkov
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1943</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of V. N. Karazin Medical University, Kharkov
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Tution Fees (In USD $)</th>
                  <th>Hostal Fees (In USD $)</th>
                  <th>Mess Service (In USD $)</th>
                  <th>One Time Charges (In USD $)</th>
                  <th>Total Fees (In USD $)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>1300$</td>
                  <td>1200$</td>
                  <td>8000$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4500$</td>
                  <td>1000$</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>5500$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info"><b>Notes:</b>
              <ul>
                <li>There are two hostel variants hostel 4 and hostel 5.</li>
                <li>The hostels are fully furnished and renovated with 100% guarantee of accommodation.</li>
                <li>ALL HOSTEL ACCOMODATION IS ON SHARING BASIS i.e 3-4 students per room</li>
                <li><b>It’s Mandatory to live in Hostel for first year. </b></li>
                <li><b>First year Mess is compulsory</b></li>
                <li><b>Tuition fees can be paid semester wise. Rest need to pay full. </b></li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Not Including:</b>
              <ul>
                <li>*- medical insurance 19500 uah as per 2019 batch = approx. 700-800$- this is for all 6 years payable at once </li>
                <li>May increase or decrease as it depends on $ rate</li>
              </ul>
            </p>
            <p className="service__info"><b>Package is Including:</b><br/>Includes Admission Letter from University, Invitation Letter, free sim card, swift transfer , immigration letters, and Airport pick up, Local support, City Orientation and all related consultancy related to student’s admission procedures. </p>
          </div>

          <div id="dnipropetrovsk_univ">
            <h6 className="service__sub__title">
              19. Dnipropetrovsk State Medical University, Dnipropetrovsk
            </h6>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Recognition</th>
                  <th>Duration</th>
                  <th>Eligibility</th>
                  <th>Language</th>
                  <th>Last Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1916</td>
                  <td>MCI/WHO</td>
                  <td>6 Years</td>
                  <td>10+2 (50%)</td>
                  <td>English</td>
                  <td>1ST AUG 2021 - 2022</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__col__title">
              MBBS Fees Of Dnipropetrovsk State Medical University,
              Dnipropetrovsk
            </p>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th>Year / Fees Structure</th>
                  <th>Tution Fees</th>
                  <th>Hostal Fees</th>
                  <th>Total Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Year</td>
                  <td>7200$</td>
                  <td>1000$</td>
                  <td>8200$</td>
                </tr>
                <tr>
                  <td>Second Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Third Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Forth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Fifth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
                <tr>
                  <td>Sixth Year</td>
                  <td>4200$</td>
                  <td>1000$</td>
                  <td>5200$</td>
                </tr>
              </tbody>
            </Table>
            <p className="service__info">
              Food Expenses / Month = 160$ To 250$
            </p>
            <p className="service__info">
              One Time Charges Payable In First Year As Administrative Fee,
              Registration Fee, Airport Pickup, Immigration Clearance Service
              Charges = 2300$
            </p>
          </div>

          {/* College Info Table Ends */}

          <div id="visa_sec">
            <h6 className="service__sub__title">
              VISA Procedure For MBBS In Ukraine:
            </h6>
            <p className="service__col__title">
              UKRAINE STUDY VISA REQUIREMENTS:
            </p>
            <p className="service__info">
              <ol>
                <li>Passport with minimum 2 years validity</li>
                <li>10th Certificate.</li>
                <li>12th Marks sheet and Certificate.</li>
                <li>
                  Birth Certificate in Hindi or English (or translated in
                  English and notarized).
                </li>
                <li>Passport size photo – 20</li>
                <li>School transfer Certificate.</li>
                <li>
                  Official invitation letter from the University of Ukraine.
                </li>
                <li>Medical Insurance.</li>
                <li>Health test documents</li>
                <li>Translation of all documents by the Ukraine Embassy.</li>
                <li>
                  Authorization of all documents by the ministry of External
                  Affairs, New Delhi.
                </li>
                <li>
                  Legalization of all documents by the Ministry of Education,
                  Kiev, Ukraine.
                </li>
                <li>Ukraine student visa fees.</li>
              </ol>
              <br />
              10th, 12th, birth certificate, passport (first and last page),
              school transfer certificate and invitation letter has to be taken
              4 sets of photo copies with attestation.
            </p>
          </div>
          <div id="advantage_sec">
            <h6 className="service__sub__title">
              MBBS Ukraine – Advantages For An Indian Student
            </h6>
            <p className="service__info">
              You can get any job that a student who has completed MBBS in India
              can get, because after completing your MBBS in Ukraine, you will
              be taking a screening test conducted by MCI. When you pass this,
              you will be registered to practice in India as a medical
              practitioner.
              <br />
              That means you and the who has done MBBS in India are evaluated
              from there on, on equal terms for any job opportunity, both in the
              government and private sector in India, only you own competence
              will matter in getting selected to the best jobs and for a student
              studying in the Top Universities in Ukraine, only your own
              personal interest in learning can be your limitation.
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

          <div id="pros_sec">
            <h6 className="service__sub__title">
              The Following Are The Pros Or Advantages For Mbbs Graduates Of
              Ukraine:
            </h6>
            <p className="service__info">
              <ul>
                <li>
                  The total college fee for admission for MBBS in Ukraine is low
                  and affordable for Indian students.
                </li>
                <li>
                  The standard of education for MBBS in Ukraine is very high
                  quality and teachers/lecturers here are highly qualified and
                  leaders in their field.
                </li>
                <li>
                  No admission test such as IELTS/TOEFL is required for
                  admission in the Universities/Colleges for MBBS in Ukraine.
                  The admission process is very simple and we will be helping
                  you in the entire process.
                </li>
                <li>
                  Ukraine is a part of the Bologna process, which ensures a high
                  quality of education. [Bologna Process is a serried of
                  ministerial meetings and agreements between European countries
                  designed to ensure comparability of standards and quality of
                  higher education qualifications].
                </li>
                <li>
                  The world ranking of the universities for MBBS in Ukraine is
                  high in almost every field.
                </li>
                <li>
                  The universities of Ukraine are globally recognized by
                  international bodies and organizations such as the Medical
                  Council of India (MCI), World Health Organization (WHO,
                  AVICENNA Directory of Medicine), FAIMER, UNESCO AND AMEE.
                </li>
                <li>
                  The students who have completed their medical degrees in
                  Ukraine are eligible to apply for International Licensing
                  Exams like MCI Screening Test, USMLE (USA), PLAB (UK), as well
                  as other licensing exams taking place throughout the world.
                </li>
                <li>
                  Very Low Annual Fees – Studying MBBS in Ukraine costs 70%
                  lower than the Private Medical Colleges in India. No Donation
                  and no hidden costs.
                </li>
                <li>
                  Guest lecturers/professors and visiting faculty of the
                  universities in Ukraine include Globally Acclaimed Teachers
                  and working professionals who are able to share their
                  knowledge and experience with the young minds.
                </li>
                <li>Cost of living is low in Ukraine.</li>
                <li>
                  The medium of instruction is English for studying MBBS in
                  Ukraine.
                </li>
                <li>
                  Studying MBBS in Ukraine provides a Gateway to other European
                  countries as it has bilateral student agreements in place with
                  other countries such as Finland, Sweden, Czech Republic and
                  others thus making it easier for students to study in other
                  European Countries.
                </li>
                <li>
                  The Faculty to Student ratio is 1:12 – Small class size
                  ensures that students get individual attention.
                </li>
                <li>
                  More than 10,000 Indian students are currently studying their
                  MBBS in Ukraine.
                </li>
              </ul>
            </p>
          </div>

          <div id="disadvantage_sec">
            <h6 className="service__sub__title">
              The Following Are The Cons Or Disadvantages For Mbbs Graduates Of
              Ukraine:
            </h6>
            <p className="service__info">
              Most of the Ukraine MBBS disadvantages arise when the student
              fails to adjust to the new place and its climate.
              <br />
              <ul>
                <li>
                  <b>Climate:</b>
                  <br />
                  Some students find it hard to adjust to the cold climate or
                  weather of Ukraine. The temperature will be 0 degrees for
                  about 3-4 months. However, even when the temperature is below
                  0 degree centigrade, the students will not have any problem
                  when they are inside any building/car/bus; this is because all
                  the buildings are centrally heated.
                </li>

                <li>
                  <b>Local language:</b>
                  <br />
                  The students are taught the local language (Ukrainian or
                  Russian) as a part of the curriculum. If the student takes
                  interest in the subject, then they will have a good command on
                  the language and this will help them in their day to day life
                  and also at the time of hospital visits. However, if the
                  student does not show interest in the local language, then he
                  will lose confidence and will struggle while interacting with
                  the patients.
                </li>

                <li>
                  <b>Duration:</b>
                  <br />
                  The course duration for MBBS in Ukraine is a minimum of 5.8
                  years. This is longer than the duration in some other
                  countries like Kazakhstan, Bangladesh and Kyrgyzstan.
                </li>

                <li>
                  <b>European Curriculum:</b>
                  <br />
                  The curriculum taught by all European countries is excellent
                  and it focuses on the overall growth and development of the
                  student without putting the students in immense pressure.
                  This, however, is a problem for some students as they do not
                  feel motivated enough. Lack of good attitude can lead to
                  failure among students.
                </li>

                <li>
                  <b>Cheating Agents:</b>
                  <br />A lot of times, the students are being given the wrong
                  information by the agents of India. This is why you should do
                  research and contact only the consultancies which have a
                  direct tie-up with the universities.
                </li>
              </ul>
            </p>
          </div>

          <div id="usmle_sec">
            <h6 className="service__sub__title">
              USMLE (United States Medical Licensing Examination) Coaching in
              Ukraine
            </h6>
            <p className="service__info">
              USMLE is a screening test that enables the students to pursue
              their career in the USA after completing <b>MBBS in Ukraine</b>.
              USMLE is the United States Medical Licensing Examination conducted
              for MBBS graduates that wish to start their medical careers in the
              USA.
              <br />
              Ukraine has more passing ratio of the USMLE exam compare to all
              other countries because Ukraine medical universities provide
              quality education to the students. USMLE is the 3-step medical
              licensing exam that enables the MBBS graduates to pursue medicine
              abroad. The exam is conducted by the NBME (National Board of
              Medical Examiners) & the FSMB (Federation of State Medical Board)
              in following three steps:
              <br />
              <ol>
                <li>
                  USMLE is the computer-based exam with the time of 8 hours. The
                  students need to attempt having 280 multiple-choice questions.
                  The exam pattern includes basic principle of science, anatomy,
                  pathology, microbiology, physiology, pharmacology, immunology.
                </li>
                <li>
                  It evaluates knowledge of medicine and understanding of
                  clinical science and clinical skills which provides provision
                  for patient-care operation.
                </li>
                <li>
                  USMLE is the computer-based examination with 500 multiple
                  choice questions which evaluates the ability of the MBBS
                  students to assess physical exam information, selection of
                  initial therapies, order diagnostic tests and management of
                  patients.
                </li>
              </ol>
            </p>
          </div>
          <div id="pg_sec">
            <h6 className="service__sub__title">
              PG Options after MBBS in Ukraine
            </h6>
            <p className="service__info">
              The students can choose from various PG options after completing
              <b>MBBS in Ukraine</b> such as:
              <ul>
                <li>
                  The MBBS graduates can start their career as a surgeon or
                  anything else in any country because the MBBS degree obtained
                  from recognized Ukraine universities has worldwide
                  recognition.
                </li>
                <li>
                  They can opt for PG courses in Ukraine or in any country but
                  they need to clear the screening test of that university.
                </li>
              </ul>
            </p>
          </div>
          <div id="vacations_sec">
            <h6 className="service__sub__title">
              Vacations during MBBS in Ukraine
            </h6>
            <p className="service__info">
              Ukraine medical universities provide two vacations in a year to
              medical students such as:
              <ul>
                <li>
                  They can get summer vacations for two months that lasts for
                  July and August months.
                </li>
                <li>
                  They can get winter vacations for 2 weeks that begins at the
                  end of January month to the first week of February.
                </li>
              </ul>
            </p>
          </div>
          <div id="career_sec">
            <h6 className="service__sub__title">
              Career Options after Completing MBBS in Ukraine
            </h6>
            <p className="service__info">
              The students can choose from the following career options after
              completing the <b>MBBS in Ukraine:</b>
              <ul>
                <li>
                  The Indian students can give MCI screening test after
                  completing MBBS in Ukraine to practice medicine in India.
                </li>
                <li>
                  They can opt for a PG course from the USA, UK, Canada & any
                  other European countries.
                </li>
                <li>They can start their preparation for USMLE.</li>
                <li>They can do job in any hospital or clinic.</li>
              </ul>
            </p>
          </div>
          <div id="problems_sec">
            <h6 className="service__sub__title">
              Students face huge problems due to the Fraud Agents
            </h6>
            <p className="service__info">
              The students do not have to pay MBBS 6-year fees together in any
              government medical university in Ukraine. If any agent asks for
              the whole 6-year fees, it’s their own scheme. If the students pay
              whole fees and got <b>MBBS Admission in Ukraine</b> where they
              taught <b>MBBS in Ukraine</b> then they cannot change the
              university.
              <br />
              <br />
              As there is no requirement to pay any donation fee or capitation
              fee for taking <b>MBBS Admission in Ukraine</b>, so the students
              must aware of not paying any donation fees to any agent.
              <br />
              <br />
              It is recommended to students to qualify MCI screening test
              coaching (online) in India only before going Ukraine for pursuing
              MBBS. They do not have to trust any false promises of any agent.
              Because the MCI screening test coaching is not provided in most of
              the Ukraine medical universities.
              <br />
              <br />
              Therefore, the student should consult New-Lyf for any information
              regarding <b>MBBS Admission in Ukraine</b>. We provide transparent
              information to the students so that they fulfill their wish to
              pursue MBBS in Ukraine in the English-taught universities with
              reasonable and accurate fees.
            </p>
          </div>
          <div id="reserve_sec">
            <h6 className="service__sub__title">
              How reserve your MBBS Seat in Ukraine for 2021 - 2022 Admission
            </h6>
            <p className="service__info">
              The students can easily reserve their MBBS Seat in Ukraine for
              2021 - 2022 Admission as New-Lyf make it very easy and simple. The
              students need to follow the below simple steps for
              <b>MBBS Admission in Ukraine:</b>
              <ul>
                <li>
                  The students need to fill up the registration or application
                  form of their selected university.
                </li>
                <li>
                  Scan all the documents and submit to the particular
                  universities through online admission portal.
                </li>
                <li>
                  They will receive the confirmation or offer letter from the
                  university through their online admission portal.
                </li>
                <li>
                  Once the <b>MBBS Admission in Ukraine</b> is confirmed, they
                  can start their immigration procedure.
                </li>
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
              New-Lyf is one of the best overseas education consultants in
              India. We have already placed hundreds of Indian students in
              Ukraine for pursuing MBBS course in the top medical universities
              that taught MBBS course in English language.
              <br />
              <br />
              We provide proper guidance to the students regarding the top
              universities, it’s fees structure, and many more things so that
              the students can have brighter career opportunities. Our aim is to
              place Indian students to the MCI approved Ukraine medical
              universities with reasonable fees and top-class facilities.
              <br />
              <br />
              It is recommended to students not to take admission in free
              medical colleges in Ukraine because they lack quality education
              and infrastructure. But we place the students only at the best
              medical universities/colleges in Ukraine.
            </p>
          </div>
          <div id="New-Lyf_sec">
            <h6 className="service__sub__title">
              Services by New-Lyf for Abroad Education
            </h6>
            <p className="service__info">
              Applying <b>MBBS in Ukraine</b> from New-Lyf, the students have
              the following benefits:
              <ul>
                <li>MCI screening test coaching online</li>
                <li>
                  Accurate and transparent counseling for MBBS in many countries
                </li>
                <li>Admission in top medical universities approved by MCI</li>
                <li>
                  Perfect visa application documents without any rejection
                </li>
                <li>
                  Safe travel services provided to students going abroad to
                  pursue MBBS
                </li>
                <li>Support for accommodation at the campus</li>
              </ul>
            </p>
          </div>
          <div id="process_sec">
            <h6 className="service__sub__title">
              Our Process of conducting Student Counseling
            </h6>
            <p className="service__info">
              It is advisable to students to attend our counseling regarding
              <b>MBBS in Ukraine</b> to clear their doubts:
              <ul>
                <li>
                  <b>Online Counseling</b>
                  <br /> We provide complete information about the MBBS abroad,
                  selection of the best university, advantages & disadvantages
                  of pursuing MBBS in different countries, and clear each doubt
                  of the students so that they can study MBBS and fulfill their
                  wish.The students can get online counseling session from the
                  CEO of New-Lyf and can clear their doubts.
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
            <h6 className="service__sub__title">MBBS in Ukraine FAQ</h6>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">
                    What is the eligibility to study MBBS in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">
                      Students who meet all these criteria are eligible to
                      enroll overseas for MBBS course.
                      <ol>
                        <li>
                          Attained 17 years of age as on December 31st of the
                          year of admission.
                        </li>
                        <li>
                          Passed 10+2 from a recognized council/board in
                          India/abroad.
                        </li>
                        <li>
                          Have Physics, Chemistry, and Biology & English as
                          subjects in class 11 and in class 12 and passed in
                          each subject, Physics, chemistry and Biology should
                          have a practical test in each subject.
                        </li>
                        <li>
                          Obtain minimum 50% (40% for SC/ST/OBC) in aggregate in
                          PCB combined in 12th board.
                        </li>
                        <li>
                          B.Sc examination of an Indian university provided that
                          he/she have passed the B.Sc examination with not less
                          than two of the following subjects. Physics,
                          Chemistry, Biology (Botany, Zoology) and further that
                          he/she has passed the earlier qualifying examination
                          with the following subjects – Physics, Chemistry,
                          Biology and English.
                        </li>
                        <li>
                          Any other examination which in scope and standard is
                          found to be equivalent to the intermediate science
                          examination of an Indian University/Board, taking
                          physics, Chemistry and Biology including practical
                          test in each of these subjects and English.
                        </li>
                      </ol>
                      <br />
                      Note: This is the requirement for admission as prescribed
                      by MCI which is needed for issue of the MCI eligibility
                      certificate.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
                    Medical council of India registration?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      What is MCI’s certificate of eligibility and how do I get
                      it? How do I register as a doctor in India?
                      <br />
                      <ol>
                        <li>
                          Medical Council of India (MCI) regulates Doctors in
                          India. All Doctors need to register with MCI.
                        </li>
                        <li>
                          Students are eligible to Register with MCI Students
                          from India are eligible certificate and can register
                          with MCI after their degree from Respective College.
                          They can get Government Jobs in India. They can
                          practice in India & enroll in PG courses in India,
                          provided they comply with the process as laid down by
                          the MCI.
                        </li>
                        <li>
                          Overseas Education World will assist students in
                          filing for Certificate of Eligibility from MCI.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">
                    Can I practice in India on my return, after MBBS/MD degree
                    or primary medical qualification from Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      Yes, as per the current rules of the Medical Council of
                      India (MCI), you can practice in India. After graduating
                      from Ukraine, you have to appear for a screening test
                      conducted by the National Board of Education (NBE), New
                      Delhi. On clearing this test, you need to register with
                      the MCI with all their rules and then you will get a
                      registration which will allow you to practice medicine in
                      India.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">
                    How many times can I appear in the screening test?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">
                      There is NO LIMIT on the number of attempts in the
                      screening test. A sincere student will pass screening test
                      in the first attempt. It is a qualifying test similar to
                      class XII test. It is not an elimination test such as PMT.
                      <br />
                      NOTE: It is likely that the screening test will be
                      administered to all students from India, studying in
                      private and government colleges in India. In addition to
                      students from overseas, in order to create a uniform MBBS
                      education competency standard in India. This proposal is
                      on the MCI website, please see
                      <a href="www.mciindia.org">www.mciindia.org</a>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">
                    Can I get a job in Government Hospitals or applied medical
                    institutions of India?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">
                      Yes. After registering with MCI, the doctor can apply for
                      Government & Private jobs or do his/her own practice, as
                      the person is now recognized by the Indian Authorities as
                      a Qualified Doctor.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
                    What kind of food will I get in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Students can cook their own food, kitchen facilities
                          are available.
                        </li>
                        <li>
                          Canteens and restaurants are available in the city and
                          near the university’s premises.
                        </li>
                        <li>
                          Establishment of a dedicated low cost canteen serving
                          Indian food for international students in the Hostel
                          premises is under consideration by the university.
                        </li>
                        <li>
                          All food items such as rice, dal, potatoes, tomatoes,
                          flour, pizzas, fruits, spices, tea, milk, butter, etc
                          are available for sale in the markets and bazaars.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                  <b className="accordion__title">
                    Are there any Indian students already studying in “Ukraine”?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body>
                    <p className="service__info">
                      Over 5000 Indian students are already studying MBBS/MD in
                      Ukraine. There are many Indian boys and girls from India.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                  <b className="accordion__title">
                    Can I get bank loan and to what extent?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                  <Card.Body>
                    <p className="service__info">
                      As per RBI regulations, students pursuing education abroad
                      can obtain load up to 15 lakhs. Visit the local branch of
                      a nationalized bank to find terms and conditions. Amount
                      sanctioned depends on income proof of parents; i.e. Last
                      three years income tax returns/or salary certificate. You
                      will have to satisfy the criteria that the bank will
                      apply. Visit the local branches of nationalized banks in
                      your areas to find out more.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                  <b className="accordion__title">
                    Can I get help for the bank loan from you?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                  <Card.Body>
                    <p className="service__info">
                      The world can advice you, but the bank will deal directly
                      with you and your documentation. Visit a nationalized bank
                      near your residence, which will then give you its
                      guidelines and terms and conditions.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                  <b className="accordion__title">
                    Are Ukrainian colleges listed in the world health
                    organization (WHO) directory?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                  <Card.Body>
                    <p className="service__info">
                      Yes, it’s listed in WHO directory of Medical Institutions,
                      WHO publishes a list of medical colleges, given by various
                      countries.
                      <br />
                      NOTE: WHO does not rank medical universities? What WHO
                      does is simply publish the list of Medical Institutes give
                      to it by each government.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                  <b className="accordion__title">
                    Can I do master’s or post graduation there?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    <p className="service__info">
                      Yes, after completion of MBBS degree from India/Ukraine or
                      any other recognized institute, you can pursue PG studies
                      in Ukraine. The quality of education in Ukraine is very
                      high, as the institute teaches not only at the Bachelors,
                      but also the masters and PhD level.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                  <b className="accordion__title">
                    What is the currency of Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                  <Card.Body>
                    <p className="service__info">
                      The currency of Ukraine is <b>Hryvna</b> pronounced as
                      Grieve. Approximately
                      <b>8 Hryvna =1 US$ or 72 Rupees or 9 Rupees = 1 Hryvna</b>
                      .
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="12">
                  <b className="accordion__title">
                    Is there any entrance examination prior to joining/What be
                    the admission process? As there are no all India entrance
                    examinations, does it mean that the quality of study in
                    Ukraine is bad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="12">
                  <Card.Body>
                    <p className="service__info">
                      No CIS country conducts an entrance examination the way it
                      happens in India. Admission is granted on the basis of
                      class XII marks and an interview and a competency test.
                      This has been their tradition. Just as in India, the
                      tradition is an all India Entrance Examination due to
                      India’s huge population and shortage of seats. The
                      population of India is over 110 crore and India has 30,000
                      medical seats each year. As explained, elsewhere
                      facilities and quality of education imparted in Ukraine
                      are excellent from the Bachelors to the PhD level.
                      Students have to pass the annual examinations to be
                      promoted. The standard of education is very high. Tests
                      are conducted every day from Monday to Friday and 100%
                      attendance is needed. Students should be good and
                      hardworking to do well. European Credit Transfer Scheme
                      (ECTS) is followed. The standard of education offered is
                      that of European quality in Ukraine.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="13">
                  <b className="accordion__title">
                    How does one apply for a passport and what documents do I
                    need?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="13">
                  <Card.Body>
                    <p className="service__info">
                      You need to either apply for your passport online or
                      apply. The passport application process is moving online.
                      Visit www.passport.gov.in. The website contains the name,
                      address and phone numbers of passport offices all over
                      India. You can submit your application online or via speed
                      post or via a form. In some cases, the applications are
                      being received online only. We recommend that you apply
                      for your passport immediately. Fill out the form on the
                      net and you get an appointment date. Visit the passport
                      office and show you documents, they keep the photocopies
                      and return the originals. Normally, it takes 6 to 8 weeks
                      to receive a new passport. The following documents are
                      needed for the application of your passport.
                      <ol>
                        <li>Your birth certificate.</li>
                        <li>Proof of residence and Proof of identity.</li>
                        <li>Certificate of educations qualifications.</li>
                        <li>The prescribed fee by the passport office.</li>
                      </ol>
                      <br />
                      Visit the following websites for passport application and
                      current information.
                      <br />
                      <ol>
                        <li>
                          <a href="www.passport.nic.in">www.passport.nic.in</a>
                        </li>
                        <li>
                          <a href="www.passport.gov.in">www.passport.gov.in</a>
                        </li>
                        <li>
                          <a href="www.passportindia.gov.in">
                            www.passportindia.gov.in
                          </a>
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="14">
                  <b className="accordion__title">
                    Is the Bachelor’s degree recognized in India and abroad?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="14">
                  <Card.Body>
                    <p className="service__info">
                      Yes, the Bachelor’s degree is recognized in India and in
                      more than 180 countries around the world. Graduates can
                      practice in the following countries after completing
                      formalities as needed by each country.
                      <ol>
                        <li>
                          India. After clearing a screening test conducted by
                          the National council of Education. The test is held
                          twice a year (last Saturday/Sunday of September and
                          last Saturday/Sunday of March|).
                        </li>
                        <li>
                          United Kingdom. After passing the PLAB examination.
                        </li>
                        <li>
                          United states of America. After clearing the USMLE.
                        </li>
                        <li>
                          European union (EU). The degree is recognized by the
                          European Union.
                        </li>
                      </ol>
                      <br />
                      NOTE: In addition to Professional Qualifications, the
                      applicant has to comply with all other immigration rules
                      of the host country, such as VISA, work permits, medical
                      fitness, language, etc.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="15">
                  <b className="accordion__title">
                    Can a student open a bank account in Ukraine?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="15">
                  <Card.Body>
                    <p className="service__info">
                      Yes, a student can open a bank account in Ukraine in his
                      own name and parents can transfer money. Students can also
                      take an international debit card from any bank in India.
                      Parents can deposit money in to this account in India and
                      the student can withdraw foreign exchange in Ukraine.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="16">
                  <b className="accordion__title">
                    Does the student have to carry blankets and bed sheets from
                    India ?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="16">
                  <Card.Body>
                    <p className="service__info">
                      Hostel supplies student with linen required; i.e. a
                      pillow, bed sheet, warm blankets, etc. Student will have
                      to carry with him everyday clothes. Winter clothes can be
                      purchased there as needed by the student.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="17">
                  <b className="accordion__title">
                    How long does it require for the admission procedure to be
                    completed?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="17">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          The initial admission letter by the university is
                          issued in 10 to 15 working days.
                        </li>
                        <li>
                          Thereafter other documentation is completed subject to
                          production of original papers from the student, such
                          as passport, mark sheets, etc. This usually takes 6 to
                          8 weeks.
                        </li>
                        <li>
                          Student will have to visit Delhi at least once for 4
                          to 7 days in the month of August or September to
                          his/her VISA issued, have a medical test and to comply
                          with documentation with the MCI and other government
                          agencies.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="18">
                  <b className="accordion__title">
                    In comparison to Ukraine education, what is the cost of
                    medical education in comparison to Indian counterpart?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="18">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Fees are Rs 1.80 Lacs/year. Private colleges in Uttar
                          Pradesh charge Rs. 6.1 Lacs/year or Rs. 30 Lacs as
                          fees. Ukraine is 60 to 70% cheaper than private Indian
                          colleges, as it is owned by the government and not by
                          private sector.
                        </li>
                        <li>
                          Cost of food + Hostel + Insurance in Ukraine works out
                          to Rs. 90,000 to 1 Lac a year, which is similar to the
                          cost in a city in India.
                        </li>
                        <li>
                          Ukraine quality of education is much better than most
                          India private and government medical colleges. They
                          have much better facilities and international
                          collaborations than Indian Medical Institutes.
                        </li>
                        <li>
                          Ukraine offers excellent value for money education for
                          medical students.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="19">
                  <b className="accordion__title">
                    Can my parents visit me in Ukraine ?. Can I travel back to
                    India during holidays or should I stay back there.
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="19">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>
                          Parents/friends/relatives of students can visit
                          Ukraine. Invitations can be issued from Ukraine to
                          facilitate VISA processing in New Delhi.
                        </li>
                        <li>
                          There are two holidays in a year, first 15 days in
                          January and 2 months in summer (July and August).
                          During holidays, students have the option of staying
                          back there or travelling in Europe or coming back to
                          India to spend time with their family.
                        </li>
                      </ol>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="20">
                  <b className="accordion__title">
                    How is living in Ukraine, is it secure and safe?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="20">
                  <Card.Body>
                    <p className="service__info">
                      Ukraine is a former part of USSR. It is primarily a
                      Christian Dominated Country with over 95% of the
                      population being Christian. It has good law and order and
                      security in place. Ukraine is trying for European Union
                      (EU) membership. There is a large amount of Indian
                      students in Ukraine. Students have a comfortable and
                      pleasant stay.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="21">
                  <b className="accordion__title">
                    What are the facilities in the hostel?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="21">
                  <Card.Body>
                    <p className="service__info">
                      <ol>
                        <li>Washing Machine.</li>
                        <li>Hot water.</li>
                        <li>Free electric stoves for cooking.</li>
                        <li>Change of bed sheets every 2-3 weeks for free.</li>
                        <li>Free electricity.</li>
                        <li>Security guard.</li>
                        <li>Hostel Dean.</li>
                        <li>
                          High speed internet with 10 mbps speed cost
                          approximately Rs. 600 a month.
                        </li>
                      </ol>
                    </p>
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
            <h2 className="service__sub__title">Ukraine University Videos</h2>
            <Row>
              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/4u6B710Hv8g"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 1"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/id5pRHX7XLs"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 2"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/927DoPQoKM0"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 3"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/zBVZ272Av0c"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 4"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/-UHbRb0oISs"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 5"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/bsavgjfm-Z8"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 6"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/MTvkeAzSFT0"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 7"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="embed-container">
                  <iframe
                    src="https://www.youtube.com/embed/WJPhYfizN3c"
                    frameborder="0"
                    allowfullscreen
                    title="Ukraine College Video 8"
                  />
                </div>
              </Col>
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
          Apply To MBBS Universities In Ukraine
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UkraineForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button className="popup__btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

/* POP UP Section Ends */

export default MbbsUkraine;
