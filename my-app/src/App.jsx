import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Hearder.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import ImageUpload from "./ImageUpload.jsx";

export default function App() {
  const [DisplayName, SetDisplayName] = useState('');
  const [IsAuthentic, SetAunthentic] = useState(false);
  const [Username, SetUsername] = useState('');
  const [imageName,setImageName]=useState('a69ecbfb42055e6d369f9e0dae027ea4');
  return (
    <Router>
      <Header IsAuthentic={IsAuthentic} SetAunthentic={SetAunthentic} />
      <Routes>
        <Route path="/api/images" element={<ImageUpload />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login IsAuthentic={IsAuthentic} SetAunthentic={SetAunthentic} DisplayName={DisplayName} SetDisplayName={SetDisplayName} imageName={imageName} setImageName={setImageName} />} />
        <Route
          path="/"
          element={
            IsAuthentic ? (
              <Home DisplayName={DisplayName} />
            ) : (
              <Login IsAuthentic={IsAuthentic} SetAunthentic={SetAunthentic} SetUsername={SetUsername} DisplayName={DisplayName} SetDisplayName={SetDisplayName} imageName={imageName} setImageName={setImageName} />
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register imageName={imageName} setImageName={setImageName} />} />
        <Route path="/Userprofile" element={<Profile DisplayName={DisplayName} imageName={imageName}/>} />
      </Routes>
    </Router>
  );
}
