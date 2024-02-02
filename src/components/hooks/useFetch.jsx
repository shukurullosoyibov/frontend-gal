import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
        // console.log("sddddddddddddddddddddddddddddddddddddddddd"+res.data);
      } catch (err) {
        setError(err);
        // console.error("sddddddddddddddddddddddddddddddddddddddddd"+err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default UseFetch;