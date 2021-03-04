import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DocumentMeta from "react-document-meta";

function StudyMBBSinGerman() {
  const meta = {
    title:
      "How can I Study MBBS in Germany? What is required for Indian Students?",
    description:
      "How can I Study MBBS in Germany? The students need to show an excellent level of knowledge from a wide variety of topics and subjects related to medicine.",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/how-can-i-study-mbbs-in-germany",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "How can I Study MBBS in Germany?"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div>
        <div className="service__bg">
          <h1 className="service__title">How can I Study MBBS in Germany?</h1>
        </div>
        <Container>
          <div className="blog__post__img">
            <img
              src="assets/images/blog-banners/how-can-i-study-mbbs-in-germany.png"
              alt="How can I Study MBBS in Germany"
            />
          </div>
          <ul className="hyperlink">
            <li>
              <a href="#1">
                <img src="/assets/left-arrow.png" alt="Left Arrow" />{" "}
                Requirements to study MBBS in Germany
              </a>
            </li>
            <li>
              <a href="#2">
                <img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion
              </a>
            </li>
          </ul>

          <p className="blog__post__desc">
            Germany is one of the best destinations to pursue MBBS at reasonable
            cost. Most students wish to{" "}
            <Link to="/how-can-i-study-mbbs-in-germany">
              study MBBS in Germany
            </Link>{" "}
            because it provides the best and the most affordable education
            options for international students. Germany has most of the top MCI
            approved medical universities/colleges. German medical
            colleges/universities offer high-quality medical education that
            provides Indian students a good exposure.
          </p>

          <p className="blog__post__desc">
            The best thing to{" "}
            <Link to="/mbbs-admission-in-germany-for-indian-students">
              study MBBS in Germany
            </Link>{" "}
            is that some medical universities in Germany allocate free education
            for international students. There is no requirement to give any
            entrance exam to <b>study MBBS in Germany</b>. The total duration of
            the MBBS in Germany with the best medical universities is 7.5 Years
            that includes internship with stipends. After completing MBBS in
            Germany, the candidates become eligible for permanent residence
            certificate.
          </p>
        </Container>
        <section className="blog__post">
          <Container>
            {/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
            <div id="1">
              <h2 className="blog__post__title">
                Requirements to study MBBS in Germany
              </h2>
              <p className="blog__post__desc">
                To <b>study MBBS in Germany</b>, the students need to show an
                excellent level of knowledge from a wide variety of topics and
                subjects related to medicine. MBBS in Germany are highly intense
                courses that include around 20 to 30 hours of compulsory classes
                within a week, regular examinations and also cover an extensive
                range of topics. The requirements to{" "}
                <b>study MBBS in Germany</b> may vary according to several
                factors such as the selected university or the federal state
                where that university is located.
              </p>

              <p className="blog__post__desc">
                <b>
                  The students need the following documents to study MBBS in
                  Germany:
                </b>
              </p>

              <ul className="blog__post__list">
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  The students need a high school certificate which is
                  recognized as equivalent to German qualifications if they are
                  a citizen of a non-EU and non-EEA country.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  They must have higher grades in particular subjects related to
                  medicine such as chemistry and biology.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  They need German language proficiency certificate as all MBBS
                  degree courses in Germany are taught in German. There are
                  various standardized German language tests that students can
                  obtain such as:
                  <ul>
                    <li>TestDaf or Deutsch als Fremdsprache.</li>
                    <li>
                      Most German medical universities need a Level 4 in all
                      TestDaf sections.
                    </li>
                    <li>
                      Other German proficiency tests accepted at German medical
                      colleges are Deutsche Sprachprufung fur den
                      Hochschulzugang (DSH), Geothe Certificate, Kleines
                      Deutsches Sprachdiplom (KDS), Großes Deutsches
                      Sprachdiplom (GDS)
                    </li>
                  </ul>
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  They need additional examination tests as some German medical
                  colleges may also need that the students may undergo certain
                  examination tests in order to precisely evaluate their
                  strengthen point at particular study areas and their
                  suitability for their MBBS course.
                </li>
                <li>
                  <img src="assets/right-direction.png" alt="Right Direction" />{" "}
                  They then fill the application form available at the website
                  of their chosen university
                </li>
              </ul>
            </div>

            <div id="2">
              <h3 className="blog__post__title">Conclusion</h3>
              <p className="blog__post__desc">
                German medical universities provide MBBS education at no tuition
                fees but there are still some administrative fees that students
                need to pay. The{" "}
                <Link to="/mbbs-admission-in-germany-for-indian-students">
                  admission procedure to study MBBS in Germany
                </Link>{" "}
                is quite hard as compared to other countries because of the
                requirement of German language proficiency certificate. The
                students can learn German language from New-Lyf which enables
                the students to{" "}
                <Link to="/learn-german-language-course-in-bangalore">learn German language at affordable cost</Link>.
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

export default StudyMBBSinGerman
