import React, {Component} from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "../utils/API";
// import Background from "./Background";

// function EmployeeContainer() {
//     return (
//         <>
//             <Header />
//             <SearchForm />

//         </>
//     )
// };

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
                    <SearchForm value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
            <Header />
            <SearchForm />

                </div>
                <div>
                    {this.state.results.map(emp => (
                        <p>{emp.name.first} {emp.picture.thumbnail}</p>,
                        <img src="{emp.picture.thumbnail}" />


                    ))}
                </div>
            </>


        )
    }
}
export default EmployeeContainer;