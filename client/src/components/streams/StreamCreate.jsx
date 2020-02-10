import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="sc-main">
        <div className="sf-header">
          <h1 className="mf">Create a Stream</h1>
        </div>
        <div>
          <StreamForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  };
};

export default connect(null, { createStream })(StreamCreate);
