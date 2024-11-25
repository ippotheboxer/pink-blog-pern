import React from "react";
import { Link } from "react-router-dom";

function Navbar({user}) {
    return <div className="navbar"> 
    <span className="logo"> <Link className="link" to="/">Pink Blog</Link> </span>
    <div className="pageLinks">
    <Link className="link pageLinkItem" to="/write">Write blog</Link>
    <Link className="link pageLinkItem" to="/view">View blogs</Link>
    </div>
    {
    user ? (
    <ul className="list">
        <li className="listItem">
            <img src="https://i.pinimg.com/564x/3f/fe/7c/3ffe7cb08253eaf8b45386cff32a03b7.jpg" alt="avatar" className="avatar" />
        </li>
        <li className="listItem">Jane Doe</li>
        <li className="listItem">Logout</li>
    </ul>) : (<Link className="link" to="/login">Login</Link>)
}
    </div>
}

export default Navbar;