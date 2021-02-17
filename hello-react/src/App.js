import React, { Component } from 'react';
import LifeCycleSmaple from './LifeCycleSmaple';
import ErrorBoundary from './ErrorBoundary';

//랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSmaple color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;