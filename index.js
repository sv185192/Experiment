import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        {this.state.date.toISOString()}
        <App/>
      </div>
    )
  }
}
ReactDOM.render(<App2/>, document.getElementById('root'));