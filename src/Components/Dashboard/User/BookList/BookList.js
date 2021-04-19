import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import loading from '../../../../Images/loading.gif';

const BookList = () => {
    const [bookings, setbookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://web-repair-geek.herokuapp.com/bookings?email=" + loggedInUser.email)
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
            {
                  bookings.length === 0 && <div className="d-flex justify-content-center" style={{margin:'70px 0 50px 0',height:'70px'}}><img src={loading} alt=""/></div>
              }
          </div>
          </div>
          </div>
        </div>
    );
};

export default BookList;