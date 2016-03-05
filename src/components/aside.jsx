import React from 'react';

import styles from './aside.css';

export default React.createClass({
  render() {
    return (
      <div className={styles.asidePane}>
        <ul>
            <li>This is a todo</li>
        </ul>
      </div>
    );
  }
});
