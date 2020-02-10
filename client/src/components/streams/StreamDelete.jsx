import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
// actions
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
// Components
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onClickHandler = () => {
    if (!this.props.stream || this.props.currentUserId !== this.props.stream.userId) {
      return
    } else {
      this.props.deleteStream(this.props.stream.id);
    }
  };

  renderAction() {
    return (
      <React.Fragment>
        <button onClick={this.onClickHandler} className="ui button negative">Delete</button>
        <Link to="/" className="ui button cancel">Cancel</Link>
      </React.Fragment>
    );
  }

  renderTitle() {
    return 'Delete Stream'
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete channel ?'
    }

    return `Are you sure you want to delete "${this.props.stream.title}" channel ?`
  }

  render() {
    return (
      <div>
        <Modal
          onDismiss={() => history.push('/')}
          title={this.renderTitle()}
          content={this.renderContent()}
          action={this.renderAction()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
