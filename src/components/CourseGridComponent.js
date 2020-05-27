import React from 'react';
import CourseCardComponent from './CourseCardComponent';

class CourseGridComponent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="classes-grid d-flex flex-wrap">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent course={course}
                                                    key={course._id}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CourseGridComponent;