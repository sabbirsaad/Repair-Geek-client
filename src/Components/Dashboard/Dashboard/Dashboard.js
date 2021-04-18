import React, { useContext } from 'react';
import './Dashboard.css';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Sidebar></Sidebar>

            <div class="content">
                <h1  style={{marginTop:"150px",textAlign:"center"}}>Welcome {loggedInUser.name || loggedInUser.email}</h1>
           </div>
        </div>
    );
};

export default Dashboard;