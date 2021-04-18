import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/Admin/ManageServices/ManageServices';
import OrderList from './Components/Dashboard/Admin/OrderList/OrderList';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Book from './Components/Dashboard/User/Book/Book';
import BookList from './Components/Dashboard/User/BookList/BookList';
import Review from './Components/Dashboard/User/Review/Review';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/book/:id">
            <Book />
          </Route>
          <Route path="/bookList">
            <BookList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
          </Route>


          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
