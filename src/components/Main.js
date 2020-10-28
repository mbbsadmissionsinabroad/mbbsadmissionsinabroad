import React from "react";
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


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
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
          <Route path="/philippines-landing-page">
            <PhilippinesLandingPage />
          </Route>          
          <Route path="/russia-landing-page">
            <RussiaLandingPage />
          </Route>          
          <Route path="/ukraine-landing-page">
            <UkraineLandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
