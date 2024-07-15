import React from "react";
import './Index.css';
import logo from '../assets/antonios_logo.png';

class Index extends React.Component {
    render() {
        return (
            <>
                <img id="logo" src={ logo } alt="antonio's logo"/>
                <div id="message">
                    Celebre Marisco Martes Con Nosotros!
                </div>
                <div class="footer">
                    <button class="button" onclick="location.href='/order/create'">Order Now</button>
                    <button class="button" onclick="location.href='/admin'">Admin</button>
                </div>
            </>
        );
    }
}

export default Index;
