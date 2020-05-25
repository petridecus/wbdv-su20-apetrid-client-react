import React from 'react';
import CourseCard from './CourseCard';

class CourseGrid extends React.Component {
    render() {
        return (
            <div>
                <h3>Course Grid</h3>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        );
    }
}

export default CourseGrid;