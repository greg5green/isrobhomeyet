import React from 'react';
import moment from 'moment';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getRobStatusObject();
  }

  componentDidMount() {
    this.updateInterval = setInterval(() => this.updateStatusText, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  getRobStatusObject() {
    return {
      robStatus: this.isHereNow() ? 'Yes!' : 'No.'
    };
  }

  isHereNow() {
    return moment().isAfter(this.props.returnDate);
  }

  render() {
    return (
      <h1>{this.state.robStatus}</h1>
    );
  }

  updateStatusText() {
    this.setState(this.getRobStatusObject());
  }
}

module.exports = Status;
