import React, {Component} from 'react';

export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            editMode: false,
            todo: props.children
        }
    }
    onEditMode () {
        if(this.state.editMode){
            const {onUpdateTodo} = this.props;
            onUpdateTodo(this.state.todo);
        }
        this.setState({
          editMode: !this.state.editMode
        })
    }

    handleChange(evt){
        this.setState({todo: evt.target.value});
    }

    dynamicComponents () {
        let input, actionButton;
        const {editMode, todo} = this.state;

        if(editMode){
            input = (
                <input
                    type="text"
                    className="form-control"
                    value={todo}
                    onChange={(e)=> this.handleChange(v)}
                />
            );
            actionButton = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                >Actualizar</button>
            );
        }
    }
}