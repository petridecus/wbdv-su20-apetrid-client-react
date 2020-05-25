import React from 'react';
import CourseRowComponent from './CourseRowComponent';

class CourseTableComponent extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid all-classes">
                    <div class="d-flex flex-column class-list">
                        <h6>Today</h6>
                        <ul class="list-group justify-content-center">
                        {
                            this.props.courses.map(course => {
                                let today = new Date();
                                let month = today.getMonth();
                                return (
                                    <li class="list-group-item">
                                        {
                                            true &&
                                            <CourseRowComponent _id={course._id}
                                                                title={course.title}
                                                                owner={course.owner}
                                                                modified={course.modified}/>
                                        }
                                    </li>
                                )})
                        }
                        </ul>
                    </div>
                    <div class="d-flex flex-column class-list">
                        <h6>Yesterday</h6>
                        <ul class="list-group justify-content-center">
                        {
                            this.props.courses.map(course =>
                                <li class="list-group-item">
                                    {
                                        true &&
                                        <CourseRowComponent _id={course._id}
                                                            title={course.title}
                                                            owner={course.owner}
                                                            modified={course.modified}/>
                                    }
                                </li>
                            )
                        }
                        </ul>
                    </div>
                    <div class="class-list">
                        <h6>Previous 7 days</h6>
                        <ul class="list-group justify-content-center">
                        {
                            this.props.courses.map(course =>
                                <li class="list-group-item">
                                    {
                                        true &&
                                        <CourseRowComponent _id={course._id}
                                                            title={course.title}
                                                            owner={course.owner}
                                                            modified={course.modified}/>
                                    }
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseTableComponent;