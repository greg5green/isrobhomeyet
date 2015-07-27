import React from 'react';

import {isHereNow} from '../services/status';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getRobStatusObject();
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => this.updateStatusText(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  getRobStatusObject() {
    return {
      robStatus: isHereNow() ? 'Yes' : 'No'
    };
  }

  render() {
    return <h1>{this.state.robStatus}</h1>;
  }

  updateStatusText() {
    this.setState(this.getRobStatusObject());
  }
}

export default Status;
