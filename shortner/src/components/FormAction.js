import React, { Component } from "react";
import { postData, getData } from "../js/utils"

class FormAction extends Component {
    constructor() {
        super();
        this.state = {
            long_url: ""
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }


    componentDidMount() {
        if (window.location.hash !== "") {
            getData(`/${window.location.hash.substr(1)}`).then(response => {
                alert(response.message);
                if (response.status) {
                    window.location.href = response.data.long_url; 
                }
            }).catch(error => {
                console.log(error);
            })
        }
    }


    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    validateInput = () => {
        if (this.state.long_url === "") {
            alert("Url field can not be empty");
            document.querySelector("#long_url").focus();
            return false;
        }

        if (!/^(https|ftp|http)/.test(this.state.long_url)) {
            alert("Please enter a valid Url");
            document.querySelector("#long_url").focus();
            return false;
        }

        return true;
    }


    generateHash = () => {
        if (window.location.hash === "") {
            window.location.hash = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
        }
    }


    postHandler = (event) => {
        event.preventDefault();
        if (this.validateInput()) {
            this.generateHash();
            this.postLongUrl();
        }
    }


    postLongUrl = () => {
        let saveValues = {
            long_url: this.state.long_url,
            hash: window.location.hash.substr(1),
            short_url: ""
        }

        postData(saveValues, "/").then(response => {
            alert(response.message);
            if (response.status) {
                this.setState({['long_url']: ""});
                if (window.confirm("Load the New Short Url")) {
                    window.location.reload();
                }
            }
        }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
            <form method="POST" id="actionButton" onSubmit={this.postHandler}>
                <div className="row">
                    <div className="col-md-8 mbt-down10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="long_url" 
                            placeholder="Shorten You Url . . . " 
                            name="long_url"
                            onChange={this.inputChangeHandler}
                            value={this.state.long_url}
                        />
                    </div>
                    <div className="col-md-4 mbt-down10">
                        <button type="submit" className="btn btn-info btn-block">Shorten</button> 
                    </div>
                </div>
            </form>
        );
    }
}


export default FormAction;