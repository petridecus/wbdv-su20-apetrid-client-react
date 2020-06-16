import React from 'react'

export default class ParagraphComponent extends React.Component {
    state = {
        widgetText: '',
        widgetName: ''
    }

    componentDidMount() {
        this.setState({
            widgetName: this.props.widget.name,
            widgetText: this.props.widget.text
        })
    }
    render() {
        return (
        <div>
            <input className="form-control" rows="3" onChange={(event) =>
                this.setState({
                    widgetText: event.target.value
                })}/>
            <input className="form-control" onChange={(event) =>
                this.setState({
                    widgetName: event.target.value
                })}/>
        </div>
        );
    }
}