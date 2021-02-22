import BlogList from "../components/blog/index";
import Loader from "../components/loader/loader";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const url: string =
    "https://my-json-server.typicode.com/Moin-11/json-server-microBlog-TS/blogs";
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <div>Error Message: {error}</div>}
      {!blogs && isPending ? (
        <Loader />
      ) : (
        <BlogList blogs={blogs} title="My Article" />
      )}
    </div>
  );
};

export default Home;
