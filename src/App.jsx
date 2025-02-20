import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./ui/Header"
import ProductDetail from "./components/Product/ProductDetail"
import Product from "./components/Product/Product"
import CategoryProduct from "./components/Product/CategoryProduct"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ScrollToTop from "./ui/scrollTop"
import Cart from "./components/Cart/Cart"
import CheckOut from "./components/Cart/CheckOut"
import Login from "./components/Auth/Login"
import ProtectedRoute from "./components/Auth/ProtectedRoute"
import Order from "./components/Order/Order"


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/product/:gender" element={<Product />} />
          <Route path="/category/:category" element={<CategoryProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
