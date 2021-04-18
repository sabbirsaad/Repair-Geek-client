import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddService from './Components/Dashboard/Admin/AddService/AddService';
import AppointmentList from './Components/Dashboard/Admin/AppointmentList/AppointmentList';
import MakeAdmin from './Components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/Admin/ManageServices/ManageServices';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Book from './Components/Dashboard/User/Book/Book';
import BookList from './Components/Dashboard/User/BookList/BookList';
import Review from './Components/Dashboard/User/Review/Review';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookList">
            <BookList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/appointmentList">
            <AppointmentList />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>


          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
