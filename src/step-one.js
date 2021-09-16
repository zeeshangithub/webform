import React from "react";

const {SiteClient} = require("datocms-client");


export class StepOne extends React.Component {
    constructor() {
        super();
        this.state = {

            mainData: {},
            projectTitle: null,
            projectStreetAddress: "",
            projectCity: "",
            company: "",
        };
    }

    componentDidMount() {
        // this.createRecord();


    }

    createRecord= ()=> {

        const mainData = {
            "projectTitle": this.state.projectTitle,
            "projectStreetAddress": this.state.projectStreetAddress,
            "projectCity": this.state.projectCity,
            "company": this.state.company,
        }

        console.log("this.state.mainData" , mainData)
        // const client = new SiteClient("ef11b2b74c8f0b0c6efed7dfe38bdb");
        // const record =  client.items.create({
        //     itemType: "1152613", // model ID
        //     userName: "Gigio",
        //     userLastName: "Labrador",
        // });
        // console.log(record);
    }

    fetchRecords() {
        const client = new SiteClient("ef11b2b74c8f0b0c6efed7dfe38bdb");
        const itemId = '56995326';
        client.items.find(itemId, {
            nested: 'false',
            version: 'published'
        })
            .then((item) => {
                console.log(item);
            })
            .catch((error) => {
                console.error(error);
            });

    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="six columns">
                        <label>Project Title</label>
                        <input
                            className="u-full-width"
                            placeholder="Title"
                            type="text"
                            value={this.props.identification.projectTitle}
                            onChange={this.props.changeHandlers.handleprojectTitleChanged}
                            autoFocus
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Address</label>
                        <textarea
                            className="u-full-width"
                            placeholder="Adress"
                            type="text"
                            onChange={this.props.changeHandlers.handleAddressChanged}
                            value={this.props.identification.projectStreetAddress}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Project City</label>
                        <input
                            className="u-full-width"
                            placeholder="City"
                            type="text"
                            onChange={this.props.changeHandlers.handleCityChanged}
                            value={this.props.identification.projectCity}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <label>Last Name</label>
                        <input
                            className="u-full-width"
                            placeholder="Last Name"
                            type="text"
                            onChange={this.props.changeHandlers.handleCompanyChanged}
                            value={this.props.identification.company}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <button onClick={this.createRecord}>add</button>
                    </div>
                    <div className="six columns">
                        <button onClick={this.fetchRecords}>fetch</button>
                    </div>
                </div>
            </div>
        );
    }
}
