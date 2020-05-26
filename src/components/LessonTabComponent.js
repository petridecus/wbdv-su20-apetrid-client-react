import React from 'react';

class LessonTabComponent extends React.Component {
    render() {
        return (
            <button className="wbdv-page-tab btn editor-btn active nav-item light-text mr-auto">{this.props.lesson.title}</button>
        );
    }
}

export default LessonTabComponent;