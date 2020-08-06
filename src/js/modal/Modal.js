import React from 'react';
import "../../css/main.css";
import ReactTransitionGroup from 'react-addons-css-transition-group';


const Modal = ({ isOpen, close }) => {
  return (
    <React.Fragment>
    {
      isOpen ? (
        <ReactTransitionGroup
          transitionName={'Modal-anim'}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
        <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
          <p className="title">contest info</p>
          <div className="content">
            <p>
                testtesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttest
    	      </p>
          </div>
          <div className="button-wrap">
            <button onClick={close}>Confirm</button>
          </div>
        </div>
      </ReactTransitionGroup>
      ) :(
        <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
      )  
    }                
    </React.Fragment>
  )
}
export default Modal;