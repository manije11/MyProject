import React, {Component} from "react";

export default class ContentProfitie extends Component{
    constructor() {
        super();
        this.state= {
            width:"100%",
            height:"100%",
            allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            title:"YouTube video player"
        }
    }
    render() {
        return (

            <div className="contentprofitie">
                <h3>Wer profitiert von Arico B2B?</h3>
                <div className="d-flex flex-row-reverse m-auto contentprofitieitem justify-content-around">
                    <div className="contentprofitieimg">
                        <img src="pic/1.webp"/>
                    </div>
                    <ul>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                        <li>Ist abhängig von seinem Lieferanten und muss die Preissteigerungen hinnehmen.</li>
                    </ul>
                </div>
                <p>Arico B2B - Lieferketten digital optimieren</p>
                <div className="contentprofitieframe">
                    <iframe width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                            src="https://www.youtube.com/embed/7_U5LqeDr2w?si=rmJtY9dzCml3qur6"
                            title={this.state.title}
                            allow={this.state.allow}
                            allowFullScreen=""/>
                </div>

                <div className="d-flex">
                    <ul>
                        <li>Herr Smart kann sich über Arico B2B mit neuen Lieferanten & Dienstleistern einfach
                            vernetzen.
                        </li>
                        <li>Herr Smart kann sich über Arico B2B mit neuen Lieferanten & Dienstleistern einfach
                            vernetzen.
                        </li>
                        <li>Herr Smart kann sich über Arico B2B mit neuen Lieferanten & Dienstleistern einfach
                            vernetzen.
                        </li>
                    </ul>
                    <img src="pic/2.webp"/>
                </div>
            </div>
        );
    }
}