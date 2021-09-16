import React from "react";

export class StepTwo extends React.Component {
    constructor() {
        super();
        this.state = {

        };

    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="six columns">
                        <label>A. ARCHITECT/ PLANNER</label>
                        <input
                            className="u-full-width required"
                            placeholder="Full name of Architect/ Planner"
                            type="text"
                            value={this.props.personResponsible.planner}
                            onChange={this.props.changeHandlers.handlePlannerChanged}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="six columns">
                        <label>B. Confirm email</label>
                        <input
                            className="u-full-width"
                            placeholder="Full name of Client"
                            type="text"
                            value={this.props.personResponsible.email}
                            onChange={this.props.changeHandlers.handleEmailChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Consultant</label>
                        <input
                            className="u-full-width"
                            placeholder="Full name of Consultant"
                            type="text"

                            value={this.props.personResponsible.consultant}
                            onChange={this.props.changeHandlers.handleConsultantChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Name</label>
                        <input
                            className="u-full-width"
                            placeholder="Full name of Information Provider"
                            type="text"
                            value={this.props.personResponsible.name}
                            onChange={this.props.changeHandlers.handleNameChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Mailing Address</label>
                        <textarea
                            className="u-full-width"
                            placeholder="City of Information Provider"
                            type="text"
                            value={this.props.personResponsible.mailingAdress}
                            onChange={this.props.changeHandlers.handleMailingAddressChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>City</label>
                        <input
                            className="u-full-width"
                            placeholder="City of Information Provider"
                            type="text"
                            value={this.props.personResponsible.city}
                            onChange={this.props.changeHandlers.handleCityChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>POSTAL CODE</label>
                        <input
                            className="u-full-width"
                            placeholder="Postal code of Information Provider"
                            type="text"
                            value={this.props.personResponsible.postalCode}
                            onChange={this.props.changeHandlers.handlePostalCodeChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Country</label>
                        <input
                            className="u-full-width"
                            placeholder="Country of Information Provider"
                            type="text"
                            value={this.props.personResponsible.country}
                            onChange={this.props.changeHandlers.handleCountryChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Telephone Number</label>
                        <input
                            className="u-full-width"
                            placeholder="Telephone number of Information Provider"
                            type="text"
                            value={this.props.personResponsible.telephoneNumber}
                            onChange={this.props.changeHandlers.handleTelephoneChanged}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Email</label>
                        <input
                            className="u-full-width"
                            placeholder="Email Address of Information Provider"
                            type="text"
                            value={this.props.personResponsible.email}
                            onChange={this.props.changeHandlers.handleEmailChanged}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
