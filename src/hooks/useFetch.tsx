import { useEffect, useState } from "react";
import { Blog } from "../components/blog/blog";

const useFetch = (url: string) => {
  //Blog-List
  const [data, setData] = useState<Blog[]>([]);

  // Loader Boolean
  const [isPending, setIsPending] = useState<boolean>(true);

  //Error Message
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortCont: AbortController = new AbortController();
    console.log(url);
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res: Response) => {
          if (!res.ok) {
            throw Error("could not fetch data for that result");
          }
          console.log(res);

          return res.json();
        })
        .then((data: Blog[]) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e: Error) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 1000);
    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
