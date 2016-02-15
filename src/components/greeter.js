import React from 'react';
import config from '../data/config.json';

import './greet.css';

export default React.createClass({
  render() {
    return (
      <div className="greet-msg">
        {config.greetText}
      </div>
    );
  }
});
