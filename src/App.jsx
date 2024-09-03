import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [coolWord, setCoolWord] = useState("Coooooool!!!");

  const [employeeArr, setEmployeeArr] = useState([
    { id: 1, name: "michael" },
    { id: 2, name: "sarah" },
    { id: 3, name: "kim" },
  ]);

  const [userLoggedIn, setUserLoggedIn] = useState({
    id: 1,
    name: "michael",
    password: "secure password",
  });

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  employeeArr={employeeArr}
                  coolWord={coolWord}
                  userLoggedIn={userLoggedIn}
                />
              }
            />
            <Route path="/about" element={<About coolWord={coolWord} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
