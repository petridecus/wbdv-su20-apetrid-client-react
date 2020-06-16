import React from 'react';

import { Link } from 'react-router-dom';

class LessonTabComponent extends React.Component {
    render() {
        return (
            <div className="wbdv-page-tab btn editor-btn active nav-item light-text">
                <div className="d-flex align-items-center">
                    <Link className="btn editor-btn light-text" to={`/editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lesson._id}`}>
                        {this.props.lesson.title}
                    </Link>
                    <button onClick={() => this.props.deleteLesson(this.props.lesson._id)} 
                        className="wbdv-module-item-delete-btn btn editor-btn rounded-circle">&times;
                    </button>
                </div>
            </div>
        );
    }
}

export default LessonTabComponent;