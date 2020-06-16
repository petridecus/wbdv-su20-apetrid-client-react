import React from 'react';

import HeadingComponent from './HeadingComponent';
import ParagraphComponent from './ParagraphComponent';

export default class WidgetComponent extends React.Component {
    state = {
        widgetType: ''
    }

    componentDidMount() {
        this.setState({
            widgetText: this.props.widget.text,
            widgetName: this.props.widget.name,
            widgetType: this.props.widget.type,
            widgetSubtype: this.props.widget.subtype
        })
    }

    render() {
        return(
            <form>
                <select class="custom-select mr-sm-2" onChange={(event) => {
                    this.setState({
                        widgetType: event.target.value
                    })
                }}>
                    <option selected>Heading</option>
                    <option value="heading">Heading</option>
                    <option value="paragraph">Paragraph</option>
                </select>
                <button onClick={() => this.props.deleteWidget(this.props.widget._id)}>x</button>
                {
                    this.state.widgetType === 'heading' &&
                    <HeadingComponent widget={this.props.widget}/>
                }
                {
                    this.state.widgetType === 'paragraph' &&
                    <ParagraphComponent widget={this.props.widget}/>
                }
                <button className="btn" onClick={() => this.props.updateWidget(this.props.widget._id, {
                    type: this.state.widgetType,
                    subtype: this.state.widgetSubtype,
                    name: this.state.widgetState,
                    text: this.state.widgetText
                })}>Update</button>
            </form>
        );
    }
}