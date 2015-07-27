import React from 'react';

import Countdown from '../components/Countdown';
import Status from '../components/Status';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Is Rob home yet?</h2>
        <Status />
        <Countdown />
      </div>
    );
  }
}

module.exports = Home
