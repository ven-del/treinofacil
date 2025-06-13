import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "../../layouts/LandingPageLayout";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
                  <Route path='/' element={<SiteLayout />}>
                      
                  </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
