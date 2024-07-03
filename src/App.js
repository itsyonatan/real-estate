import { BrowserRouter, Routes, Route } from "react-router-dom"
import Website from "./pages/website/website";
import Properties from "./pages/properies/properties";
import Layout from "./components/layout/layout";
import Property from "./pages/property/property";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route element={<Layout />}>
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<Property />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
