import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Setup extends React.Component {
  renderCreateLink = () => {
    if (!this.props.isSignedIn) {
      return <h2>Create your channel</h2>
    } else {
      return(
        <h2><Link to="streams/new">Create</Link> your channel</h2>
      );
    }
  };

  render() {
    return(
      <React.Fragment>
        <h2 className="mf" id="s-title">To stream on Cursed Twitch</h2>
        <div className="ui placeholder segment" id="s-main">
          <div className="ui four column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column">
                <div className="ui icon">
                  <i className="google huge icon"></i>
                  <h2>Login with Google</h2>
                </div>
              </div>
              <div className="column" id="central-column">
                <div className="ui icon">
                  <i className="video huge icon"></i>
                  {this.renderCreateLink()}
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
                  <i className="play circle outline huge icon"></i>
                  <h2>Stream</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Setup);
