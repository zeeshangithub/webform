import React, {Component} from 'react';

import MultiStep from "react-multistep";
import {StepOne} from "./step-one";
import {StepTwo} from "./step-two";
import {StepThree} from "./step-three";
import {StepFour} from "./step-four";
import {StepFive} from "./step-five";
import {StepSix} from "./step-six";


export class WebForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            identification: {
                projectTitle: null,
                projectStreetAddress: "",
                projectCity: "",
                company: "",
            },
            personResponsible: {
                planner: "",
                client: "",
                consultant: "",
                name: "",
                mailingAdress: "",
                city: "",
                postalCode: "",
                country: "",
                telephoneNumber: "",
                email: "",
            },
            projectDescription: {
                projectDesc: "",
                fileLink: ""
            },
            projectSignificance: {
                projectSig: "",
                projectFileLink: ""
            },
            timeTable: {
                comissionYear: "",
                comissionMonth: "",
                designYear: "",
                designMonth: "",
                constructionYear: "",
                constructionMonth: "",
                occupancyYear: "",
                occupancyMonth: "",

            },
            additionalInformation: {
                drawing: "",
                file: "",
                name: "",
                signature: "",
                giveConsent: "",
                agreeToGDPR: ""

            }
        };
    }

    changeHandlers = {
        identification: {
            handleprojectTitleChanged: (event) => {
                const {identification} = this.state;
                console.log("handleprojectTitleChanged", event.target.value)
                identification.projectTitle = event.target.value;
                this.setState({identification});
                // console.log("handleprojectTitleChanged" , this.state.projectTitle)
            },

            handleAddressChanged: (event) => {
                const {identification} = this.state;
                console.log("handleAddressChanged", event.target.value)
                identification.projectStreetAddress = event.target.value;
                this.setState({identification});
            },
            handleCityChanged: (event) => {
                const {identification} = this.state;
                console.log("handleCityChanged", event.target.value)
                identification.projectCity = event.target.value;
                this.setState({identification});
            },
            handleCompanyChanged: (event) => {
                const {identification} = this.state;

                identification.company = event.target.value;
                this.setState({identification});
            }
        },
        personResponsible: {
            handlePlannerChanged: (event) => {
                const {personresponsible} = this.state;
                personresponsible.planner = event.target.value
                this.setState({personresponsible});
            },

            handleClientChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({emailConfirm: event.target.value});
            }
            ,
            handleConsultantChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({email: event.target.value});
            },

            handleNameChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({emailConfirm: event.target.value});
            }
            ,
            handleMailingAddressChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({email: event.target.value});
            }
            ,
            handleCityChanged: (event) => {
                this.setState({emailConfirm: event.target.value});
            }
            ,
            handlePostalCodeChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({email: event.target.value});
            },

            handleCountryChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({emailConfirm: event.target.value});
            }
            ,
            handleTelephoneChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({emailConfirm: event.target.value});
            },

            handleEmailChanged: (event) => {
                const {personresponsible} = this.state;

                this.setState({email: event.target.value});
            }

        },
        projectDescription: {
            handleProjectDescChanged: (event) => {
                const {projectDescription} = this.state;
                projectDescription.projectDesc = event.target.value
                this.setState({projectDescription});
            },

            handleFileLinkChanged: (event) => {
                const {projectDescription} = this.state;
                projectDescription.fileLink = event.target.value
                this.setState({projectDescription});
            }
            ,
        },
        projectSignificance: {
            handleProjectSigChanged: (event) => {
                const {projectSignificance} = this.state;
                projectSignificance.projectSig = event.target.value
                this.setState({projectSignificance});
            },

            handleFileLinkChanged: (event) => {
                const {projectSignificance} = this.state;
                projectSignificance.projectFileLink = event.target.value
                this.setState({projectSignificance});
            }
            ,
        },
        timeTable: {
            handleComissionYearChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.comissionYear = event.target.value
                this.setState({timeTable});
            },

            handleComissionMonthChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.comissionMonth = event.target.value
                this.setState({timeTable});
            },
            handleDesignYearChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.designYear = event.target.value
                this.setState({timeTable});
            },
            handleDesignMonthChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.designMonth = event.target.value
                this.setState({timeTable});
            },
            handleConstructionYearChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.constructionYear = event.target.value
                this.setState({timeTable});
            },
            handleConstructionMonthChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.constructionMonth = event.target.value
                this.setState({timeTable});
            },
            handleOccupancyYearChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.occupancyYear = event.target.value
                this.setState({timeTable});
            },
            handleOccupancyMonthChanged: (event) => {
                const {timeTable} = this.state;
                timeTable.occupancyMonth = event.target.value
                this.setState({timeTable});
            },


        },
        additionalInformation: {
            handleDrawingChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.drawing = event.target.value
                this.setState({additionalInformation});
            },
            handleFileChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.file = event.target.value
                this.setState({additionalInformation});
            },

            handleNameChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.name = event.target.value
                this.setState({additionalInformation});
            },
            handleSignatureChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.signature = event.target.value
                this.setState({additionalInformation});
            },
            handleGiveConsentChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.giveConsent = event.target.value
                this.setState({additionalInformation});
            },
            handleAgreeToGDPRChanged: (event) => {
                const {additionalInformation} = this.state;
                additionalInformation.agreeToGDPR = event.target.value
                this.setState({additionalInformation});
            },
        }
    };


    render() {
        const {identification, personResponsible, projectDescription, timeTable, projectSignificance} = this.state;
        const steps = [
            {component: <StepOne identification={identification} changeHandlers={this.changeHandlers.identification}/>},
            {
                component: <StepTwo personResponsible={personResponsible}
                                    changeHandlers={this.changeHandlers.personResponsible}/>
            },
            {
                component: <StepThree projectDescription={projectDescription}
                                      changeHandlers={this.changeHandlers.projectDescription}/>
            },
            {component: <StepFour timeTable={timeTable} changeHandlers={this.changeHandlers.timeTable}/>},
            {
                component: <StepFive projectSignificance={projectSignificance}
                                     changeHandlers={this.changeHandlers.projectSignificance}/>
            },
            {component: <StepSix/>}
        ];
        return <MultiStep steps={steps}/>;
    }

}