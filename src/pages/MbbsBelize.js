import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import BelizeForm from "../components/ContactForm/BelizeForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsBelize() {
	const [modalShow, setModalShow] = React.useState(false);
	
	const meta = {
    title: 'MBBS in Belize Central America - MBBS Admission in Belize for Indian Students',
    description: 'Study MBBS in Belize Central America from Top Medical Universities. New-Lyf provides all guidance & assistance to Indian Students for Admission in Belize Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-belize/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Belize'
      }
    }
	};
	

  return (
		<DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS In Belize</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-belize.png"
          alt="Study In Belize"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
            Belize is a country famous for affordable and quality medical
            education. Pursuing MBBS in Belize universities is truly a rewarding
            investment of time, finance and career acquisition. Belize is well
            known for the best medical universities. <br /> <br />
            MBBS in Belize has obtained an incredible position in the world
            because of high educational standards with modern teaching
            techniques and well-established infrastructure. Each Belize Medical
            University is recognized by the world’s major organizations such as
            WHO (World Health Organization) and MCI (Medical Council of India).
            <br /> <br />
            MBBS graduates can do a licensing exam conducted in the USA which is
            USMLE (the United States Medical Licensing Examination) and easily
            get admission into residency program/postgraduate training in the
            United States. Belize is the only Central American nation where
            everyone communicates in English. Belize MBBS College fees would
            range anywhere between 20-25 Lakhs.
          </p>
          <ul className="hyperlink">
            <li>
              <img src="/assets/icon.png" alt="Left Arrow" /> Index
            </li>
            <li>
              <a href="#about_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> About MBBS in Belize
              </a>
            </li>
            <li>
              <a href="#why_mbbs_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Why MBBS in Belize?
              </a>
            </li>
            <li>
              <a href="#benefits_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Benefits of MBBS in Belize
              </a>
            </li>
            <li>
              <a href="#university_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Belize Top
                Universities
              </a>
            </li>
            <li>
              <a href="#requirements_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Requirements for MBBS
                Admission in Belize
              </a>
            </li>
            <li>
              <a href="#advice_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Belize Advice for
                Indians
              </a>
            </li>
            <li>
              <a href="#pros_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Pros & Cons for MBBS in
                Belize
              </a>
            </li>
            <li>
              <a href="#visa_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> Visa Procedure for MBBS in
                Belize
              </a>
            </li>
            <li>
              <a href="#faq_sec">
                <img src="/assets/icon.png" alt="Left Arrow" /> MBBS in Armenia FAQ
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
          <h2 className="service__sub__title">About Belize</h2>
          <p className="service__info">
            Belize is absolutely fascinating country situated in Central America
            and bordered to the north by Mexico, to the south and west by
            Guatemala and to the east by the Caribbean Sea. Belize is a
            democratic, English and Spanish speaking country. It is a diverse
            country with several cultures and languages.
            <br />
            One of the nicest things about Belize is the weather as it has a
            tropical climate that comprises rainy and dry season. The dry
            seasons are January to May and rainy seasons are June to November.
            The average yearly temperature is 84° F (29°C) which is always warm
            and comfortable. The temperature in winter in Belize rarely falls
            below 60°F (16°C) and temperature in summer in Belize is around 86°F
            (30°C).
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h3 className="service__sub__title">Why MBBS Study in Belize</h3>
          <p className="service__info">
            Most Indian students have a dream of studying MBBS abroad so the
            Indian students can choose Belize for seeking MBBS because of the
            following reasons:
            <ul>
              <li>
                Belize provides a golden opportunity to study MBBS in Central
                American counties.
              </li>
              <li>
                Belize is a preferred destination for medical studies due to
                easy admission procedure and no entrance test at the majority of
                Belize medical universities.
              </li>
              <li>
                Belize has a US-based syllabus in the MBBS course and the medium
                of coaching is English.
              </li>
              <li>
                The fee structure for taking MBBS admission in Belize is
                affordable.
              </li>
              <li>
                Advanced teaching techniques and scientific approaches with
                outstanding facilities equipped with the well-established
                infrastructure
              </li>
              <li>
                The MBBS degree acquired from any medical colleges in Belize is
                valid and these degrees are approved by the Medical Council of
                India.
              </li>
              <li>
                The students can easily get a job in India and even around the
                world after completing MBBS in Belize from any medical college.
              </li>
              <li>
                The classrooms of Belize MBBS colleges are practically oriented
                which increases the interests of the students in the subject.
              </li>
              <li>
                The MBBS fees structure of each Belize MBBS College is less than
                Indian Medical Colleges.
              </li>
            </ul>
          </p>
        </div>
        <div id="benefits_sec">
          <h4 className="service__sub__title">
            Benefits of Studying MBBS in Belize
          </h4>
          <p className="service__info">
            <ul>
              <li>
                There is no requirement to appear for the entrance test in
                Belize Medical University.
              </li>
              <li>
                Each Belize MBBS College and the university are recognized by
                the MCI and WHO.
              </li>
              <li>
                There is no requirement to pay the capitalization fee in Belize
                MBBS Colleges.
              </li>
              <li>
                The students who study MBBS in Belize would have a wide exposure
                to clinical practice.
              </li>
              <li>
                The cost of living and the tuition fee of Belize MBBS Colleges
                is quite low and affordable for Indian students.
              </li>
              <li>
                The MBBS colleges in Belize follow the medium of the English
                language.
              </li>
              <li>
                Excellent hostel accommodations provided by the university.
              </li>
              <li>
                The MBBS degree provided by Belize MBBS colleges is renowned
                globally and has great value.
              </li>
              <li>
                The students have the opportunity to work in government
                hospitals after completing their course of MBBS in Belize.
              </li>
            </ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
            Top Universities for MBBS in Belize Central America
          </h5>
          <p className="service__info">
            <ul>
              <li>Central America Health Sciences University</li>
              <li>Columbus Central University School of Medicine</li>
              <li>Washington University of Health & Science</li>
            </ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
            Requirements for MBBS Admission in Belize 2020-2021
          </h6>
          <p className="service__info">
            Belize is one of the most preferred destinations for Indian students
            to study MBBS in Belize but they need to fulfill some requirements
            such as:
            <ul>
              <li>
                The students should have aggregate 50% marks in physics,
                chemistry, and biology in the 12th standard.
              </li>
              <li>
                The students should have English subject in their higher
                secondary.
              </li>
              <li>
                The students should be at least 17 years of age on or before
                31st December of the admission year.
              </li>
              <li>
                The students need to qualify for the NEET entrance examination
                conducted by the (NTA) National Testing Agency.
              </li>
              <li>The students must not be more than 25 years of age.</li>
            </ul>
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
            Visa Procedure for MBBS in Belize
          </h6>
          <p className="service__info">
            The students who want to study MBBS in Belize need a student visa.
            Therefore, the required documents for getting the Belize Student’s
            Visa are as follows:
            <ul>
              <li>Original and photocopies of Passport.</li>
              <li>
                Original and one photocopy of mark sheets of both 10th & 12th
                standard.
              </li>
              <li>Leaving certificate from the previous studying college.</li>
              <li>A medical checkup certificate is also essential</li>
              <li>Passport size photographs</li>
              <li>
                Birth certificate and other mandatory certificates must be
                submitted to the concerned authority.
              </li>
              <li>
                The students must clear the National Medical Admission Test.
              </li>
              <li>A code of conduct certificate must be submitted.</li>
              <li>
                The students must fill the online admission form with their
                accurate details
              </li>
              <li>
                A bank statement of the guardian should be submitted which
                should include the fee structure of the 1st year of the
                education.
              </li>
            </ul>
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
            MBBS in Belize Advice for Indian Students
          </h6>
          <p className="service__info">
            Following is the important information for Indian students in the
            process of studying MBBS in Belize:
            <ul>
              <li>
                MBBS admission in Belize happens generally in August to
                September.
              </li>
              <li>
                The Indian Students are advised to apply in the Belize Medical
                College within the time
              </li>
              <li>
                The students will receive a letter of acceptance and an
                acknowledgment of admission within four weeks of receiving the
                complete application file.
              </li>
              <li>VISA approval takes around 1 month to get sanctioned.</li>
            </ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
            Pro & Cons of Studying MBBS in Belize
          </h6>
          <p className="service__info">
            There are a lot of advantages and very few disadvantages to studying
            MBBS in Belize.
            <ul>
              <li>
                <b>Pro of studying in Belize</b>
                <ul>
                  <li>No Entrance test is needed to study MBBS in Belize</li>
                  <li>No requirement of capitalization fee and donation.</li>
                  <li>
                    Each Belize MBBS College is recognized by the MCI (medical
                    council of India).
                  </li>
                  <li>
                    Huge range of opportunities and great exposure to clinical
                    practice because of highly equipped multi-profile hospitals.
                  </li>
                  <li>
                    The tuition fee is quite low and affordable in Belize
                    Medical University.
                  </li>
                  <li>
                    The cost of living for Indian students is quite low too.
                  </li>
                  <li>
                    The coaching of MBBS in Belize is conducted in the English
                    language.
                  </li>
                  <li>
                    Belize MBBS colleges offer great academics as well as
                    sports.
                  </li>
                  <li>
                    The MBBS degree that Indian students receive from Belize
                    colleges is globally renowned.
                  </li>
                  <li>
                    Government hospitals in Belize provide practical training to
                    medical students.
                  </li>
                </ul>
              </li>
              <li>
                <b>Cons of studying in Belize</b>
                <ul>
                  <li>
                    The students must be careful while choosing the right
                    education consultancy.
                  </li>
                  <li>
                    The climate conditions in Belize often become problematic
                    for some students to adjust well.
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
          <h6 className="service__sub__title">MBBS in Belize FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Belize good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p className="service__info">
                    Yes, pursuing MBBS in Belize universities is truly a
                    rewarding investment of time, finance and career
                    acquisition. Belize is a nation that is well known for
                    quality and affordable medical education. Moreover, Belize
                    has one of the best Medical Universities.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">
                  How much does cost MBBS in Belize?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p className="service__info">
                    It would range anywhere between 20-25 Lakhs.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">
                  Is NEET required for MBBS in Belize?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p className="service__info">
                    The students need to qualify for the NEET exam conducted by
                    the National Testing Agency.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">
                  How many years in MBBS in Belize?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p className="service__info">
                    The total duration of the MBBS in Belize is 5 years.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">
                  Which is the best MBBS College in Belize for Indian Students?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <p className="service__info">
                    Almost every college in Belize provides the best education
                    to Indian students. The best MBBS College in Belize for
                    Indian Students is the Central America Health Sciences
                    University (CAHSU).
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">
                  What are the career options for an Indian student doing an
                  MBBS in Belize?
                </b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <p className="service__info">
                    The career options for an Indian student doing an MBBS in
                    Belize are:
                    <ul>
                      <li>
                        Medical Degrees get from Belize MBBS Colleges or
                        Universities have worldwide recognition.
                      </li>
                      <li>
                        Practice as a doctor in your own country after
                        completing the legal procedure.
                      </li>
                      <li>
                        MBBS graduates can do licensing exam conducted in the
                        USA which is USMLE (the United States Medical Licensing
                        Examination)
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
          Apply To MBBS Universities In Central America Belize
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BelizeForm/>
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

export default MbbsBelize;
