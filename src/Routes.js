import React from "react";
import MenuopenTwo from "pages/MenuopenTwo";
import Main from "pages/Main";
import Desktopapp from "pages/Desktopapp";
import Menuopen from "pages/Menuopen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menuopen />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktopapp" element={<Desktopapp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/menuopentwo" element={<MenuopenTwo />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
