import React from "react";
import "./Navbar.css";

export const Navbar =() => {
    return(
        <div className="container">
            <nav>
                <h2 className="logo">Portfo <span>lio</span> </h2>
                <ul className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
                <div className="content">
                    <h4>Hello My name is</h4>
                    <h1>Tushar<span>Verma</span></h1>
                    <h3>I'm a Web Developer</h3>
                    <div className="info">
                        <form>
                            <input type="email" name="email" id="mail" placeholder="Enter your email" />
                            <input type="submit" name="submit" value="Send" />
                        </form>
                    </div>
                </div>
                
        </div>
    )
}