import { useEffect, useState } from "react"
import { Blog } from "./Blog/blog";

import BlogList from "./Blog/index";

import Loader from "./loader/loader"
import useFetch from "./hooks/useFetch"


const Home = () => {


  const { blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      
      {error && <div>Error Message: { error}</div>}
      { !blogs && isPending ? <Loader /> :<BlogList blogs={blogs} title="My Article" />}
    </div>
  );
}
 
export default Home;
