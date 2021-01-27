import {useParams, useHistory} from "react-router-dom"
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    interface RouteParams { id: string }

    
    const { id } = useParams <RouteParams>();
    const numID = parseInt(id);
    const { data : blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
   
    console.log(blog[numID]);
  
    const handleDelete = (): void => {
      
        fetch("http://localhost:8000/blogs/" + id, {
    
            method: 'DELETE'
            
            
        }).then(() => {
    
            history.push('/');

})

  }
  
    return (
        
        
        
        <div className="blog-details">
      
    { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
        {  (
            <article>
                
                <h2>{blog[numID]?.title}</h2>
                <p>Written by {blog[numID]?.author}</p>
                <div>{blog[numID]?.body}</div>
                <button onClick={handleDelete}>delete</button>
            </article>)
        }
</div>)

}

export default BlogDetails