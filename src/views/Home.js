import React from 'react';

import Status from '../components/Status';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Is Rob home yet?</h2>
        <Status />
      </div>
    );
  }
}

module.exports = Home
