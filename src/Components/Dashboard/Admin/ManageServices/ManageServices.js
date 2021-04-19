import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ManageServices.css';
import Sidebar from '../../Sidebar/Sidebar';
import loading from '../../../../Images/loading.gif';

const ManageServices = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('https://web-repair-geek.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[services])

    const handleDelete = id =>{
        fetch(`https://web-repair-geek.herokuapp.com/delete/${id}`,{
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
                        <td>${service.price}</td>
                        <td><span onClick={()=>handleDelete(service._id)} className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span></td>
                    </tr>
                </tbody>
                  )
              }
            </table>
            {
                  services.length === 0 && <div className="d-flex justify-content-center" style={{margin:'70px 0 50px 0',height:'70px'}}><img src={loading} alt=""/></div>
              }
          </div>
          </div>
          </div>
        </div>
    );
};

export default ManageServices;