import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
// components
import Setup from './Setup'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="sl-create">
          <h2 className="mf">Want to create your own channel ?</h2>
          <div id="create-btn">
            <Link to="/streams/new" className="ui basic inverted button violet">
              GO !
            </Link>
          </div>
        </div>
      );
    }
  };

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="mini ui inverted button violet" title="Parameter">
            <i className="cog icon" style={{ marginRight: '-2px' }}/>
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="mini ui inverted button cancel" title="Delete Channel">
            <i className="trash icon" style={{ marginRight: '-2px' }} />
          </Link>
        </div>
      );
    }
  };

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned tv icon" />
          <div className="content">
            <Link to={`streams/${stream.id}`}>
              {stream.title}
            </Link>
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="sl-main">
        <div className="sl-header">
          <h1 className="mf">Welcome to Cursed Twitch</h1>
        </div>
        <div className="sl-list">
          <h2>Channels</h2>
          <div className="ui big relaxed divided list">
            {this.renderList()}
          </div>
        </div>
        <Setup />
        {this.renderCreate()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
