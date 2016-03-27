import React from 'react';
import List from './list/List';

import styles from './aside.css';

export default React.createClass({
    displayName: 'Aside',

    propTypes: {
        list: React.PropTypes.array
    },

    render() {
        return (
          <div className='aside-pane'>
            <List { ...this.props} />
          </div>
        );
    }
});
