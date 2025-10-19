import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services"; // or copy service data here if no file
import { motion } from "framer-motion";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
  });

  if (!service)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-2xl">
        Service Not Found
      </div>
    );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/payment/${service.id}`, { state: formData }); // ✅ go to payment
  };

  return (
    <div
      className="relative min-h-screen bg-black text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${service.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 bg-gray-900/80 p-10 rounded-lg shadow-xl w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-6">Book {service.name}</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Select Date</label>
            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:ring focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Select Time</label>
            <input
              type="time"
              name="time"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:ring focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Enter Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter address"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white focus:ring focus:ring-gray-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-all"
          >
            Confirm & Continue
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingPage;
