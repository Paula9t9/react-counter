import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  };

  handleNegClick = e => {
    let number = this.state.number - 1;
    this.setState({number});
  };

  handlePosClick = e => {
    let number = this.state.number + 1;
    this.setState({number});
  };

  render(){
    return (
      <section>
        <button onClick={this.handleNegClick} >-</button>
        <p>{this.state.number}</p>
        <button onClick={this.handlePosClick}>+</button>
      </section>
    );
  }

}

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Counter/>
      </React.Fragment>
    )
  }
}

export default App;
