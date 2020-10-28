import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DocumentMeta from 'react-document-meta';
import "bootstrap/dist/css/bootstrap.css";
import "./Services.css";
import RussiaForm from "../components/ContactForm/RussiaForm";
import HomeCarousel from "../components/HomeCarousel";

function MbbsRussia() {
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'MBBS Admission in Russia for Indian Students at MCI Approved University',
    description: 'Study MBBS in Russia from Top Medical Universities. Destinex provides all guidance & assistance to Indian Students for Admission in Russian Medical College.',
    canonical: 'https://www.mbbsadmissionsinabroad.com/mbbs-in-russia/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'MBBS in Russia'
      }
    }
  };


  return (
    <DocumentMeta {...meta}>
    <section>
      <div className="service__bg">
        <h1 className="service__title">MBBS In Russia</h1>
      </div>
      <div>
        <img
          className="service__image"
          src="/assets/images/service-image/study-mbbs-russia.png"
          alt="Study In Russia"
        />
      </div>
      <Container>
        <div>
          <p className="service__info">
            Russia is well-acclaimed among international students for providing
            top-notch education facilities and has been amassing huge numbers of
            students the past few decades. The medical courses offered in Russia
            are recognized by the 5 renowned international medical councils
            namely the WHO, FAIMER, IMED, MCI, WFME and also by the Medical
            Council of leading countries like U.S.A, U.K, the Middle East,
            Australia, India, and Canada. Also, medical universities in Russia
            offer students, subsidized education along with scholarship. This
            subsidized fee is provided by the Russian Ministry of Health &
            Education. High quality of education along with the low cost of
            tuition fee is one of the main reasons for choosing the top medical
            universities in Russia for MBBS. Students and teachers are divided
            into batches of the ratio 15:2. Later, they are taught the local
            language and split into a ratio of 7:1. Also, about 12 of these
            universities provide MBBS in English medium. The graduates from
            Russian Medical Universities are presently working in leading
            hospitals across the world. Duration of MBBS in Russia in English
            Medium is 6 years (5+1). Students also can choose MBBS in Russian
            Medium, of which the duration is 7 years which incorporates one year
            for Russian language training
          </p>
          <ul className="hyperlink">
            <li><img src="/assets/left-arrow.png" alt="Left Arrow" /> Index </li>
            <li><a href="#about_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> About MBBS in Russia</a></li>
            <li><a href="#why_mbbs_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Why MBBS in Russia?</a></li>
            <li><a href="#benefits_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Benefits of MBBS in Russia</a></li>
            <li><a href="#eligibility_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Eligibility for MBBS in Russia</a></li>
            <li><a href="#university_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Russia Top Universities </a></li>
            <li><a href="#requirements_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Requirements for MBBS in Russia </a></li>
            <li><a href="#fees_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS Fees in Russia </a></li>
            <li><a href="#advice_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Russia Advice for Indians </a></li>
            <li><a href="#pros_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Pros & Cons for MBBS in Russia </a></li>
            <li><a href="#visa_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Visa for MBBS in Russia </a></li>
						<li><a href="#mci_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MCI Coaching in Russia!</a></li>
						<li><a href="#usmle_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> USMLE (United States Medical Licensing Examination) Coaching in Russia </a></li>
						<li><a href="#usmle_steps_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> USMLE is classified into 3 steps as below </a></li>
						<li><a href="#pg_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> PG Options after MBBS in Russia </a></li>
						<li><a href="#vacations_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Vacations during MBBS in Russia </a></li>
						<li><a href="#career_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Career Options after Completing MBBS in Russia </a></li>
						<li><a href="#problems_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Students face huge problems due to the Fraud Agents </a></li>
						<li><a href="#reserve_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> How reserve your MBBS Seat in Russia for 2020 Admission </a></li>
						<li><a href="#charges_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Service & Consultancy Charges of Destinex </a></li>
						<li><a href="#destinex_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Services by Destinex for Abroad Education </a></li>
						<li><a href="#process_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Our Process of conducting Student Counseling </a></li>
            <li><a href="#faq_sec"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS in Russia FAQ </a></li>
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
          <h2 className="service__sub__title">About Russia</h2>
          <p className="service__info">
            Russia is the largest country of the world by land area and it is
            also known by the official name, the Russian Federation. Moscow is
            the capital of Russia and the largest city is the world. Population
            of Russia is about 146.6 million. The Russian government is
            predicated on a democratic form of rule. The Russian Federation
            shares land border with Finland, Lithuania and Poland, Belarus,
            Latvia, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, Norway
            Estonia, Mongolia and North Korea.
          </p>
        </div>
        <div id="why_mbbs_sec">
          <h2 className="service__sub__title">Why MBBS Study in Russia</h2>
          <p className="service__info">
            Medical Study in Russia is very easy for a student because any
            student from all over the world can enroll for MBBS admission
            without an entrance exam. The fee in Russia is very low because the
            Russian Government provides subsidized education. The average MBBS
            fee in Russia is between 3500 to 6000 USD per year. All Russian
            medical universities are listed in renowned international medical
            councils, so a student who gets an MBBS degree from Russia can
            practice anywhere in the world including India. Students get a fully
            equipped hostel facility inside the university campus with quality
            food (most of the universities have an Indian canteen). Students can
            attain scholarship if they fulfill the scholarship criteria. All
            MBBS students in Russia get medical insurance for all courses and
            get the required medical assistance when needed. Students get
            training for MCI screening test during the medical course and
            professors are cognizant about the MCI screening test. Medical
            courses are taught in both English and Russian languages, MBBS
            students also get training to learn Russian Language because by
            learning Russian language a student can communicate with patients
            within the hospital during the time of medical practice. The crime
            rate in Russia is low, which makes it a safe place for living and
            studying.
          </p>
        </div>
        <div id="benefits_sec">
          <h3 className="service__sub__title">
            Benefits of Studying MBBS in Russia for Indian Students 2020
          </h3>
          <p className="service__info">
            Russia is the perfect place for Indian students to study MBBS mainly
            because there is no entrance exam or donation required for attaining
            a seat in the Russian universities. The admission procedure is easy
            and simple. The course fees are low and subsidized. There is
            worldwide recognition of the degrees provided by Medical
            Universities of Russia as it is approved by all the top medical
            councils. Good food and accommodation is provided, also, there are
            Indian canteens available in most of the universities. They provide
            MCI Coaching in the Russian Medical Universities and the results are
            excellent. Students that have graduated from the universities are
            working in leading hospitals across the world. The graduates are not
            only working in India but in Australia, Canada, USA, UK and other
            major countries across the globe. Also, there is a very minimal
            chance of VISA rejection. All the universities are government
            universities of Russia.
          </p>
        </div>
        <div id="eligibility_sec">
          <h4 className="service__sub__title">
            Eligibility Criteria for MBBS in Russia
          </h4>
          <p className="service__info">
            The eligibility criteria of the students who want to study MBBS in
            Russia are as follows:
            <ul>
              <li>
                The student should be of the age 17-30. They should complete the
                age of 17 years on or before 31st December of the year of
                admission.
              </li>
              <li>
                The candidate must secure 50% marks in their 12th grade from
                Science stream (Physics, Chemistry, and Biology).
              </li>
              <li>
                The candidates of the SC/ST/OBC need to score a minimum of 45%
                marks in their 12th grade.
              </li>
              <li>
                As per the latest notification by MCI, Indian medical aspirants
                who plan to enroll in Foreign Medical Universities need to
                qualify NEET.
              </li>
            </ul>
          </p>
        </div>
        <div id="university_sec">
          <h5 className="service__sub__title">
            Top Universities for MBBS Study in Russia
          </h5>
          <p className="service__info">
            Some of the top universities in Russia are as follows:
            <ul>
              <li>
                Pirogov Russian National Research Medical University (RNRMU)
              </li>
              <li>Pavlov First Saint Petersburg State Medical University</li>
              <li>Kazan Federal University</li>
              <li>I. M. Sechenov First Moscow State Medical University</li>
              <li>Altai State Medical University</li>
              <li>Astrakhan State Medical University</li>
              <li>Bashkir State Medical University</li>
              <li>Belgorod State National Research University</li>
              <li>Chechen State University</li>
              <li>Chuvash State University named after I.N. Ulyanov</li>
              <li>Crimean Federal University named after V.I. Vernadsky</li>
              <li>Dagestan State Medical University</li>
              <li>Far Eastern Federal University</li>
              <li>Immanuel Kant Baltic Federal University</li>
              <li>Irkutsk State Medical University</li>
              <li>Ivanovo State Medical Academy</li>
              <li>Izhevsk State Medical Academy</li>
              <li>Kabardino-Balkarian State University</li>
              <li>Kazan Federal (Volga) University</li>
              <li>Kazan State Medical University</li>
              <li>Kemerovo State Medical Academy</li>
              <li>Kuban State Medical University</li>
              <li>Kursk State Medical University</li>
              <li>Mari State University</li>
              <li>National Research Nuclear University “MIFI”</li>
              <li>National Research Ogarev Mordovia State University</li>
              <li>North Ossetian State Medical Academy</li>
              <li>North-Eastern Federal University named after MK Ammosov</li>
              <li>Northern State Medical University</li>
              <li>Novosibirsk National Research State University</li>
              <li>Omsk State Medical University</li>
              <li>Orel State University</li>
              <li>Orenburg State Medical University</li>
              <li>Pacific State Medical University</li>
              <li>Penza State University</li>
              <li>Perm State Medical University named after E.A. Vagner</li>
              <li>Privolzhsky Research Medical University</li>
              <li>Pskov State University</li>
              <li>Rostov State Medical University</li>
              <li>
                Russian National Research Medical University named after N.I.
                Pirogov
              </li>
              <li>Russian Peoples Friendship University</li>
              <li>Ryazan State Medical University named after I.P. Pavlov</li>
              <li>Saratov State Medical University</li>
              <li>Siberian State Medical University</li>
              <li>Smolensk State Medical University</li>
              <li>St. Petersburg State Pediatric Medical Academy</li>
              <li>Stavropol State Medical University</li>
              <li>Tambov State University named after G.R. Derzhavin</li>
              <li>
                The First Moscow State Medical University named after Sechenov
              </li>
              <li>
                The First St. Petersburg State Medical University named after
                Pavlov
              </li>
              <li>Tula State University</li>
              <li>Tver State Medical University</li>
              <li>Tyumen State Medical University</li>
              <li>Ulyanovsk State University</li>
              <li>Ural State Medical University</li>
              <li>Volgograd State Medical University</li>
              <li>
                Voronezh State Medical University named after N.N. Burdenko
              </li>
              <li>Yaroslavl State Medical University</li>
            </ul>
          </p>
        </div>
        <div id="requirements_sec">
          <h6 className="service__sub__title">
            Requirements for MBBS Admission in Russia 2020-2021
          </h6>
          <p className="service__info">
            The necessary documents for attaining admission in Russia are the
            following:
            <ul>
              <li>A birth certificate as an age proof s mandatory.</li>
              <li>10th and 12th class mark sheets.</li>
              <li>Passport size photo.</li>
              <li>Valid passport with 18 months of validity.</li>
              <li>Student VISA is mandatory.</li>
              <li>A no objection certificate.</li>
              <li>Report of HIV test.</li>
              <li>Banks statements are required for the submission.</li>
              <li>Posses the MBBS fees of Russia 2020-21.</li>
              <li>Medical certificates for fitness proofs.</li>
              <li>Invitation letter from concerned university.</li>
              <li>Approved documents from the Ministry External Affairs.</li>
              <li>Legalized papers from embassy of Russia.</li>
              <li>Health insurance certificate.</li>
              <li>Travel insurance certificate.</li>
            </ul>
          </p>
        </div>
        <div id="fees_sec">
          <h6 className="service__sub__title">MBBS in Russia Fees 2020-2021</h6>
          <p className="service__info">
            The fees structure for the Indian students studying in Russia will
            range from 3,500 USD to 6,000 USD per year.
          </p>
        </div>
        <div id="advice_sec">
          <h6 className="service__sub__title">
            MBBS in Russia Advice for Indian Students
          </h6>
          <p className="service__info">
            The following are the advices for the Indian students in Russia:
            <ul>
              <li>One should always be cautious of his/her surroundings.</li>
              <li>Avoid the company of dangerous people.</li>
              <li>Do not stay outside late in the night.</li>
              <li>Do not travel to places not sure of.</li>
            </ul>
          </p>
        </div>
        <div id="pros_sec">
          <h6 className="service__sub__title">
            Pros and Cons of Studying In Russia
          </h6>
          <p className="service__info">
            Some of the challenges faced are the bitterly cold climatic
            condition of Russia and the homesickness faced by the Indian
            students. The medical universities in Russia do not include some of
            the diseases in the syllabus which can be an issue for the
            international students. Language barrier and the new culture can
            also be a significant challenge.
            <br /> The pros are the low cost of education along with
            scholarship, good accommodation and canteen facilities. The Russian
            medical universities are accredited by the medical councils all over
            the world. It is also easy to apply and enroll. And the job
            opportunities are massive for a medical student graduated from a
            Russian medical college.
          </p>
        </div>
        <div id="visa_sec">
          <h6 className="service__sub__title">
            VISA Procedure for MBBS in Russia
          </h6>
          <p className="service__info">
            The candidates have to provide the online application form
            correctly. Then you need to submit all the required documents. The
            candidates then will get the invitation letter from the respected
            university. It is at this step that the candidates have to pay the
            admission fee. Then the student has to apply for the visa. And once
            the visa is in hand one can book the tickets!
          </p>
        </div>
        <div id="mci_sec">
          <h6 className="service__sub__title">MCI Coaching in Russia!</h6>
          <p className="service__info">
            Russia provides a great opportunity to MBBS students of the 1st year
            to start MCI Coaching in Russia in the top government medical
            universities. The students get top-class medical faculties that
            offer in-depth knowledge regarding the MCI exam.
            <br />
            National Board of Examination (NBE) conducts MCI Screening Test
            which is a licensing exam to practice in India after completing MBBS
            in Russia. But the students that wish to pursue postgraduate medical
            courses in India need to qualify National Exit Test (NEXT) exam and
            also offer license to practice their medical career in India.
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

        <div id="usmle_sec">
          <h6 className="service__sub__title">
            USMLE (United States Medical Licensing Examination) Coaching in
            Russia
          </h6>
          <p className="service__info">
            One of the best advantages of pursuing MBBS in Russia is that the
            students can prepare themselves for USMLE in each top government
            medical university. USMLE coaching in Russia enables medical
            students to practice medicine in the USA.
            <br />
            USMLE exam include an in-depth assessment of MBBS students regarding
            their skills, values, and attitudes in real-life practices during
            patient-centered scenarios. After clearing this exam, the students
            get a license to practice medicine in the USA.
          </p>
        </div>
        <div id="usmle_steps_sec">
          <h6 className="service__sub__title">
            USMLE is classified into 3 steps as below:
          </h6>
          <p className="service__info">
            <ol>
              <li>
                USMLE is a one-day test that includes multiple-choice questions.
                Most of the students prefer to give at the end of the second
                year of their MBBS course. It focuses on the knowledge of basic
                sciences such as anatomy, biochemistry, behavioral sciences,
                pathology, pharmacology, immunology, physiology, and
                microbiology.
              </li>
              <li>
                It is a two day test that will be given by the MBBS students in
                the fourth year of their MBBS course. This exam is further
                classified into two stages such as- CK (Clinical Knowledge) and
                CS (Clinical Skills).
                <ul>
                  <li>
                    In CK exam, the students find multiple choice questions on
                    clinical sciences like surgery, pediatrics, obstetrics &
                    gynecology, and internal medicine.
                  </li>
                  <li>
                    In CS exam, the students need to examine and diagnose the
                    patients and they need to travel to one of the five testing
                    centers across the country for step 2 CS medical.
                  </li>
                </ul>
              </li>
              <li>
                It is also a two-day test that students generally prefer to five
                once they complete the first-year residency. Day 1 Test of Step
                3 is known as the Foundation of Independent Practice (FIP) which
                is an MCQ format test. Day 2 Test is known as Advanced Clinical
                Medicine (ACM) in which students need to attempt about 180 MCQs
                and 13 computer-based case simulations.
              </li>
            </ol>
          </p>
        </div>
        <div id="pg_sec">
          <h6 className="service__sub__title">
            PG Options after MBBS in Russia
          </h6>
          <p className="service__info">
            Following are the PG options after <b>MBBS in Russia:</b>
            <ul>
              <li>
                After completing MBBS from Russian medical universities, the
                students can opt from a variety of options to pursue their PG
                courses.
              </li>
              <li>
                They can choose Indian medical colleges for PG courses but after
                qualifying the MCI screening test.
              </li>
              <li>
                They can also choose abroad medical colleges for PG courses but
                they need to qualify the respective screening tests of that
                country.
              </li>
            </ul>
          </p>
        </div>
        <div id="vacations_sec">
          <h6 className="service__sub__title">
            Vacations during MBBS in Russia
          </h6>
          <p className="service__info">
            The students pursuing MBBS in Russia can have two long holidays
            between semesters in a year such as:
            <ul>
              <li>
                The students can take their first vacation in summer for 2
                months which is in July and August. They need to come back
                before the next semester that starts from 1st September.
              </li>
              <li>
                They take their second vacation in winter that lasts for around
                a month from 15th January to the first week of February.
              </li>
            </ul>
          </p>
        </div>
        <div id="career_sec">
          <h6 className="service__sub__title">
            Career Options after Completing MBBS in Russia
          </h6>
          <p className="service__info">
            Following are the career options for MBBS graduates after completing
            MBBS in Russia:
            <ul>
              <li>
                Once the students complete MBBS in Russia, they can opt for a PG
                course in any field as per their preference.
              </li>
              <li>
                They can join any research organizations to work in
                research-oriented opportunities.
              </li>
              <li>
                There are lots of opportunities in government and private
                sectors for MBBS doctors to do a job. They are assigned
                internships, medical practices.
              </li>
              <li>
                They can start their preparation for USMLE if they wish to
                practice medicine in the USA.
              </li>
              <li>
                They can go for specialization courses in medicine and can
                pursue a job with a lucrative salary package.
              </li>
            </ul>
          </p>
        </div>
        <div id="problems_sec">
          <h6 className="service__sub__title">
            Students face huge problems due to the Fraud Agents
          </h6>
          <p className="service__info">
            The students do not have to pay MBBS 6-year fees together in any
            government medical university in Russia. If any agent asks for the
            whole 6-year fees, it’s their own scheme. If the students pay whole
            fees and got <b>MBBS Admission in Russia</b> where they taught MBBS
            in Russia then they cannot change the university.
            <br />
            As there is no requirement to pay any donation fee or capitation fee
            for taking <b>MBBS Admission in Russia</b>, so the students must
            aware of not paying any donation fees to any agent.
            <br />
            It is recommended to students to qualify MCI screening test coaching
            (online) in India only before going Russia for pursuing MBBS. They
            do not have to trust any false promises of any agent. Because the
            MCI screening test coaching is not provided in most of the Russia
            medical universities.
            <br />
            Therefore, the student should consult Destinex for any information
            regarding <b>MBBS Admission in Russia</b>. We provide transparent
            information to the students so that they fulfill their wish to
            pursue <b>MBBS in Russia</b> in the English-taught universities with
            reasonable and accurate fees.
          </p>
        </div>
        <div id="reserve_sec">
          <h6 className="service__sub__title">
            How reserve your MBBS Seat in Russia for 2020 Admission
          </h6>
          <p className="service__info">
            Russia is one of the best countries for taking admission in MBBS
            course. Destinex recommends the students to follow the below
            significant steps for admission guidelines:
            <ul>
              <li>
                The students need to choose the University as per their choice
                in which they wish to pursue MBBS in Russia. Destinex provides
                complete details regarding some of the highest-ranked
                universities in Russia.
              </li>
              <li>
                They need to fill the Application form of that University with
                all the required documents.
              </li>
              <li>
                Once the university reviews their details such as eligibility
                criteria, documents, and more, they will get an invitation
                letter from that university.
              </li>
              <li>
                If the students are eligible for applying for MBBS in Russia,
                they get an invitation letter.
              </li>
              <li>
                They need to apply for a student visa in the Russian embassy of
                the respective country.
              </li>
              <li>
                They need to deposit the admission fee of the university as per
                their norms.
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

        <div id="charges_sec">
          <h6 className="service__sub__title">
            Service & Consultancy Charges of Destinex
          </h6>
          <p className="service__info">
            Destinex is one of the best overseas education consultants in India.
            We have already placed hundreds of Indian students in Russia for
            pursuing MBBS course in the top medical universities that taught
            MBBS course in English language.
            <br />
            We provide proper guidance to the students regarding the top
            universities, it’s fees structure, and many more things so that the
            students can have brighter career opportunities. Our aim is to place
            Indian students to the MCI approved Russian medical universities
            with reasonable fees and top-class facilities. It is recommended to
            students not to take admission in free medical colleges in Russia
            because they lack quality education and infrastructure. But we place
            the students only at the best medical universities/colleges in
            Russia.
          </p>
        </div>
        <div id="destinex_sec">
          <h6 className="service__sub__title">
            Services by Destinex for Abroad Education
          </h6>
          <p className="service__info">
            <ul>
              <li>MCI screening test coaching online</li>
              <li>
                Accurate and transparent counseling for MBBS in many countries
              </li>
              <li>Admission in top medical universities approved by MCI</li>
              <li>Perfect visa application documents without any rejection</li>
              <li>
                Safe travel services provided to students going abroad to pursue
                MBBS
              </li>
              <li>Support for accommodation at the campus</li>
            </ul>
          </p>
        </div>
        <div id="process_sec">
          <h6 className="service__sub__title">
            Our Process of conducting Student Counseling
          </h6>
          <p className="service__info">
            It is advisable to students to attend our counseling regarding{" "}
            <b>MBBS in Russia</b> to clear their doubts:
            <ul>
              <li>
                <b>Online Counseling</b>
                <br /> We provide complete information about the MBBS abroad,
                selection of the best university, advantages & disadvantages of
                pursuing MBBS in different countries, and clear each doubt of
                the students so that they can study MBBS and fulfill their
                wish.The students can get online counseling session from the CEO
                of Destinex and can clear their doubts.
              </li>
              <li>
                <b>Tele-Counseling</b>
                <br /> Destinex has a team of expert counselors that provide
                accurate information from MBBS to PG courses to the students.
                The students can interact with any of the expert counselor
                through phone call, SMS, Whatsapp, Email, and more and get
                resolved their queries regarding MBBS in abroad.
              </li>
              <li>
                <b>Personal Counseling</b>
                <br /> The students do not need to travel to our head office
                only as they can also visit our office in Bangalore, Kochi,
                Chennai, Hyderabad, Bihar, Lucknow & Mumbai.
              </li>
            </ul>
          </p>
        </div>
        <div id="faq_sec">
          <h6 className="service__sub__title">MBBS in Russia FAQ</h6>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <b className="accordion__title">Is MBBS in Russia good?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
									<p className="service__info">Destinex is one of the best overseas education consultants in India. We have already placed hundreds of Indian students in Russia for pursuing MBBS course in the top medical universities that taught MBBS course in English language.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <b className="accordion__title">How much is the cost for MBBS in Russia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
									<p className="service__info">The cost of education in Russia varies from 3,500 to 6,000 USD (tuition fees).</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <b className="accordion__title">Is NEET required for MBBS in Russia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
									<p className="service__info">Yes, NEET score card is mandatory for applying to Russian universities.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <b className="accordion__title">How many years in MBBS in Russia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
									<p className="service__info">Duration of MBBS in Russia is 6 years(5+1). Students can also opt for MBBS in Russian Medium, of which the duration is 7 years which includes 1 year as Russian Language Training.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <b className="accordion__title">Which is the best MBBS College in Russia for Indian Students?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
									<p className="service__info">
										<ul>
											<li>Kazan state medical university</li>
											<li>Crimean Federal University</li>
											<li>Altai State Medical University</li>
											<li>Dagestan State Medical University</li>
											<li>Irkutsk State Medical University</li>
											<li>Mari State Medical University</li>
											<li>Orel State Medical University</li>
											<li>Bashkir State Medical University</li>
										</ul>
									</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <b className="accordion__title">What are the career options for an Indian student doing an MBBS in Russia?</b>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
									<p className="service__info">Once the students have completed their MBBS course in Russia they can practice in Russia itself. They can also complete their PG in USA or Germany. Another option is the student returning to India and practicing in India.</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
				</div>
				<div id="testimonials">
          <h2 className="service__sub__title">Testimonials</h2>
          <HomeCarousel />
				</div>
				<div id="university__videos">
					<h2 className="service__sub__title">Russia University Videos</h2>
					<Row>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//gEHjfxaa51w' frameborder='0' allowfullscreen title="Russia College Video 1" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//HK2CGP8Cppo' frameborder='0' allowfullscreen title="Russia College Video 2" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//1P1UVm9GS6g' frameborder='0' allowfullscreen title="Russia College Video 3" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//dzbsWzodtZ8' frameborder='0' allowfullscreen title="Russia College Video 4" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//kILqU24mlKI' frameborder='0' allowfullscreen title="Russia College Video 5" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//thR3iKRFwVE' frameborder='0' allowfullscreen title="Russia College Video 6" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//9MV-3T1xla8' frameborder='0' allowfullscreen title="Russia College Video 7" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//PEygK0Doreo' frameborder='0' allowfullscreen title="Russia College Video 8" /></div></Col>
						<Col md={6}><div className='embed-container'><iframe src='https://www.youtube.com/embed//LZqtS8F1mfU' frameborder='0' allowfullscreen title="Russia College Video 9" /></div></Col>
					</Row>
				</div>
      </Container>
    </section>
    </DocumentMeta>
  );
}


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
          Apply To MBBS Universities In Russia
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <RussiaForm />
      </Modal.Body>
      {/*<Modal.Footer>
        <Button className="popup__btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}


export default MbbsRussia;
