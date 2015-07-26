import React from 'react';

import Status from '../components/Status';

class Home extends React.Component {
  render() {
    return (
      <Status returnDate={this.props.returnDate} />
    );
  }
}

module.exports = Home
