import React from 'react';

import { Link } from 'react-router-dom';

class LessonTabComponent extends React.Component {
    render() {
        return (
            <Link to={`/editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lesson._id}`} 
            className="wbdv-page-tab btn editor-btn active nav-item light-text">
                {this.props.lesson.title}
                <button onClick={() => this.props.deleteLesson(this.props.lesson._id)} 
                    className="wbdv-module-item-delete-btn btn editor-btn rounded-circle">&times;
                </button>
            </Link>
        );
    }
}

export default LessonTabComponent;