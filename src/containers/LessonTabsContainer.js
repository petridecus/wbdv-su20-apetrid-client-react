import React from 'react';
import LessonTabComponent from '../components/LessonTabComponent';

class LessonTabsContainer extends React.Component {
    render() {
        return (
            <span>
                {
                    this.props.lessons.map(lesson =>
                        <LessonTabComponent lesson={lesson}/>
                    )
                }
            </span>
        );
    }
}

export default LessonTabsContainer;