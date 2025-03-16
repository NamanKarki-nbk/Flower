import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Blog from "./pages/Blog";
import Contact_Us from "./pages/Contact_Us";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact_Us />} />
    </Routes>
  );
}

export default App;
