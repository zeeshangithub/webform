import React from "react";

export class StepSix extends React.Component {
    constructor() {
        super();
        this.state = {
            drawing: "",
            file: "",
            name:"",
            signature:"",
            giveConsent:"",
            agreeToGDPR:"",
        };
        this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
        this.handlePasswordConfirmChanged = this.handlePasswordConfirmChanged.bind(
            this
        );
    }

    handlePasswordChanged(event) {
        this.setState({ password: event.target.value });
    }

    handlePasswordConfirmChanged(event) {
        this.setState({ passwordConfirm: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="six columns">
                        <h6>PROJECT SIGNIFICANCE</h6>
                        <label>Please indicate why you feel this
                            project is important and should
                            be considered for the Award in under 500 words.</label>
                        <select id="lang"
                                onChange={this.props.changeHandlers.handleProjectSigChanged}
                                value={this.props.additionalInformation.projectSig}>
                            <option value="Year">Year</option>
                            <option value="Year">1</option>
                            <option value="Year">2</option>
                        </select>
                    </div>
                </div>

                <span>OR</span>

                <div className="row">
                    <div className="six columns">
                        <label>File formats - DOC, DOX, TXT, PDF
                            Under 1 MB</label>
                        <input
                            className="u-full-width"
                            placeholder="Upload File"
                            type="File"

                            onChange={this.props.changeHandlers.handleFileChanged}
                            value={this.props.additionalInformation.file}
                        />
                        <button>Add More</button>
                    </div>
                </div>

                <div className="row">
                    <div className="six columns">
                        <label>Name</label>
                        <input
                            className="u-full-width"
                            placeholder="name"
                            type="text"

                            onChange={this.props.changeHandlers.handleNameChanged}
                            value={this.props.additionalInformation.name}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Digital Signature</label>
                        <input
                            className="u-full-width"
                            placeholder="Upload File"
                            type="File"
                            onChange={this.props.changeHandlers.handleProjectSigChanged}
                            value={this.props.additionalInformation.signature}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Give consent to be contacted for further communication
                            (Placeholder copy)</label>
                        <input
                            className="u-full-width"
                            placeholder="Upload File"
                            type="checkbox"

                            onChange={this.props.changeHandlers.handleGiveConsentChanged}
                            value={this.props.additionalInformation.giveConsent}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Agree to GDPR regulations in country
                            (Placeholder copy)</label>
                        <input
                            className="u-full-width"
                            placeholder="Upload File"
                            type="checkbox"
                            onChange={this.props.changeHandlers.handleAgreeToGDPRChanged}
                            value={this.props.additionalInformation.agreeToGDPR}
                        />
                    </div>
                </div>

            </div>
        );
    }
}
