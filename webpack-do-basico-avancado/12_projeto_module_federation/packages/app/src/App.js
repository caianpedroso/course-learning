import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import './app.css';

const App = () => {
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
