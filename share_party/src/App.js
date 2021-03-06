import React, { Component } from 'react'
import logo from './logo.svg';
import './App.scss';
import { Login, Register } from './components/authForms/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
  //adding the change button 
  componentDidMount() {
    this.rightSide.classList.add("right");
  }
  //managing the state and right button
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  render() {
    const { isLogginActive } = this.state;
    //changes the writting in the button
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "Login" : " Register";
    return (
      <div className="App">
        <div className='login'>
          {/* Logic to change the container of the form*/}
          <div className='container' ref={ref => (this.container = ref)}>
            {isLogginActive && <Login containerRef={ref => (this.current = ref)} />}
            {!isLogginActive && <Register containerRef={ref => (this.current = ref)} />}
          </div>
          <RightSide current={current} currentActive={currentActive} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
        </div>
      </div>
    )
  }
}
//returns the right button 
const RightSide = props => {
  return (
    <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}
        </div>
      </div>

    </div>
  )
}

export default App;
