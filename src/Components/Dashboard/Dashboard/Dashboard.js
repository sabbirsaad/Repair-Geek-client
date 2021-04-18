import React, { useContext } from 'react';
import './Dashboard.css';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import image from '../../../Images/backgroud_image.jpg'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Sidebar></Sidebar>

            <div class="content">
                <h1  style={{marginTop:"50px",textAlign:"center",fontWeight:"700",color:'#00acc1'}}>
                    Welcome {loggedInUser.name || loggedInUser.email}
                </h1>
                <div style={{width:"90%",margin:"0 auto"}} className="d-flex justify-content-center">
                <img style={{ maxHeight:"75vh"}}  className="img-fluid" src={image} alt=""/>
                </div>
                
           </div>
        </div>
    );
};

export default Dashboard;