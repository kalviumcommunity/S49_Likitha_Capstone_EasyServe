import Header from "./Header";
import {Outlet} from "react-router-dom";
import './App.css'; 

export default function Layout() {
  return (
    
    <div className="index">
      <Header />
      <Outlet />
    </div>
  );
}