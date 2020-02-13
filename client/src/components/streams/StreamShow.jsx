import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
// streaming setup
import flv from 'flv.js';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
                    type: 'flv',
                    url: `http://react-stream-rmtp/live/${id}.flv`
                  });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  renderStream() {
    if (!this.props.stream) {
      return (
        <div className="ui active loader"></div>
      );
    }

    const { title, description } = this.props.stream

    return (
      <div className="ss-main">
        <div className="ss-title">
          <h1 className="mf">{title}'s Stream</h1>
        </div>
        <video ref={this.videoRef} style={{ width: '100%'}} controls />
        <div className="ss-text">
          <div className="ss-description">
            <h3 className="mf"><i className="info circle icon"></i> More Info</h3>
            <h5 className="mf">{description}</h5>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderStream()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
