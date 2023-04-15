import React from "react";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes> */}
      <HomePage />
    </div>
  );
}

export default App;
