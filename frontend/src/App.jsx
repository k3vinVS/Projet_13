import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Error from "./pages/Error";
import Transactions from "./pages/Transactions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/profile/" element={<User />} />
        <Route path="/user/profile/transactions" element={<Transactions />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
