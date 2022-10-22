import React from "react";
import { Home } from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound";
import { OrderSummary } from "../pages/OrderSummary";
import { Product } from "../components/Products/Product";
import { FeaturedProducts } from "../components/Products/FeaturedProducts";
import { NewProduct } from "../components/Products/NewProduct";
import { Users } from "../components/Users/Users";
import { UsersDetails } from "../components/Users/UsersDetails";
import { Admin } from '../components/Users/Admin';
import { Profile } from "../components/Profile";

// Lazy loading will be enabled using the React.lazy() function
const LazyAbout = React.lazy(() => import ('../pages/About'))

export const RouterLinks = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='*' element={<PageNotFound />} />

      {/* Using the lazyLoading technique will work, is restricted to using the React.Suspense component to call the about page in chunks.*/}
      <Route path='/about' element={
        <React.Suspense fallback='Loading...'>
          <LazyAbout />
        </React.Suspense>
      } />

      <Route path='/order-summary' element={<OrderSummary />} />

      {/* Nested Routes */}
      <Route path='/products' element={<Product />}>
        {/* This index route enables the featured products page to be viewed as default upon opening the products page, so the page wont be empty */}
        <Route index element={<FeaturedProducts />} />

        <Route path='featured' element={<FeaturedProducts />} />

        <Route path='new' element={<NewProduct />} />
      </Route>

      <Route path='/users' element={<Users />}>

        {/* Dynamic routes can be nested too*/}
        <Route path=':userId' element={<UsersDetails />} />

        <Route path='admin' element={<Admin />} />

      </Route>

      {/* Dynamic routes can also be done directly like the one below.*/}
      {/* <Route path='/users/:userId' element={<UsersDetails />} />

      <Route path="/users/admin" element={<Admin/>}/> */}

      <Route path="/profile" element={<Profile/>}/>

    </Routes>
  );
};
