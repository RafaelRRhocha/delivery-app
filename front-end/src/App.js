import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminManage from './pages/Roles/Admin/AdminManage';
import CustomerCheckout from './pages/Roles/Customer/Checkout/CustomerCheckout';
import CustomerOrdersId from './pages/Roles/Customer/Orders/CustomerOrderId';
import CustomerOrders from './pages/Roles/Customer/Orders/CustomerOrders';
import CustomerProducts from './pages/Roles/Customer/Products/CustomerProducts';
import SellerOrders from './pages/Roles/Seller/SellerOrders';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/customer/orders" component={ CustomerOrders } />
      <Route path="/customer/orders:id" component={ CustomerOrdersId } />
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/admin/manage" component={ AdminManage } />
    </Switch>
  );
}

export default App;
