import React from 'react';
// redux
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '241696005084-ebg1a0ippssjkdt3t37g4g4a0qi04agt.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };

  onAuthChange = (isSignedIn) => {
   if (isSignedIn) {
    this.props.signIn(this.auth.currentUser.get().getId());
   } else {
    this.props.signOut();
   }
  };

  onSignIn = () => {
    this.auth.signIn()
  };

  onSignOut = () => {
    this.auth.signOut()
  };

  renderAuthButton() {
    if (this.props.isSignedIn === true) {
      return (
        <button onClick={this.onSignOut} className="ui inverted button">
          <i className="power off icon" style={{ marginRight: '-2px' }} />
        </button>
      );
    } else if (this.props.isSignedIn === false) {
      return (
        <button onClick={this.onSignIn} className="ui inverted medium button">
          <i style={{ marginRight: '15px' }} className="google icon"></i>
          Sign In
        </button>
      );
    } else {
      return (
        <div>
          <div className="ui active mini inline loader"></div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="item">
        {this.renderAuthButton()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
