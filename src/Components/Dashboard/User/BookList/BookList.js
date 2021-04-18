import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const BookList = () => {
    const [bookings, setbookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/bookings?email=" + loggedInUser.email)
      .then( res => res.json())
      .then( data => setbookings(data));
  }, [loggedInUser.email]);
    return (
        <div>
             <Sidebar></Sidebar>

             <div className="content content-box">
          <div className="container box-container">
            <h2>BOOK LIST</h2>
            <br />
            <div className="container box-table">
            <table className="products-table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
              </thead>
              {
                  bookings.map( booking =>
                    <tbody>
                    <tr>
                        <td>{booking.name}</td>
                        <td>{booking.ServiceName}</td>
                       
                        <td>${booking.price}</td>
                        <td>
                            {booking.status}
                        </td>
                    </tr>
                </tbody>
                  )
              }
            </table>
          </div>
          </div>
          </div>
        </div>
    );
};

export default BookList;