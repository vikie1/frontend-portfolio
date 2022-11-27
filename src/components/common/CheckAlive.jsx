/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import "twin.macro";

export const CheckAlive = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://web-production-2b5d.up.railway.app/hi", { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Did not get data from server");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setData((prevData) => data);
        } else {
          setError((prevError) => true);
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("aborted");
        } else {
          setError((prevError) => error.message);
        }
      });

    return () => abortController.abort();
  }, []);

  const isAlive = () => {
    if (data) {
      const status = data.status;
      if (status === "alive") {
        return true;
      }
      return false;
    }
  };

  return (
    <div tw="fixed bg-transparent bottom-0 left-0 z-50">
      {!isAlive() && (
        <div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-gray-700 bottom-0 left-0"></div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-gray-700 bottom-0 left-2"></div>
        </div>
      )}
      {isAlive() && (
        <div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-green-500 bottom-0 left-0"></div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-green-500 bottom-0 left-2"></div>
        </div>
      )}
      {error && (
        <div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-red-500 bottom-0 left-0"></div>
          <div tw="absolute p-1 h-1 w-1 rounded-full bg-red-500 bottom-0 left-2"></div>
        </div>
      )}
    </div>
  );
};
