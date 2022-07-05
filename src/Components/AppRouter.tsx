import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Main } from "./Main";



const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main/*" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;