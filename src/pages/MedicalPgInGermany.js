import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import DocumentMeta from "react-document-meta";
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import HomeCarousel from "../components/HomeCarousel";

function MedicalPgInGermany() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: "Medical PG in Germany | Medical PG Course Germany for Indian Students",
    description: "Medical PG in Germany. Best Medical PG Courses in Germany for Indian Students. Apply for Surgery, Pedeatrics, Gynocology, Cardiaology, Orthopedics. Call Now",
    canonical: "https://www.mbbsadmissionsinabroad.com/medical-pg-in-germany/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "Medical PG in Germany",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <section>
        <div className="service__bg">
          <h1 className="service__title">Medical PG In Germany</h1>
        </div>
        <div>
          <img className="service__image" src="/assets/images/service-image/medical-pg-germany.png" alt="Medical PG In Germany" />
        </div>
        <Container>
          <div>
            <p className="service__info">
              Germany provides a great opportunity to students for pursuing a PG course. It is one of the best places to study <Link to="/medical-pg-in-germany">PG in Germany after MBBS</Link> because no tuition fees are charged for
              postgraduate studies and medical PG education in Germany University is the most prestigious among the world’s education system. The total duration of pursuing <Link to="/medical-pg-in-germany">medical PG in Germany</Link> is
              three to four years as depend upon the specialization.
              <br />
              Germany PG University has well equipped medical facilities that help the students to enhance their professional skills. It provides the magnificent theoretical as well as practical education which empowers the candidates to
              become successful practitioners. The admission procedure in Germany medical universities is quite easy and simple. <b>Medical PG in Germany</b> is conducting in German & English, so it is essential for the students to learn
              German language.
            </p>
            <ul className="hyperlink">
              <li>
                <img src="/assets/icon.png" alt="Left Arrow" /> Index
              </li>
              <li>
                <a href="#about_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> About Germany
                </a>
              </li>
              <li>
                <a href="#courses_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Courses provided by Germany PG Universities
                </a>
              </li>
              <li>
                <a href="#info_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Essential information about PG Course in Germany
                </a>
              </li>
              <li>
                <a href="#eligibility_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Eligibility Criteria for medical PG in Germany
                </a>
              </li>
              <li>
                <a href="#requirements_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Required Documents for PG in Germany after MBBS
                </a>
              </li>
              <li>
                <a href="#why_medical_pg">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Why medical PG in Germany?
                </a>
              </li>
              <li>
                <a href="#benefits_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Benefits of pursuing PG in Germany after MBBS for Indian Students
                </a>
              </li>
              <li>
                <a href="#pros_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Pros and Cons of Studying PG in Germany after MBBS
                </a>
              </li>
              <li>
                <a href="#career_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Career Scopes after medical PG in Germany
                </a>
              </li>
              <li>
                <a href="#pg_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany
                </a>
              </li>
              <li>
                <a href="#pg1_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany - Assisting Doctor in Applying for Specialization
                </a>
              </li>
              <li>
                <a href="#pg2_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany - Assisting Doctor for Specialists
                </a>
              </li>
              <li>
                <a href="#designations_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Designations for Specialties
                </a>
              </li>
              <li>
                <a href="#qualification_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Extra Qualifications
                </a>
              </li>
              <li>
                <a href="#pg3_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany - Who can do medical continuing training?
                </a>
              </li>
              <li>
                <a href="#example_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Examples
                </a>
              </li>
              <li>
                <a href="#pg4_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany for Anesthesiology
                </a>
              </li>
              <li>
                <a href="#pg5_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany for Surgery
                </a>
              </li>
              <li>
                <a href="#pg6_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany for Internal Medicine and General Medicine
                </a>
              </li>
              <li>
                <a href="#pg7_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Medical PG in Germany for Pediatrics
                </a>
              </li>
              <li>
                <a href="#table_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Summary Table of Medical PG Specialist and Specialty Competence
                </a>
              </li>
              <li>
                <a href="#table1_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Summary Table of Medical PG Extra Qualifications
                </a>
              </li>

              <li>
                <a href="#faq_sec">
                  <img src="/assets/icon.png" alt="Left Arrow" /> FAQ about the Medical PG in Germany
                </a>
              </li>
              <li>
                <a href="#testimonials">
                  <img src="/assets/icon.png" alt="Left Arrow" /> Testimonials
                </a>
              </li>
            </ul>

            {/* POP UP Btn */}

            <Button className="popup__btn" onClick={() => setModalShow(true)}>
              Click Here To Apply
            </Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />

            {/* POP UP Btn Ends */}
          </div>

          <div id="about_sec">
            <h2 className="service__sub__title">About Germany</h2>
            <p className="service__info">
              Germany is a well versed & economically developed country which is officially known as the Federal Republic of Germany. It shares its borders with other European countries such as
              <b>Denmark, Poland, Austria, Czech Republic,</b> and many more. Germany has a very diverse & temperate climate season in the world & suitable for the students coming from the countries.
            </p>
          </div>

          <div id="courses_sec">
            <h2 className="service__sub__title">Courses provided by Germany PG Universities</h2>
            <Table responsive striped bordered hover className="service__table">
              <thead>
                <tr>
                  <th colSpan={3}>Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gynaecology and Obstetrics</td>
                  <td>Dermatology</td>
                  <td>Physiotherapy</td>
                </tr>
                <tr>
                  <td>Child Health</td>
                  <td>Clinical Research</td>
                  <td>Operation Theatre Technology</td>
                </tr>
                <tr>
                  <td>Rural Health Care</td>
                  <td>Dermatology, Venereology & Leprosy</td>
                  <td>OT Technician</td>
                </tr>
                <tr>
                  <td>Community Health Care</td>
                  <td>Medical Record Technology</td>
                  <td>Cardiac Pulmonary Perfusion</td>
                </tr>
                <tr>
                  <td>Orthopedics</td>
                  <td>Medical Imaging Technology</td>
                  <td>Anesthesiology</td>
                </tr>
                <tr>
                  <td>Ophthalmology</td>
                  <td>Medical Lab Technology</td>
                  <td>Child Health</td>
                </tr>
                <tr>
                  <td>Optometry</td>
                  <td>Hearing Language and Speech</td>
                  <td>Medical Radio-Diagnosis</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div id="info_sec">
            <h3 className="service__sub__title">Essential information about PG Course in Germany</h3>
            <p className="service__info">
              <ul>
                <li>The can apply for PG in Germany after MBBS in the month of October</li>
                <li>The classes for PG courses in Germany are in winter as well as summer season</li>
                <li>It is advisable that the Indian Students must apply in the Germany Medical College within the specified time.</li>
                <li>The students must have a very good command in German language.</li>
              </ul>
            </p>
          </div>

          <div id="eligibility_sec">
            <h4 className="service__sub__title">Eligibility Criteria for medical PG in Germany</h4>
            <p className="service__info">
              Many students prefer Germany to pursue <b>PG in Germany after MBBS</b> but they need to fulfill some requirements such as:
              <ul>
                <li>It is necessary that the students clear MCI screening test for taking admission to the PG in Germany after MBBS in India.</li>
                <li>The students should have English subject in their higher secondary.</li>
                <li>The students must have excellent command in German as well.</li>
                <li>The students should have aggregate 50% marks in their university/college degree.</li>
              </ul>
            </p>
          </div>

          <div id="requirements_sec">
            <h5 className="service__sub__title">Required Documents for PG in Germany after MBBS</h5>
            <p className="service__info">
              The students need the following documents to study <b>PG in Germany after MBBS in India:</b>
              <ul>
                <li>Original and photocopies of Passport.</li>
                <li>Original and one photocopy of mark sheets of both 10th & 12th standard.</li>
                <li>Leaving certificate from the previous studying college.</li>
                <li>A medical checkup certificate is also essential</li>
                <li>Passport size photographs</li>
                <li>Birth certificate and other mandatory certificates must be submitted to the concerned authority.</li>
                <li>A code of conduct certificate must be submitted.</li>
                <li>The students must fill the online admission form with their accurate details</li>
                <li>A bank statement of the guardian should be submitted.</li>
                <li>Offer letter from the Germany PG university</li>
                <li>MBBS course degree certificate</li>
              </ul>
            </p>
          </div>

          <div id="why_medical_pg">
            <h6 className="service__sub__title">Why medical PG in Germany?</h6>
            <p className="service__info">
              Most of the students wish to take <b>admission in Germany PG university</b> because of the following reasons:
              <ul>
                <li>The medical education system in German is considered one of the finest in the world.</li>
                <li>
                  Each <b>Germany medical college</b> are mostly acknowledged and recognized by the Medical Council of India (MCI)
                </li>
                <li>Germany is one of the leading countries that specialize in highly advanced medical care.</li>
                <li>The hospitals associated with the Germany medical college provide the best quality health care and utilize the latest medical technologies and instruments.</li>
                <li>Germany medical college integrates theoretical and practical learning in such a way that students are taught in the most effective way possible.</li>
                <li>The medium of instruction in Germany Medical Universities is English and Germany.</li>
                <li>
                  After completion of <b>medical PG in Germany</b>, the students can practice and settle in Germany as they will be eligible for the Permanent Residence in Germany.
                </li>
                <li>
                  Germany offers a great opportunity for students to study <b>PG in Germany after MBBS in India</b> at no tuition fee.
                </li>
                <li>
                  The <b>medical PG in Germany</b> provided in the Germany medical universities provides the students a robust training and practical knowledge.
                </li>
                <li>The rigorous training provided in Germany medical universities will equip the students with high-quality experience and knowledge.</li>
              </ul>
            </p>
          </div>

          <div id="benefits_sec">
            <h6 className="service__sub__title">Benefits of pursuing PG in Germany after MBBS for Indian Students</h6>
            <p className="service__info">
              <ul>
                <li>Germany is well-known to have a world-class healthcare system that enables the students to have the opportunity of training in modern infrastructure with advanced equipment.</li>
                <li>Medical PG in Germany is available at no tuition fee which means the cost of education is next to zero.</li>
                <li>PG in Germany after MBBS includes on-the-job training in which the hospital sanctions an approval for the students to conduct medical operations.</li>
                <li>Germany medical universities also offer students with a monthly stipend that can be up to 4500 Euros per month.</li>
                <li>After the completion of training of medical PG in Germany, the students will be awarded the title of a Facharzt (specialist or a consultant).</li>
                <li>The cost of living is very affordable during PG course in Germany. They can also practice in Germany as well</li>
                <li>PG universities in Germany provide hostel facilities with Indian food</li>
                <li>The students can roam around the city and discover new places</li>
              </ul>
            </p>
          </div>

          <div id="pros_sec">
            <h6 className="service__sub__title">Pros and Cons of Studying PG in Germany after MBBS</h6>
            <p className="service__info">
              The degree that students obtain from Germany medical university is globally renowned and holds great worth. The Indian students that take admission in best colleges/universities in Germany are recognized by the MCI. The
              students become eligible for working in government hospitals after completing <b>medical PG in Germany</b>
              .<br />
              <br />
              The climate conditions in Germany is cold most of the time most of the time that might be hard for students to adapt. The local language in Germany is German so the students might feel the language as a barrier outside the
              university campus. But the coaching in Germany Medical College is conducted in English as well as in German.
            </p>
          </div>

          <div id="career_sec">
            <h6 className="service__sub__title">Career Scopes after medical PG in Germany</h6>
            <p className="service__info">
              The students will have better career scopes after <b>medical PG in Germany</b> as given-below:
              <ul>
                <li>The students can become a specialist doctor as per their preference.</li>
                <li>After completing PG course from Germany, they have the opportunities to work at any hospitals in Germany as well as in India.</li>
                <li>The students can also set up their in India and in Germany too.</li>
              </ul>
              <ol>
                <li>Assisting Doctor in applying for Specialization Position in Germany.</li>
                <li>Assisting the Doctor to get the Practising Licence.</li>
                <li>Work Permit.</li>
                <li>6 Months Accommodation.</li>
                <li>Preparatory Course.</li>
                <li>German per Doctors Course.</li>
                <li>Internship in a Hospital If Candidate Is Fresher.</li>
                <li>Course for Equalizing our Degree with German Degree.</li>
                <li>Visa Assistance in India.</li>
                <li>B2 Language in Germany</li>
              </ol>
            </p>
          </div>

          <div id="pg_sec">
            <h6 className="service__sub__title">Medical PG in Germany</h6>
            <p className="service__info">
              Basic medical training in Germany leads to graduation with a Medical License. This medical training lasts six years and is done at medical universities. The final year of studies includes 48 weeks of continuous practical
              training (Practical Year). The first stage of medical continuing training begins with the process of qualifying as a Specialist.
              <br />
              <br />
              Building on this foundation, further medical qualifications can be gained through specialization in one or more Specialties or by completing an Extra Qualification course in addition to the regular and continuing training.
              Candidates can engage in continuing medical training in Germany after they have gained their Medical License.
            </p>
          </div>

          <div id="pg1_sec">
            <h6 className="service__sub__title">Medical PG in Germany - Assisting Doctor in Applying for Specialization</h6>
            <p className="service__info">
              The qualification (title or designation) gained through continuing training serves as proof of the acquired competence. The award of the title Specialist, Specialty and/or Extra Qualification is subject to the conditions as
              defined.
              <br />
              <br />
              <b>Notes:</b> There is no obligation to engage in continuing training for a Speciality or an Extra Qualification. When choosing the medical university at which the continuing training will be offered, please note that not all
              the Consultants hold the teaching qualifications required for providing advanced continuing training in each of the Specialities, especially at smaller municipal hospitals.
            </p>
          </div>

          <div id="pg2_sec">
            <h6 className="service__sub__title">Medical PG in Germany - Assisting Doctor for Specialists</h6>
            <p className="service__info">
              Candidates who complete their continuing training as a Specialist in accordance with the prescribed continuing training syllabuses and periods and are able to document the disciplinary competence required for this by passing
              an examination will be awarded the title of Specialist.
            </p>
          </div>

          <div id="designations_sec">
            <h6 className="service__sub__title">Designations for Specialties</h6>
            <p className="service__info">
              Candidates who complete their continuing training in a Specialty in accordance with the prescribed continuing training syllabuses and periods and are able to document the disciplinary competence then hold the qualifications
              required for this Speciality.
            </p>
          </div>

          <div id="qualification_sec">
            <h6 className="service__sub__title">Extra Qualifications</h6>
            <p className="service__info">
              Candidates who gain Extra Qualifications in accordance with the prescribed training syllabuses and periods and are able to document that they have the disciplinary competence required for this by passing an examination will be
              awarded a Extra Qualification.
            </p>
          </div>

          <div id="pg3_sec">
            <h6 className="service__sub__title">Medical PG in Germany - Who can do medical continuing training?</h6>
            <p className="service__info">
              The Medical License to Practice Medicine is an absolutely indispensable requirement for admission to medical continuing training in Germany. Doctors who hold a basic medical degree awarded in countries outside the European
              Union (EU), the European Economic Area (EEA) or Switzerland, may, under certain circumstances, practice medicine in Germany.
              <br />
              <br />
              However, they must prove that they have completed their medical training as a doctor or are entitled to practice medicine in their respective home country. Foreign doctors (for example, scholarship holders) can be admitted to
              practice medicine if they wish to engage in continuing medical training or in-service training in Germany within the scope of scholarship programs financed from the Federal Budget – as is the case for the DAAD.
              <br />
              <br />
              The specified course lengths for continuing medical training as cited in this document are minimum requirements that may change from case to case if the continuing training syllabuses cannot be acquired within the minimum
              allowed time. The tables below only serve as a general overview of the continuing training periods in the various fields, Specialities, and Extra Qualifications. <br />
              <br />
              As mentioned above, continuing training as a Specialist on in a Speciality can be followed up in many fields of medicine. There is no obligation to engage in any of the latter courses or in any extra qualification courses.
            </p>
          </div>

          <div id="example_sec">
            <h6 className="service__sub__title">Examples</h6>
            <p className="service__info">
              The following examples aim to explain the summary table Specialist and Speciality Competence. They specify the minimum time needed for four different Specialist qualifications.
              <br />
              At the end of each Specialist, Specialty or Extra Qualification course, the trained doctor must document the required disciplinary competencies by passing an examination in order to gain the relevant title: Specialist,
              Speciality or Extra Qualification.
            </p>
          </div>

          <div id="pg4_sec">
            <h6 className="service__sub__title">Medical PG in Germany for Anesthesiology</h6>
            <p className="service__info">A doctor must complete at least 60 months (5 years) of continuing medical training to qualify as an Anesthetist.</p>
          </div>

          <div id="pg5_sec">
            <h6 className="service__sub__title">Medical PG in Germany for Surgery</h6>
            <p className="service__info">
              To gain the specialist competencies listed in the table for the field of “Surgery”, a doctor must initially complete at least 24 months (2 years) of basic continuing training. This is then followed by specialist continuing
              surgical training in the desired field.
              <br />
              <br />
              The choice of specialist competencies in the field of surgery are: General Surgery; Vascular Surgery; Cardiac Surgery; Pediatric Surgery; Orthopedics and Trauma Surgery; Plastic and Aesthetic Surgery; Thorax Surgery and
              Visceral Surgery.
              <br />
              <br />
              In other words: A doctor wishing to gain qualification as a Specialist in the field of thorax surgery must, for example, complete at least 24 months of basic continuing training plus at least 48 months of subsequent specialist
              continuing training in thorax surgery. This means 24 months + 48 months = a minimum of at least 72 months (6 years).
            </p>
          </div>

          <div id="pg6_sec">
            <h6 className="service__sub__title">Medical PG in Germany for Internal Medicine and General Medicine</h6>
            <p className="service__info">
              <ul>
                <li>Continuing training in the fields of “Internal and General Medicine” lasts (a total of) at least:</li>
                <li>60 months (5 years) for disciplinary competence as a “General Practitioner” 12.1,</li>
                <li>72 months (6 years) for specialist competence as an “Internist” 12.2, and</li>
                <li>72 months (6 years) for specialist competence as an “Internist + additional disciplinary competencies e.g. Internist and Pneumologist)” 12.3.</li>
              </ul>
            </p>
          </div>

          <div id="pg7_sec">
            <h6 className="service__sub__title">Medical PG in Germany for Pediatrics</h6>
            <p className="service__info">
              Continuing training in the field of Pediatrics lasts at least 60 months. After passing the final examination, the qualified doctor is given the title: “Pediatrician”. Subsequent specialization, for example in the field of
              “Neuropeadiatrics / Child Neurology”, takes at least 36 months and is completed with a further examination.
            </p>
          </div>

          <div id="table_sec">
            <h6 className="service__sub__title">Summary Table of Medical PG Specialist and Specialty Competence</h6>
            <p className="service__info">
              The following table lists the minimum times required for medical continuing training in the various medical fields and Specialty Competencies.
              <br /> <b>Remarks:</b> The figures listed in this table are based on the Model Continuing Education Rules of the German Medical Association. The study regulations of the respective State Medical Associations may differ
              slightly.
              <Table responsive striped bordered hover className="service__table">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>SL/No</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Field</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Specialist &amp; Speciality Competence</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Number of Months</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>Anesthesiology</p>
                    </td>
                    <td>
                      <p>Anesthetist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>2</p>
                    </td>
                    <td>
                      <p>Anatomy</p>
                    </td>
                    <td>
                      <p>Anatomist</p>
                    </td>
                    <td>
                      <p>48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <p>Industrial Medicine/ Occupational Medicine</p>
                    </td>
                    <td>
                      <p>Specialist in Industrial Medicine, Specialist in Occupational Medicine</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>4</p>
                    </td>
                    <td>
                      <p>Ophthalmology</p>
                    </td>
                    <td>
                      <p>Ophthalmologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>5</p>
                    </td>
                    <td>
                      <p>Biochemistry</p>
                    </td>
                    <td>
                      <p>Biochemist</p>
                    </td>
                    <td>
                      <p>48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>6</p>
                    </td>
                    <td>
                      <p>Surgery</p>
                    </td>
                    <td>
                      <p>6.1 Specialist in General Surgery</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.2 Vascular Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.3 Cardiac Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.4 Pediatric Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.5 Orthopedic and Trauma Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.6 Plastic and Aesthetic Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.7 Thorax Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>6.8 Visceral Surgeon</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>7</p>
                    </td>
                    <td>
                      <p>Gynecology and Obstetrics</p>
                    </td>
                    <td>
                      <p>Gynecologist and Obstetrician</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Specialities:</p>
                      <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gynecological</p>
                      <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Endocrinology and</p>
                      <p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Reproductive Medicine</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Gynecological Oncology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Special Obstetrics and Perinatal Medicine</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>8</p>
                    </td>
                    <td>
                      <p>Ear-Nose-Throat Medicine</p>
                    </td>
                    <td>
                      <p>8.1 Ear-Nose-Throat Specialist</p>
                    </td>
                    <td>
                      <p>24 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>8.2 Speech, Voice and Pediatric Hearing Disorders &ndash; Phoniatrician</p>
                    </td>
                    <td>
                      <p>24 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>9</p>
                    </td>
                    <td>
                      <p>Dermatological and Venereal Diseases</p>
                    </td>
                    <td>
                      <p>Dermatologist and Venereologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>10</p>
                    </td>
                    <td>
                      <p>Human Genetics</p>
                    </td>
                    <td>
                      <p>Human Geneticist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>11</p>
                    </td>
                    <td>
                      <p>Hygiene and Environmental Medicine</p>
                    </td>
                    <td>
                      <p>Hygiene and Environmental Medicine Specialist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>12</p>
                    </td>
                    <td>
                      <p>Internal and General Medicine</p>
                    </td>
                    <td>
                      <p>12.1 Internist (General Practitioner)</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.2 Internist:</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.1&ndash; Internist and Angiologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.2&ndash;Internist and Endocrinologist and Diabetologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.3&ndash; Internist and Gastroenterologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.4&ndash; Internist and Haematologist and Oncologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.5&ndash; Internist and Cardiologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.6&ndash; Internist and Nephrologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.7&ndash; Internist and Pneumologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>12.3.8 &ndash; Internist and Rheumatologist</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>13</p>
                    </td>
                    <td>
                      <p>Paediatrics</p>
                    </td>
                    <td>
                      <p>Paediatrician</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Specialities</p>
                      <p>&ndash; Paediatric Haematology and Oncology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Paediatric Cardiology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Neonatology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Neuropaediatrics / Child Neurology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>14</p>
                    </td>
                    <td>
                      <p>Paediatric Psychiatry and Psychotherapy</p>
                    </td>
                    <td>
                      <p>Paediatric Psychiatrist and Psychotherapist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>15</p>
                    </td>
                    <td>
                      <p>Laboratory Medicine</p>
                    </td>
                    <td>
                      <p>Laboratory Medicine Specialist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>16</p>
                    </td>
                    <td>
                      <p>Microbiology, Virology and Infection Epidemiology</p>
                    </td>
                    <td>
                      <p>Microbiologist, Virologist and Infection Epidemiologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>17</p>
                    </td>
                    <td>
                      <p>Oral and Maxillofacial Surgery</p>
                    </td>
                    <td>
                      <p>Oral and Maxillofacial Surgeon</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>18</p>
                    </td>
                    <td>
                      <p>Neurosurgery</p>
                    </td>
                    <td>
                      <p>Neurosurgeon</p>
                    </td>
                    <td>
                      <p>72</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>19</p>
                    </td>
                    <td>
                      <p>Neurology</p>
                    </td>
                    <td>
                      <p>Neurologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>20</p>
                    </td>
                    <td>
                      <p>Nuclear Medicine</p>
                    </td>
                    <td>
                      <p>Nuclear Medicine Specialist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21</p>
                    </td>
                    <td>
                      <p>Public Health</p>
                    </td>
                    <td>
                      <p>Public Health Specialist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>22</p>
                    </td>
                    <td>
                      <p>Pathology</p>
                    </td>
                    <td>
                      <p>22.1 Neuropathologist</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>22.2 Pathologist</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>23</p>
                    </td>
                    <td>
                      <p>Pharmacology</p>
                    </td>
                    <td>
                      <p>23.1 Clinical Pharmacologist</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>23.2 Pharmacologist and Toxicologist</p>
                    </td>
                    <td>
                      <p>24 Basis+48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>24</p>
                    </td>
                    <td>
                      <p>Physical Medicine and Rehabilitation</p>
                    </td>
                    <td>
                      <p>Physical Medicine and Rehabilitation Specialist (Physiatrist)</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>25</p>
                    </td>
                    <td>
                      <p>Physiology</p>
                    </td>
                    <td>
                      <p>Physiologis</p>
                    </td>
                    <td>
                      <p>48</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>26</p>
                    </td>
                    <td>
                      <p>Psychiatry and Psychotherapy</p>
                    </td>
                    <td>
                      <p>Psychiatrist and Psychotherapist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Forensic Psychiatrist</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>27</p>
                    </td>
                    <td>
                      <p>Psychosomatic Medicine and Sychotherapy</p>
                    </td>
                    <td>
                      <p>Psychosomatic Medicine Specialist and Psychotherapist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>28</p>
                    </td>
                    <td>
                      <p>Radiology</p>
                    </td>
                    <td>
                      <p>Radiologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Specialities:</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Paediatric Radiology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&ndash; Neuroradiology</p>
                    </td>
                    <td>
                      <p>60 Basis+36</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>29</p>
                    </td>
                    <td>
                      <p>Forensic Pathology</p>
                    </td>
                    <td>
                      <p>Forensic Pathologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>30</p>
                    </td>
                    <td>
                      <p>Radiation Therapy</p>
                    </td>
                    <td>
                      <p>Radiation Therapist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                    <td>
                      <p>Radiation Oncologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>31</p>
                    </td>
                    <td>
                      <p>Transfusion Medicine</p>
                    </td>
                    <td>
                      <p>Specialist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>32</p>
                    </td>
                    <td>
                      <p>Urology</p>
                    </td>
                    <td>
                      <p>Urologist</p>
                    </td>
                    <td>
                      <p>60</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
          </div>

          <div id="table1_sec">
            <h6 className="service__sub__title">Summary Table of Medical PG Extra Qualifications</h6>
            <p className="service__info">
              In addition to medical continuing training and qualification in the Specialities, doctors wishing to further specialize can gain an Extra Qualification. The minimum time needed for the individual disciplinary competencies is
              as follows:
              <br />
              <ul>
                <li>
                  As already mentioned above, such Extra Qualification is not counted as part of the time prescribed for training as a specialist. The following special competencies are gained, in particular, by completing an Extra
                  Qualification course.
                </li>
              </ul>
              <Table responsive striped bordered hover className="service__table">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>EXTRA QUALIFICATION</strong>
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>NUMBER OF MONTHS (m) / HOURS (h)</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Medical Quality Management</p>
                    </td>
                    <td>
                      <p>200 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Acupuncture</p>
                    </td>
                    <td>
                      <p>120 h + 60 h +20 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Allergology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Andrology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Occupational Health</p>
                    </td>
                    <td>
                      <p>36 h + 360 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Dermatological Histology</p>
                    </td>
                    <td>
                      <p>24 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Diabetology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Aviation Medicine</p>
                    </td>
                    <td>
                      <p>6 m + 180 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Geriatric Medicine</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Gynaecological Exfoliative Cytology</p>
                    </td>
                    <td>
                      <p>No proof of minimal continuing training hrs required</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Haemostaseology</p>
                    </td>
                    <td>
                      <p>12 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Hand Surgery</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Homeopathy</p>
                    </td>
                    <td>
                      <p>6 m +160 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Infectology</p>
                    </td>
                    <td>
                      <p>12 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Intensive Care</p>
                    </td>
                    <td>
                      <p>24 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Endocrinology and Diabetology</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Gastroenterology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Nephrology</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Orthopaedics</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Pneumology</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Paediatric Rheumatology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Laboratory Diagnosis&ndash; subject specific &ndash;</p>
                    </td>
                    <td>
                      <p>6 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Magnetic Resonance Imaging (MRI) &ndash; subject specific &ndash;</p>
                    </td>
                    <td>
                      <p>24 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Manual Medicine/Chirotherapy</p>
                    </td>
                    <td>
                      <p>120 h +200 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Pharmacological tumour therapy</p>
                    </td>
                    <td>
                      <p>12 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Medical Information Systems</p>
                    </td>
                    <td>
                      <p>12 m +360 h +480 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Naturopathy</p>
                    </td>
                    <td>
                      <p>3 m / or 80 h + 160 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Emergency (Trauma) Medicine</p>
                    </td>
                    <td>
                      <p>6 m + 80 h + proof of 50 emergency</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>(trauma) care assignments</p>
                    </td>
                    <td>
                      <p>&nbsp;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Orthopaedic Rheumatology</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Palliative Medicine</p>
                    </td>
                    <td>
                      <p>12 m + 40 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Phlebology</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Physical Therapy and Balneology</p>
                    </td>
                    <td>
                      <p>12 m + 240 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Plastic Operations</p>
                    </td>
                    <td>
                      <p>12 m + 240 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Plastic Operations</p>
                    </td>
                    <td>
                      <p>24 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Proctology</p>
                    </td>
                    <td>
                      <p>12 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Psychoanalysis</p>
                    </td>
                    <td>
                      <p>250 h + 240 +600 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Psychotherapy &ndash; subject specific &ndash;</p>
                    </td>
                    <td>
                      <p>100 h + 16 double hr + 15 double hr + 15 double hr + 120 h +100 h + 120 h + 16 double + 15 double hr +15 double hr +15 double +120 h + 100 h.</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Rehabilitation Medicine</p>
                    </td>
                    <td>
                      <p>12 +160 h + 160 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>X-ray Diagnostics &ndash; subject specific &ndash;</p>
                    </td>
                    <td>
                      <p>18 m and/or 12 m (depending on the subject)</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sleep Medicine</p>
                    </td>
                    <td>
                      <p>18 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Social Medicine</p>
                    </td>
                    <td>
                      <p>12 m +160 h +160 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Special Orthopaedic Surgery</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Special Pain Therapy</p>
                    </td>
                    <td>
                      <p>12 m + 80 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Special Trauma Surgery</p>
                    </td>
                    <td>
                      <p>36 m</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Sports Medicine</p>
                    </td>
                    <td>
                      <p>12 m +240 h +120 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Addiction Medicine</p>
                    </td>
                    <td>
                      <p>50 h</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Tropical Medicine</p>
                    </td>
                    <td>
                      <p>12 h +12 h +3 m</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </p>
            <p className="service__info">
              With this program, we offer high-value professional support for preparing a medical PG in Germany, and you can thus profit from our long-term experience in international projects. We offer a complete service package as well as
              support in meeting administrative and intercultural requirements.
              <br />
              The training to become a medical specialist, is done “on the job” in a hospital as an assistant doctor. The average annual salary or stipend for an assistant doctor who has not gained any prior experience as a medical
              specialist amounts to 45,000 Euros (pre-tax) and will rise quickly afterwards.
            </p>
          </div>

          <div>
            <h6 className="service__sub__title">
              Medical PG in Germany for Indian Students
            </h6>
            <p className="service__info"><Link to="/medical-pg-in-germany">PG in Germany after MBBS in India</Link> is one of the top choices among international medical PG options. Many Indians tried their hardest to crack AIPGMEE / NEET- PG 2 to 4 times and ultimately wished to go forward by adopting a stronger option in the interest of their enthusiasm to seek post-degree after MBBS in Germany. </p>

            <p className="service__info">The path to becoming an <Link to="/medical-pg-in-germany-admission-procedure">MD in Germany after completing an MBBS in India</Link> is quite difficult. But it can be easier for you. All you have to do is contact an <b>authentic, qualified,</b> and knowledgeable abroad education expert who is familiar with your requirements. The stages are well defined, and studying <Link to="/medical-pg-in-germany">PG medicine in Germany</Link> takes an additional two years, however, it does provide an opportunity for <Link to="/medical-pg-in-germany">PG in Germany</Link>.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              German System for Medical PG in Germany
            </h6>
            <p className="service__info">Many medical universities in Germany, surprise, offer the entire MBBS training for free. However, the <b>German medical council</b> is in charge of the roadmap to medical PG, and medical universities in Germany are not involved. You will have an easy path to <Link to="/medical-pg-in-germany">PG in Germany after MBBS</Link> at a German medical university.  </p>

            <p className="service__info">However, going straight to the <b>MD level following MBBS in India</b> has hurdles in terms of language learning and system clarity. As a result, we constantly advise MBBS students in India to consider a renowned medical university in Germany as their path to a PG degree.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              How do I get into a Medical PG program in Germany?
            </h6>
            <p className="service__info">
              <ul>
                <li><b>Complete with your native country's German-language levels</b><br/>It is critical to master the German language before applying to Medical PG in Germany. As a doctor, it's critical to improve your patients' communication abilities. In Germany, various particular programs can help you acquire the highest degree of language proficiency. It is recommended that you begin your beginner levels with A1 and A2 levels (German basic levels) before applying for Medical PG.</li>

                <li><b>Pursue B1-C1 level language course in Germany</b> <br/> You must begin another level of German levels until C1 as soon as you enter Germany with your fundamental language knowledge. <Link to="/how-to-study-mbbs-in-germany">Studying as a doctor in Germany</Link> is possible after you have a decent command of the German language.</li>

                <li><b>Medical German language course</b> <br/> After completing the B2 level, doctors begin to study Medical German, which is required for doctors to practice in Germany. Learning merely the general German language is insufficient for doctors. The doctors were taught about employee communication, planning, implementation, and documentation, dealing with patients, counseling and informing them about their ailments, choosing a healthcare institution, vocabulary enhancement, and comprehending job instructions during the course. For the same, different examinations are done. Some of these are Telc Medizin B2-C1 certificates, and some states need that you pass a "Fachsprachprufung" before you can apply for approval.</li>

                <li><b>Clearing the “Kenntnisprüfung” exam</b> <br/> All non-EU doctors must apply for an Approbation exam after completing the German language. After you have submitted all of the required paperwork to the authorities, they will review all of your documents and compare them to the German Medical Study Eligibility. If your current medical study is compatible with the German medical education system, you do not need to take this exam and your doctor will receive an Approbation license; however, if your study is not compatible with the German education system, you must take this exam and pass to receive your Approbation license. </li>
              </ul>
            </p>

            <p className="service__info"><b>Note: To obtain an Approbation license, all Indian medical graduates must pass this exam.</b></p>
          </div>

          <div>
            <h6 className="service__sub__title">
              Duration of Studying PG in Germany
            </h6>
            <p className="service__info">The entire period of <Link to="/medical-pg-in-germany">medical PG in Germany for Indian students</Link> is three to four years, depending on specialty. It is completely free to study in Germany.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              Medium of Teaching of PG in Germany
            </h6>
            <p className="service__info">In Germany, the only language used to teach PG is German. To study <b>PG medicine in Germany</b>, you must have a B-level understanding of the language.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              Intake of PG Course in Germany
            </h6>
            <p className="service__info">If you want to pursue a <Link to="/medical-pg-in-germany-admission-procedure">PG in Germany after MBBS</Link>, your program will begin in October. This marks the start of the winter semester in German postgraduate universities. <b>PG medicine in Germany</b> is divided into 2 semesters: winter and summer. In most cases, the admissions process begins in the winter semester.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              After MBBS, Best Routes to pursue PG in Germany
            </h6>
            <p className="service__info">After MBBS, there are a variety of options to pursue <Link to="/medical-pg-in-germany-admission-procedure">medical PG in Germany for Indian students</Link>. Two options stand out: directly studying MBBS education in German universities and enrolling in a one-year Master’s degree to gain a better understanding of the German language and the German environment. If you have already completed your <Link to="/how-can-i-study-mbbs-in-germany">MBBS in Germany</Link>, continuing your education is an easy process. If you have not already, you can follow this path to a PG in Germany after completing your MBBS:
            <br/>
            <ul>
              <li>As Germany has various rules, you should allow at least six to seven months before traveling there.</li>
              <li>You must pass <b>levels A1</b> and <Link to="/learn-german-language-course-in-bangalore">A2 of the German language.</Link></li>
              <li>Obtaining a letter of acceptance for <b>TELC B2</b> and <b>TELC C1</b> from a government-approved test. The standards B2 and C1 have been rejected.</li>
              <li>You should study German until you obtain the C1 level.</li>
              <li>Getting an accepted Observership from a German hospital for your post-graduate program in Germany.</li>
            </ul>
            </p>
          </div>

          <div>
            <h6 className="service__sub__title">
              An Alternative Way to Study PG in Germany
            </h6>
            <p className="service__info">There is just one way to come to <Link to="/medical-pg-in-germany">Germany for PG after MBBS</Link>. This technique allows you to enroll in a one-year <b>Master's program in Healthcare</b> instead of graduating from <b>TELC B1 to TELC C1</b>. During this procedure, you can study German up to the TELC C1 level. Because you already have far more achievements than most applicants for <Link to="/medical-pg-in-germany">PG in Germany after MBBS</Link>, this method will raise your profile for any postgraduate course.</p>
          </div>

          <div>
            <h6 className="service__sub__title">
              Jobs and Salary for PGs in Germany after MBBS
            </h6>
            <p className="service__info">Doctors are among the most <b>employable</b> and <b>well-paid workers in the world</b>. In Germany, a medical degree ensures great employability and good remuneration. Your remuneration will be determined by your hospital's career history and role. In Germany, for example, a specialist makes roughly € 80,000 per year on average. Doctors are also among the highest-paid professionals. With several years of experience, a <Link to="/how-can-i-study-mbbs-in-germany">doctor in Germany</Link> should expect to earn substantially more than € 100,000 per year.</p>
          </div>

          <div id="faq_sec">
            <h6 className="service__sub__title">FAQ about the Medical PG in Germany</h6>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <b className="accordion__title">Can I practice in India after completion of the PG course?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="service__info">Yes, you can practice in India after completion of the PG course if you have cleared the MCI screening test.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <b className="accordion__title">What is the medium of instruction for Medical PG in Germany?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="service__info">
                      The medium of instruction for <b>Medical PG in Germany</b> is English as well as in German, It is necessary that students must learn German language.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <b className="accordion__title">Is Germany good for PG?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="service__info">
                      Yes, pursuing <b>Medical PG in Germany</b> is definitely a good option truly because it is well known for its quality and affordable medical education.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <b className="accordion__title">Can a medical student study the PG course in Germany at an affordable fee structure?</b>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="service__info">Germany PG University charges reasonable tuition fees from international students.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div id="conclusion_sec">
            <h2 className="service__sub__title">Conclusion</h2>
            <p className="service__info">
              Germany is one of the best places to pursue PG course in the best universities. Germany PG universities provide PG courses at reasonable cost. The students should choose the best abroad education consultancy New-Lyf to take
              admission to PG course in Germany. We provide complete accurate information about the university so that the students do not have any problem during their studies. We ensure that the students must select the best university at
              affordable fees with quality education.
            </p>
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
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Apply To MBBS Universities In Europe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
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

export default MedicalPgInGermany;
