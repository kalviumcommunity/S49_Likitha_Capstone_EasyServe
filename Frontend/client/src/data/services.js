// src/data/services.js
import photographer from "../assets/photographer.jpg";
import plumber from "../assets/plumber.jpg";
import hairtrim from "../assets/hairtrim.jpg";
import doctor from "../assets/doctor.jpg";
import carpenter from "../assets/carpenter.jpg";
import editor from "../assets/editor.jpg";
import ac from "../assets/ac.jpg";
import event from "../assets/event.jpg";
import laundry from "../assets/laundry.jpg";

const services = [
  {
    id: 1,
    name: "Photographer",
    email: "abcd@gmail.com",
    price: "₹3999",
    img: photographer,
    desc: `"Meet [ABCD], your dedicated visual storyteller. Specializing in [types of photography], we capture moments that last a lifetime. Contact us to turn your vision into stunning reality."`,
  },
  {
    id: 2,
    name: "Plumber",
    email: "plumber@gmail.com",
    price: "₹320",
    img: plumber,
    desc: `"Need expert plumbing help? [ABCD] ensures every leak, block, and repair is handled with precision and trust."`,
  },
  {
    id: 3,
    name: "Hair Trim",
    email: "stylist@gmail.com",
    price: "₹499",
    img: hairtrim,
    desc: `"Transform your look with [ABCD], your personal grooming expert dedicated to bringing out your best self."`,
  },
  {
    id: 4,
    name: "Doctor",
    email: "doc@gmail.com",
    price: "₹499",
    img: doctor,
    desc: `"Your health is our priority. [ABCD] provides reliable care and expert consultation — anytime, anywhere."`,
  },
  {
    id: 5,
    name: "Carpenter",
    email: "carpenter@gmail.com",
    price: "₹999",
    img: carpenter,
    desc: `"Crafting excellence from wood — [ABCD] delivers fine craftsmanship that stands the test of time."`,
  },
  {
    id: 6,
    name: "Editor",
    email: "editor@gmail.com",
    price: "₹799",
    img: editor,
    desc: `"From rough cuts to perfection — [ABCD] refines your stories into cinematic masterpieces."`,
  },
  {
    id: 7,
    name: "AC Installation",
    email: "coolingpro@gmail.com",
    price: "₹990",
    img: ac,
    desc: `"Stay cool and comfortable with [ABCD] — trusted for expert AC installation and servicing."`,
  },
  {
    id: 8,
    name: "Event Manager",
    email: "events@gmail.com",
    price: "₹5999",
    img: event,
    desc: `"Creating unforgettable experiences — [ABCD] brings your dream events to life with perfection."`,
  },
  {
    id: 9,
    name: "Laundry",
    email: "laundry@gmail.com",
    price: "₹799",
    img: laundry,
    desc: `"Clean, crisp, and cared for — [ABCD] ensures your laundry looks as good as new."`,
  },
];

export default services;
