import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import "./App.css";
import ProtectedRouter from "./components/Help/ProtectedRoute";
import User from "./components/User/User";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
