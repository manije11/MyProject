import React, {Component} from "react";

export default class Header extends Component{

    render() {
        return (
            <header className="d-flex justify-content-between Menus">
                <div className="Menu1 d-flex flex-column w-100">
                    <ul className="d-flex p-auto menutop top1">
                        <li><a href="#faq">Über uns</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                    <ul className="d-flex p-auto menubotton botton1">
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#">Tarife</a></li>
                        <li><a href="#">Voranmeldung</a></li>
                    </ul>
                </div>
                <div className="Menuimg w-50">
                    <img className="w-100" src="pic/ARICO-B2B-EPS.svg"/>
                    <div className="decor-start d-flex justify-content-between" style={{height: "1.2rem"}}></div>

                </div>
                <div className="Menu1 d-flex flex-column w-100">
                    <ul className="d-flex p-auto menutop top2">
                        <li><a href="#">Hersteller</a></li>
                        <li><a href="#">Dienstleister</a></li>
                        <li><a href="#">Händler</a></li>
                    </ul>
                    <ul className="d-flex p-auto menubotton botton2">
                        <li><a href="#">Registrieren</a></li>
                        <li><a href="#">Sprachen</a></li>
                    </ul>
                </div>

            </header>
        );
    }
}