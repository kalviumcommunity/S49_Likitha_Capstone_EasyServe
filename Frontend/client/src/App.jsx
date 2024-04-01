// App.js

// import React from 'react';
// import './App.css'; 
// import {Route, Routes} from 'react-router-dom';
// import IndexPage from './pages/IndexPage';
// import LoginPage from './pages/LoginPage';
// import Layout from './Layout';
// function App() {
//   return (
//     <Routes>
//       <Route path='/' element= {<Layout/>}>
//       <Route index element={<IndexPage/>}/>
//       <Route  path="/login"  element={<LoginPage/>}/>
//       </Route>
    

  
//     </Routes>
   
//   );
// }

// export default App;



import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from './pages/RegisterPage.jsx';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage/>} />
          {/* <Route path="/account" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
  )
}

export default App
