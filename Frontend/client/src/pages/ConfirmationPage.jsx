import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";

const ConfirmationPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id));
  const data = location.state || {};

  if (!service)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Service Not Found
      </div>
    );

  const handleFinish = () => {
    navigate("/thankyou");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${service.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 bg-gray-900/80 p-10 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Confirm Your Details</h1>
        <div className="space-y-4 text-lg">
          <p><b>Service:</b> {service.name}</p>
          <p><b>Date:</b> {data.date || "-"}</p>
          <p><b>Time:</b> {data.time || "-"}</p>
          <p><b>Location:</b> {data.location || "-"}</p>
          <p><b>Payment:</b> {data.paymentMethod || "-"}</p>
          <p><b>Amount:</b> {service.price}</p>
        </div>

        <motion.button
          onClick={handleFinish}
          whileHover={{ scale: 1.05 }}
          className="mt-8 w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-all"
        >
          Confirm & Book Service
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ConfirmationPage;
