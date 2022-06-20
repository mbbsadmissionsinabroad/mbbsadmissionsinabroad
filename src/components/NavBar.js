import React from "react";
import "../components/Navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <div>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Navbar.Brand href="/">
            <div className="logo__text">
              <img src="assets/New-Lyf Logo.png" alt="Destinex Logo" />
              <p>Make a Lyf with New-Lyf...</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {/*<a exact to="/" className="nav-a"></a> */}
              <a href="/" className="nav-link">
                Home
              </a>
              <NavDropdown title="MBBS Abroad" id="collasible-nav-dropdown">
                <div className="mbbs__abroad">
                  <ul className="navbar__list">
                    <li>
                      <a href="/mbbs-in-russia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/russia-flag.jpg"
                          alt="Russia Flag"
                        />{" "}
                        MBBS In Russia
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-ukraine">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/ukraine-flag.png"
                          alt="Ukraine Flag"
                        />{" "}
                        MBBS In Ukraine
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-armenia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/armenia-flag.png"
                          alt="Armenia Flag"
                        />{" "}
                        MBBS In Armenia
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-belize">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/belize-flag.png"
                          alt="Belize Flag"
                        />{" "}
                        MBBS In Belize
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-france">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/france-flag.png"
                          alt="France Flag"
                        />{" "}
                        MBBS In France
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-georgia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/georgia-flag.png"
                          alt="Georgia Flag"
                        />{" "}
                        MBBS In Georgia
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-kazakhstan">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/kazakhstan-flag.png"
                          alt="Kazakhstan Flag"
                        />{" "}
                        MBBS In Kazakhstan
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-kyrgyzstan">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/kyrgyzstan-flag.png"
                          alt="Kyrgystan Flag"
                        />{" "}
                        MBBS In Kyrgyzstan
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-in-philippines">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/philippines-flag.png"
                          alt="Philippines Flag"
                        />{" "}
                        MBBS In Philippines
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-germany-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        MBBS In Germany
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-europe-from-mci-approved-university">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/europe-flag.png"
                          alt="Europe Flag"
                        />{" "}
                        MBBS In Europe
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-finland-from-mci-approved-universities">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/finland-flag.png"
                          alt="Finland Flag"
                        />{" "}
                        MBBS In Finland
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-sweden-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/sweden-flag.png"
                          alt="Sweden Flag"
                        />{" "}
                        MBBS In Sweden
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-netherlands-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/netherlands-flag.png"
                          alt="Netherlands Flag"
                        />{" "}
                        MBBS In Netherlands
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-denmark-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/denmark-flag.png"
                          alt="Denmark Flag"
                        />{" "}
                        MBBS In Denmark
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-norway-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/norway-flag.jpg"
                          alt="Norway Flag"
                        />{" "}
                        MBBS In Norway
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-austria-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/austria-flag.png"
                          alt="Austria Flag"
                        />{" "}
                        MBBS In Austria
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-poland-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/poland-flag.jpg"
                          alt="Poland Flag"
                        />{" "}
                        MBBS In Poland
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-lithuania">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/lithuania-flag.png"
                          alt="Lithuania Flag"
                        />{" "}
                        MBBS In Lithuania
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-bulgaria-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/bulgaria-flag.jpg"
                          alt="Bulgaria Flag"
                        />{" "}
                        MBBS In Bulgaria
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-nepal-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/nepal-flag.jpg"
                          alt="Nepal Flag"
                        />{" "}
                        MBBS In Nepal
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-bangladesh-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/bangladesh-flag.jpg"
                          alt="Bangladesh Flag"
                        />{" "}
                        MBBS In Bangladesh
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-malaysia-for-indian-students">
                        <img
                          className="country__flag"
                          src="https://cdn.britannica.com/31/4031-004-82B0F3A9/Flag-Malaysia.jpg"
                          alt="Malaysia Flag"
                        />{" "}
                        MBBS In Malaysia
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-romania-for-indian-students">
                        <img
                          className="country__flag"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png"
                          alt="Romania Flag"
                        />{" "}
                        MBBS In Romania
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-uzbekistan-for-indian-students">
                        <img
                          className="country__flag"
                          src="https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg"
                          alt="Uzbekistan Flag"
                        />{" "}
                        MBBS In Uzbekistan
                      </a>
                    </li>
                    <li>
                      <a href="/mbbs-admission-in-spain-for-indian-students">
                        <img
                          className="country__flag"
                          src="https://stuffedeyes.files.wordpress.com/2018/06/spain-2906824_960_720.png?w=748"
                          alt="Spain Flag"
                        />{" "}
                        MBBS In Spain
                      </a>
                    </li>
                  </ul>
                </div>
              </NavDropdown>
              <NavDropdown title="PG in Abroad" id="collasible-nav-dropdown">
                <div className="pg__abroad">
                  <ul className="navbar__list">
                    <li>
                      <a href="/medical-pg-in-germany">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        Medical PG In Germany
                      </a>
                    </li>
                    <li>
                      <a href="/medical-pg-in-europe-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/europe-flag.png"
                          alt="Europe Flag"
                        />{" "}
                        Medical PG In Europe
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Nursing in Abroad"
                id="collasible-nav-dropdown"
              >
                <div className="nursing__abroad">
                  <ul className="navbar__list">
                    <li>
                      <a href="/nursing-job-in-germany">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        Nursing Job In Germany
                      </a>
                    </li>
                    <li>
                      <a href="/nursing-jobs-in-netherlands">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/netherlands-flag.png"
                          alt="Netherlands Flag"
                        />{" "}
                        Nursing Job In Netherlands
                      </a>
                    </li>
                    <li>
                      <a href="/nursing-jobs-in-denmark">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/denmark-flag.png"
                          alt="Denmark Flag"
                        />{" "}
                        Nursing Job In Denmark
                      </a>
                    </li>
                    <li>
                      <a href="/nursing-jobs-in-lithuania">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/lithuania-flag.png"
                          alt="Lithuania Flag"
                        />{" "}
                        Nursing Job In Lithuania
                      </a>
                    </li>
                    <li>
                      <a href="/nursing-jobs-in-canada">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/canada-flag.jpg"
                          alt="Canada Flag"
                        />{" "}
                        Nursing Jobs In Canada
                      </a>
                    </li>
                  </ul>
                </div>
              </NavDropdown>
              <a
                href="/learn-german-language-course-in-bangalore"
                className="nav-link"
              >
                Learn German
              </a>

              <a href="/contact" className="nav-link">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/mbbs-in-russia">
            <MbbsRussia />
          </Route>
          <Route path="/mbbs-in-ukraine">
            <MbbsUkraine />
          </Route>
          <Route path="/mbbs-in-armenia">
            <MbbsArmenia />
          </Route>
          <Route path="/mbbs-in-belize">
            <MbbsBelize />
          </Route>
          <Route path="/mbbs-in-france">
            <MbbsFrance />
          </Route>
          <Route path="/mbbs-in-georgia">
            <MbbsGeorgia />
          </Route>
          <Route path="/mbbs-in-kazakhstan">
            <MbbsKazakhstan />
          </Route>
          <Route path="/mbbs-in-kyrgyzstan">
            <MbbsKyrgyzstan />
          </Route>
          <Route path="/mbbs-in-philippines">
            <MbbsPhilippines />
          </Route>
          <Route path="/mbbs-admission-in-germany-for-indian-students">
            <MbbsGermany />
          </Route>
          <Route path="/mbbs-admission-in-europe-from-mci-approved-university">
            <MbbsEurope />
          </Route>
          <Route path="/mbbs-admission-in-finland-from-mci-approved-universities">
            <MbbsFinland />
          </Route>
          <Route path="/mbbs-admission-in-sweden-for-indian-students">
            <MbbsSweden />
          </Route>
          <Route path="/mbbs-admission-in-netherlands-for-indian-students">
            <MbbsNetherlands />
          </Route>
          <Route path="/mbbs-admission-in-denmark-for-indian-students">
            <MbbsDenmark />
          </Route>
          <Route path="/mbbs-admission-in-norway-for-indian-students">
            <MbbsNorway />
          </Route>
          <Route path="/mbbs-admission-in-austria-for-indian-students">
            <MbbsAustria />
          </Route>
          <Route path="/mbbs-admission-in-poland-for-indian-students">
            <MbbsPoland />
          </Route>
          <Route path="/mbbs-admission-in-lithuania">
            <MbbsLithuania />
          </Route>
          <Route path="/mbbs-admission-in-bulgaria-for-indian-students">
            <MbbsBulgaria />
          </Route>
          <Route path="/mbbs-admission-in-nepal-for-indian-students">
            <MbbsNepal />
          </Route>
          <Route path="/medical-pg-in-germany">
            <MedicalPgInGermany />
          </Route>
          <Route path="/medical-pg-in-europe-for-indian-students">
            <MedicalPgInEurope />
          </Route>
          <Route path="/nursing-job-in-germany">
            <NursingJobInGermany />
          </Route>
          <Route path="/nursing-jobs-in-canada">
            <NursingJobInCanada />
          </Route>
          <Route path="/nursing-jobs-in-lithuania">
            <NursingJobInLithuania />
          </Route>
          <Route path="/nursing-jobs-in-denmark">
            <NursingJobInDenmark />
          </Route>
          <Route path="/nursing-jobs-in-netherlands">
            <NursingJobInNetherlands />
          </Route>
          <Route path="/learn-german-language-course-in-bangalore">
            <LearnGerman />
          </Route>
          <Route path="/mbbs-admission-in-bangladesh-for-indian-students">
            <MbbsBangladesh />
          </Route>

          <Route path="/gallery">
            <PhotoGallery />
          </Route>

          <Route path="/philippines-landing-page">
            <PhilippinesLandingPage />
          </Route>
          <Route path="/russia-landing-page">
            <RussiaLandingPage />
          </Route>
          <Route path="/ukraine-landing-page">
            <UkraineLandingPage />
          </Route>
          <Route path="/2020-mbbs-admissions-in-abroad">
            <MbbsAdmissionLandingPage />
          </Route>
          <Route path="/kyrgyzstan-landing-page">
            <KyrgyzstanLandingPage />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/2020-mbbs-fee-structure-in-india-and-abroad">
            <MbbsFeeStructure />
          </Route>
          <Route path="/mbbs-seats-in-india">
            <MedicalCollegesInIndia />
          </Route>
          <Route path="/how-to-get-medical-admission-in-indian-government-college">
            <GetMedicalAdmissionInIndiaGovernmentCollege />
          </Route>
          <Route path="/medical-entrance-exam-neet-2020-preparation">
            <MedicalEntranceExamNeetPreparation />
          </Route>
          <Route path="/top-russian-medical-universities-for-indian-students">
            <TopRussianMedicalUniversitiesForIndianStudents />
          </Route>
          <Route path="/medical-colleges-in-karnataka">
            <MedicalCollegesInKarnataka />
          </Route>
          <Route path="/mci-approved-medical-universities-in-abroad">
            <StudyMbbsInAbroadAtMciApprovedMedicalUniversities />
          </Route>
          <Route path="/2020-mci-approved-medical-colleges-in-ukraine-for-indian-students">
            <MCIApprovedMedicalCollegesInUkraine />
          </Route>
          <Route path="/2020-admission-fees-structure-for-indian-students-to-study-mbbs-in-ukraine">
            <FeeStructureForUkraine />
          </Route>
          <Route path="/top-philippines-medical-college-for-indian-students-2020-admission">
            <TopPhilippinesMedicalCollege />
          </Route>
          <Route path="/2020-mbbs-fee-in-philippines-for-indian-students">
            <MbbsFeeInPhilippines />
          </Route>
          <Route path="/fee-of-mbbs-in-russia-from-mci-approved-universities-for-2020-admission">
            <FeesMbbsInRussia />
          </Route>
          <Route path="/how-do-choose-an-indian-nursing-recruitment-agency-for-abroad">
            <NursingRecruitmentAgencyForAbroad />
          </Route>
          <Route path="/top-10-mbbs-colleges-in-philippines-for-2020-admission">
            <MbbsCollegesInPhilippines />
          </Route>
          <Route path="/top-10-mbbs-colleges-in-ukraine-for-2020-admission">
            <MbbsCollegesInUkraine />
          </Route>
          <Route path="/top-10-medical-colleges-in-tamilnadu-for-mbbs-admission">
            <MbbsCollegesInTamilnadu />
          </Route>
          <Route path="/abroad-nursing-recruitment-agency-in-india">
            <AbroadRecruitmentAgency />
          </Route>
          <Route path="/top-10-medical-colleges-in-andhra-pradesh-for-2020-admission">
            <MbbsCollegesInAndhraPradesh />
          </Route>
          <Route path="/top-10-medical-colleges-in-delhi-for-2020-admission">
            <MbbsCollegesInDelhi />
          </Route>
          <Route path="/top-10-medical-colleges-in-maharashtra-for-2020-admission">
            <MbbsCollegesInMaharastra />
          </Route>
          <Route path="/how-to-apply-mbbs-in-philippines">
            <ApplyMbbsInPhilippines />
          </Route>
          <Route path="/how-to-apply-mbbs-in-russia">
            <ApplyMbbsInRussia />
          </Route>
          <Route path="/how-to-apply-mbbs-in-ukraine">
            <ApplyMbbsInUkraine />
          </Route>
          <Route path="/list-of-medical-colleges-in-india-approved-by-mci">
            <MciApprovedCollegesInIndia />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-philippines-vs-india-for-indian-students">
            <DifferenceMbbsInPhilippinesVSIndia />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-russia-vs-india-for-indian-students">
            <DifferenceMbbsInRussiaVSIndia />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-russia-vs-ukraine-for-indian-students">
            <DifferenceMbbsInRussiaVSUkraine />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-ukraine-vs-india-for-indian-students">
            <DifferenceMbbsInUkraineVsIndia />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-ukraine-vs-philippines-for-indian-students">
            <DifferenceMbbsInUkraineVsPhilippines />
          </Route>
          <Route path="/difference-of-studying-mbbs-in-russia-vs-philippines-for-indian-students">
            <DifferenceMbbsRussiaVsPhilippines />
          </Route>
          <Route path="/medical-pg-in-germany-admission-procedure">
            <MedicalPgInGermanyAdmissionProcedure />
          </Route>
          <Route path="/what-is-pg-medical-course">
            <WhatIsPgMedicalCourse />
          </Route>
          <Route path="/why-is-mbbs-cheap-in-ukraine">
            <WhyMbbsCheapInUkraine />
          </Route>
          <Route path="/why-is-mbbs-cheap-in-philippines">
            <WhyMbbsCheapInPhilippines />
          </Route>
          <Route path="/why-is-mbbs-cheap-in-russia">
            <WhyMbbsCheapInRussia />
          </Route>
          <Route path="/mbbs-in-india">
            <MbbsInIndia />
          </Route>
          <Route path="/staff-nursing-jobs-in-germany-without-ielts">
            <StaffNursingJobsInGermany />
          </Route>
          <Route path="/how-to-do-medical-pg-in-germany">
            <ToDoMedicalPgInGermany />
          </Route>
          <Route path="/how-to-apply-medical-pg-in-karnataka">
            <ApplyMedicalPgInKarnataka />
          </Route>
          <Route path="/10-secrets-about-mbbs-in-russia-that-nobody-will-tell-you">
            <TenSecretsAboutMbbsInRussia />
          </Route>
          <Route path="/7-things-you-most-likely-didnt-know-about-mbbs-in-ukraine">
            <SevenThingsAboutMbbsInUkraine />
          </Route>
          <Route path="/5-advices-that-you-must-listen-before-studying-mbbs-in-philippines">
            <FiveAdviceMbbsInPhilippines />
          </Route>
          <Route path="/nursing-jobs-in-germany-for-indian-nurses">
            <NursingJobsInGermanyForIndianNurses />
          </Route>
          <Route path="/german-language-course-online-for-beginners">
            <LearnGermanCourseOnline />
          </Route>
          <Route path="/german-coaching-classes-in-bangalore">
            <GermanCoachingClassesInBangalore />
          </Route>
          <Route path="/what-can-you-do-about-study-mbbs-abroad-right-now">
            <StudyMbbsAbroadRightNow />
          </Route>
          <Route path="/mbbs-admission-russia-mordovia-state-university">
            <RussiaMordoviaStateUniversity />
          </Route>
          <Route path="/mbbs-admission-russia-orenburg-state-medical-university">
            <RussiaOrenburgStateMedicalUniversity />
          </Route>
          <Route path="/mbbs-admission-russia-kazan-federal-university">
            <RussiaKazanFederalUniversity />
          </Route>
          <Route path="/mbbs-admission-russia-altai-state-medical-university">
            <RussiaAltaiStateMedicalUniversity />
          </Route>
          <Route path="/mbbs-admission-philippines-davao-medical-school">
            <PhilippinesDavaoMedicalSchool />
          </Route>
          <Route path="/mbbs-admission-philippines-ama-school-of-medicine">
            <PhilippinesAMASchoolofMedicine />
          </Route>
          <Route path="/mbbs-admission-russia-tver-state-medical-university">
            <RussiaTverStateMedicalUniversity />
          </Route>
          <Route path="/mbbs-admission-russia-perm-state-medical-university">
            <RussiaPermStateMedicalUniversity />
          </Route>
          <Route path="/mbbs-admission-russia-smolensk-state-medical-university">
            <RussiaSmolenskStateMedicalUniversity />
          </Route>
          <Route path="/how-to-apply-for-nursing-job-in-germany">
            <ApplyNursingJobinGermany />
          </Route>
          <Route path="/how-can-i-study-mbbs-in-germany">
            <StudyMBBSinGerman />
          </Route>
          <Route path="/neet-compulsory-or-not-for-abroad-education">
            <NEETCompulsoryorNotforAbroadEducation />
          </Route>
          <Route path="/how-to-study-mbbs-in-germany">
            <HowtoStudyMBBSinGermany />
          </Route>
          <Route path="/mbbs-without-neet-for-indian-students">
            <MBBSwithoutNEETForIndianStudents />
          </Route>
          <Route path="/ivano-frankivsk-national-medical-university-ukraine">
            <IvanoFrankivskNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/ternopil-state-medical-university-ukraine">
            <TernopilStateMedicalUniversityUkraine />
          </Route>
          <Route path="/kharkiv-national-medical-university-ukraine">
            <KharkivNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/lviv-national-medical-university-ukraine">
            <LvivNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/kiev-national-medical-university-ukraine">
            <KievNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/vinnitsa-national-medical-university-ukraine">
            <VinnitsaNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/heidelberg-university-germany">
            <HeidelbergUniversityGermany />
          </Route>
          <Route path="/our-lady-of-fatima-university-philippines">
            <OurLadyofFatimaUniversityPhilippines />
          </Route>
          <Route path="/haybusak-university-of-yerevan-armenia">
            <HaybusakUniversityofYerevanArmenia />
          </Route>
          <Route path="/usmle-united-states-medical-licensing-examination">
            <UsmleUnitedStatesMedicalLicensingExamination />
          </Route>
          <Route path="/top-15-trends-in-nursing-job-to-watch-for-indian-job-seekers">
            <Top15TrendsinNursingJobtoWatchforIndianJobSeekers />
          </Route>
          <Route path="/st-tereza-medical-university-in-armenia">
            <SaintTerezaMedicalUniversityArmenia />
          </Route>
          <Route path="/yerevan-state-medical-university-in-armenia">
            <YerevanStateMedicalUniversityArmenia />
          </Route>
          <Route path="/top-4-countries-to-study-mbbs-in-europe-at-mci-approved-university">
            <Top4CountriestoStudyMBBSinEurope />
          </Route>
          <Route path="/uv-gullas-college-of-medicine-in-philippines">
            <UVGullasCollegeMedicinePhilippines />
          </Route>
          <Route path="/bogomolets-national-medical-university-ukraine">
            <BogomoletsNationalMedicalUniversityUkraine />
          </Route>
          <Route path="/katowice-medical-university-poland">
            <KatowiceMedicalUniversity />
          </Route>
          <Route path="/odessa-national-medical-university-ukraine">
            <OdessaNationalMedicalUniversity />
          </Route>
          <Route path="/petro-mohyla-black-sea-national-university-ukraine">
            <BlackSeaNationalUniversity />
          </Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default NavBar;
