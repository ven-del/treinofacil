import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import LoggedLayout from "../../layouts/LoggedLayout";
import Dashboard from "../../pages/Dashboard";
import Calendar from "../../pages/Calendar";
import TrainingPlan from "../../pages/TrainingPlan";
import HealthTracking from "../../pages/HealthTracking";
import Quests from "../../pages/Quests";
import ExerciseDetails from "../../pages/ExerciseDetails";
import QuestDetails from "../../pages/QuestDetails";
import Profile from "../../pages/Profile";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<Home />} />
            <Route path="cadastro" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/app" element={<LoggedLayout />}>
            <Route path='exercicios' element={<Dashboard />} />
            <Route path="exercicios/:id" element={<ExerciseDetails />} />
            <Route path='calendario' element={<Calendar />} />
            <Route path="plano-de-treino" element={<TrainingPlan />} />
            <Route path="acompanhamento-fisico" element={<HealthTracking />} />
            <Route path="quests" element={<Quests />} />
            <Route path="quests/:id" element={<QuestDetails />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
