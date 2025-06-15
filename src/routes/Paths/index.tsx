import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageLayout from "../../layouts/LandingPageLayout";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
                  <Route path='/' element={<LandingPageLayout />}>
                  <Route index element={<Home />} />
                  <Route path='*' element={<NotFound />} />
                  </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
