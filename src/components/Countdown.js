import React from 'react';

import CountdownNumber from './CountdownNumber';
import {isHereNow, timeRemaining} from '../services/status';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { timeRemaining: timeRemaining() };
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => this.updateTimeRemaining(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  updateTimeRemaining() {
    this.setState({ timeRemaining: timeRemaining() });
  }

  render() {
    return (
      <div>
        <h3>Countdown to Rob</h3>
        <CountdownNumber number={this.state.timeRemaining.weeks} />
        <CountdownNumber number={this.state.timeRemaining.days} />
        <CountdownNumber number={this.state.timeRemaining.hours} />
        <CountdownNumber number={this.state.timeRemaining.minutes} />
        <CountdownNumber number={this.state.timeRemaining.seconds} />
      </div>
    );
  }
}


export default Countdown;
