
import BlogList from "../components/blog/index";
import Loader from "../components/loader/loader"
import useFetch from "../hooks/useFetch"


const Home = () => {

  const url: string = "http://localhost:8000/blogs";
  const { data : blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      
      {error && <div>Error Message: { error}</div>}
      { !blogs && isPending ? <Loader /> :<BlogList blogs={blogs} title="My Article" />}
    </div>
  );
}
 
export default Home;
