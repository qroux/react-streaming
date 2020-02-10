import React from 'react';

const Setup = () => {
  return(
    <div className="ui placeholder segment" id="s-main">
      <div className="ui three column stackable center aligned grid">
        <div className="middle aligned row">
          <div className="column">
            <div className="ui icon">
              <i className="google huge icon"></i>
              <h2>Login with Google</h2>
            </div>
          </div>
          <div className="column" id="central-column">
            <div className="ui icon">
              <img src="./logo-obs.png" alt="" id="obs"/>
              <h2>Download <a href="https://obsproject.com/fr/download" target="_blank">OBS</a></h2>
            </div>
          </div>
          <div className="column">
            <div className="ui icon">
              <i className="video huge icon"></i>
              <h2>Stream</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setup;
