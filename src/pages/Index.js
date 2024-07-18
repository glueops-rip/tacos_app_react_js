import React from "react";
import './Index.css';
import logo from '../assets/antonios_logo.png';

class Index extends React.Component {
    render() {
        return (
            <>
                <img id="logo" src={ logo } alt="antonio's logo"/>
                <div id="message">
                    Celebra el Martes de Mariscos con Nosotros
                </div>
                <div class="footer">
                    <a href="/order/create" class="link-button">Orders</a>
                    <a href="/admin" class="link-button">Admin</a>
                </div>
            </>
        );
    }
}

export default Index;
