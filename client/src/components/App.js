import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components import
import Navbar from './Navbar'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="ui container center aligned">
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/1/edit" exact component={StreamEdit} />
          <Route path="/streams/1/delete" exact component={StreamDelete} />
          <Route path="/streams/1" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
