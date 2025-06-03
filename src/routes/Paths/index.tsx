import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "../../SiteLayout";

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
