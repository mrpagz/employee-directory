import { useEffect } from "react";
import axios from "axios";

const GetAllUsers = (url, cb) => {
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(url);
      cb(response);
    }
    fetch();
  });
};

export default GetAllUsers;