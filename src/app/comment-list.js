import React, { Component } from 'react';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: ["comment1", "comment2", "comment3"] }
    }
    handleClick() {
        let newData = ["NEW_comment1", "comment2", "comment3", "comment4"];
        this.setState({ data: newData })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>Some Complex DIV</div>
                <ul>{this.state.data.map((elem)=><li key={this.state.data.indexOf(elem)}>{elem}</li>)}</ul>
                <button onClick={this.handleClick.bind(this)}>Refresh</button>
            </div>
        );
    }
}

export default CommentList;