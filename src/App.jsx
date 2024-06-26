import { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";

/**
 * Main application component
 */

// const BASE__URL = `http://localhost:8000`;
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCites() {
      try {
        setIsLoading(true);
        const respond = await fetch(`http://localhost:8000/cities`);
        const data = await respond.json();
        console.log(data);
        setCities(data);
        // console.log(cities);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCites();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* * Route for the product page */}
        <Route path="product" element={<Product />} />

        {/* * Route for the pricing page */}
        <Route path="pricing" element={<Pricing />} />

        {/* * Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for 404 page */}
        <Route path="*" element={<PageNotFound />} />

        {/* * Route for the app layout */}
        <Route path="app" element={<AppLayout />}>
          {/* {NESTED ROUTES} */}

          {/* HOME ROUTE */}
          {/* INDEX IS THE DEFAULT CHILD ROUTE */}
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          {/* CITIES ROUTES */}
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          {/* COUNTRIES ROUTES */}
          <Route path="countries" element={<p>Countries</p>} />

          {/* FORM ROUTE */}
          <Route path="form" element={<p>Form</p>} />
        </Route>

        {/*Route for login page */}
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
