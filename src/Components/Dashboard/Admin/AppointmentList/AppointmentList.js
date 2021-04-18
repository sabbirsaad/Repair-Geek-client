import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AppointmentList = () => {
    const [ appointments, setAppointments ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[appointments])

    const handleChange = (_id, event) => {
      const updateStatus = {
          status: event.target.value,
          _id,
      };
      fetch(`http://localhost:5000/update/${_id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateStatus),
      })
          .then((result) => result.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
  };

    return (
        <div>
        <Sidebar></Sidebar>

        <div className="content content-box">
          <div className="container box-container">
            <h2>Manage Services</h2>
            <br />
            <div className="container box-table">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Pay With</th>
                  <th>Status</th>

                </tr>
              </thead>
              {
                  appointments.map( appointment =>
                    <tbody>
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.ServiceName}</td>
                        <td>Credit Card</td>
                        <td>
                            <select onChange={event =>handleChange(appointment._id, event)}>
                                <option>{appointment.status}</option>
                                <option>Done</option>
                                <option>Pending</option>
                                <option>On Going</option>
                            </select>
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

export default AppointmentList;