import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { MdBorderColor } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import { MdOutlineAppRegistration } from "react-icons/md";
import '../Sidebar/Sidebar.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<RiDashboard3Fill/>
        },
        {
            path:"/Questions",
            name:"Questions",
            icon:<FaClipboardQuestion />
        },
        {
            path:"/Orders",
            name:"Orders",
            icon:<MdBorderColor />
        },
        {
            path:"/Cart",
            name:"Cart",
            icon:<FaShoppingCart />
        },
        {
            path:"/Login",
            name:"Login",
            icon:<IoLogIn />
        },
        {
            path:"/Registration",
            name:"Registration",
            icon:<MdOutlineAppRegistration />
        },
    ]
    return (
        <div className='main_content'>
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">KaroAbhayas</h1>
                   <div style={{marginLeft: isOpen ? "10px" : "-5px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
            </div>
            </div>
    );
};

export default Sidebar;