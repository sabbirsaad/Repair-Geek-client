import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import loading from '../../../../Images/loading.gif';

const AppointmentList = () => {
    const [ appointments, setAppointments ] = useState([]);
    useEffect(() => {
        fetch('https://web-repair-geek.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[appointments])

    const handleChange = (_id, event) => {
      const updateStatus = {
          status: event.target.value,
          _id,
      };
      fetch(`https://web-repair-geek.herokuapp.com/update/${_id}`, {
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
            <h2>Appointment List</h2>
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
            {
                  appointments.length === 0 && <div className="d-flex justify-content-center" style={{margin:'70px 0 50px 0',height:'70px'}}><img src={loading} alt=""/></div>
              }
          </div>
          </div>
          </div>
    </div>
    );
};

export default AppointmentList;