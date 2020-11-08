import React, { Component, Fragment } from "react";
import { Transition } from 'react-transition-group';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  }

  showModal = () => {
    console.log('clik')
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            <div style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 300ms ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}
            />
          )}
        </Transition>
        <br />
        {
          this.state.isModalOpen && (
            <div>
              <Modal closed={this.closeModal} show={this.state.isModalOpen} />
              <Backdrop show={this.state.isModalOpen} />
            </div>
          )
        }
        <button
          className="Button"
          onClick={this.showModal}
        >
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
