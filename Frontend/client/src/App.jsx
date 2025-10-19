import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// Main layout & pages
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ServiceDetails from "./pages/ServiceDetails";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ThankYouPage from "./pages/ThankYouPage";

// Set your backend base URL
axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <Routes>
      {/* Main layout wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<IndexPage />} />

        {/* Auth pages */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Services flow */}
        <Route path="service/:id" element={<ServiceDetails />} />
        <Route path="booking/:id" element={<BookingPage />} />
        <Route path="payment/:id" element={<PaymentPage />} />
        <Route path="confirmation/:id" element={<ConfirmationPage />} />
        <Route path="thankyou" element={<ThankYouPage />} />
      </Route>
    </Routes>
  );
}

export default App;
