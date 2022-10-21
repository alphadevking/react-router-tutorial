import { Home } from "../pages/Home";
import { Routes, Route } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound';
import { About } from "../pages/About";
import { OrderSummary } from "../pages/OrderSummary";
import { Product } from "../components/Products/Product";
import { FeaturedProducts } from "../components/Products/FeaturedProducts";
import { NewProduct } from "../components/Products/NewProduct";


export const RouterLinks = () => {
  return(
    <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="*" element={<PageNotFound/>}/>

      <Route path="/about" element={<About/>}/>

      <Route path="/order-summary" element={<OrderSummary/>}/>

      {/* Nested Routes */}
      <Route path="/products" element={<Product/>}>
        
        {/* This index route enables the featured products page to be viewed as default upon opening the products page, so the page wont be empty */}
        <Route index element={<FeaturedProducts/>}/>

        <Route path="featured" element={<FeaturedProducts/>}/>

        <Route path="new" element={<NewProduct/>}/>

      </Route>

    </Routes>
  )
}
