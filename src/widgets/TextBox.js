import React from "react";


class TextBox extends React.Component{

    state = {
        value: "",
        id: this.props.id,
        title: this.props.title,
    }

    handleTextBoxChange = (value) => {
        this.setState({value: value})
    }

    render(){
        return (
            <span className="widget">
                <div className="subtitle">
                    {this.state.title}
                </div>
            
                <input
                    type="text"
                    className="text-box widget"
                    onChange={e => {
                        this.handleTextBoxChange(e.target.value)
                    }}
                    id={this.state.id}
                    value={this.state.value}
                    title={this.state.title}
                />

            </span>
        )
    }
}

export default TextBox;