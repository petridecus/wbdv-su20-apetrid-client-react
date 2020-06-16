import React from 'react';

import { Link } from 'react-router-dom'

class TopicPillComponent extends React.Component {
    render() {
        return (
            <div className="wbdv-topic-pill nav-item active-topic btn editor-btn btn-dark">
                <div className="d-flex align-items-center">
                    <Link to={`/editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${this.props.topic._id}`} className="btn btn-dark">
                        {this.props.topic.title}
                    </Link>
                    <button class="btn editor-btn light-text" onClick={() => this.props.deleteTopic(this.props.topic._id)}>x</button>
                </div>
            </div>
        );
    }
}

export default TopicPillComponent;