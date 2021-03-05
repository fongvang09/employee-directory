import React from "react";

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

const style = {
  table: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto"
  },
}

function Col(props) {
  // const size = props.size.split(" ").map(size => "col-" + size).join(" ");

//   return (
//     <div class="container">
//       <div class="row row-cols">
//         <div class="col">Image</div>
//         <div class="col">Name</div>
//         <div class="col">Phone</div>
//         <div class="col">Email</div>
//         <div class="col">DOB</div>
//       </div>
//     </div>
//   );
// }

  return (
    <table style={style.table} >
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
    </table>
  );
}

export default Col;
