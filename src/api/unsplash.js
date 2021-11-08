import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID UGilLHXs_B04oBOmBDnC1FPgnDWQHqWHIaxC1aqmo10",
  },
});
