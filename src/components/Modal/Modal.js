import React from 'react';
import { Transition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
  enter: 400,
  exit: 1000
}

const modal = (props) => {
  const modalProps = {
    in: props.show,
    timeout: {...animationTiming},
    mountOnEnter: true,
    unmountOnExit: true
  }
  return (
    <Transition {...modalProps}>
      {state => {
        const cssClasses = [
          'Modal',
          state === 'entering'
          ? 'ModalOpen'
          : state === 'exiting'
          && 'ModalClosed'
        ]
        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
          </div>
        )}
      }
    </Transition>
  )
}

export default modal;