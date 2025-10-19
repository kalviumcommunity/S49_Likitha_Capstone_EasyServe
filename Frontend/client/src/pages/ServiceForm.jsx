import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../data/services"; // optional if you have one, else same list

const ServiceForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));
  const [formData, setFormData] = useState({ date: "", time: "", place: "" });

  return (
    <div
      className="flex justify-center items-center min-h-screen text-white"
      style={{
        backgroundImage: `url(${service.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 p-10 rounded-lg border border-gray-300 text-center space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
        <div className="space-y-3">
          <div>
            <label className="mr-2 text-lg">Date:</label>
            <input
              type="date"
              className="bg-transparent border border-gray-400 px-4 py-2 text-white"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mr-2 text-lg">Time:</label>
            <input
              type="time"
              className="bg-transparent border border-gray-400 px-4 py-2 text-white"
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </div>
          <div>
            <label className="mr-2 text-lg">Place:</label>
            <input
              type="text"
              placeholder="Enter location"
              className="bg-transparent border border-gray-400 px-4 py-2 text-white"
              onChange={(e) =>
                setFormData({ ...formData, place: e.target.value })
              }
            />
          </div>
        </div>
        <button
          onClick={() => navigate(`/service/${id}/payment`, { state: formData })}
          className="mt-5 border border-white px-8 py-2 hover:bg-white hover:text-black transition-all"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ServiceForm;
