import { useEffect, useState } from "react";

export const useFetchPOST = (props) => {
  const [reply, setReply] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = props.url;
  const data = props.data;

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      url,
      { signal: abortController.signal },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (!res.ok) {
        throw Error("Did not get data from server");
      }
      return res.json();
    })
    .then((data) => {
      setReply(prevReply => data);
      setLoading(prevLoading => false);
      setError(prevError => null);
    }).catch((error) => {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          setLoading(prevLoading => false);
          setError(prevError => error.message);
        }
    });
    return () => abortController.abort();
  }, [url,data]);
  return { reply, isLoading, error };
};
