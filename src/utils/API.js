import axios from "axios";

export default {
  // Gets all users
  search: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us");
  }
};


// import axios from "axios";
// const BASEURL = "https://randomuser.me/";
// const APIKEY = "api/?results=200";

// export default {
//   // Gets all users
//   search: function() {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
