import React from 'react';

class CountdownNumber extends React.Component {
  render() {
    return <p>{this.props.number}</p>;
  }
}

module.exports = CountdownNumber;
