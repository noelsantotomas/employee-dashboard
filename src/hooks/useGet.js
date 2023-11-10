import axios from "axios";
import { useEffect, useState } from "react";

const useGet = (endpoint) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const req = axios
      .get(`http://localhost:3000/api/${endpoint}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  // TODO: Add error state
  return { data, loading };
};

export default useGet;
