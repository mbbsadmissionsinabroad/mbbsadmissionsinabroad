import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DocumentMeta from "react-document-meta";

function OdessaNationalMedicalUniversity() {
  const meta = {
    title: "Odessa National Medical University - MBBS Admission in Ukraine for Indian Students",
    description:
      "Odessa National Medical University, MBBS Admission in Ukraine for Indian Students. The medical university has well-equipped laboratories, excellent research programs which actively focus on educational and scientific progress.",
    canonical:
      "https://www.mbbsadmissionsinabroad.com/odessa-national-medical-university-ukraine",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Odessa National Medical University"
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
      <div>
        <div className="service__bg">
          <h1 className="service__title">
          Odessa National Medical University Ukraine
          </h1>
        </div>
        <Container>
          <div className="blog__post__img">
            <img
              src="assets/images/blog-banners/odessa_medical_university.png"
              alt="Odessa National Medical University Ukraine"
            />
          </div>
        </Container>
        <section className="blog__post">
          <Container>
            {/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
            <div id="1">
              <p className="blog__post__desc">
                Odessa National Maritime Medical University was started as the medical facility of Novorossiysk University in Odessa. Quickly, this facility was regarded as the most admired and well-equipped medical institution. However, this affluent establishment could not see many days of glory and was briefly shut down during the time of war. Gradually, once the war subsided and the new education system was brought into effect; the institution started gaining fame in the fraternity of medicine and was groomed as an independent institution.
              </p>
              <p className="blog__post__desc">
                As an independent medical institution, Odessa Medical Institution became a prominent institution. Post-independence, <Link to="/odessa-national-medical-university-ukraine">Odessa National Medical University</Link> was honored with the 4th level of accreditation by the Ukrainian government and it is officially the largest university of medicine situated in Europe.
              </p>
              <p className="blog__post__desc">
                Currently, by the efforts of the eminent faculty and contributing members of the medical fraternity of Ukraine, Odessa National Maritime University is one of the leading universities of Ukraine. Under the methodological teaching and updated curriculum, Odessa National Maritime University is well accepted and recognized across the European and American continent.
              </p>
              <p className="blog__post__desc">
                Every year almost 6000 plus students graduate from 58 different facilities and accomplish their dreams of becoming successful doctors by studying <Link to="/mbbs-in-ukraine">MBBS in Ukraine</Link>. Studying <Link to="/odessa-national-medical-university-ukraine">MBBS at Odessa National Medical University</Link> is economical as the university fee structure for <Link to="/">MBBS admission</Link> and accommodation is quite affordable. The registered students can choose the language for coaching from English, Russian, and other Ukrainian languages. Indian students can take advantage of the English language and pursue their MBBS course in Ukraine as ONMU is the first medical university in Ukraine that started medical education in English medium
              </p>
              <p className="blog__post__desc">
                In the year 2005, Odessa National Maritime Medical University received an award for the development of modern model teaching in English medium for the Ministry of Education and Science of Ukraine. ONMU has a tie-up with the European and International Association of universities which leads to the restructuring of medical education in the country.
              </p>
              <p className="blog__post__desc">
                Odessa National Maritime University was the first medical university to gain a national rating in Ukraine. ONMU is a government university with a combination of world-known scientists, founders of scientific medical schools, Noble prize winner, Director of Institute of Experimental Immunology, etc.
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

export default OdessaNationalMedicalUniversity