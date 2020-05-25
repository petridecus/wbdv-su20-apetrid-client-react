import React from 'react';
import CourseCardComponent from './CourseCardComponent';

class CourseGridComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Course Grid</h3>
                <CourseCardComponent/>
                <CourseCardComponent/>
                <CourseCardComponent/>
            </div>
        );
    }
}

export default CourseGridComponent;