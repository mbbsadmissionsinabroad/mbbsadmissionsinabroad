import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DocumentMeta from "react-document-meta";

function BlackSeaNationalUniversity() {
  const meta = {
    title: "Black Sea National University - MBBS Admission in Ukraine for Indian Students",
    description:
      "Black Sea National University, MBBS Admission in Ukraine for Indian Students. The medical university has well-equipped laboratories, excellent research programs which actively focus on educational and scientific progress.",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/petro-mohyla-black-sea-national-university-ukraine",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Black Sea National University Ukraine"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div>
        <div className="service__bg">
          <h1 className="service__title">
          Black Sea National University Ukraine
          </h1>
        </div>
        <Container>
          <div className="blog__post__img">
            <img
              src="assets/images/blog-banners/black-sea-national-university.jpeg"
              alt="Black Sea National University Ukraine"
            />
          </div>
        </Container>
        <section className="blog__post">
          <Container>
            {/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
            <div id="1">
              <p className="blog__post__desc">
                Petro Mohyla Black Sea National University was established in 1996, Black Sea National University is a division of the National University Kyiv-Mohyla Academy. The university has been named after Petro Mohyla. The university was established to acknowledge the need of the specialists along with the vision of providing higher education, especially in support of human welfare and social reforms. Initially, the university enrolled a modest number of students & had witnessed its first graduates in the year 2000 who completed their degrees in finance, environmental sciences, and political sciences. Students were offered to <Link to="/petro-mohyla-black-sea-national-university-ukraine">study MBBS at Black Sea National University</Link> in the year 2015 when the medical department was established in the university.
              </p>
              <p className="blog__post__desc">
                In the last couple of years, it has occurred to most of the students that <Link to="/mbbs-in-ukraine">studying MBBS in Ukraine</Link> is economical, the fees charged for <Link to="/mbbs-in-ukraine">MBBS Admission in Ukraine at Black Sea National University</Link> are less compared to other universities in Ukraine. Petro Mohyla works under the governance of the Ministry of Health of Ukraine & the Ministry of Education & Science of Ukraine. It is also recognized by World Health Organisation (WHO) & National Medical Commission (NMC). The university also became a part of the European Association of Universities and in 2011, it was the only <Link to="/">medical college in Ukraine</Link> to have represented Ukraine in Talloires Network Leaders Conference.
              </p>
              <p className="blog__post__desc">
                Petro Mohyla Black Sea National University provides graduate, postgraduate & specialty courses to students from the Indian subcontinent. Black Sea National medical university's ranking has recently seen a rise in position due to the improved quality of education in English medium for the past few years & ranked #24 out of 200 in international recognition and ranked #40 in the overall UNESCO ranking of Ukrainian universities.
              </p>
              <p className="blog__post__desc">
                Petro Mohyla Black Sea National University has attained the fourth level of accreditation by the Ministry of Education and Science of Ukraine. Roughly, it employs 310 plus teaching staff and enrolls about 4000 plus students. International participation has played a significant role in the creation and preservation of the educational standards of Petro Mohyla Black Sea National University. To secure international standards, Petro Mohyla Black Sea National University has strong links with different international organizations and overseas universities.
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

export default BlackSeaNationalUniversity