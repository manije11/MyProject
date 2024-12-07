import React, {Component} from "react";
export default class BanerUnverbindlich extends Component{
    render() {
        return(
            <div className="banerUnverbindlich d-flex">
                <a className="btn btn-warning banerUnverbindlichbtn" href="#">Jetzt registrieren > </a>
                <ul className="m-0">
                    <li> <img src="pic/img.svg" /> Unverbindlich testen</li>
                    <li> <img src="pic/img.svg" />Keine Kreditkarte notwendig</li>
                    <li> <img src="pic/img.svg" />Premium-Tarif sichern</li>
                </ul>
            </div>
        )
    }
}