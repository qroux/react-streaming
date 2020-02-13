import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          <h4 className="mf">{props.content}</h4>
        </div>
        <div className="actions">
          {props.action}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
