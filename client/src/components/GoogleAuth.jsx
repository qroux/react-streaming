import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount = () => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '241696005084-tbu0jlr2jt25614ppn0u36vr61l4cq5i.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  };

  onAuthChange = () => {
   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn()
  };

  onSignOut = () => {
    this.auth.signOut()
  };

  renderAuthButton() {
    if (this.state.isSignedIn === true) {
      return (
        <button onClick={this.onSignOut} className="ui red medium button">
          <i className="power off icon" style={{ marginRight: '15px' }}></i>
          Sign Out
        </button>
      );
    } else if (this.state.isSignedIn === false) {
      return (
        <button onClick={this.onSignIn} className="ui violet medium button">
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

export default GoogleAuth;
