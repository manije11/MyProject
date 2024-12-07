import React, {Component} from "react";
export default class VorteileContent extends Component{
    render() {
        return(
            <div className="Vorteilecontent">
                <h4 className="fw-bolder m-3">Ihre Vorteile im Überblick</h4>
                <div className="d-flex flex-row flex-wrap Vorteilecontentul justify-content-center">
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon1.webp"/>
                        <p className="text-center">Permanente Mitgliedschaft der B2B-Online-Messe</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon2.webp"/>
                        <p className="text-center">Permanente Mitgliedschaft der B2B-Online-Messe</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon3.webp"/>
                        <p className="text-center">Absatz langfristig steigern</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon4.webp"/>
                        <p className="text-center">Permanente Mitgliedschaft der B2B-Online-Messe</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon5.webp"/>
                        <p className="text-center">Absatz langfristig steigern</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon6.webp"/>
                        <p className="text-center">Lieferantennetzwerke erweitern</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon7.webp"/>
                        <p className="text-center">Angebotsstruktur digitalisieren</p>
                    </div>
                    <div className="d-flex flex-column Vorteilecontentli">
                        <img src="pic/icon8.webp"/>
                        <p className="text-center fs-5">Absatz langfristig</p>
                    </div>
                </div>
            </div>
        )
    }

}