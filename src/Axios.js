import axios from "axios";
const instance= axios.create({
    baseURL: "https://pv-tiktok.herokuapp.com/",
});
export default instance;