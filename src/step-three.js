import React from "react";

export class StepThree extends React.Component {
    constructor() {
        super();
        this.state = {
            projectDesc: "",
            fileLink: ""
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
                        <h6>PLEASE GIVE A BRIEF DESCRIPTION OF
                            YOUR PROJECT</h6>
                        <label>Project Description to include the details in under 300 words</label>
                        <textarea
                            className="u-full-width required"
                            placeholder="Password"
                            type="text"
                            value={this.props.projectDescription.projectDesc}
                            onChange={this.props.changeHandlers.handleProjectDescChanged}
                        />
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
                            value={this.props.projectDescription.fileLink}
                            onChange={this.props.changeHandlers.handleFileLinkChanged}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
