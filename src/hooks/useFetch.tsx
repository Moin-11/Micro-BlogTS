import {useEffect, useState} from "react"
import {Blog} from "../Blog/blog"


const useFetch = ({ url }: any) => {
    

  //Blog-List
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // Loader Boolean
  const [isPending, setIsPending] = useState<Boolean>(true);



  //Error Message
  const [error, setError] = useState<String | null>(null);


    useEffect(() => {
        setTimeout(() => {
          
          fetch('http://localhost:8000/blogs').then((res : Response) => {
         
            if (!res.ok) {
              
    throw Error("could not fetch data for that result")
    
            }
            return res.json();
            
            
            
          }).then((data : Blog[]) => {
      
            setBlogs(data);
            setIsPending(false);
            setError(null);
      
          }).catch((e: Error) => {
            setIsPending(false)
           setError(e.message)
    
          })
      
    
        }, 1000)
        
      }, [url])
    
    return {blogs , isPending, error}
    
    
}

export default useFetch