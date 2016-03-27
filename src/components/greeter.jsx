import React from 'react';
import config from '../data/config.json';
import Aside from './aside';
import styles from './greet.css';

export default React.createClass({
  render() {
    return (
      <div className={styles.greetmsg}>
        {config[0].greetText}
        <Aside list={config} />
      </div>
    );
  }
});
