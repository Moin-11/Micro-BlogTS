import { Link } from "react-router-dom"
import {Blog} from "./blog"


type Blogs = {

    blogs: Blog[];
    title?: string;

}



const BlogList = ({ blogs, title } : Blogs) => {
    return (
        <div className = "blog-list">

            <h2>{title}</h2>
            {blogs.map((blog: Blog) => {
      
                return (<div className="blog-preview" key={blog.id.toString()}>
                    <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
          
                    </Link>
                </div>
    
                )
            })}
            
        </div>)
}
export default BlogList;