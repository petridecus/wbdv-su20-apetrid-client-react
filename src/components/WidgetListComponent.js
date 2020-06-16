import React from 'react';

import WidgetComponent from './WidgetComponent'

export default class WidgetListComponent extends React.Component {
    state = {
        editing: 'false'
    }

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.params.topicId)
    }

    render() {
        return(
            <div>
                {
                    this.props.widgets.map(widget =>
                        <WidgetComponent widget={widget}
                                            key={widget._id}
                                            deleteWidget={this.props.deleteWidget}
                                            updateWidget={this.props.updateWidget}/>
                    )
                }
                <button className="btn" onClick={() => this.props.createWidget(this.props.params.topicId, {
                    name: 'Default Heading',
                    type: 'heading',
                    subtype: 'h1',
                    text: 'Default Heading'
                })}>+</button>
            </div>
        );
    }
}