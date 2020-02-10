import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// Scss import
import './App.scss'

// components import
import Navbar from './Navbar'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'

// Custom history object
import history from '../history'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
