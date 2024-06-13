import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import AddProduct from './components/admin/AddProduct';
import EditProduct from './components/admin/EditProduct';
import DeleteProduct from './components/admin/DeleteProduct';
import UserList from './components/admin/UserList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProductList} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/cart" component={Cart} />
                <Route path="/admin/add-product" component={AddProduct} />
                <Route path="/admin/edit-product/:id" component={EditProduct} />
                <Route path="/admin/delete-product" component={DeleteProduct} />
                <Route path="/admin/users" component={UserList} />
                {/* Add more routes here */}
            </Switch>
        </Router>
    );
};

export default App;
