import React from 'react';
import config from '../data/config.json';

export default React.createClass({
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
});
