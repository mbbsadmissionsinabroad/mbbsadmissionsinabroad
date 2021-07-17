import React from "react";
import "../components/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import myLogo from 'public/assets/destinex-logo.png';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MbbsRussia from "../pages/MbbsRussia";
import MbbsUkraine from "../pages/MbbsUkraine";
import MbbsArmenia from "../pages/MbbsArmenia";
import MbbsBelize from "../pages/MbbsBelize";
import MbbsFrance from "../pages/MbbsFrance";
import MbbsGeorgia from "../pages/MbbsGeorgia";
import MbbsKazakhstan from "../pages/MbbsKazakhstan";
import MbbsKyrgyzstan from "../pages/MbbsKyrgyzstan";
import MbbsPhilippines from "../pages/MbbsPhilippines";
import MbbsGermany from "../pages/MbbsGermany";
import MbbsEurope from "../pages/MbbsEurope";
import MbbsFinland from "../pages/MbbsFinland";
import MbbsSweden from "../pages/MbbsSweden";
import MbbsNetherlands from "../pages/MbbsNetherlands";
import MbbsDenmark from "../pages/MbbsDenmark";
import MbbsNorway from "../pages/MbbsNorway";
import MbbsAustria from "../pages/MbbsAustria";
import MbbsPoland from "../pages/MbbsPoland";
import MbbsLithuania from "../pages/MbbsLithuania";
import MbbsBulgaria from "../pages/MbbsBulgaria";
import MbbsNepal from "../pages/MbbsNepal";
import MedicalPgInGermany from "../pages/MedicalPgInGermany";
import MedicalPgInEurope from "../pages/MedicalPgInEurope";
import NursingJobInGermany from "../pages/NursingJobInGermany";
import NursingJobInCanada from "../pages/NursingJobInCanada";
import NursingJobInLithuania from "../pages/NursingJobInLithuania";
import NursingJobInDenmark from "../pages/NursingJobInDenmark";
import NursingJobInNetherlands from "../pages/NursingJobInNetherlands";
import LearnGerman from "../pages/LearnGerman";
import PhilippinesLandingPage from "../pages/PhilippinesLandingPage";
import RussiaLandingPage from "../pages/RussiaLandingPage";
import UkraineLandingPage from "../pages/UkraineLandingPage";
import MbbsBangladesh from "../pages/MbbsBangladesh";
import Blog from "../pages/blogs/Blog";
import MbbsFeeStructure from "../pages/blogs/MbbsFeeStructure";
import MedicalCollegesInIndia from "../pages/blogs/MedicalCollegesInIndia";
import GetMedicalAdmissionInIndiaGovernmentCollege from "../pages/blogs/GetMedicalAdmissionInIndiaGovernmentCollege";
import MedicalEntranceExamNeetPreparation from "../pages/blogs/MedicalEntranceExamNeetPreparation";
import TopRussianMedicalUniversitiesForIndianStudents from "../pages/blogs/TopRussianMedicalUniversitiesForIndianStudents";
import MedicalCollegesInKarnataka from "../pages/blogs/MedicalCollegesInKarnataka";
import StudyMbbsInAbroadAtMciApprovedMedicalUniversities from "../pages/blogs/StudyMbbsInAbroadAtMciApprovedMedicalUniversities";
import MCIApprovedMedicalCollegesInUkraine from "../pages/blogs/MCIApprovedMedicalCollegesInUkraine";
import FeeStructureForUkraine from "../pages/blogs/FeeStructureForUkraine";
import TopPhilippinesMedicalCollege from "../pages/blogs/TopPhilippinesMedicalCollege";
import MbbsFeeInPhilippines from "../pages/blogs/MbbsFeeInPhilippines";
import FeesMbbsInRussia from "../pages/blogs/FeesMbbsInRussia";
import NursingRecruitmentAgencyForAbroad from "../pages/blogs/NursingRecruitmentAgencyForAbroad";
import MbbsCollegesInPhilippines from "../pages/blogs/MbbsCollegesInPhilippines";
import MbbsCollegesInUkraine from "../pages/blogs/MbbsCollegesInUkraine";
import MbbsCollegesInTamilnadu from "../pages/blogs/MbbsCollegesInTamilnadu";
import AbroadRecruitmentAgency from "../pages/blogs/AbroadRecruitmentAgency";
import MbbsCollegesInAndhraPradesh from "../pages/blogs/MbbsCollegesInAndhraPradesh";
import MbbsCollegesInDelhi from "../pages/blogs/MbbsCollegesInDelhi";
import MbbsCollegesInMaharastra from "../pages/blogs/MbbsCollegesInMaharastra";
import ApplyMbbsInPhilippines from "../pages/blogs/ApplyMbbsInPhilippines";
import ApplyMbbsInRussia from "../pages/blogs/ApplyMbbsInRussia";
import ApplyMbbsInUkraine from "../pages/blogs/ApplyMbbsInUkraine";
import DifferenceMbbsInPhilippinesVSIndia from "../pages/blogs/DifferenceMbbsInPhilippinesVSIndia";
import DifferenceMbbsInRussiaVSIndia from "../pages/blogs/DifferenceMbbsInRussiaVSIndia";
import DifferenceMbbsInRussiaVSUkraine from "../pages/blogs/DifferenceMbbsInRussiaVSUkraine";
import MbbsAdmissionLandingPage from "../pages/MbbsAdmissionLandingPage";
import KyrgyzstanLandingPage from "../pages/KyrgyzstanLandingPage";
import PhotoGallery from "../pages/Gallery";
import MciApprovedCollegesInIndia from "../pages/blogs/MciApprovedCollegesInIndia";
import DifferenceMbbsInUkraineVsIndia from "../pages/blogs/DifferenceMbbsInUkraineVsIndia";
import DifferenceMbbsInUkraineVsPhilippines from "../pages/blogs/DifferenceMbbsInUkraineVsPhilippines";
import DifferenceMbbsRussiaVsPhilippines from "../pages/blogs/DifferenceMbbsRussiaVsPhilippines";
import MedicalPgInGermanyAdmissionProcedure from "../pages/blogs/MedicalPgInGermanyAdmissionProcedure";
import WhatIsPgMedicalCourse from "../pages/blogs/WhatIsPgMedicalCourse";
import WhyMbbsCheapInUkraine from "../pages/blogs/WhyMbbsCheapInUkraine";
import WhyMbbsCheapInPhilippines from "../pages/blogs/WhyMbbsCheapInPhilippines";
import WhyMbbsCheapInRussia from "../pages/blogs/WhyMbbsCheapInRussia";
import MbbsInIndia from "../pages/blogs/MbbsInIndia";
import StaffNursingJobsInGermany from "../pages/blogs/StaffNursingJobsInGermany";
import ToDoMedicalPgInGermany from "../pages/blogs/ToDoMedicalPgInGermany";
import ApplyMedicalPgInKarnataka from "../pages/blogs/ApplyMedicalPgInKarnataka";
import TenSecretsAboutMbbsInRussia from "../pages/blogs/TenSecretsAboutMbbsInRussia";
import SevenThingsAboutMbbsInUkraine from "../pages/blogs/SevenThingsAboutMbbsInUkraine";
import FiveAdviceMbbsInPhilippines from "../pages/blogs/FiveAdviceMbbsInPhilippines";
import NursingJobsInGermanyForIndianNurses from "../pages/blogs/NursingJobsInGermanyForIndianNurses";
import LearnGermanCourseOnline from "../pages/blogs/LearnGermanCourseOnline";
import GermanCoachingClassesInBangalore from "../pages/blogs/GermanCoachingClassesInBangalore";
import StudyMbbsAbroadRightNow from "../pages/blogs/StudyMbbsAbroadRightNow";
import RussiaMordoviaStateUniversity from "../pages/blogs/RussiaMordoviaStateUniversity";
import RussiaOrenburgStateMedicalUniversity from "../pages/blogs/RussiaOrenburgStateMedicalUniversity";
import RussiaKazanFederalUniversity from "../pages/blogs/RussiaKazanFederalUniversity";
import RussiaAltaiStateMedicalUniversity from "../pages/blogs/RussiaAltaiStateMedicalUniversity";
import PhilippinesDavaoMedicalSchool from "../pages/blogs/PhilippinesDavaoMedicalSchool";
import PhilippinesAMASchoolofMedicine from "../pages/blogs/PhilippinesAMASchoolofMedicine";
import RussiaTverStateMedicalUniversity from "../pages/blogs/RussiaTverStateMedicalUniversity";
import RussiaPermStateMedicalUniversity from "../pages/blogs/RussiaPermStateMedicalUniversity";
import RussiaSmolenskStateMedicalUniversity from "../pages/blogs/RussiaSmolenskStateMedicalUniversity";
import ApplyNursingJobinGermany from "../pages/blogs/ApplyNursingJobinGermany";
import StudyMBBSinGerman from "../pages/blogs/StudyMBBSinGerman";
import NEETCompulsoryorNotforAbroadEducation from "../pages/blogs/NEETCompulsoryorNotforAbroadEducation";
import HowtoStudyMBBSinGermany from "../pages/blogs/HowtoStudyMBBSinGermany";
import MBBSwithoutNEETForIndianStudents from "../pages/blogs/MBBSwithoutNEETForIndianStudents";
import IvanoFrankivskNationalMedicalUniversityUkraine from "../pages/blogs/IvanoFrankivskNationalMedicalUniversityUkraine";
import TernopilStateMedicalUniversityUkraine from "../pages/blogs/TernopilStateMedicalUniversityUkraine";
import KharkivNationalMedicalUniversityUkraine from "../pages/blogs/KharkivNationalMedicalUniversityUkraine";
import LvivNationalMedicalUniversityUkraine from "../pages/blogs/LvivNationalMedicalUniversityUkraine";
import KievNationalMedicalUniversityUkraine from "../pages/blogs/KievNationalMedicalUniversityUkraine";
import VinnitsaNationalMedicalUniversityUkraine from "../pages/blogs/VinnitsaNationalMedicalUniversityUkraine";
import HeidelbergUniversityGermany from "../pages/blogs/HeidelbergUniversityGermany";
import OurLadyofFatimaUniversityPhilippines from "../pages/blogs/OurLadyofFatimaUniversityPhilippines";
import HaybusakUniversityofYerevanArmenia from "../pages/blogs/HaybusakUniversityofYerevanArmenia";
import UsmleUnitedStatesMedicalLicensingExamination from "../pages/blogs/UsmleUnitedStatesMedicalLicensingExamination";
import Top15TrendsinNursingJobtoWatchforIndianJobSeekers from "../pages/blogs/Top15TrendsinNursingJobtoWatchforIndianJobSeekers";
import SaintTerezaMedicalUniversityArmenia from "../pages/blogs/SaintTerezaMedicalUniversityArmenia";
import YerevanStateMedicalUniversityArmenia from "../pages/blogs/YerevanStateMedicalUniversityArmenia";
import Top4CountriestoStudyMBBSinEurope from "../pages/blogs/Top4CountriestoStudyMBBSinEurope";
import UVGullasCollegeMedicinePhilippines from "../pages/blogs/UVGullasCollegeMedicinePhilippines";
import BogomoletsNationalMedicalUniversityUkraine from "../pages/blogs/BogomoletsNationalMedicalUniversityUkraine";
import KatowiceMedicalUniversity from "../pages/blogs/KatowiceMedicalUniversity";
import OdessaNationalMedicalUniversity from "../pages/blogs/OdessaNationalMedicalUniversity";
import BlackSeaNationalUniversity from "../pages/blogs/BlackSeaNationalUniversity";




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
              {/*<Link exact to="/" className="nav-link"></Link> */}
              <Link to="/" className="nav-link">
                Home
              </Link>
              <NavDropdown title="MBBS Abroad" id="collasible-nav-dropdown">
                <div className="mbbs__abroad">
                  <ul className="navbar__list">
                    <li>
                      <Link to="/mbbs-in-russia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/russia-flag.jpg"
                          alt="Russia Flag"
                        />{" "}
                        MBBS In Russia
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-ukraine">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/ukraine-flag.png"
                          alt="Ukraine Flag"
                        />{" "}
                        MBBS In Ukraine
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-armenia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/armenia-flag.png"
                          alt="Armenia Flag"
                        />{" "}
                        MBBS In Armenia
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-belize">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/belize-flag.png"
                          alt="Belize Flag"
                        />{" "}
                        MBBS In Belize
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-france">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/france-flag.png"
                          alt="France Flag"
                        />{" "}
                        MBBS In France
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-georgia">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/georgia-flag.png"
                          alt="Georgia Flag"
                        />{" "}
                        MBBS In Georgia
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-kazakhstan">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/kazakhstan-flag.png"
                          alt="Kazakhstan Flag"
                        />{" "}
                        MBBS In Kazakhstan
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-kyrgyzstan">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/kyrgyzstan-flag.png"
                          alt="Kyrgystan Flag"
                        />{" "}
                        MBBS In Kyrgyzstan
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-in-philippines">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/philippines-flag.png"
                          alt="Philippines Flag"
                        />{" "}
                        MBBS In Philippines
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-germany-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        MBBS In Germany
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-europe-from-mci-approved-university">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/europe-flag.png"
                          alt="Europe Flag"
                        />{" "}
                        MBBS In Europe
                      </Link>{" "}
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-finland-from-mci-approved-universities">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/finland-flag.png"
                          alt="Finland Flag"
                        />{" "}
                        MBBS In Finland
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-sweden-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/sweden-flag.png"
                          alt="Sweden Flag"
                        />{" "}
                        MBBS In Sweden
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-netherlands-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/netherlands-flag.png"
                          alt="Netherlands Flag"
                        />{" "}
                        MBBS In Netherlands
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-denmark-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/denmark-flag.png"
                          alt="Denmark Flag"
                        />{" "}
                        MBBS In Denmark
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-norway-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/norway-flag.jpg"
                          alt="Norway Flag"
                        />{" "}
                        MBBS In Norway
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-austria-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/austria-flag.png"
                          alt="Austria Flag"
                        />{" "}
                        MBBS In Austria
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-poland-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/poland-flag.jpg"
                          alt="Poland Flag"
                        />{" "}
                        MBBS In Poland
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-lithuania">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/lithuania-flag.png"
                          alt="Lithuania Flag"
                        />{" "}
                        MBBS In Lithuania
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-bulgaria-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/bulgaria-flag.jpg"
                          alt="Bulgaria Flag"
                        />{" "}
                        MBBS In Bulgaria
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-nepal-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/nepal-flag.jpg"
                          alt="Nepal Flag"
                        />{" "}
                        MBBS In Nepal
                      </Link>
                    </li>
                    <li>
                      <Link to="/mbbs-admission-in-bangladesh-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/bangladesh-flag.jpg"
                          alt="Nepal Flag"
                        />{" "}
                        MBBS In Bangladesh
                      </Link>
                    </li>
                  </ul>
                </div>
              </NavDropdown>
              <NavDropdown title="PG in Abroad" id="collasible-nav-dropdown">
                <div className="pg__abroad">
                  <ul className="navbar__list">
                    <li>
                      <Link to="/medical-pg-in-germany">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        Medical PG In Germany
                      </Link>
                    </li>
                    <li>
                      <Link to="/medical-pg-in-europe-for-indian-students">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/europe-flag.png"
                          alt="Europe Flag"
                        />{" "}
                        Medical PG In Europe
                      </Link>{" "}
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
                      <Link to="/nursing-job-in-germany">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/germany-flag.png"
                          alt="Germany Flag"
                        />{" "}
                        Nursing Job In Germany
                      </Link>
                    </li>
                    <li>
                      <Link to="/nursing-jobs-in-netherlands">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/netherlands-flag.png"
                          alt="Netherlands Flag"
                        />{" "}
                        Nursing Job In Netherlands
                      </Link>
                    </li>
                    <li>
                      <Link to="/nursing-jobs-in-denmark">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/denmark-flag.png"
                          alt="Denmark Flag"
                        />{" "}
                        Nursing Job In Denmark
                      </Link>
                    </li>
                    <li>
                      <Link to="/nursing-jobs-in-lithuania">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/lithuania-flag.png"
                          alt="Lithuania Flag"
                        />{" "}
                        Nursing Job In Lithuania
                      </Link>
                    </li>
                    <li>
                      <Link to="/nursing-jobs-in-canada">
                        <img
                          className="country__flag"
                          src="/assets/images/country-flag/canada-flag.jpg"
                          alt="Canada Flag"
                        />{" "}
                        Nursing Jobs In Canada
                      </Link>
                    </li>
                  </ul>
                </div>
              </NavDropdown>
              {/*<Nav.Link href="#deets">Contact</Nav.Link> */}
              <Link
                to="/learn-german-language-course-in-bangalore"
                className="nav-link"
              >
                Learn German
              </Link>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default NavBar;
