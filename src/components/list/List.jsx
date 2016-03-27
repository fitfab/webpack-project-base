import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './List.css';

const List = React.createClass({
    displayName: 'List',

    propTypes: {
        list: React.PropTypes.array
    },

    getInitialState(){
        return {
            list: this.props.list
        };
    },

    randString() {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const tweets = [
            'Welcome to the new message system',
            'ancore this is you working hard',
            'Never mind you find me here!',
            'No wonder he is fat',
            'try again the to leave me...',
            'wonder who made that happened?',
            'Really? you don\' you want me to do that!',
            'Working hard for my money',
            'No more wire-hangers ever!!!',
            'Papa don\'t  preach! i am in trouble deep'
            ];
        /*for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));*/
        text = tweets[Math.floor(Math.random() * tweets.length)];

        console.log(text)
        return text;
    },

    mayRenderItem() {
        return this.state.list.map(function(item, i){
            return (
                <li key={i}>{ item.greetText }</li>
            )
        });
    },

    handleClick() {
        let newItem = this.state.list.concat({greetText: this.randString()})
        this.setState({
            list: newItem
        })
    },

    render() {

        return (
            <div>
            <button onClick={this.handleClick}>Add Text</button>
            <ul className='list'>

                <ReactCSSTransitionGroup transitionName="item" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    { this.mayRenderItem() }
                </ReactCSSTransitionGroup>
            </ul>
            </div>
        )
    }
});

export default List;
