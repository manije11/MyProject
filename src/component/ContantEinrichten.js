import React, {Component} from "react";

export default class ContantEinrichten extends Component{
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
            <div className="contanteinrichten">
                <h3 className="fw-bolder m-3">Wie Sie Ihr Arico B2B-Konto einrichten</h3>
                <div className="d-flex flex-wrap justify-content-evenly contanteinrichtenitems">
                    <div className="d-flex flex-column contanteinrichtenitem">
                        <iframe width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/soVffQscrOg?si=PiyqI4wlzHK0FmiV"
                                title={this.state.title}
                                allow={this.state.allow}
                                />
                        <p className="text-center">Registrierung und erste Schritte</p>
                    </div>
                    <div className="d-flex flex-column contanteinrichtenitem">
                        <iframe width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/soVffQscrOg?si=PiyqI4wlzHK0FmiV"
                                title={this.state.title}
                                allow={this.state.allow}
                                />
                        <p className="text-center">Registrierung und erste Schritte</p>
                    </div>
                    <div className="d-flex flex-column contanteinrichtenitem">
                        <iframe  width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/soVffQscrOg?si=PiyqI4wlzHK0FmiV"
                                 title={this.state.title}
                                 allow={this.state.allow}
                               />
                        <p className="text-center">Registrierung und erste Schritte</p>
                    </div>
                    <div className="d-flex flex-column contanteinrichtenitem">
                        <iframe width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/soVffQscrOg?si=PiyqI4wlzHK0FmiV"
                                title={this.state.title}
                                allow={this.state.allow}
                               />
                        <p className="text-center">Registrierung und erste Schritte</p>
                    </div>
                    <div className="d-flex flex-column contanteinrichtenitem">
                        <iframe width={this.state.width} height={this.state.height} className="tw-rounded-2xl"
                                src="https://www.youtube.com/embed/soVffQscrOg?si=PiyqI4wlzHK0FmiV"
                                title={this.state.title}
                                allow={this.state.allow} />
                        <p className="text-center">Registrierung und erste Schritte</p>
                    </div>
                </div>
            </div>
        );
    }
}