import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import Home from "../../pages/Home";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
                  <Route path='/' element={<LandingPageLayout />}>
                  <Route index element={<Home />} />
                  </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
