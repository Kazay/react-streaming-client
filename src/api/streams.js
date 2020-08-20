import axios from "axios";
import { API_SERVER_URL } from "../config";

export default axios.create({
  baseURL: API_SERVER_URL,
});
