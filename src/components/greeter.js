import React from 'react';
import config from '../data/config.json';

import styles from './greet.css';

export default React.createClass({
  render() {
    return (
      <div className={styles.greetmsg}>
        {config.greetText}
      </div>
    );
  }
});
