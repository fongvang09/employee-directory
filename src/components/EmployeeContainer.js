import React, { Component } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import "./test.css";
// import Col from "./Col";
import * as ReactBootStrap from "react-bootstrap";
// import SearchResults from "./SearchResults";
// import Background from "./Background";

const style = {
    ReactBootStrap: {
        textAlign: "center"
    }
}

class EmployeeContainer extends Component {
    state = {
        results: [],
        search: ""
    }
    componentDidMount() {
        this.searchEmployee();
    };
    searchEmployee = () => {
        API.search()
            .then(res => {
                console.log(res.data)
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };
    render() {
        return (
            <>
                <div>
                    <Header />
                    <SearchForm value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                    {/* <Col /> */}
                </div>
                <ReactBootStrap.Table striped bordered hover style={style.ReactBootStrap}>
                    <tr align="center">
                        <td>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                </tr>
                            </thead>
                                {/* <tbody>
                                    {this.state.results.map()}
                                </tbody> */}
                            {this.state.results.map(emp => (
                                <tr>
                                    <th><img src={emp.picture.thumbnail} alt="thumbnail" /></th>
                                    <th>{emp.name.first} {emp.name.last}</th>
                                    <th>{emp.phone}</th>
                                    <th><a href="{emp.email}" target="_blank">{emp.email}</a></th>
                                    <th>{emp.dob.date}</th>
                                </tr>
                            )
                            )}
                        </td>
                    </tr>
                </ReactBootStrap.Table>

            </>
        )
    }
}
export default EmployeeContainer;