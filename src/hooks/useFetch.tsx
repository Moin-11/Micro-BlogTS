import {useEffect, useState} from "react"
import {Blog} from "../components/blog/blog"


const useFetch = ({ url }: any) => {
    

  //Blog-List
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Loader Boolean
  const [isPending, setIsPending] = useState<Boolean>(true);



  //Error Message
  const [error, setError] = useState<String | null>(null);


    useEffect(() => {
      const abortCont : AbortController = new AbortController();


      setTimeout(() => {
          
          fetch("http://localhost:8000/blogs", {signal: abortCont.signal}).then((res : Response) => {
         
            if (!res.ok) {
              
    throw Error("could not fetch data for that result")
    
            }console.log(res)


            return res.json();
          
            
            
          }).then((data : Blog[]) => {
      
            setBlogs(data);
            setIsPending(false);
            setError(null);
      
          }).catch((e: Error) => {

            if (e.name === "AbortError") {
              console.log("fetch aborted");

            }
            else {
              setIsPending(false)
              setError(e.message)
            }
          }
          
          )
      
    
        }, 1000)
      return () => { abortCont.abort(); }
      }, [url])
    
    return {blogs , isPending, error}
    
    
}

export default useFetch