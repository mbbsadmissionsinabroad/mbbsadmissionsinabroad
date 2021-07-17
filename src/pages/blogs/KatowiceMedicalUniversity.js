import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DocumentMeta from "react-document-meta";

function KatowiceMedicalUniversity() {
  const meta = {
    title: "Katowice Medical University -  MBBS Admission in Poland for Indian Students",
    description:
      "Katowice Medical University, MBBS Admission in Poland for Indian Students. The Katowice medical university has well-equipped laboratories, excellent research programs which actively focus on educational and scientific progress",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/katowice-medical-university-poland",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Katowice Medical University Poland"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div>
        <div className="service__bg">
          <h1 className="service__title">
          Katowice Medical University Poland
          </h1>
        </div>
        <Container>
          <div className="blog__post__img">
            <img
              src="assets/images/blog-banners/katowice_medical_university.png"
              alt="Katowice Medical University Poland"
            />
          </div>
        </Container>
        <section className="blog__post">
          <Container>
            {/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
            <div id="1">
              <p className="blog__post__desc">
              The Medical University of Silesia is an exciting academic institution in Poland that has an interdisciplinary research center. The <Link to="/katowice-medical-university-poland">Medical University of Silesia</Link> offers an assortment of curricula in the specialized field of study. During the first five years, the medical university consisted of one school of medicine and dentistry department, but thanks to many clinical and theoretical units which opened and were able to ensure a complete educational development.
              </p>
              <p className="blog__post__desc">
                The Medical University of Silesia was founded in 1968 and later the university headquarters was moved to Katowice. Right away, the university became the largest <Link to="/mbbs-admission-in-poland-for-indian-students">medical school in Poland</Link>. Three new schools were opened i.e. School of Pharmacy with the Unit of Medical Analytics, second School of Medicine, and School of Nursery (further included to second School of Medicine). An additional expansion of educational profile took place after the year 2000. The School of Health Care in 2001 and 2002 School of Public Health were established.
              </p>
              <p className="blog__post__desc">
                Katowice Medical University has developed its activity and has become a big Higher Education Institution. Medical schools are providing a process of education on 16 fields of studies focused on preparing specialists to work in various communities and the national health care system. Now the Medical University of Silesia provides education to over 9000 postgraduate and Ph.D. students. The University also conducts classes in the English language (English Program) for students across the world.
              </p>
              <p className="blog__post__desc">
                The Katowice medical university has well-equipped laboratories, excellent research programs which actively focus on educational and scientific progress.
              </p>
              <p className="blog__post__desc">
                The Katowice medical university also offers 70 programs and 240 specializations every academic year, which help the students to meet the challenges across the society and labor market. The institute provides a motivating learning environment to achieve academic desires every year.
              </p>
              <p className="blog__post__desc">
                <Link to="/">MBBS Admission</Link> to the medical university of Silesia is usually done in March every year, The eligibility criteria would be 50% in PCB, and taking up and clearing the NEET exam is necessary. Annual medical university fees would start from 5 lakhs and the course duration would be 6 years including internship. You can <Link to="/mbbs-admission-in-poland-for-indian-students">study MBBS in Poland</Link> in the English language and the university ranks stand at #22 for the Country and #1971 in the world.
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

export default KatowiceMedicalUniversity