import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/:id' component={SingleBlog} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
