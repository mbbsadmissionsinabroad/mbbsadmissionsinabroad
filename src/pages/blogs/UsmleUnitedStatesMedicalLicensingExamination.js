import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DocumentMeta from "react-document-meta";

function UsmleUnitedStatesMedicalLicensingExamination() {
  const meta = {
    title: "USMLE: United States Medical Licensing Examination",
    description:
      "USMLE: United States Medical Licensing Examination. It consists of 3 Steps that are USMLE Step 1, USMLE Step 2 CS, USMLE Step 2 CK and USMLE Step 3. After completing the MBBS.",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/usmle-united-states-medical-licensing-examination",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "USMLE: United States Medical Licensing Examination"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div>
        <div className="service__bg">
          <h1 className="service__title">
            USMLE: United States Medical Licensing Examination
          </h1>
        </div>
        <Container>
          <div className="blog__post__img">
            <img
              src="assets/images/blog-banners/united-states-medical-examination.png"
              alt="USMLE: United States Medical Licensing Examination"
            />
          </div>
          <ul className="hyperlink">
            <li>
              <a href="#1">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> What is
                USMLE?
              </a>
            </li>
            <li>
              <a href="#2">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Who can
                take USMLE?
              </a>
            </li>
            <li>
              <a href="#3">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Is there
                any age limit for USMLE?
              </a>
            </li>
            <li>
              <a href="#4">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How long
                does it take to complete USMLE?
              </a>
            </li>
            <li>
              <a href="#5">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How much
                does the USMLE cost?
              </a>
            </li>
            <li>
              <a href="#6">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Can I
                Write USMLE after MBBS?
              </a>
            </li>
            <li>
              <a href="#7">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Is USMLE
                exam difficult?
              </a>
            </li>
            <li>
              <a href="#8">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Can you
                practice medicine in USA without USMLE?
              </a>
            </li>
            <li>
              <a href="#9">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Which
                countries accept USMLE?
              </a>
            </li>
            <li>
              <a href="#10">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Does MBBS
                marks matter in USMLE?
              </a>
            </li>
            <li>
              <a href="#11">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> What
                happens after passing USMLE?
              </a>
            </li>
            <li>
              <a href="#12">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How can an
                Indian Student apply for USMLE?
              </a>
            </li>
            <li>
              <a href="#13">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How many
                USMLE exams are there?
              </a>
            </li>
            <li>
              <a href="#14">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> How Indian
                Doctors can work in USA?
              </a>
            </li>
          </ul>
        </Container>
        <section className="blog__post">
          <Container>
            {/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
            <div id="1">
              <h2 className="blog__post__title">What is USMLE?</h2>
              <p className="blog__post__desc">
                USMLE (United States Medical Licensing Examination) is a
                licensing exam to practice, do residency and fellowships in USA.
                It consists of 3 Steps that are USMLE Step 1, USMLE Step 2 CS,
                USMLE Step 2 CK and USMLE Step 3. After completing the MBBS, if
                the candidates want to practice medicine in the United States,
                they need to clear{" "}
                <Link to="/usmle-united-states-medical-licensing-examination">
                  USMLE exam
                </Link>
                . The first two steps of the <b>USMLE exam</b> are typically
                taken when the students are still in medical college/university
                & the third step takes place after completing their graduation.
              </p>
            </div>

            <div id="2">
              <h3 className="blog__post__title">Who can take USMLE?</h3>
              <p className="blog__post__desc">
                Clearing all 4 tests of the{" "}
                <Link to="/usmle-united-states-medical-licensing-examination">
                  USMLE exam
                </Link>{" "}
                is required for any doctor to get a license to practice medicine
                in the U.S. The eligibility to take the <b>USMLE exam</b> must
                be in one of the following categories at the time the candidates
                apply and on the day of their <b>USMLE exam</b>:
              </p>
              <ul className="blog__post__list">
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  <b>
                    Eligibility to take USMLE Step 1, Step 2 CK, and Step 2 CS:
                  </b>
                  The candidate should be a medical student who is officially
                  enrolled in, or a graduate of, a U.S or Canadian medical
                  college leading to the MD degree (LCME accredited), OR who is
                  officially enrolled in, or a graduate of, a U.S medical
                  college leading to the DO degree (AOA accredited), OR who is
                  Officially enrolled in, or a graduate of, a medical college
                  outside the U.S and Canada listed in the World Directory of
                  Medical Schools as meeting ECFMG eligibility requirements; and
                  meet other ECFMG criteria.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  <b>Eligibility to take USMLE Step 3:</b> Before submitting the
                  application, the candidates must get an MD degree (or its
                  equivalent) OR a DO degree from a U.S. or Canadian medical
                  college that is accredited by the LCME or the AOA, and they
                  must clear Step 1, Step 2 CK, and Step 2 CS.
                </li>
              </ul>
            </div>

            <div id="3">
              <h4 className="blog__post__title">
                Is there any age limit for USMLE?
              </h4>

              <p className="blog__post__desc">
                No, there is not any age limit for{" "}
                <Link to="/usmle-united-states-medical-licensing-examination">
                  USMLE exam
                </Link>
                . The candidates should be officially enrolled in, or a graduate
                of, a medical college outside the U.S and Canada listed in the
                World Directory of Medical Schools as meeting ECFMG eligibility
                requirements.
              </p>
            </div>

            <div id="4">
              <h5 className="blog__post__title">
                How long does it take to complete USMLE?
              </h5>

              <p className="blog__post__desc">
                According to our working experience with international medical
                graduates, preparation for the Step 1 exam takes 6 to 12 months,
                Step 2 CK takes 4 to 7 months, and Step 2 CS takes 1 to 2
                months. As every candidate is unique with different strengths
                and weaknesses, so the time will vary as per their study style,
                available time, score goals, fluency in English and current
                foundation of knowledge in the subjects. Once the candidate
                clears the exam, they can’t repeat the exam to attempt a higher
                score. Programs will also see how many times the candidate
                attempted the exam & eliminate the candidates with multiple
                attempts. Therefore, it is essential to pass the exam & do
                extremely well on the first attempt.
              </p>
            </div>

            <div id="5">
              <h4 className="blog__post__title">
                How much does the USMLE cost?
              </h4>

              <p className="blog__post__desc">
                The international students and graduates who will apply through
                the ECFMG need to pay $895 for the USMLE Step 1. The U.S or
                Canadian medical students and graduates need to pay $610. The
                candidates can extend the eligibility period of Step 1 by paying
                $70.
              </p>

              <ul className="blog__post__list">
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Step 1: $610
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Step 2 CK: $610
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Step 1 and 2CK: $70 Eligibility Period Extension
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Step 2 CS: $1,285 For completed applications received
                </li>
              </ul>

              <p className="blog__post__desc">
                If the candidate wants to change the appointment for the USMLE
                Step 1 above 31 days before the first day of the scheduled test
                date, he/she does not need to pay anything. If the candidate
                wants to change the appointment for the USMLE Step 1 scheduled
                test 6 days to 30 days before the scheduled date, he/she needs
                to pay $50.
              </p>
            </div>

            <div id="6">
              <h6 className="blog__post__title">
                Can I Write USMLE after MBBS?
              </h6>

              <p className="blog__post__desc">
                <b>USMLE exam</b> has clearly defined the medical courses after
                MBBS to be completed in USA. After MBBS the <b>USMLE exam</b>{" "}
                needs to be cleared with high marks (230+) to practice medicine
                in the U.S. The candidates can give USMLE-2 CK exam in India to
                qualify for their Residency in the US.
              </p>
            </div>

            <div id="7">
              <h6 className="blog__post__title">Is USMLE exam difficult?</h6>

              <p className="blog__post__desc">
                The USMLE Step 1 is the difficult exam that candidates can give
                in their medical college & the performance of the candidates on
                <Link to="/usmle-united-states-medical-licensing-examination">
                  USMLE exam
                </Link>{" "}
                will define their residency process. So, it is necessary to do
                well on this exam.
              </p>
            </div>

            <div id="8">
              <h6 className="blog__post__title">
                Can you practice medicine in USA without USMLE?
              </h6>

              <p className="blog__post__desc">
                No, the candidates cannot practice medicine without passing all
                three steps (1, 2CK+CS, and 3) of the USMLE. The candidates need
                to pass parts 1 and 2 of the USMLE exam in order to get the MD
                degree from a US medical school.
              </p>
            </div>

            <div id="9">
              <h6 className="blog__post__title">
                Which countries accept USMLE?
              </h6>

              <p className="blog__post__desc">
                USMLE program supports medical licensing authorities in the U.S
                through its leadership in the development, delivery, & continual
                improvement of high-quality assessments across the continuum of
                preparation of physicians for practice. It is valid in UAE, New
                Zealand, Israel, Dubai Health City & Qatar.
              </p>
            </div>

            <div id="10">
              <h6 className="blog__post__title">
                Does MBBS marks matter in USMLE?
              </h6>
              <p className="blog__post__desc">
                MBBS marks of the candidates are not checked at this step. Once
                they pass Step 1, they will register with ECFMG & before they
                are certified by ECFMG to apply to US residency programs, ECFMG
                will verify their educational credentials including their MBBS
                marks.
              </p>
            </div>

            <div id="11">
              <h6 className="blog__post__title">
                What happens after passing USMLE?
              </h6>
              <p className="blog__post__desc">
                The candidate gets license to practice medicine in USA and wait
                for their match as per their option and requirement. The license
                is valid for five or seven years and they need to get admission
                for PG in that stipulated time period.
              </p>
            </div>

            <div id="12">
              <h6 className="blog__post__title">
                How can an Indian Student apply for USMLE?
              </h6>
              <p className="blog__post__desc">
                Indian student can apply for USMLE from the following steps:
              </p>

              <ul className="blog__post__list">
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  The candidate needs to create an account of the ECFMG website
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Fill all the details and submit form.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Go to ECFMG website and fill the USMLE Step 1 application form
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Fill all the details & make the payment.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  When the candidate has made the payment, he/she will find a
                  link in the same window which is for the form 183 USMLE Step 1
                  application
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  The candidate needs to send Form 183 to IWA, ECFMG, 3624
                  Market Street, Philadelphia, PA 19104-2685 USA
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  The candidate needs to wait for the scheduling Permit
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Then book a date at Prometric whichs is the testing service
                  that conducts all USMLE exams.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  The candidate needs to go to the Prometric Website.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  Then select USMLE & select their testing location and
                  preferred date of exam within their eligibility period.
                </li>
              </ul>
            </div>

            <div id="13">
              <h6 className="blog__post__title">
                How many USMLE exams are there?
              </h6>
              <p className="blog__post__desc">
                <b>USMLE is classified into 3 steps as below:</b>
              </p>

              <ul className="blog__post__list">
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  USMLE is a one-day test that includes multiple-choice
                  questions. Most of the students prefer to give at the end of
                  the second year of their MBBS course. It focuses on the
                  knowledge of basic sciences such as anatomy, biochemistry,
                  behavioral sciences, pathology, pharmacology, immunology,
                  physiology, and microbiology.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  It is a two day test that will be given by the MBBS students
                  in the fourth year of their MBBS course. This exam is further
                  classified into two stages such as:
                  <ul>
                    <li>
                      <b>CK Exam:</b> Here, the students have multiple choice
                      questions on clinical sciences like surgery, obstetrics,
                      gynecology, & pediatrics, and internal medicine.
                    </li>
                    <li>
                      <b>CS Exam:</b> Here, the students have to examine &
                      diagnose the patients. They have to travel to one of the
                      five testing centers across the country for step 2 CS
                      medical.
                    </li>
                  </ul>
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  It is also a two-day test that students generally prefer to
                  five once they complete the first-year residency. Day 1 Test
                  of Step 3 is known as the Foundation of Independent Practice
                  (FIP) which is an MCQ format test. Day 2 Test is known as
                  Advanced Clinical Medicine (ACM) in which students need to
                  attempt about 180 MCQs and 13 computer-based case simulations.
                </li>
              </ul>
            </div>

            <div id="14">
              <h6 className="blog__post__title">
                How Indian Doctors can work in USA?
              </h6>

              <p className="blog__post__desc">
                Indian doctors need to pass the{" "}
                <Link to="/usmle-united-states-medical-licensing-examination">
                  USMLE exam
                </Link>{" "}
                with high marks (230+). During this period, the students can
                give USMLE-2 CK exam in India to qualify for the Residency in
                USA. The doctors can then apply for work visa in USA when they
                get the residency confirmation.
              </p>
            </div>

            <div className="blog__post__aut_box">
              <Row className="no-gutters">
                <Col md={12} lg={2}>
                  <img
                    className="blog__post__aut_img"
                    src="assets/DL.png"
                    alt="New-Lyf Logo"
                  />
                </Col>
                <Col md={12} lg={10}>
                  <p className="blog__post__aut_info">
                    Dr Vinit Kumar is a Educational Consultant for India &
                    Abroad with more than 18 Years of Experience.He has an
                    extensive background guiding & assisting medical students to
                    find the best university as per their budget.✔3500 +
                    Students✔ 15 Countries✔ MBBS, MBA, PG, UG✔ 100 % Commitment✔
                    Education Loan✔ Job Placements
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </DocumentMeta>
  );
}

export default UsmleUnitedStatesMedicalLicensingExamination
