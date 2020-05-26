import React from 'react';

class LessonTabComponent extends React.Component {
    render() {
        return (
            <a href="#" className="wbdv-page-tab btn active nav-item light-text mr-auto">{this.props.lesson.title}</a>
        );
    }
}

export default LessonTabComponent;