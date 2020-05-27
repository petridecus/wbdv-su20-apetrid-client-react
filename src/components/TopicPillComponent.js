import React from 'react';

class TopicPillComponent extends React.Component {
    render() {
        return (
            <button className="wbdv-topic-pill active-topic btn btn-dark">{this.props.topic.title}</button>
        );
    }
}

export default TopicPillComponent;