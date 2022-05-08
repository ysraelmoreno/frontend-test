import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import SCPGlobalCSS from "./styles/SCP.global";

function App() {
  SCPGlobalCSS();

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={route.element}
              index={route.index}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
