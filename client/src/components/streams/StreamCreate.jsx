import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    if (!this.props.isSignedIn) {
      return
    }
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="sc-main">
        <div className="sf-header">
          <h1 className="mf">Create your Stream</h1>
        </div>
        <div>
          <StreamForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
