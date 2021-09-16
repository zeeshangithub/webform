import React from "react";

export class StepFour extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: ""
        };
        this.handleCheckedChanged = this.handleCheckedChanged.bind(this);
    }

    handleCheckedChanged(event) {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="ten columns terms">
                        <span>Please specify year and month of the following:</span>
                        <div className="row">
                            <div className="six columns">
                                <label>Commision</label>
                                <div className="time-table">
                                    <select id="lang"
                                            onChange={this.props.changeHandlers.handleComissionYearChanged}
                                            value={this.props.timeTable.comissionYear}>
                                        <option value="Year">Year</option>
                                        <option value="Year">1</option>
                                        <option value="Year">2</option>
                                    </select>

                                    <select id="lang"
                                            onChange={this.props.changeHandlers.handleComissionMonthChanged}
                                            value={this.props.timeTable.comissionMonth}>
                                        <option value="Month">Month</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <label>Design</label>
                                <div className="time-table">
                                    <select onChange={this.props.changeHandlers.handleDesignYearChanged}
                                            value={this.props.timeTable.designYear}>
                                        <option value="Year">Year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>

                                    <select onChange={this.props.changeHandlers.handleDesignMonthChanged}
                                            value={this.props.timeTable.designMonth}>
                                        <option value="Month">Month</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <label>Construction</label>
                                <div className="time-table">
                                    <select id="lang"
                                            onChange={this.props.changeHandlers.handleConstructionYearChanged}
                                            value={this.props.timeTable.constructionYear}>
                                        <option value="Year">Year</option>
                                        <option value="Year">1</option>
                                        <option value="Year">2</option>
                                    </select>

                                    <select id="lang"
                                            onChange={this.props.changeHandlers.handleConstructionMonthChanged}
                                            value={this.props.timeTable.constructionMonth}>
                                        <option value="Month">Month</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <label>Occupacy</label>
                                <div className="time-table">
                                    <select onChange={this.props.changeHandlers.handleOccupancyYearChanged}
                                            value={this.props.timeTable.occupancyYear}>
                                        <option value="Year">Year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <select onChange={this.props.changeHandlers.handleOccupancyMonthChanged}
                                            value={this.props.timeTable.occupancyMonth}>
                                        <option value="Month">Month</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
