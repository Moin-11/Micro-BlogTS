import { useState } from "react"
import { Blog } from "./Blog/blog";

import BlogList from "./Blog/index";

const Home = () => {

 
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleClick = (e: any): void => {

  }


  return (
    <div className="home">
      
    <BlogList blogs = {blogs} title = "My Article"/>
    </div>
  );
}
 
export default Home;
