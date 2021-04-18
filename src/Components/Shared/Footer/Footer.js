import React from 'react';
import "./Footer.css";
import logo from '../../../Images/logo.png';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className="footer_container">
            <div className="footer_box">
                <div className="row">
                    <div className="col-lg-3">
                        <h4>About</h4>
                        <div className="text-center">
                            <img src={logo} alt=""/>
                        </div>
                        <p>Repair Geek offers professional PC repair services at our retail locations throughout country. The high level of customer service has allowed to open multiple full-service repair centers.</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>Contact</h4>
                        <div className="mt-5">
                        <ul className="list-unstyled" style={{ fontSize: '16px',color: 'white',fontWeight:"500" }}>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Mirpur, Dhaka, Bangladesh
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'none', color: 'white' }}
                                href="mailto:Reapair@Geek.com"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> Reapair@Geek.com
                            </a>
                        </li>
                        <li>
                            <a
                                style={{ textDecoration: 'none', color: 'white' }}
                                href="tel:01944455588"
                            >
                                <FontAwesomeIcon icon={faPhoneAlt} /> 01944455588
                            </a>
                        </li>
                    </ul>
                        </div>

                    </div>
                    <div className="col-lg-3">
                        <h4>Services</h4>
                        <p>Computer Repair</p>
                        <p>Motherboard Repair</p>
                        <p>Desktop Repair</p>
                    </div>
                    <div className="col-lg-3">
                        <h4>Hours</h4>
                        <p>Saturday________ 8.00am -- 5.00pm</p>
                        <p>Sunday__________ 8.00am -- 5.00am</p>
                        <p>Monday_________ 8.00am -- 5.00pm</p>
                        <p>Tuesday_________ 8.00am -- 5.00pm</p>
                        <p>Wednesday_____ 8.00am -- 5.00pm</p>
                        <p>Thursday________ 8.00am -- 5.00pm</p>
                        <p>Friday___________ Closed</p>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <small>Copyright &copy  2021-Repair Geek | All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;