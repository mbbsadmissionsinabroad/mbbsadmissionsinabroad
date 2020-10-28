import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
// import Blog from "../pages/blogs/Blog";
// import FooterRoute from "./FooterRoutes";

function Footer() {
  return (
    <div>
      <Router>
          <section className="footer">
            <Container fluid>
              <Row>
                <Col md={3}>
                  <h3>Study In Abroad</h3>
                  <ul className="footer__links">
                    <li><a href="/mbbs-in-russia"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Russia </a></li>
                    <li><a href="/mbbs-in-ukraine"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Ukraine</a></li>
                    <li><a href="/mbbs-in-armenia"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Armenia</a></li>
                    <li><a href="/mbbs-in-belize"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Central America Belize</a></li>
                    <li><a href="/mbbs-in-france"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In France</a></li>
                    <li><a href="/mbbs-in-georgia"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Georgia</a></li>
                    <li><a href="/mbbs-in-kazakhstan"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Kazakhstan</a></li>
                    <li><a href="/mbbs-in-kyrgyzstan"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Kyrgystan</a></li>
                  </ul>
                </Col>
                <Col md={3}>
                  <h3>Study In Abroad</h3>
                  <ul className="footer__links">
                    <li><a href="/mbbs-in-philippines"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Philippines</a></li>
                    <li><a href="/mbbs-admission-in-germany-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Germany</a></li>
                    <li><a href="/mbbs-admission-in-europe-from-mci-approved-university"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Europe</a></li>
                    <li><a href="/mbbs-admission-in-finland-from-mci-approved-universities"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Finland</a></li>
                    <li><a href="/mbbs-admission-in-sweden-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Sweden</a></li>
                    <li><a href="/mbbs-admission-in-netherlands-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Netherlands</a></li>
                    <li><a href="/mbbs-admission-in-denmark-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Denmark</a></li>
                  </ul>

                </Col>
                <Col md={3}>
                  <h3>Study In Abroad</h3>
                  <ul className="footer__links">
                    <li><a href="/mbbs-admission-in-norway-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Norway</a></li>
                    <li><a href="/mbbs-admission-in-austria-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Austria</a></li>
                    <li><a href="/mbbs-admission-in-poland-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Poland</a></li>
                    <li><a href="/mbbs-admission-in-lithuania"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Lithuania</a></li>
                    <li><a href="/mbbs-admission-in-bulgaria-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Bulgaria</a></li>
                    <li><a href="/mbbs-admission-in-nepal-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Nepal</a></li>
                    <li><a href="/mbbs-admission-in-bangladesh-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In Bangaldesh</a></li>
                  </ul>

                </Col>
                <Col md={3}>
                  <h3>Study In Abroad</h3>
                  <ul className="footer__links">
                    <li><a href="/medical-pg-in-germany"><i class="fa fa-stethoscope" aria-hidden="true"></i> Medical PG In Germany</a></li>
                    <li><a href="/medical-pg-in-europe-for-indian-students"><i class="fa fa-stethoscope" aria-hidden="true"></i> Medical PG In Europe</a></li>
                    <li><a href="/nursing-job-in-germany"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nursing Job In Germany </a></li>
                    <li><a href="/nursing-jobs-in-netherlands"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nursing Job In Netherlands</a></li>
                    <li><a href="/nursing-jobs-in-denmark"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nursing Job In Denmark</a></li>
                    <li><a href="/nursing-jobs-in-lithuania"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nursing Job In Lithuania</a></li>
                    <li><a href="/nursing-jobs-in-canada"><i class="fa fa-stethoscope" aria-hidden="true"></i> Nursing Jobs In Canada</a></li>
                    <li><a href="/learn-german-language-course-in-bangalore"><i class="fa fa-stethoscope" aria-hidden="true"></i> Learn German Language In Bangalore</a></li>
                  </ul>

                </Col>
              </Row>
            </Container>
          </section>
          <section className="sitemap__footer">
            <Container fluid>
              <Row>
                <Col md={4} xs={12}>
                  <p><a href="/blog">Blog</a></p>
                </Col>
                <Col md={4} xs={12}>
                  <p><a href="/gallery">Gallery</a></p>
                </Col>
                <Col md={4} xs={12}>
                  <p>Sitemap</p>
                </Col>
              </Row>
            </Container>
          </section>
      </Router>
    </div>
  );
}

export default Footer;
