import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminContainer from "./container/AdminContainer";
import { AddProduct, Category, Home, HomePage, Notification, Orders, ProductPage, Products } from "./pages";
import StoreContainer from "./container/StoreContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoreContainer />}>
            <Route index element={<HomePage />}></Route>
            <Route path={`/products/:product`} element={<ProductPage />}></Route>
          </Route>
         
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
