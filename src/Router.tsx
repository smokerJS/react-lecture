import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Path from "model/Path";
import IndexPage from "pages/index";
import Study1Page from "pages/study1";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.INDEX} element={<IndexPage />} />
        <Route path={Path.STUDY1} element={<Study1Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
