import React from 'react'

export default class HeadingComponent extends React.Component {
    state = {
        widgetSubtype: '',
        widgetText: '',
        widgetName: ''
    }

    componentDidMount() {
        this.setState({
            widgetName: this.props.widget.name,
            widgetSubtype: this.props.widgetSubtype,
            widgetText: this.props.widget.text
        })
    }
    render() {
        return (
        <div>
            <input className="form-control" onChange={(event) =>
                this.setState({
                    widgetText: event.target.value
                })}/>
            <select class="custom-select mr-sm-2" onChange={(event) => {
                this.setState({
                    widgetSubtype: event.target.value
                })
            }}>
                <option selected>Heading 1</option>
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
                <option value="h4">Heading 4</option>
                <option value="h5">Heading 5</option>
                <option value="h6">Heading 6</option>
            </select>
            <input className="form-control" onChange={(event) =>
                this.setState({
                    widgetName: event.target.value
                })}/>
        </div>
        );
    }
}