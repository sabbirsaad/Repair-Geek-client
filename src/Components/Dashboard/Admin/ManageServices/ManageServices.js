import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ManageServices.css';
import Sidebar from '../../Sidebar/Sidebar';

const ManageServices = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/delete/${id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(result=>{
          alert("deleted successfully")
        })
      }
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
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {
                  services.map( service =>
                    <tbody>
                    <tr>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td><span onClick={()=>handleDelete(service._id)} className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></td>
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

export default ManageServices;