import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const SearchResults = (emp, index) => {
        return (
            <tr key={index}>
                <td>

                </td>
            </tr>
        );
    }

    return (
        <div className="SearchResults">
            <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</ReactBootStrap.Table>
        </div>
    );

// }

export default SearchResults;
