import React from "react"

const style = {
  header: {
    background: "blue",
    alignText: "center",
    padding: "30px"
  },
  // h1: {
  //   fontSize: "30px",
  //   alignText: "center",

  //   color: "red"
  // },
  // h3: {
  //   fontSize: "16px"
  // }
}

function Header() {
  return (
      <>
        <header style={style.header}>
          <h1>Employee Directory</h1>
          <h5>Click on carrots to filter by heading or use the search box to narrow your results</h5>
        </header>
      </>
    );
}

export default Header;
