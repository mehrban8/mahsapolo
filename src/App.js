import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/gallery/:country", component: <Gallery /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
