import React from 'react';
import config from '../data/config.json';
import Aside from 'aside';
import styles from './greet.css';

export default React.createClass({
  render() {
    return (
      <div className={styles.greetmsg}>
        {config.greetText}
        <Aside />
      </div>
    );
  }
});
