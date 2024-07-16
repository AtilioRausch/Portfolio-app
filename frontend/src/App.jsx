import * as React from "react";
import Home from "./pages/Home/Home";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<h1>Skills</h1>} />
          <Route path="/developments" element={<h1>Developments</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
