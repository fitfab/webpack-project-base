import React from 'react';

import styles from './aside.css';

export default React.createClass({
    test(){
        const person = {
            firstName: 'Diego',
            lastName: 'Morales'
        };
        const {firstName} = person;
        //return `${firstName} is a new member`;
        return Object.assign(person, {age:45})
    },
  render() {
    return (
      <div className={styles.asidePane}>
        <ul>
            <li>This is a todo {this.test().firstName}</li>
        </ul>
      </div>
    );
  }
});
