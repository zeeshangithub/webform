import React from "react";

export class StepFive extends React.Component {
    constructor() {
        super();
        this.state = {};
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
                        <textarea
                            className="u-full-width required"
                            placeholder="Password"
                            type="text"
                            onChange={this.props.changeHandlers.handleProjectSigChanged}
                            value={this.props.projectSignificance.projectSig}
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
                            onChange={this.props.changeHandlers.handleFileLinkChanged}
                            value={this.props.projectSignificance.projectFileLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
