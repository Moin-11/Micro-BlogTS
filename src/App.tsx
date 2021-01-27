import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// pages
import Home from './pages/Home';
import Create from './pages/Create';
import BlogDetails from './pages/details';
import NotFound from './pages/404NotFound';




const  App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
            <Home />
            </Route>

            <Route path="/create">
            <Create />
            </Route>

            <Route path="/blogs/:id">
            <BlogDetails />
            </Route>


            <Route path="*">
            <NotFound />
            </Route>

          </Switch>
       
      </div>
      </div>
      </Router>  );
}

export default App;
