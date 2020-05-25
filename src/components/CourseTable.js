import React from 'react';
import CourseRow from './CourseRow';

class CourseTable extends React.Component {
    render() {
        return (
            <div>
                <h3>Course Table</h3>
                <CourseRow/>
                <CourseRow/>
                <CourseRow/>
            </div>
        );
    }
}

export default CourseTable;