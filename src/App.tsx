import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminContainer from "./container/AdminContainer";
import { AddProduct, AdminLogin, Category, Home, HomePage, Login, Notification, Orders, ProductPage, Products, SignUp } from "./pages";
import StoreContainer from "./container/StoreContainer";
import AuthContainer from "./container/AuthContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoreContainer />}>
            <Route index element={<HomePage />}></Route>
            <Route path={`/products/:product`} element={<ProductPage />}></Route>
          </Route>

          <Route path="/auth" element={<AuthContainer />}>
              <Route  path="/auth/sign-up" element={<SignUp />}></Route>
              <Route  path="/auth/sign-in" element={<Login />}></Route>
              <Route  path="/auth/admin" element={<AdminLogin />}></Route>
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
