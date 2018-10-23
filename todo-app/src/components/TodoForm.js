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
        const {todo} = this.state;
        return (
            <form onSubmit={e => this.addTodo(e)}>
                <label htmlFor="todo" className="sr-only">Todo</label>
                <input
                    type="text"
                    className="form-control"
                    id="todo"
                    value={todo}
                    onChange={this.updateTodo.bind(this)}
                />
            </form>
        )
    }
}