import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/stickyicon.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import MainSection from "./components/main";
import ProductDetalis from "./pages/clinet/ProductDetalis";
import axios from "axios";
import CategorySection from "./components/categorySections";
import "./App.css";
import NotFound from "./components/NotFound";
import AllPhotos from "./components/allPhotos";
import HeaderSection from "./components/header";
import Footer from "./components/footer";
import MobileMenu from "./components/mobileMenu";
axios.defaults.baseURL = "https://backend-admin-api-shukurullo2.onrender.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router>
          <div className="page-wrapper">
            <HeaderSection />
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/category" element={<CategorySection />} />
              <Route path="/gallery" element={<AllPhotos />} />
              <Route path="/detalis/:id" element={<ProductDetalis />} />
              <Route path="/category/:slug" element={<CategorySection />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
          <MobileMenu />
          <ToastContainer />
        </Router>
  </React.StrictMode>
);
