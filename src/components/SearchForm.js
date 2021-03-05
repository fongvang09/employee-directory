import React from "react";

const style = {
  input: {
    width: "20%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30px",
    minWidth: "200px"
  },
  button: {
    width: "5%",
    minWidth: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30px",
  }
}

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input style={style.input}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
          onClick={props.handleFormSubmit}
        />
        {/* <button style={style.button} onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}
        {/* <hr /> */}
      </div>
    </form>
  );
}

export default SearchForm;
