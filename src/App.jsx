import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Wrapper } from "./componentsStyled";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Wrapper>
            <h1>Michaels cool website</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
