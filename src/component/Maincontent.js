import React, {Component} from "react";

export default class Maincontent extends Component{

    render() {
        return(
            <div className="maincontent w-100">
                <h2>Für <span style={{color:'#ffc400'}}>Hersteller</span>,
                    <br/>
                    Dienstleister und Händler.</h2>
                <img className="maincontentimg w-100" src="pic/hero.gif"/>
            </div>
        )
    }
}