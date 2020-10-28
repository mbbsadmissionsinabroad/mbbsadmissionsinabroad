import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
// import Blog from "../pages/blogs/Blog";
// import FooterRoute from "./FooterRoutes";

function Footer() {
  return (
    <div>
      <section className="footer">
        <Container fluid>
          <Row>
            <Col md={3}>
              <h3>Address (Bangalore)</h3>
              <p>
                404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan
                Nagar, Bengaluru – 560043
              </p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i> +91 (934)
                166-6667
              </p>
            </Col>
            <Col md={3}>
              <h3>Address (Mumbai)</h3>
              <p>
                15,A/1, Supariwala Bldg, Ground floor, Prasad Chambers Compound,
                Opera House, Next to Roxy Cinema, Mumbai - 400 004
              </p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i> +91 (934)
                166-6667
              </p>
            </Col>
            <Col md={3}>
              <h3>Address (Patna)</h3>
              <p>
                3rd floor, Sumitra arcade, Ashiyana digha road ,Patna 800014
              </p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i> +91 (934)
                166-6667
              </p>
            </Col>
            <Col md={3}>
              <h3>Address (Bhopal)</h3>
              <p>
                #AF-1, Block-1, Plot-16, Amar Stamph, Zone-1, M.P.Nagar,
                Bhopal(M.P) 462011
              </p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i> +91 (799)
                940-7776
              </p>
            </Col>
            <Col md={3}>
              <h3>Study In Abroad</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/blog">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i> Blog
                  </Link>
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h3>Study In Abroad</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/blog">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i> Blog
                  </Link>
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h3>Study In Abroad</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/blog">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i> Blog
                  </Link>
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h3>Study In Abroad</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/blog">
                    <i class="fa fa-stethoscope" aria-hidden="true"></i> Blog
                  </Link>
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
                <li>
                  <i class="fa fa-stethoscope" aria-hidden="true"></i> MBBS In
                  Russia
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="sitemap__footer">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <p>Sitemap</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Footer;
