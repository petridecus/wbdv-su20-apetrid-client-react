import React from 'react';
import CourseCardComponent from './CourseCardComponent';

class CourseGridComponent extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div className="classes-grid d-flex flex-wrap">
                    {
                        this.props.courses.map(course =>
                            <CourseCardComponent _id={course._id} 
                                                    title={course.title} 
                                                    owner={course.owner}
                                                    removeCourse={this.props.removeCourse}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default CourseGridComponent;