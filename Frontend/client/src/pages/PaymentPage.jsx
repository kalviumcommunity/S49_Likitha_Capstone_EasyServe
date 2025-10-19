import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services"; // use your service data file or copy the array here

const PaymentPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id));
  const bookingData = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("");

  if (!service)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Service Not Found
      </div>
    );

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    navigate(`/confirmation/${service.id}`, {
      state: { ...bookingData, paymentMethod },
    });
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
        className="relative z-10 bg-gray-900/80 p-10 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6">Payment for {service.name}</h1>
        <p className="text-gray-300 mb-4">Amount: <b>{service.price}</b></p>

        <div className="space-y-4">
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="UPI"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            UPI / Google Pay
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Credit Card"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Credit / Debit Card
          </label>
          <label className="block">
            <input
              type="radio"
              name="payment"
              value="Cash on Service"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Cash on Service
          </label>
        </div>

        <motion.button
          onClick={handleConfirm}
          whileHover={{ scale: 1.05 }}
          className="mt-6 w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-all"
        >
          Confirm Payment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
