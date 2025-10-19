import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import photographer from "../assets/photographer.jpg";
import plumber from "../assets/plumber.jpg";
import hairtrim from "../assets/hairtrim.jpg";
import doctor from "../assets/doctor.jpg";
import carpenter from "../assets/carpenter.jpg";
import editor from "../assets/editor.jpg";
import ac from "../assets/ac.jpg";
import event from "../assets/event.jpg";
import laundry from "../assets/laundry.jpg";

import {
  Camera,
  Wrench,
  Scissors,
  Stethoscope,
  Hammer,
  Film,
  Snowflake,
  WashingMachine,
  Home,
  Info,
  Phone,
  Settings,
} from "lucide-react";

const IndexPage = () => {
  const navigate = useNavigate();

  const iconList = [
    { icon: Camera },
    { icon: Wrench },
    { icon: Scissors },
    { icon: Stethoscope },
    { icon: Hammer },
    { icon: Film },
    { icon: Snowflake },
    { icon: WashingMachine },
  ];

  const services = [
    { id: 1, name: "Photographer", price: "₹3999", img: photographer },
    { id: 2, name: "Plumber", price: "₹320", img: plumber },
    { id: 3, name: "Hair Trim", price: "₹499", img: hairtrim },
    { id: 4, name: "Doctor", price: "₹499", img: doctor },
    { id: 5, name: "Carpenter", price: "₹999", img: carpenter },
    { id: 6, name: "Editor", price: "₹799", img: editor },
    { id: 7, name: "AC Installation", price: "₹990", img: ac },
    { id: 8, name: "Event Manager", price: "₹5999", img: event },
    { id: 9, name: "Laundry", price: "₹799", img: laundry },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-black">
      {/* --- Icon Row --- */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-16 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {iconList.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <Icon size={38} className="text-gray-800" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- Tagline --- */}
      <motion.div
        className="text-center mt-4 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="script text-3xl sm:text-4xl text-gray-900 italic tracking-wide">
          “Service Made Simple : Anytime, Anywhere, Any Service!”
        </p>
      </motion.div>

      {/* --- Services Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 py-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.7, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="text-center py-5">
              <h3 className="font-semibold text-lg tracking-wide">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Starts at {service.price}
              </p>
             <button
  onClick={() => navigate(`/service/${service.id}`)}
  className="border border-black px-6 py-1 text-sm rounded-md hover:bg-gray-100 transition-all duration-300"
>
  Add
</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Footer --- */}
      <motion.footer
        className="bg-black text-white py-10 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="text-center serif text-3xl tracking-wide">EasyServe</div>
        <div className="border-t border-gray-700 w-1/2 mx-auto my-4"></div>
        <div className="flex justify-center gap-20 mt-4">
          <div className="flex flex-col items-center space-y-1 hover:opacity-80">
            <Home size={22} />
            <p className="text-sm">Home</p>
          </div>
          <div className="flex flex-col items-center space-y-1 hover:opacity-80">
            <Info size={22} />
            <p className="text-sm">About Us</p>
          </div>
          <div className="flex flex-col items-center space-y-1 hover:opacity-80">
            <Phone size={22} />
            <p className="text-sm">Contact Us</p>
          </div>
          <div className="flex flex-col items-center space-y-1 hover:opacity-80">
            <Settings size={22} />
            <p className="text-sm">Service</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default IndexPage;
