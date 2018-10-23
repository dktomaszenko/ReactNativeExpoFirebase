import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor (){
        super();
        this.state = {
            todo: ''
        }
    }

    updateTodo(evt){
        this.setState({
            todo: evt.target.value
        })
    }

    addTodo (evt){
        evt.preventDefault();
        this.props.addTodo(this.state.todo);
    }

    render(){
        return (
            <form onSubmit={e => this.addTodo(e)}></form>
        )
    }
}