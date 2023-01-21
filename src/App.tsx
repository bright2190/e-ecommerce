import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminContainer from "./container/AdminContainer";
import { AddProduct, Category, Home, Notification, Orders, Products } from "./pages";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/admin" element={<AdminContainer />}>
              <Route index element={<Home />}></Route>
              <Route path="/admin/products" element={<Products />}></Route>
              <Route path="/admin/products/category" element={<Category />}></Route>
              <Route path="/admin/products/add-product" element={<AddProduct />}></Route>
              <Route path="/admin/orders" element={<Orders />}></Route>
              <Route path="/admin/notifications" element={<Notification />}></Route>
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
