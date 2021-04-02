import axios from "axios";

const endpoint = "https://issuetracker-api-node.herokuapp.com/";
// const endpoint = "http://localhost:8000"

export default axios.create({
  baseURL: endpoint,
});
