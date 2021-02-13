import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from "react-document-meta";
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import FranceForm from "../components/ContactForm/FranceForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsFrance() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: "MBBS in France - MBBS Admission in France for Indian Students",
    description:
      "Study MBBS in France from Top Medical Universities. Destinex provides all guidance & assistance to Indian Students for Admission in France Medical College.",
    canonical: "https://www.mbbsadmissionsinabroad.com/mbbs-in-france/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "MBBS in France",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <section>
        <div className="service__bg">
          <h1 className="service__title">MBBS In France</h1>
        </div>
        <div>
          <img
            className="service__image"
            src="/assets/images/service-image/study-mbbs-france.png"
            alt="Study In France"
          />
        </div>
        <Container>
          <div>
            <p className="service__info">
              France has become the leading center of medical education.
              Pursuing MBBS in France is a golden opportunity for Indian
              students because of world-class faculty and exposure to foreign
              academics. France is one of the demanded destinations by most
              students for studying MBBS.
              <br />
              <br />
              It consists of some of the best top hundred ranked Medical
              colleges and Universities that provide the guarantee admission and
              quality education with complete transparency. France has always
              been a cost-effective and convenient place for pursuing MBBS.
              France MBBS College fees would range anywhere between 50-53 Lakhs.
              <br />
              <br />
              France Medical University offers a standard medical program,
              covers wide concepts, a vivid technique, best infrastructure, and
              a globally recognized degree. All MBBS Universities in France are
              approved by MCI (Medical Council of India) and WHO (World Health
              Organization).
            </p>
            <ul className="hyperlink">
              <li>
                <img src="/assets/icon.png" alt="Left Arrow" /> Index
              </li>
              <li>
                <a href="#about_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> About MBBS in France
                </a>
              </li>
              <li>
                <a href="#why_mbbs_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in France?
                </a>
              </li>
              <li>
                <a href="#benefits_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Benefits of MBBS in
                  France
                </a>
              </li>
              <li>
                <a href="#university_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in France Top
                  Universities
                </a>
              </li>
              <li>
                <a href="#requirements_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS
                  Admission in France
                </a>
              </li>
              <li>
                <a href="#advice_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in France Advice for
                  Indians
                </a>
              </li>
              <li>
                <a href="#pros_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in
                  France
                </a>
              </li>
              <li>
                <a href="#visa_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS
                  in France
                </a>
              </li>
              <li>
                <a href="#faq_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in France FAQ
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

          <div id="about_sec">
            <h2 className="service__sub__title">About France</h2>
            <p className="service__info">
              France is one of the largest and beautiful countries in Europe. It
              is bordered by 6 countries such as Germany, Belgium, and
              Luxembourg to the northeast, Switzerland, and Italy to the
              southeast and Spain to the southwest. Most people enjoy visiting
              this diverse country because of its natural beauty, amazing
              climate, art museums, galleries and much more. An average winter
              temperatures in France range from 32° F to 46° F & summer
              temperatures in France range from 61° F to 75° F.
            </p>
          </div>
          <div id="why_mbbs_sec">
            <h3 className="service__sub__title">Why MBBS Study in France</h3>
            <p className="service__info">
              France consists of world-class Medical Universities and
              infrastructure that provides the best education of the MBBS
              course. There are numerous reasons to study MBBS in France which
              are as follows:
              <ul>
                <li>
                  MCI (Medical Council of India) and WHO (World Health
                  Organization) approved medical universities/colleges in
                  France.
                </li>
                <li>
                  The procedure of taking MBBS admission in France is very
                  simple and smooth.
                </li>
                <li>
                  The duration of the MBBS course in France is 8-10 years.
                </li>
                <li>
                  Travel to France is much easier than traveling to other
                  countries.
                </li>
                <li>
                  There are separate classes for Indian students in English who
                  seek MBBS in France.
                </li>
                <li>
                  Modern teaching methods such as a digital class with
                  outstanding facilities equipped with world-class
                  infrastructure.
                </li>
                <li>
                  More than 1500 Indian students are already studying in top
                  France Universities.
                </li>
                <li>
                  No requirement for donation or capitation fees to study MBBS
                  in France.
                </li>
                <li>
                  The cost of living is economical with high quality of life.
                </li>
                <li>
                  France is highly safe and secure for Indian students and the
                  environment is also safe.
                </li>
              </ul>
            </p>
          </div>
          <div id="benefits_sec">
            <h4 className="service__sub__title">
              Benefits of MBBS in France for Indian Students 2020
            </h4>
            <p className="service__info">
              France is a well-renowned study destination for future doctors in
              the world. There are several benefits for studying MBBS in France
              which are as follows:
              <ul>
                <li>
                  Each France medical university is listed with MCI and WHO with
                  world-class infrastructure and faculty.
                </li>
                <li>
                  There is an affordable fee structure for taking MBBS admission
                  in France and scholarships are also offered to the Indian
                  students.
                </li>
                <li>
                  A medical program provided by France to its students is a
                  globally recognized degree.
                </li>
                <li>
                  Pursuing MBBS in France gives exposure to students because
                  highly advanced medical hospitals associated with France
                  medical universities that provide practical knowledge.
                </li>
                <li>
                  The separate batches are conducted in English for Indian
                  students.
                </li>
                <li>
                  France medical university offers multiple job opportunities
                  and the best thing about France universities is their culture,
                  acceptance, and exposure to medical knowledge.
                </li>
              </ul>
            </p>
          </div>
          <div id="university_sec">
            <h5 className="service__sub__title">
              Top Universities for MBBS in France
            </h5>
            <p className="service__info">
              <ul>
                <li>University of Catholique De Lille, France</li>
                <li>University of Paris Sud</li>
                <li>Sorbbone Univerity</li>
                <li>University of Aix Marseille</li>
                <li>University De Lyon</li>
                <li>PSL Research University Paris</li>
                <li>University De Lorraine</li>
              </ul>
            </p>
          </div>
          <div id="requirements_sec">
            <h6 className="service__sub__title">
              Requirements for MBBS Admission in France 2020-2021
            </h6>
            <p className="service__info">
              The Indian students should fulfill some essential requirements for
              taking MBBS Admission in France which are as follows:
              <ul>
                <li>
                  The minimum age of the students for taking MBBS admission in
                  France should be 17 years.
                </li>
                <li>
                  The students should score a minimum of 50% marks in their 12th
                  examinations in physics, chemistry, and biology.
                </li>
                <li>
                  The students must have an English subject in their higher
                  secondary.
                </li>
                <li>
                  Indian students should qualify for the NEET examination with
                  good scores.
                </li>
                <li>
                  Students have to show an eligibility certificate approved by
                  the Medical council of the nation.
                </li>
                <li>
                  The students have to clear the English proficiency test to
                  study MBBS in France.
                </li>
              </ul>
            </p>
          </div>
          <div id="visa_sec">
            <h6 className="service__sub__title">
              Visa Procedure for MBBS in France
            </h6>
            <p className="service__info">
              Several documents needed for a student visa in France are as
              follows:
              <ul>
                <li>Original Passport and its photocopies.</li>
                <li>
                  Original and one photocopy of mark sheets of both 10th & 12th
                  standard
                </li>
                <li>
                  Migration Certificate from the previous studying college.
                </li>
                <li>
                  Eligibility Certificate issued by Medical must be submitted
                </li>
                <li>
                  Birth certificate must be submitted to the concerned
                  authority.
                </li>
                <li>NEET scorecard of the student.</li>
                <li>Evidence of enrollment in France medical university.</li>
                <li>
                  Copy of financials that shows sufficient funds to pay the
                  France MBBS College fees
                </li>
              </ul>
            </p>
          </div>
          <div id="advice_sec">
            <h6 className="service__sub__title">
              MBBS in France Advice for Indian Students
            </h6>
            <p className="service__info">
              <ol>
                <li>
                  France Medical universities enroll students twice a year.
                  <ul>
                    <li>
                      The winter session starts from 1st February to 1st April.
                    </li>
                    <li>
                      Spring session starts from the starting of September and
                      lasts till mid of October depending upon the availability
                      of seats.
                    </li>
                  </ul>
                </li>
                <li>
                  France Medical universities inform students of their admission
                  decisions between 15th June and 15th September for programs
                  that will be started in October.
                </li>
              </ol>
            </p>
          </div>
          <div id="pros_sec">
            <h6 className="service__sub__title">
              Pros & Cons of Studying MBBS in France
            </h6>
            <p className="service__info">
              <ul>
                <li>
                  <b>Pros of studying MBBS in France:</b>
                  <ul>
                    <li>
                      The fee structure for seeking MBBS in France is low.
                    </li>
                    <li>
                      The transportation cost of pursuing MBBS in France is very
                      comforting.
                    </li>
                    <li>
                      There is no requirement to pay a donation or capitation
                      fee for pursuing MBBS admission in France.
                    </li>
                    <li>
                      Pursuing MBBS in France and the cost of living can be
                      easily affordable.
                    </li>
                    <li>
                      France provides great opportunities for Indian Students.
                      If they studied full time in France can apply for a
                      one-year work permit.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Cons of studying MBBS in France</b>
                  <ul>
                    <li>
                      The local language in France is French so the students
                      might feel the language as a barrier outside the
                      university campus. But the separate classes are conducted
                      in English medium for Indian students.
                    </li>
                    <li>
                      The students must be careful while choosing the right
                      education consultancy.
                    </li>
                  </ul>
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

          <div id="faq_sec">
            <h6 className="service__sub__title">MBBS in France FAQ</h6>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">Is MBBS in France good?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">
                      France is one of the best options to study MBBS. MBBS in
                      France has an affordable fee structure. France MBBS
                      college fee for Indian students is very less as compared
                      to other countries.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">
                    How much does cost MBBS in France?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      It would range anywhere between 50-53 Lakhs.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">
                    Is NEET required for MBBS in France?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      Indian students should qualify for the NEET examination
                      with good scores.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">
                    How many years in MBBS in France?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">
                      The course duration of seeking MBBS in France is 8 to 10
                      years.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  <b className="accordion__title">
                    Which is the best MBBS College in France for Indian
                    Students?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p className="service__info">
                      The best MBBS College in France for Indian Students is
                      University of Catholique de Lille.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                  <b className="accordion__title">
                    What are the career options for an Indian student doing an
                    MBBS in France?
                  </b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    <p className="service__info">
                      There are various career options available after studying
                      MBBS in France such as:
                      <ul>
                        <li>
                          Practice as a doctor in your own country after
                          completing the legal procedure or can practice in
                          France also.
                        </li>
                        <li>
                          Appointed as a medical counselor, educator, medical
                          professor, medical consultant, and many more.
                        </li>
                        <li>
                          Pursuing MBBS in France provide high pay and global
                          acceptance.
                        </li>
                      </ul>
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
          Apply To MBBS Universities In France
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FranceForm/>
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

export default MbbsFrance;
