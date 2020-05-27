import React from 'react';

import CourseTableComponent from '../components/CourseTableComponent';
import CourseGridComponent from '../components/CourseGridComponent';

import CourseService from '../services/CourseService';

class CourseManagerContainer extends React.Component {
    state = {
        layout: this.props.match.params.layout,
        courses: [],
        newCourseTitle: ''
    }

    componentDidMount() {
        CourseService.findAllCourses()
            .then(courseArray => {
                this.setState({courses: courseArray});
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.layout !== this.props.match.params.layout) {
          this.setState({
            layout: this.props.match.params.layout
          })
        }
      }
    
    setLayout = (layout) =>
        this.props.history.push(`/${layout}/courses`)

    addCourse = (title) =>
        CourseService.createCourse({
          title: title,
          owner: 'me',
          modified: (new Date()).toDateString()
        })
          .then(theActualNewCourse =>
            this.setState((prevState) => {
            return {
              courses: [
                ...prevState.courses,
                theActualNewCourse
              ]
            }
          }))

    removeCourse = courseGoingByeBye => 
        CourseService.deleteCourse(courseGoingByeBye._id)
            .then(status => this.setState(prevState => ({
                courses: prevState
                .courses.filter(course => course !== courseGoingByeBye)
            })))
    

    render() {
        console.log(this.props.match.params.layout);
        return (
            <div>
                <div className="collapse" id="navbarLinks">
                    <ul className="row nav nav-pills bg-dark homepage-button-group">
                        <li className="nav-item">
                            <button className="nav-link btn btn-dark">Login</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-dark">Profile</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-dark">Register</button>
                        </li>
                        <li className="nav-item">
                            <form className="wbdv-field wbdv-new-course form-inline">
                            <input className="form-control"
                                    onChange={(event) => this.setState({
                                        newCourseTitle: event.target.value
                                    })}
                                    value={this.state.newCourseTitle}
                                    placeholder="Course Title"/>
                            </form>
                        </li>
                        <li className="nav-item float-right">
                            <button className="wbdv-button wbdv-add-course nav-link btn btn-dark"
                                    onClick={() => this.addCourse(this.state.newCourseTitle)}>
                                {'\u002b'}
                            </button>
                        </li>
                    </ul>
                </div>

                <nav className="navbar navbar-dark bg-dark">
                    <div className="d-flex flex-row home-nav">
                        <button className="wbdv-field wbdv-hamburger navbar-toggler d-flex ml-auto" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="wbdv-label wbdv-course-manager navbar-brand d-flex ml-auto">Course Manager</div>
                        {
                            this.state.layout === 'table' &&
                            <button className="btn ml-auto d-flex wbdv-button"
                                    onClick={() => this.setLayout('grid')}>
                                Grid
                            </button>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <button className="btn d-flex justify-content-right wbdv-button"
                                    onClick={() => this.setLayout('table')}>
                                Table
                            </button>
                        }
                    </div>
                </nav>
                {
                    this.state.layout === 'table' &&
                    <table className='table wbdv-table'>
                        <thead className="headers">
                            <tr className="wbdv-table-row">
                                <th scope="col" className="wbdv-header wbdv-title">Title</th>
                                <th scope="col" className="wbdv-header wbdv-owner">Owner</th>
                                <th scope="col" className="wbdv-header wbdv-last-modified">Last Modified</th>
                                    
                                <th className="wbdv-header wbdv-header-buttons" scope="col">
                                    <button className="wbdv-button wbdv-sort btn">
                                        {'\u2191\u2193'}
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <CourseTableComponent courses={this.state.courses}
                                                removeCourse={this.removeCourse}/>
                    </table>
                }
                {
                    this.state.layout === 'grid' &&
                    <CourseGridComponent courses={this.state.courses}/>
                }
            </div>
        );
    }
}

export default CourseManagerContainer;