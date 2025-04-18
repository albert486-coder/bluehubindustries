import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import AdminPanel from "./pages/AdminPanel";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Navbar />
      {/* Central container with the styling from your first design */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/email-verify/:token" element={<EmailVerificationPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/admin-panel" element={<AdminPanel />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="admin-orders" element={<AdminOrdersPage />} />
            </Route>
            <Route path="/product-category/:category" element={<ProductCategoryPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
