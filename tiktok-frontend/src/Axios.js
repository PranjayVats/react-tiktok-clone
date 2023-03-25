import axios from "axios";
const instance = axios.create({
  baseURL: "https://tiktok-clone-server.netlify.app/.netlify/functions/server",
});
export default instance;