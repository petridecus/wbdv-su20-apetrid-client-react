import React from 'react';
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';

class CourseManager extends React.Component {
    render() {
        return (
            <div>
                <h2>Course Manager</h2>
                <CourseTable/>
                <CourseGrid/>
            </div>
        );
    }
}

export default CourseManager;