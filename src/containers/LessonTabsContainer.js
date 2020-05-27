import React from 'react';
import LessonTabComponent from '../components/LessonTabComponent';

class LessonTabsContainer extends React.Component {
    render() {
        return this.props.lessons.map(lesson =>
            <LessonTabComponent lesson={lesson}
                                key={lesson.title}/>
        )
    }
}

export default LessonTabsContainer;